(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function Q_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var nd={exports:{}},Aa={},id={exports:{}},Dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function eM(){if(Tg)return Dt;Tg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(U,ae,Ee){this.props=U,this.context=ae,this.refs=A,this.updater=Ee||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,ae){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ae,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=S.prototype;function D(U,ae,Ee){this.props=U,this.context=ae,this.refs=A,this.updater=Ee||y}var I=D.prototype=new x;I.constructor=D,M(I,S.prototype),I.isPureReactComponent=!0;var b=Array.isArray,P=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function T(U,ae,Ee){var We,Be={},Ye=null,oe=null;if(ae!=null)for(We in ae.ref!==void 0&&(oe=ae.ref),ae.key!==void 0&&(Ye=""+ae.key),ae)P.call(ae,We)&&!F.hasOwnProperty(We)&&(Be[We]=ae[We]);var ue=arguments.length-2;if(ue===1)Be.children=Ee;else if(1<ue){for(var Re=Array(ue),nt=0;nt<ue;nt++)Re[nt]=arguments[nt+2];Be.children=Re}if(U&&U.defaultProps)for(We in ue=U.defaultProps,ue)Be[We]===void 0&&(Be[We]=ue[We]);return{$$typeof:n,type:U,key:Ye,ref:oe,props:Be,_owner:L.current}}function w(U,ae){return{$$typeof:n,type:U.type,key:ae,ref:U.ref,props:U.props,_owner:U._owner}}function B(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function Y(U){var ae={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ee){return ae[Ee]})}var ee=/\/+/g;function ne(U,ae){return typeof U=="object"&&U!==null&&U.key!=null?Y(""+U.key):ae.toString(36)}function K(U,ae,Ee,We,Be){var Ye=typeof U;(Ye==="undefined"||Ye==="boolean")&&(U=null);var oe=!1;if(U===null)oe=!0;else switch(Ye){case"string":case"number":oe=!0;break;case"object":switch(U.$$typeof){case n:case e:oe=!0}}if(oe)return oe=U,Be=Be(oe),U=We===""?"."+ne(oe,0):We,b(Be)?(Ee="",U!=null&&(Ee=U.replace(ee,"$&/")+"/"),K(Be,ae,Ee,"",function(nt){return nt})):Be!=null&&(B(Be)&&(Be=w(Be,Ee+(!Be.key||oe&&oe.key===Be.key?"":(""+Be.key).replace(ee,"$&/")+"/")+U)),ae.push(Be)),1;if(oe=0,We=We===""?".":We+":",b(U))for(var ue=0;ue<U.length;ue++){Ye=U[ue];var Re=We+ne(Ye,ue);oe+=K(Ye,ae,Ee,Re,Be)}else if(Re=g(U),typeof Re=="function")for(U=Re.call(U),ue=0;!(Ye=U.next()).done;)Ye=Ye.value,Re=We+ne(Ye,ue++),oe+=K(Ye,ae,Ee,Re,Be);else if(Ye==="object")throw ae=String(U),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.");return oe}function J(U,ae,Ee){if(U==null)return U;var We=[],Be=0;return K(U,We,"","",function(Ye){return ae.call(Ee,Ye,Be++)}),We}function ge(U){if(U._status===-1){var ae=U._result;ae=ae(),ae.then(function(Ee){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ee)},function(Ee){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ee)}),U._status===-1&&(U._status=0,U._result=ae)}if(U._status===1)return U._result.default;throw U._result}var Z={current:null},W={transition:null},Q={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:W,ReactCurrentOwner:L};function X(){throw Error("act(...) is not supported in production builds of React.")}return Dt.Children={map:J,forEach:function(U,ae,Ee){J(U,function(){ae.apply(this,arguments)},Ee)},count:function(U){var ae=0;return J(U,function(){ae++}),ae},toArray:function(U){return J(U,function(ae){return ae})||[]},only:function(U){if(!B(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Dt.Component=S,Dt.Fragment=t,Dt.Profiler=o,Dt.PureComponent=D,Dt.StrictMode=r,Dt.Suspense=d,Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Dt.act=X,Dt.cloneElement=function(U,ae,Ee){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var We=M({},U.props),Be=U.key,Ye=U.ref,oe=U._owner;if(ae!=null){if(ae.ref!==void 0&&(Ye=ae.ref,oe=L.current),ae.key!==void 0&&(Be=""+ae.key),U.type&&U.type.defaultProps)var ue=U.type.defaultProps;for(Re in ae)P.call(ae,Re)&&!F.hasOwnProperty(Re)&&(We[Re]=ae[Re]===void 0&&ue!==void 0?ue[Re]:ae[Re])}var Re=arguments.length-2;if(Re===1)We.children=Ee;else if(1<Re){ue=Array(Re);for(var nt=0;nt<Re;nt++)ue[nt]=arguments[nt+2];We.children=ue}return{$$typeof:n,type:U.type,key:Be,ref:Ye,props:We,_owner:oe}},Dt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},Dt.createElement=T,Dt.createFactory=function(U){var ae=T.bind(null,U);return ae.type=U,ae},Dt.createRef=function(){return{current:null}},Dt.forwardRef=function(U){return{$$typeof:u,render:U}},Dt.isValidElement=B,Dt.lazy=function(U){return{$$typeof:p,_payload:{_status:-1,_result:U},_init:ge}},Dt.memo=function(U,ae){return{$$typeof:h,type:U,compare:ae===void 0?null:ae}},Dt.startTransition=function(U){var ae=W.transition;W.transition={};try{U()}finally{W.transition=ae}},Dt.unstable_act=X,Dt.useCallback=function(U,ae){return Z.current.useCallback(U,ae)},Dt.useContext=function(U){return Z.current.useContext(U)},Dt.useDebugValue=function(){},Dt.useDeferredValue=function(U){return Z.current.useDeferredValue(U)},Dt.useEffect=function(U,ae){return Z.current.useEffect(U,ae)},Dt.useId=function(){return Z.current.useId()},Dt.useImperativeHandle=function(U,ae,Ee){return Z.current.useImperativeHandle(U,ae,Ee)},Dt.useInsertionEffect=function(U,ae){return Z.current.useInsertionEffect(U,ae)},Dt.useLayoutEffect=function(U,ae){return Z.current.useLayoutEffect(U,ae)},Dt.useMemo=function(U,ae){return Z.current.useMemo(U,ae)},Dt.useReducer=function(U,ae,Ee){return Z.current.useReducer(U,ae,Ee)},Dt.useRef=function(U){return Z.current.useRef(U)},Dt.useState=function(U){return Z.current.useState(U)},Dt.useSyncExternalStore=function(U,ae,Ee){return Z.current.useSyncExternalStore(U,ae,Ee)},Dt.useTransition=function(){return Z.current.useTransition()},Dt.version="18.3.1",Dt}var wg;function lp(){return wg||(wg=1,id.exports=eM()),id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function tM(){if(Ag)return Aa;Ag=1;var n=lp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,v={},g=null,y=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(y=d.ref);for(p in d)r.call(d,p)&&!a.hasOwnProperty(p)&&(v[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)v[p]===void 0&&(v[p]=d[p]);return{$$typeof:e,type:u,key:g,ref:y,props:v,_owner:o.current}}return Aa.Fragment=t,Aa.jsx=c,Aa.jsxs=c,Aa}var Rg;function nM(){return Rg||(Rg=1,nd.exports=tM()),nd.exports}var q=nM(),Ce=lp();const us=Q_(Ce);var cc={},rd={exports:{}},oi={},sd={exports:{}},od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function iM(){return Cg||(Cg=1,(function(n){function e(W,Q){var X=W.length;W.push(Q);e:for(;0<X;){var U=X-1>>>1,ae=W[U];if(0<o(ae,Q))W[U]=Q,W[X]=ae,X=U;else break e}}function t(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Q=W[0],X=W.pop();if(X!==Q){W[0]=X;e:for(var U=0,ae=W.length,Ee=ae>>>1;U<Ee;){var We=2*(U+1)-1,Be=W[We],Ye=We+1,oe=W[Ye];if(0>o(Be,X))Ye<ae&&0>o(oe,Be)?(W[U]=oe,W[Ye]=X,U=Ye):(W[U]=Be,W[We]=X,U=We);else if(Ye<ae&&0>o(oe,X))W[U]=oe,W[Ye]=X,U=Ye;else break e}}return Q}function o(W,Q){var X=W.sortIndex-Q.sortIndex;return X!==0?X:W.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,v=null,g=3,y=!1,M=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(W){for(var Q=t(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=W)r(h),Q.sortIndex=Q.expirationTime,e(d,Q);else break;Q=t(h)}}function b(W){if(A=!1,I(W),!M)if(t(d)!==null)M=!0,ge(P);else{var Q=t(h);Q!==null&&Z(b,Q.startTime-W)}}function P(W,Q){M=!1,A&&(A=!1,x(T),T=-1),y=!0;var X=g;try{for(I(Q),v=t(d);v!==null&&(!(v.expirationTime>Q)||W&&!Y());){var U=v.callback;if(typeof U=="function"){v.callback=null,g=v.priorityLevel;var ae=U(v.expirationTime<=Q);Q=n.unstable_now(),typeof ae=="function"?v.callback=ae:v===t(d)&&r(d),I(Q)}else r(d);v=t(d)}if(v!==null)var Ee=!0;else{var We=t(h);We!==null&&Z(b,We.startTime-Q),Ee=!1}return Ee}finally{v=null,g=X,y=!1}}var L=!1,F=null,T=-1,w=5,B=-1;function Y(){return!(n.unstable_now()-B<w)}function ee(){if(F!==null){var W=n.unstable_now();B=W;var Q=!0;try{Q=F(!0,W)}finally{Q?ne():(L=!1,F=null)}}else L=!1}var ne;if(typeof D=="function")ne=function(){D(ee)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,J=K.port2;K.port1.onmessage=ee,ne=function(){J.postMessage(null)}}else ne=function(){S(ee,0)};function ge(W){F=W,L||(L=!0,ne())}function Z(W,Q){T=S(function(){W(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){M||y||(M=!0,ge(P))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(W){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var X=g;g=Q;try{return W()}finally{g=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,Q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var X=g;g=W;try{return Q()}finally{g=X}},n.unstable_scheduleCallback=function(W,Q,X){var U=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?U+X:U):X=U,W){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=X+ae,W={id:p++,callback:Q,priorityLevel:W,startTime:X,expirationTime:ae,sortIndex:-1},X>U?(W.sortIndex=X,e(h,W),t(d)===null&&W===t(h)&&(A?(x(T),T=-1):A=!0,Z(b,X-U))):(W.sortIndex=ae,e(d,W),M||y||(M=!0,ge(P))),W},n.unstable_shouldYield=Y,n.unstable_wrapCallback=function(W){var Q=g;return function(){var X=g;g=Q;try{return W.apply(this,arguments)}finally{g=X}}}})(od)),od}var bg;function rM(){return bg||(bg=1,sd.exports=iM()),sd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function sM(){if(Pg)return oi;Pg=1;var n=lp(),e=rM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function g(i){return d.call(v,i)?!0:d.call(p,i)?!1:h.test(i)?v[i]=!0:(p[i]=!0,!1)}function y(i,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,f){if(s===null||typeof s>"u"||y(i,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function A(i,s,l,f,m,_,R){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=R}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new A(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new A(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new A(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new A(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new A(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new A(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new A(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new A(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new A(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(x,D);S[s]=new A(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(x,D);S[s]=new A(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(x,D);S[s]=new A(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new A(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new A(i,1,!1,i.toLowerCase(),null,!0,!0)});function I(i,s,l,f){var m=S.hasOwnProperty(s)?S[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,m,f)&&(l=null),f||m===null?g(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,f=m.attributeNamespace,l===null?i.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?i.setAttributeNS(f,s,l):i.setAttribute(s,l))))}var b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),Y=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),W=Symbol.iterator;function Q(i){return i===null||typeof i!="object"?null:(i=W&&i[W]||i["@@iterator"],typeof i=="function"?i:null)}var X=Object.assign,U;function ae(i){if(U===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+i}var Ee=!1;function We(i,s){if(!i||Ee)return"";Ee=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(de){var f=de}Reflect.construct(i,[],s)}else{try{s.call()}catch(de){f=de}i.call(s.prototype)}else{try{throw Error()}catch(de){f=de}i()}}catch(de){if(de&&f&&typeof de.stack=="string"){for(var m=de.stack.split(`
`),_=f.stack.split(`
`),R=m.length-1,O=_.length-1;1<=R&&0<=O&&m[R]!==_[O];)O--;for(;1<=R&&0<=O;R--,O--)if(m[R]!==_[O]){if(R!==1||O!==1)do if(R--,O--,0>O||m[R]!==_[O]){var V=`
`+m[R].replace(" at new "," at ");return i.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",i.displayName)),V}while(1<=R&&0<=O);break}}}finally{Ee=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?ae(i):""}function Be(i){switch(i.tag){case 5:return ae(i.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return i=We(i.type,!1),i;case 11:return i=We(i.type.render,!1),i;case 1:return i=We(i.type,!0),i;default:return""}}function Ye(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case L:return"Portal";case w:return"Profiler";case T:return"StrictMode";case ne:return"Suspense";case K:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case Y:return(i.displayName||"Context")+".Consumer";case B:return(i._context.displayName||"Context")+".Provider";case ee:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case J:return s=i.displayName||null,s!==null?s:Ye(i.type)||"Memo";case ge:s=i._payload,i=i._init;try{return Ye(i(s))}catch{}}return null}function oe(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ye(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ue(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Re(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function nt(i){var s=Re(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,_=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(R){f=""+R,_.call(this,R)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(R){f=""+R},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Pe(i){i._valueTracker||(i._valueTracker=nt(i))}function at(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return i&&(f=Re(i)?i.checked?"true":"false":i.value),i=f,i!==l?(s.setValue(i),!0):!1}function rt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function xt(i,s){var l=s.checked;return X({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function At(i,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=ue(s.value!=null?s.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Rt(i,s){s=s.checked,s!=null&&I(i,"checked",s,!1)}function Se(i,s){Rt(i,s);var l=ue(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?lt(i,s.type,l):s.hasOwnProperty("defaultValue")&&lt(i,s.type,ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function pt(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function lt(i,s,l){(s!=="number"||rt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var dt=Array.isArray;function Ct(i,s,l,f){if(i=i.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=s.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&f&&(i[l].defaultSelected=!0)}else{for(l=""+ue(l),s=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,f&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function Nt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function z(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(dt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:ue(l)}}function Yt(i,s){var l=ue(s.value),f=ue(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function ct(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function N(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?N(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var $,se=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,m){MSApp.execUnsafeLocalFunction(function(){return i(s,l,f,m)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for($=$||document.createElement("div"),$.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=$.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function pe(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},De=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(i){De.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),we[s]=we[i]})});function me(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||we.hasOwnProperty(i)&&we[i]?(""+s).trim():s+"px"}function _e(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=me(l,s[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,m):i[l]=m}}var Le=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function et(i,s){if(s){if(Le[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Oe(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ne=null;function tt(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ft=null,vt=null,H=null;function Ue(i){if(i=fa(i)){if(typeof ft!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Tl(s),ft(i.stateNode,i.type,s))}}function xe(i){vt?H?H.push(i):H=[i]:vt=i}function Ie(){if(vt){var i=vt,s=H;if(H=vt=null,Ue(i),s)for(i=0;i<s.length;i++)Ue(s[i])}}function ze(i,s){return i(s)}function ye(){}var Ze=!1;function $e(i,s,l){if(Ze)return i(s,l);Ze=!0;try{return ze(i,s,l)}finally{Ze=!1,(vt!==null||H!==null)&&(ye(),Ie())}}function zt(i,s){var l=i.stateNode;if(l===null)return null;var f=Tl(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var It=!1;if(u)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){It=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{It=!1}function Ln(i,s,l,f,m,_,R,O,V){var de=Array.prototype.slice.call(arguments,3);try{s.apply(l,de)}catch(Te){this.onError(Te)}}var ur=!1,Fr=null,Yi=!1,An=null,qo={onError:function(i){ur=!0,Fr=i}};function ps(i,s,l,f,m,_,R,O,V){ur=!1,Fr=null,Ln.apply(qo,arguments)}function ms(i,s,l,f,m,_,R,O,V){if(ps.apply(this,arguments),ur){if(ur){var de=Fr;ur=!1,Fr=null}else throw Error(t(198));Yi||(Yi=!0,An=de)}}function Rn(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function fr(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Or(i){if(Rn(i)!==i)throw Error(t(188))}function dr(i){var s=i.alternate;if(!s){if(s=Rn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,f=s;;){var m=l.return;if(m===null)break;var _=m.alternate;if(_===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===l)return Or(m),i;if(_===f)return Or(m),s;_=_.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=_;else{for(var R=!1,O=m.child;O;){if(O===l){R=!0,l=m,f=_;break}if(O===f){R=!0,f=m,l=_;break}O=O.sibling}if(!R){for(O=_.child;O;){if(O===l){R=!0,l=_,f=m;break}if(O===f){R=!0,f=_,l=m;break}O=O.sibling}if(!R)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function k(i){return i=dr(i),i!==null?he(i):null}function he(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=he(i);if(s!==null)return s;i=i.sibling}return null}var ve=e.unstable_scheduleCallback,Fe=e.unstable_cancelCallback,ht=e.unstable_shouldYield,Ut=e.unstable_requestPaint,ut=e.unstable_now,cn=e.unstable_getCurrentPriorityLevel,Qt=e.unstable_ImmediatePriority,On=e.unstable_UserBlockingPriority,C=e.unstable_NormalPriority,G=e.unstable_LowPriority,fe=e.unstable_IdlePriority,ie=null,te=null;function He(i){if(te&&typeof te.onCommitFiberRoot=="function")try{te.onCommitFiberRoot(ie,i,void 0,(i.current.flags&128)===128)}catch{}}var ke=Math.clz32?Math.clz32:st,Ve=Math.log,Qe=Math.LN2;function st(i){return i>>>=0,i===0?32:31-(Ve(i)/Qe|0)|0}var Et=64,wt=4194304;function qe(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Ft(i,s){var l=i.pendingLanes;if(l===0)return 0;var f=0,m=i.suspendedLanes,_=i.pingedLanes,R=l&268435455;if(R!==0){var O=R&~m;O!==0?f=qe(O):(_&=R,_!==0&&(f=qe(_)))}else R=l&~m,R!==0?f=qe(R):_!==0&&(f=qe(_));if(f===0)return 0;if(s!==0&&s!==f&&(s&m)===0&&(m=f&-f,_=s&-s,m>=_||m===16&&(_&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)l=31-ke(s),m=1<<l,f|=i[l],s&=~m;return f}function un(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $t(i,s){for(var l=i.suspendedLanes,f=i.pingedLanes,m=i.expirationTimes,_=i.pendingLanes;0<_;){var R=31-ke(_),O=1<<R,V=m[R];V===-1?((O&l)===0||(O&f)!==0)&&(m[R]=un(O,s)):V<=s&&(i.expiredLanes|=O),_&=~O}}function Xt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Sn(){var i=Et;return Et<<=1,(Et&4194240)===0&&(Et=64),i}function Xe(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function mn(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-ke(s),i[s]=l}function Ot(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-ke(l),_=1<<m;s[m]=0,f[m]=-1,i[m]=-1,l&=~_}}function Bn(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var f=31-ke(l),m=1<<f;m&s|i[f]&s&&(i[f]|=s),l&=~m}}var bt=0;function Pi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var hr,Ht,nn,Di,qt,vi=!1,Li=[],Ni=null,Br=null,kr=null,Ko=new Map,$o=new Map,zr=[],My="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function am(i,s){switch(i){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":Ko.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(s.pointerId)}}function Zo(i,s,l,f,m,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:_,targetContainers:[m]},s!==null&&(s=fa(s),s!==null&&Ht(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function Ey(i,s,l,f,m){switch(s){case"focusin":return Ni=Zo(Ni,i,s,l,f,m),!0;case"dragenter":return Br=Zo(Br,i,s,l,f,m),!0;case"mouseover":return kr=Zo(kr,i,s,l,f,m),!0;case"pointerover":var _=m.pointerId;return Ko.set(_,Zo(Ko.get(_)||null,i,s,l,f,m)),!0;case"gotpointercapture":return _=m.pointerId,$o.set(_,Zo($o.get(_)||null,i,s,l,f,m)),!0}return!1}function lm(i){var s=gs(i.target);if(s!==null){var l=Rn(s);if(l!==null){if(s=l.tag,s===13){if(s=fr(l),s!==null){i.blockedOn=s,qt(i.priority,function(){nn(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ul(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Cu(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);Ne=f,l.target.dispatchEvent(f),Ne=null}else return s=fa(l),s!==null&&Ht(s),i.blockedOn=l,!1;s.shift()}return!0}function cm(i,s,l){ul(i)&&l.delete(s)}function Ty(){vi=!1,Ni!==null&&ul(Ni)&&(Ni=null),Br!==null&&ul(Br)&&(Br=null),kr!==null&&ul(kr)&&(kr=null),Ko.forEach(cm),$o.forEach(cm)}function Qo(i,s){i.blockedOn===s&&(i.blockedOn=null,vi||(vi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ty)))}function Jo(i){function s(m){return Qo(m,i)}if(0<Li.length){Qo(Li[0],i);for(var l=1;l<Li.length;l++){var f=Li[l];f.blockedOn===i&&(f.blockedOn=null)}}for(Ni!==null&&Qo(Ni,i),Br!==null&&Qo(Br,i),kr!==null&&Qo(kr,i),Ko.forEach(s),$o.forEach(s),l=0;l<zr.length;l++)f=zr[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<zr.length&&(l=zr[0],l.blockedOn===null);)lm(l),l.blockedOn===null&&zr.shift()}var js=b.ReactCurrentBatchConfig,fl=!0;function wy(i,s,l,f){var m=bt,_=js.transition;js.transition=null;try{bt=1,Ru(i,s,l,f)}finally{bt=m,js.transition=_}}function Ay(i,s,l,f){var m=bt,_=js.transition;js.transition=null;try{bt=4,Ru(i,s,l,f)}finally{bt=m,js.transition=_}}function Ru(i,s,l,f){if(fl){var m=Cu(i,s,l,f);if(m===null)Xu(i,s,f,dl,l),am(i,f);else if(Ey(m,i,s,l,f))f.stopPropagation();else if(am(i,f),s&4&&-1<My.indexOf(i)){for(;m!==null;){var _=fa(m);if(_!==null&&hr(_),_=Cu(i,s,l,f),_===null&&Xu(i,s,f,dl,l),_===m)break;m=_}m!==null&&f.stopPropagation()}else Xu(i,s,f,null,l)}}var dl=null;function Cu(i,s,l,f){if(dl=null,i=tt(f),i=gs(i),i!==null)if(s=Rn(i),s===null)i=null;else if(l=s.tag,l===13){if(i=fr(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return dl=i,null}function um(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cn()){case Qt:return 1;case On:return 4;case C:case G:return 16;case fe:return 536870912;default:return 16}default:return 16}}var Vr=null,bu=null,hl=null;function fm(){if(hl)return hl;var i,s=bu,l=s.length,f,m="value"in Vr?Vr.value:Vr.textContent,_=m.length;for(i=0;i<l&&s[i]===m[i];i++);var R=l-i;for(f=1;f<=R&&s[l-f]===m[_-f];f++);return hl=m.slice(i,1<f?1-f:void 0)}function pl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function ml(){return!0}function dm(){return!1}function ci(i){function s(l,f,m,_,R){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=_,this.target=R,this.currentTarget=null;for(var O in i)i.hasOwnProperty(O)&&(l=i[O],this[O]=l?l(_):_[O]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?ml:dm,this.isPropagationStopped=dm,this}return X(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),s}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=ci(Ys),ea=X({},Ys,{view:0,detail:0}),Ry=ci(ea),Du,Lu,ta,gl=X({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Iu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ta&&(ta&&i.type==="mousemove"?(Du=i.screenX-ta.screenX,Lu=i.screenY-ta.screenY):Lu=Du=0,ta=i),Du)},movementY:function(i){return"movementY"in i?i.movementY:Lu}}),hm=ci(gl),Cy=X({},gl,{dataTransfer:0}),by=ci(Cy),Py=X({},ea,{relatedTarget:0}),Nu=ci(Py),Dy=X({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),Ly=ci(Dy),Ny=X({},Ys,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Iy=ci(Ny),Uy=X({},Ys,{data:0}),pm=ci(Uy),Fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},By={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ky(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=By[i])?!!s[i]:!1}function Iu(){return ky}var zy=X({},ea,{key:function(i){if(i.key){var s=Fy[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=pl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Oy[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Iu,charCode:function(i){return i.type==="keypress"?pl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?pl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Vy=ci(zy),Hy=X({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=ci(Hy),Gy=X({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Iu}),Wy=ci(Gy),Xy=X({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),jy=ci(Xy),Yy=X({},gl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),qy=ci(Yy),Ky=[9,13,27,32],Uu=u&&"CompositionEvent"in window,na=null;u&&"documentMode"in document&&(na=document.documentMode);var $y=u&&"TextEvent"in window&&!na,gm=u&&(!Uu||na&&8<na&&11>=na),vm=" ",_m=!1;function xm(i,s){switch(i){case"keyup":return Ky.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ym(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var qs=!1;function Zy(i,s){switch(i){case"compositionend":return ym(s);case"keypress":return s.which!==32?null:(_m=!0,vm);case"textInput":return i=s.data,i===vm&&_m?null:i;default:return null}}function Qy(i,s){if(qs)return i==="compositionend"||!Uu&&xm(i,s)?(i=fm(),hl=bu=Vr=null,qs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return gm&&s.locale!=="ko"?null:s.data;default:return null}}var Jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!Jy[i.type]:s==="textarea"}function Mm(i,s,l,f){xe(f),s=Sl(s,"onChange"),0<s.length&&(l=new Pu("onChange","change",null,l,f),i.push({event:l,listeners:s}))}var ia=null,ra=null;function eS(i){zm(i,0)}function vl(i){var s=Js(i);if(at(s))return i}function tS(i,s){if(i==="change")return s}var Em=!1;if(u){var Fu;if(u){var Ou="oninput"in document;if(!Ou){var Tm=document.createElement("div");Tm.setAttribute("oninput","return;"),Ou=typeof Tm.oninput=="function"}Fu=Ou}else Fu=!1;Em=Fu&&(!document.documentMode||9<document.documentMode)}function wm(){ia&&(ia.detachEvent("onpropertychange",Am),ra=ia=null)}function Am(i){if(i.propertyName==="value"&&vl(ra)){var s=[];Mm(s,ra,i,tt(i)),$e(eS,s)}}function nS(i,s,l){i==="focusin"?(wm(),ia=s,ra=l,ia.attachEvent("onpropertychange",Am)):i==="focusout"&&wm()}function iS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return vl(ra)}function rS(i,s){if(i==="click")return vl(s)}function sS(i,s){if(i==="input"||i==="change")return vl(s)}function oS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Ii=typeof Object.is=="function"?Object.is:oS;function sa(i,s){if(Ii(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(s,m)||!Ii(i[m],s[m]))return!1}return!0}function Rm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Cm(i,s){var l=Rm(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=s&&f>=s)return{node:l,offset:s-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Rm(l)}}function bm(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?bm(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Pm(){for(var i=window,s=rt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=rt(i.document)}return s}function Bu(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function aS(i){var s=Pm(),l=i.focusedElem,f=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&bm(l.ownerDocument.documentElement,l)){if(f!==null&&Bu(l)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,_=Math.min(f.start,m);f=f.end===void 0?_:Math.min(f.end,m),!i.extend&&_>f&&(m=f,f=_,_=m),m=Cm(l,_);var R=Cm(l,f);m&&R&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==R.node||i.focusOffset!==R.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),_>f?(i.addRange(s),i.extend(R.node,R.offset)):(s.setEnd(R.node,R.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var lS=u&&"documentMode"in document&&11>=document.documentMode,Ks=null,ku=null,oa=null,zu=!1;function Dm(i,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;zu||Ks==null||Ks!==rt(f)||(f=Ks,"selectionStart"in f&&Bu(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),oa&&sa(oa,f)||(oa=f,f=Sl(ku,"onSelect"),0<f.length&&(s=new Pu("onSelect","select",null,s,l),i.push({event:s,listeners:f}),s.target=Ks)))}function _l(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var $s={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionend:_l("Transition","TransitionEnd")},Vu={},Lm={};u&&(Lm=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function xl(i){if(Vu[i])return Vu[i];if(!$s[i])return i;var s=$s[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Lm)return Vu[i]=s[l];return i}var Nm=xl("animationend"),Im=xl("animationiteration"),Um=xl("animationstart"),Fm=xl("transitionend"),Om=new Map,Bm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(i,s){Om.set(i,s),a(s,[i])}for(var Hu=0;Hu<Bm.length;Hu++){var Gu=Bm[Hu],cS=Gu.toLowerCase(),uS=Gu[0].toUpperCase()+Gu.slice(1);Hr(cS,"on"+uS)}Hr(Nm,"onAnimationEnd"),Hr(Im,"onAnimationIteration"),Hr(Um,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(Fm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function km(i,s,l){var f=i.type||"unknown-event";i.currentTarget=l,ms(f,s,void 0,i),i.currentTarget=null}function zm(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],m=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var R=f.length-1;0<=R;R--){var O=f[R],V=O.instance,de=O.currentTarget;if(O=O.listener,V!==_&&m.isPropagationStopped())break e;km(m,O,de),_=V}else for(R=0;R<f.length;R++){if(O=f[R],V=O.instance,de=O.currentTarget,O=O.listener,V!==_&&m.isPropagationStopped())break e;km(m,O,de),_=V}}}if(Yi)throw i=An,Yi=!1,An=null,i}function Jt(i,s){var l=s[Zu];l===void 0&&(l=s[Zu]=new Set);var f=i+"__bubble";l.has(f)||(Vm(s,i,2,!1),l.add(f))}function Wu(i,s,l){var f=0;s&&(f|=4),Vm(l,i,f,s)}var yl="_reactListening"+Math.random().toString(36).slice(2);function la(i){if(!i[yl]){i[yl]=!0,r.forEach(function(l){l!=="selectionchange"&&(fS.has(l)||Wu(l,!1,i),Wu(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[yl]||(s[yl]=!0,Wu("selectionchange",!1,s))}}function Vm(i,s,l,f){switch(um(s)){case 1:var m=wy;break;case 4:m=Ay;break;default:m=Ru}l=m.bind(null,s,l,i),m=void 0,!It||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?i.addEventListener(s,l,{capture:!0,passive:m}):i.addEventListener(s,l,!0):m!==void 0?i.addEventListener(s,l,{passive:m}):i.addEventListener(s,l,!1)}function Xu(i,s,l,f,m){var _=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var R=f.tag;if(R===3||R===4){var O=f.stateNode.containerInfo;if(O===m||O.nodeType===8&&O.parentNode===m)break;if(R===4)for(R=f.return;R!==null;){var V=R.tag;if((V===3||V===4)&&(V=R.stateNode.containerInfo,V===m||V.nodeType===8&&V.parentNode===m))return;R=R.return}for(;O!==null;){if(R=gs(O),R===null)return;if(V=R.tag,V===5||V===6){f=_=R;continue e}O=O.parentNode}}f=f.return}$e(function(){var de=_,Te=tt(l),Ae=[];e:{var Me=Om.get(i);if(Me!==void 0){var je=Pu,Je=i;switch(i){case"keypress":if(pl(l)===0)break e;case"keydown":case"keyup":je=Vy;break;case"focusin":Je="focus",je=Nu;break;case"focusout":Je="blur",je=Nu;break;case"beforeblur":case"afterblur":je=Nu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=by;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=Wy;break;case Nm:case Im:case Um:je=Ly;break;case Fm:je=jy;break;case"scroll":je=Ry;break;case"wheel":je=qy;break;case"copy":case"cut":case"paste":je=Iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=mm}var it=(s&4)!==0,gn=!it&&i==="scroll",re=it?Me!==null?Me+"Capture":null:Me;it=[];for(var j=de,le;j!==null;){le=j;var be=le.stateNode;if(le.tag===5&&be!==null&&(le=be,re!==null&&(be=zt(j,re),be!=null&&it.push(ca(j,be,le)))),gn)break;j=j.return}0<it.length&&(Me=new je(Me,Je,null,l,Te),Ae.push({event:Me,listeners:it}))}}if((s&7)===0){e:{if(Me=i==="mouseover"||i==="pointerover",je=i==="mouseout"||i==="pointerout",Me&&l!==Ne&&(Je=l.relatedTarget||l.fromElement)&&(gs(Je)||Je[pr]))break e;if((je||Me)&&(Me=Te.window===Te?Te:(Me=Te.ownerDocument)?Me.defaultView||Me.parentWindow:window,je?(Je=l.relatedTarget||l.toElement,je=de,Je=Je?gs(Je):null,Je!==null&&(gn=Rn(Je),Je!==gn||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(je=null,Je=de),je!==Je)){if(it=hm,be="onMouseLeave",re="onMouseEnter",j="mouse",(i==="pointerout"||i==="pointerover")&&(it=mm,be="onPointerLeave",re="onPointerEnter",j="pointer"),gn=je==null?Me:Js(je),le=Je==null?Me:Js(Je),Me=new it(be,j+"leave",je,l,Te),Me.target=gn,Me.relatedTarget=le,be=null,gs(Te)===de&&(it=new it(re,j+"enter",Je,l,Te),it.target=le,it.relatedTarget=gn,be=it),gn=be,je&&Je)t:{for(it=je,re=Je,j=0,le=it;le;le=Zs(le))j++;for(le=0,be=re;be;be=Zs(be))le++;for(;0<j-le;)it=Zs(it),j--;for(;0<le-j;)re=Zs(re),le--;for(;j--;){if(it===re||re!==null&&it===re.alternate)break t;it=Zs(it),re=Zs(re)}it=null}else it=null;je!==null&&Hm(Ae,Me,je,it,!1),Je!==null&&gn!==null&&Hm(Ae,gn,Je,it,!0)}}e:{if(Me=de?Js(de):window,je=Me.nodeName&&Me.nodeName.toLowerCase(),je==="select"||je==="input"&&Me.type==="file")var ot=tS;else if(Sm(Me))if(Em)ot=sS;else{ot=iS;var mt=nS}else(je=Me.nodeName)&&je.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(ot=rS);if(ot&&(ot=ot(i,de))){Mm(Ae,ot,l,Te);break e}mt&&mt(i,Me,de),i==="focusout"&&(mt=Me._wrapperState)&&mt.controlled&&Me.type==="number"&&lt(Me,"number",Me.value)}switch(mt=de?Js(de):window,i){case"focusin":(Sm(mt)||mt.contentEditable==="true")&&(Ks=mt,ku=de,oa=null);break;case"focusout":oa=ku=Ks=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,Dm(Ae,l,Te);break;case"selectionchange":if(lS)break;case"keydown":case"keyup":Dm(Ae,l,Te)}var gt;if(Uu)e:{switch(i){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else qs?xm(i,l)&&(Mt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Mt="onCompositionStart");Mt&&(gm&&l.locale!=="ko"&&(qs||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&qs&&(gt=fm()):(Vr=Te,bu="value"in Vr?Vr.value:Vr.textContent,qs=!0)),mt=Sl(de,Mt),0<mt.length&&(Mt=new pm(Mt,i,null,l,Te),Ae.push({event:Mt,listeners:mt}),gt?Mt.data=gt:(gt=ym(l),gt!==null&&(Mt.data=gt)))),(gt=$y?Zy(i,l):Qy(i,l))&&(de=Sl(de,"onBeforeInput"),0<de.length&&(Te=new pm("onBeforeInput","beforeinput",null,l,Te),Ae.push({event:Te,listeners:de}),Te.data=gt))}zm(Ae,s)})}function ca(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Sl(i,s){for(var l=s+"Capture",f=[];i!==null;){var m=i,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=zt(i,l),_!=null&&f.unshift(ca(i,_,m)),_=zt(i,s),_!=null&&f.push(ca(i,_,m))),i=i.return}return f}function Zs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Hm(i,s,l,f,m){for(var _=s._reactName,R=[];l!==null&&l!==f;){var O=l,V=O.alternate,de=O.stateNode;if(V!==null&&V===f)break;O.tag===5&&de!==null&&(O=de,m?(V=zt(l,_),V!=null&&R.unshift(ca(l,V,O))):m||(V=zt(l,_),V!=null&&R.push(ca(l,V,O)))),l=l.return}R.length!==0&&i.push({event:s,listeners:R})}var dS=/\r\n?/g,hS=/\u0000|\uFFFD/g;function Gm(i){return(typeof i=="string"?i:""+i).replace(dS,`
`).replace(hS,"")}function Ml(i,s,l){if(s=Gm(s),Gm(i)!==s&&l)throw Error(t(425))}function El(){}var ju=null,Yu=null;function qu(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ku=typeof setTimeout=="function"?setTimeout:void 0,pS=typeof clearTimeout=="function"?clearTimeout:void 0,Wm=typeof Promise=="function"?Promise:void 0,mS=typeof queueMicrotask=="function"?queueMicrotask:typeof Wm<"u"?function(i){return Wm.resolve(null).then(i).catch(gS)}:Ku;function gS(i){setTimeout(function(){throw i})}function $u(i,s){var l=s,f=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){i.removeChild(m),Jo(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);Jo(s)}function Gr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Xm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),qi="__reactFiber$"+Qs,ua="__reactProps$"+Qs,pr="__reactContainer$"+Qs,Zu="__reactEvents$"+Qs,vS="__reactListeners$"+Qs,_S="__reactHandles$"+Qs;function gs(i){var s=i[qi];if(s)return s;for(var l=i.parentNode;l;){if(s=l[pr]||l[qi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Xm(i);i!==null;){if(l=i[qi])return l;i=Xm(i)}return s}i=l,l=i.parentNode}return null}function fa(i){return i=i[qi]||i[pr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Js(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Tl(i){return i[ua]||null}var Qu=[],eo=-1;function Wr(i){return{current:i}}function en(i){0>eo||(i.current=Qu[eo],Qu[eo]=null,eo--)}function Zt(i,s){eo++,Qu[eo]=i.current,i.current=s}var Xr={},kn=Wr(Xr),ti=Wr(!1),vs=Xr;function to(i,s){var l=i.type.contextTypes;if(!l)return Xr;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in l)m[_]=s[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function ni(i){return i=i.childContextTypes,i!=null}function wl(){en(ti),en(kn)}function jm(i,s,l){if(kn.current!==Xr)throw Error(t(168));Zt(kn,s),Zt(ti,l)}function Ym(i,s,l){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,oe(i)||"Unknown",m));return X({},l,f)}function Al(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Xr,vs=kn.current,Zt(kn,i),Zt(ti,ti.current),!0}function qm(i,s,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=Ym(i,s,vs),f.__reactInternalMemoizedMergedChildContext=i,en(ti),en(kn),Zt(kn,i)):en(ti),Zt(ti,l)}var mr=null,Rl=!1,Ju=!1;function Km(i){mr===null?mr=[i]:mr.push(i)}function xS(i){Rl=!0,Km(i)}function jr(){if(!Ju&&mr!==null){Ju=!0;var i=0,s=bt;try{var l=mr;for(bt=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}mr=null,Rl=!1}catch(m){throw mr!==null&&(mr=mr.slice(i+1)),ve(Qt,jr),m}finally{bt=s,Ju=!1}}return null}var no=[],io=0,Cl=null,bl=0,_i=[],xi=0,_s=null,gr=1,vr="";function xs(i,s){no[io++]=bl,no[io++]=Cl,Cl=i,bl=s}function $m(i,s,l){_i[xi++]=gr,_i[xi++]=vr,_i[xi++]=_s,_s=i;var f=gr;i=vr;var m=32-ke(f)-1;f&=~(1<<m),l+=1;var _=32-ke(s)+m;if(30<_){var R=m-m%5;_=(f&(1<<R)-1).toString(32),f>>=R,m-=R,gr=1<<32-ke(s)+m|l<<m|f,vr=_+i}else gr=1<<_|l<<m|f,vr=i}function ef(i){i.return!==null&&(xs(i,1),$m(i,1,0))}function tf(i){for(;i===Cl;)Cl=no[--io],no[io]=null,bl=no[--io],no[io]=null;for(;i===_s;)_s=_i[--xi],_i[xi]=null,vr=_i[--xi],_i[xi]=null,gr=_i[--xi],_i[xi]=null}var ui=null,fi=null,rn=!1,Ui=null;function Zm(i,s){var l=Ei(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function Qm(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,ui=i,fi=Gr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,ui=i,fi=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=_s!==null?{id:gr,overflow:vr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Ei(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,ui=i,fi=null,!0):!1;default:return!1}}function nf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function rf(i){if(rn){var s=fi;if(s){var l=s;if(!Qm(i,s)){if(nf(i))throw Error(t(418));s=Gr(l.nextSibling);var f=ui;s&&Qm(i,s)?Zm(f,l):(i.flags=i.flags&-4097|2,rn=!1,ui=i)}}else{if(nf(i))throw Error(t(418));i.flags=i.flags&-4097|2,rn=!1,ui=i}}}function Jm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ui=i}function Pl(i){if(i!==ui)return!1;if(!rn)return Jm(i),rn=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!qu(i.type,i.memoizedProps)),s&&(s=fi)){if(nf(i))throw e0(),Error(t(418));for(;s;)Zm(i,s),s=Gr(s.nextSibling)}if(Jm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){fi=Gr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}fi=null}}else fi=ui?Gr(i.stateNode.nextSibling):null;return!0}function e0(){for(var i=fi;i;)i=Gr(i.nextSibling)}function ro(){fi=ui=null,rn=!1}function sf(i){Ui===null?Ui=[i]:Ui.push(i)}var yS=b.ReactCurrentBatchConfig;function da(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var m=f,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(R){var O=m.refs;R===null?delete O[_]:O[_]=R},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Dl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function t0(i){var s=i._init;return s(i._payload)}function n0(i){function s(re,j){if(i){var le=re.deletions;le===null?(re.deletions=[j],re.flags|=16):le.push(j)}}function l(re,j){if(!i)return null;for(;j!==null;)s(re,j),j=j.sibling;return null}function f(re,j){for(re=new Map;j!==null;)j.key!==null?re.set(j.key,j):re.set(j.index,j),j=j.sibling;return re}function m(re,j){return re=es(re,j),re.index=0,re.sibling=null,re}function _(re,j,le){return re.index=le,i?(le=re.alternate,le!==null?(le=le.index,le<j?(re.flags|=2,j):le):(re.flags|=2,j)):(re.flags|=1048576,j)}function R(re){return i&&re.alternate===null&&(re.flags|=2),re}function O(re,j,le,be){return j===null||j.tag!==6?(j=$f(le,re.mode,be),j.return=re,j):(j=m(j,le),j.return=re,j)}function V(re,j,le,be){var ot=le.type;return ot===F?Te(re,j,le.props.children,be,le.key):j!==null&&(j.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===ge&&t0(ot)===j.type)?(be=m(j,le.props),be.ref=da(re,j,le),be.return=re,be):(be=tc(le.type,le.key,le.props,null,re.mode,be),be.ref=da(re,j,le),be.return=re,be)}function de(re,j,le,be){return j===null||j.tag!==4||j.stateNode.containerInfo!==le.containerInfo||j.stateNode.implementation!==le.implementation?(j=Zf(le,re.mode,be),j.return=re,j):(j=m(j,le.children||[]),j.return=re,j)}function Te(re,j,le,be,ot){return j===null||j.tag!==7?(j=Rs(le,re.mode,be,ot),j.return=re,j):(j=m(j,le),j.return=re,j)}function Ae(re,j,le){if(typeof j=="string"&&j!==""||typeof j=="number")return j=$f(""+j,re.mode,le),j.return=re,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case P:return le=tc(j.type,j.key,j.props,null,re.mode,le),le.ref=da(re,null,j),le.return=re,le;case L:return j=Zf(j,re.mode,le),j.return=re,j;case ge:var be=j._init;return Ae(re,be(j._payload),le)}if(dt(j)||Q(j))return j=Rs(j,re.mode,le,null),j.return=re,j;Dl(re,j)}return null}function Me(re,j,le,be){var ot=j!==null?j.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return ot!==null?null:O(re,j,""+le,be);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case P:return le.key===ot?V(re,j,le,be):null;case L:return le.key===ot?de(re,j,le,be):null;case ge:return ot=le._init,Me(re,j,ot(le._payload),be)}if(dt(le)||Q(le))return ot!==null?null:Te(re,j,le,be,null);Dl(re,le)}return null}function je(re,j,le,be,ot){if(typeof be=="string"&&be!==""||typeof be=="number")return re=re.get(le)||null,O(j,re,""+be,ot);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case P:return re=re.get(be.key===null?le:be.key)||null,V(j,re,be,ot);case L:return re=re.get(be.key===null?le:be.key)||null,de(j,re,be,ot);case ge:var mt=be._init;return je(re,j,le,mt(be._payload),ot)}if(dt(be)||Q(be))return re=re.get(le)||null,Te(j,re,be,ot,null);Dl(j,be)}return null}function Je(re,j,le,be){for(var ot=null,mt=null,gt=j,Mt=j=0,Pn=null;gt!==null&&Mt<le.length;Mt++){gt.index>Mt?(Pn=gt,gt=null):Pn=gt.sibling;var Gt=Me(re,gt,le[Mt],be);if(Gt===null){gt===null&&(gt=Pn);break}i&&gt&&Gt.alternate===null&&s(re,gt),j=_(Gt,j,Mt),mt===null?ot=Gt:mt.sibling=Gt,mt=Gt,gt=Pn}if(Mt===le.length)return l(re,gt),rn&&xs(re,Mt),ot;if(gt===null){for(;Mt<le.length;Mt++)gt=Ae(re,le[Mt],be),gt!==null&&(j=_(gt,j,Mt),mt===null?ot=gt:mt.sibling=gt,mt=gt);return rn&&xs(re,Mt),ot}for(gt=f(re,gt);Mt<le.length;Mt++)Pn=je(gt,re,Mt,le[Mt],be),Pn!==null&&(i&&Pn.alternate!==null&&gt.delete(Pn.key===null?Mt:Pn.key),j=_(Pn,j,Mt),mt===null?ot=Pn:mt.sibling=Pn,mt=Pn);return i&&gt.forEach(function(ts){return s(re,ts)}),rn&&xs(re,Mt),ot}function it(re,j,le,be){var ot=Q(le);if(typeof ot!="function")throw Error(t(150));if(le=ot.call(le),le==null)throw Error(t(151));for(var mt=ot=null,gt=j,Mt=j=0,Pn=null,Gt=le.next();gt!==null&&!Gt.done;Mt++,Gt=le.next()){gt.index>Mt?(Pn=gt,gt=null):Pn=gt.sibling;var ts=Me(re,gt,Gt.value,be);if(ts===null){gt===null&&(gt=Pn);break}i&&gt&&ts.alternate===null&&s(re,gt),j=_(ts,j,Mt),mt===null?ot=ts:mt.sibling=ts,mt=ts,gt=Pn}if(Gt.done)return l(re,gt),rn&&xs(re,Mt),ot;if(gt===null){for(;!Gt.done;Mt++,Gt=le.next())Gt=Ae(re,Gt.value,be),Gt!==null&&(j=_(Gt,j,Mt),mt===null?ot=Gt:mt.sibling=Gt,mt=Gt);return rn&&xs(re,Mt),ot}for(gt=f(re,gt);!Gt.done;Mt++,Gt=le.next())Gt=je(gt,re,Mt,Gt.value,be),Gt!==null&&(i&&Gt.alternate!==null&&gt.delete(Gt.key===null?Mt:Gt.key),j=_(Gt,j,Mt),mt===null?ot=Gt:mt.sibling=Gt,mt=Gt);return i&&gt.forEach(function(JS){return s(re,JS)}),rn&&xs(re,Mt),ot}function gn(re,j,le,be){if(typeof le=="object"&&le!==null&&le.type===F&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case P:e:{for(var ot=le.key,mt=j;mt!==null;){if(mt.key===ot){if(ot=le.type,ot===F){if(mt.tag===7){l(re,mt.sibling),j=m(mt,le.props.children),j.return=re,re=j;break e}}else if(mt.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===ge&&t0(ot)===mt.type){l(re,mt.sibling),j=m(mt,le.props),j.ref=da(re,mt,le),j.return=re,re=j;break e}l(re,mt);break}else s(re,mt);mt=mt.sibling}le.type===F?(j=Rs(le.props.children,re.mode,be,le.key),j.return=re,re=j):(be=tc(le.type,le.key,le.props,null,re.mode,be),be.ref=da(re,j,le),be.return=re,re=be)}return R(re);case L:e:{for(mt=le.key;j!==null;){if(j.key===mt)if(j.tag===4&&j.stateNode.containerInfo===le.containerInfo&&j.stateNode.implementation===le.implementation){l(re,j.sibling),j=m(j,le.children||[]),j.return=re,re=j;break e}else{l(re,j);break}else s(re,j);j=j.sibling}j=Zf(le,re.mode,be),j.return=re,re=j}return R(re);case ge:return mt=le._init,gn(re,j,mt(le._payload),be)}if(dt(le))return Je(re,j,le,be);if(Q(le))return it(re,j,le,be);Dl(re,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,j!==null&&j.tag===6?(l(re,j.sibling),j=m(j,le),j.return=re,re=j):(l(re,j),j=$f(le,re.mode,be),j.return=re,re=j),R(re)):l(re,j)}return gn}var so=n0(!0),i0=n0(!1),Ll=Wr(null),Nl=null,oo=null,of=null;function af(){of=oo=Nl=null}function lf(i){var s=Ll.current;en(Ll),i._currentValue=s}function cf(i,s,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===l)break;i=i.return}}function ao(i,s){Nl=i,of=oo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(ii=!0),i.firstContext=null)}function yi(i){var s=i._currentValue;if(of!==i)if(i={context:i,memoizedValue:s,next:null},oo===null){if(Nl===null)throw Error(t(308));oo=i,Nl.dependencies={lanes:0,firstContext:i}}else oo=oo.next=i;return s}var ys=null;function uf(i){ys===null?ys=[i]:ys.push(i)}function r0(i,s,l,f){var m=s.interleaved;return m===null?(l.next=l,uf(s)):(l.next=m.next,m.next=l),s.interleaved=l,_r(i,f)}function _r(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Yr=!1;function ff(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s0(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function xr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function qr(i,s,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(Vt&2)!==0){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,_r(i,l)}return m=f.interleaved,m===null?(s.next=s,uf(f)):(s.next=m.next,m.next=s),f.interleaved=s,_r(i,l)}function Il(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Bn(i,l)}}function o0(i,s){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var R={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?m=_=R:_=_.next=R,l=l.next}while(l!==null);_===null?m=_=s:_=_.next=s}else m=_=s;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Ul(i,s,l,f){var m=i.updateQueue;Yr=!1;var _=m.firstBaseUpdate,R=m.lastBaseUpdate,O=m.shared.pending;if(O!==null){m.shared.pending=null;var V=O,de=V.next;V.next=null,R===null?_=de:R.next=de,R=V;var Te=i.alternate;Te!==null&&(Te=Te.updateQueue,O=Te.lastBaseUpdate,O!==R&&(O===null?Te.firstBaseUpdate=de:O.next=de,Te.lastBaseUpdate=V))}if(_!==null){var Ae=m.baseState;R=0,Te=de=V=null,O=_;do{var Me=O.lane,je=O.eventTime;if((f&Me)===Me){Te!==null&&(Te=Te.next={eventTime:je,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Je=i,it=O;switch(Me=s,je=l,it.tag){case 1:if(Je=it.payload,typeof Je=="function"){Ae=Je.call(je,Ae,Me);break e}Ae=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=it.payload,Me=typeof Je=="function"?Je.call(je,Ae,Me):Je,Me==null)break e;Ae=X({},Ae,Me);break e;case 2:Yr=!0}}O.callback!==null&&O.lane!==0&&(i.flags|=64,Me=m.effects,Me===null?m.effects=[O]:Me.push(O))}else je={eventTime:je,lane:Me,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Te===null?(de=Te=je,V=Ae):Te=Te.next=je,R|=Me;if(O=O.next,O===null){if(O=m.shared.pending,O===null)break;Me=O,O=Me.next,Me.next=null,m.lastBaseUpdate=Me,m.shared.pending=null}}while(!0);if(Te===null&&(V=Ae),m.baseState=V,m.firstBaseUpdate=de,m.lastBaseUpdate=Te,s=m.shared.interleaved,s!==null){m=s;do R|=m.lane,m=m.next;while(m!==s)}else _===null&&(m.shared.lanes=0);Es|=R,i.lanes=R,i.memoizedState=Ae}}function a0(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var ha={},Ki=Wr(ha),pa=Wr(ha),ma=Wr(ha);function Ss(i){if(i===ha)throw Error(t(174));return i}function df(i,s){switch(Zt(ma,s),Zt(pa,i),Zt(Ki,ha),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:E(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=E(s,i)}en(Ki),Zt(Ki,s)}function lo(){en(Ki),en(pa),en(ma)}function l0(i){Ss(ma.current);var s=Ss(Ki.current),l=E(s,i.type);s!==l&&(Zt(pa,i),Zt(Ki,l))}function hf(i){pa.current===i&&(en(Ki),en(pa))}var sn=Wr(0);function Fl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var pf=[];function mf(){for(var i=0;i<pf.length;i++)pf[i]._workInProgressVersionPrimary=null;pf.length=0}var Ol=b.ReactCurrentDispatcher,gf=b.ReactCurrentBatchConfig,Ms=0,on=null,Mn=null,Cn=null,Bl=!1,ga=!1,va=0,SS=0;function zn(){throw Error(t(321))}function vf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Ii(i[l],s[l]))return!1;return!0}function _f(i,s,l,f,m,_){if(Ms=_,on=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ol.current=i===null||i.memoizedState===null?wS:AS,i=l(f,m),ga){_=0;do{if(ga=!1,va=0,25<=_)throw Error(t(301));_+=1,Cn=Mn=null,s.updateQueue=null,Ol.current=RS,i=l(f,m)}while(ga)}if(Ol.current=Vl,s=Mn!==null&&Mn.next!==null,Ms=0,Cn=Mn=on=null,Bl=!1,s)throw Error(t(300));return i}function xf(){var i=va!==0;return va=0,i}function $i(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?on.memoizedState=Cn=i:Cn=Cn.next=i,Cn}function Si(){if(Mn===null){var i=on.alternate;i=i!==null?i.memoizedState:null}else i=Mn.next;var s=Cn===null?on.memoizedState:Cn.next;if(s!==null)Cn=s,Mn=i;else{if(i===null)throw Error(t(310));Mn=i,i={memoizedState:Mn.memoizedState,baseState:Mn.baseState,baseQueue:Mn.baseQueue,queue:Mn.queue,next:null},Cn===null?on.memoizedState=Cn=i:Cn=Cn.next=i}return Cn}function _a(i,s){return typeof s=="function"?s(i):s}function yf(i){var s=Si(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=Mn,m=f.baseQueue,_=l.pending;if(_!==null){if(m!==null){var R=m.next;m.next=_.next,_.next=R}f.baseQueue=m=_,l.pending=null}if(m!==null){_=m.next,f=f.baseState;var O=R=null,V=null,de=_;do{var Te=de.lane;if((Ms&Te)===Te)V!==null&&(V=V.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),f=de.hasEagerState?de.eagerState:i(f,de.action);else{var Ae={lane:Te,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};V===null?(O=V=Ae,R=f):V=V.next=Ae,on.lanes|=Te,Es|=Te}de=de.next}while(de!==null&&de!==_);V===null?R=f:V.next=O,Ii(f,s.memoizedState)||(ii=!0),s.memoizedState=f,s.baseState=R,s.baseQueue=V,l.lastRenderedState=f}if(i=l.interleaved,i!==null){m=i;do _=m.lane,on.lanes|=_,Es|=_,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Sf(i){var s=Si(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,m=l.pending,_=s.memoizedState;if(m!==null){l.pending=null;var R=m=m.next;do _=i(_,R.action),R=R.next;while(R!==m);Ii(_,s.memoizedState)||(ii=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,f]}function c0(){}function u0(i,s){var l=on,f=Si(),m=s(),_=!Ii(f.memoizedState,m);if(_&&(f.memoizedState=m,ii=!0),f=f.queue,Mf(h0.bind(null,l,f,i),[i]),f.getSnapshot!==s||_||Cn!==null&&Cn.memoizedState.tag&1){if(l.flags|=2048,xa(9,d0.bind(null,l,f,m,s),void 0,null),bn===null)throw Error(t(349));(Ms&30)!==0||f0(l,s,m)}return m}function f0(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=on.updateQueue,s===null?(s={lastEffect:null,stores:null},on.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function d0(i,s,l,f){s.value=l,s.getSnapshot=f,p0(s)&&m0(i)}function h0(i,s,l){return l(function(){p0(s)&&m0(i)})}function p0(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Ii(i,l)}catch{return!0}}function m0(i){var s=_r(i,1);s!==null&&ki(s,i,1,-1)}function g0(i){var s=$i();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:i},s.queue=i,i=i.dispatch=TS.bind(null,on,i),[s.memoizedState,i]}function xa(i,s,l,f){return i={tag:i,create:s,destroy:l,deps:f,next:null},s=on.updateQueue,s===null?(s={lastEffect:null,stores:null},on.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,s.lastEffect=i)),i}function v0(){return Si().memoizedState}function kl(i,s,l,f){var m=$i();on.flags|=i,m.memoizedState=xa(1|s,l,void 0,f===void 0?null:f)}function zl(i,s,l,f){var m=Si();f=f===void 0?null:f;var _=void 0;if(Mn!==null){var R=Mn.memoizedState;if(_=R.destroy,f!==null&&vf(f,R.deps)){m.memoizedState=xa(s,l,_,f);return}}on.flags|=i,m.memoizedState=xa(1|s,l,_,f)}function _0(i,s){return kl(8390656,8,i,s)}function Mf(i,s){return zl(2048,8,i,s)}function x0(i,s){return zl(4,2,i,s)}function y0(i,s){return zl(4,4,i,s)}function S0(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function M0(i,s,l){return l=l!=null?l.concat([i]):null,zl(4,4,S0.bind(null,s,i),l)}function Ef(){}function E0(i,s){var l=Si();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&vf(s,f[1])?f[0]:(l.memoizedState=[i,s],i)}function T0(i,s){var l=Si();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&vf(s,f[1])?f[0]:(i=i(),l.memoizedState=[i,s],i)}function w0(i,s,l){return(Ms&21)===0?(i.baseState&&(i.baseState=!1,ii=!0),i.memoizedState=l):(Ii(l,s)||(l=Sn(),on.lanes|=l,Es|=l,i.baseState=!0),s)}function MS(i,s){var l=bt;bt=l!==0&&4>l?l:4,i(!0);var f=gf.transition;gf.transition={};try{i(!1),s()}finally{bt=l,gf.transition=f}}function A0(){return Si().memoizedState}function ES(i,s,l){var f=Qr(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},R0(i))C0(s,l);else if(l=r0(i,s,l,f),l!==null){var m=Zn();ki(l,i,f,m),b0(l,s,f)}}function TS(i,s,l){var f=Qr(i),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(R0(i))C0(s,m);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var R=s.lastRenderedState,O=_(R,l);if(m.hasEagerState=!0,m.eagerState=O,Ii(O,R)){var V=s.interleaved;V===null?(m.next=m,uf(s)):(m.next=V.next,V.next=m),s.interleaved=m;return}}catch{}finally{}l=r0(i,s,m,f),l!==null&&(m=Zn(),ki(l,i,f,m),b0(l,s,f))}}function R0(i){var s=i.alternate;return i===on||s!==null&&s===on}function C0(i,s){ga=Bl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function b0(i,s,l){if((l&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Bn(i,l)}}var Vl={readContext:yi,useCallback:zn,useContext:zn,useEffect:zn,useImperativeHandle:zn,useInsertionEffect:zn,useLayoutEffect:zn,useMemo:zn,useReducer:zn,useRef:zn,useState:zn,useDebugValue:zn,useDeferredValue:zn,useTransition:zn,useMutableSource:zn,useSyncExternalStore:zn,useId:zn,unstable_isNewReconciler:!1},wS={readContext:yi,useCallback:function(i,s){return $i().memoizedState=[i,s===void 0?null:s],i},useContext:yi,useEffect:_0,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,kl(4194308,4,S0.bind(null,s,i),l)},useLayoutEffect:function(i,s){return kl(4194308,4,i,s)},useInsertionEffect:function(i,s){return kl(4,2,i,s)},useMemo:function(i,s){var l=$i();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var f=$i();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=ES.bind(null,on,i),[f.memoizedState,i]},useRef:function(i){var s=$i();return i={current:i},s.memoizedState=i},useState:g0,useDebugValue:Ef,useDeferredValue:function(i){return $i().memoizedState=i},useTransition:function(){var i=g0(!1),s=i[0];return i=MS.bind(null,i[1]),$i().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var f=on,m=$i();if(rn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),bn===null)throw Error(t(349));(Ms&30)!==0||f0(f,s,l)}m.memoizedState=l;var _={value:l,getSnapshot:s};return m.queue=_,_0(h0.bind(null,f,_,i),[i]),f.flags|=2048,xa(9,d0.bind(null,f,_,l,s),void 0,null),l},useId:function(){var i=$i(),s=bn.identifierPrefix;if(rn){var l=vr,f=gr;l=(f&~(1<<32-ke(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=va++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=SS++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},AS={readContext:yi,useCallback:E0,useContext:yi,useEffect:Mf,useImperativeHandle:M0,useInsertionEffect:x0,useLayoutEffect:y0,useMemo:T0,useReducer:yf,useRef:v0,useState:function(){return yf(_a)},useDebugValue:Ef,useDeferredValue:function(i){var s=Si();return w0(s,Mn.memoizedState,i)},useTransition:function(){var i=yf(_a)[0],s=Si().memoizedState;return[i,s]},useMutableSource:c0,useSyncExternalStore:u0,useId:A0,unstable_isNewReconciler:!1},RS={readContext:yi,useCallback:E0,useContext:yi,useEffect:Mf,useImperativeHandle:M0,useInsertionEffect:x0,useLayoutEffect:y0,useMemo:T0,useReducer:Sf,useRef:v0,useState:function(){return Sf(_a)},useDebugValue:Ef,useDeferredValue:function(i){var s=Si();return Mn===null?s.memoizedState=i:w0(s,Mn.memoizedState,i)},useTransition:function(){var i=Sf(_a)[0],s=Si().memoizedState;return[i,s]},useMutableSource:c0,useSyncExternalStore:u0,useId:A0,unstable_isNewReconciler:!1};function Fi(i,s){if(i&&i.defaultProps){s=X({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Tf(i,s,l,f){s=i.memoizedState,l=l(f,s),l=l==null?s:X({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Hl={isMounted:function(i){return(i=i._reactInternals)?Rn(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var f=Zn(),m=Qr(i),_=xr(f,m);_.payload=s,l!=null&&(_.callback=l),s=qr(i,_,m),s!==null&&(ki(s,i,m,f),Il(s,i,m))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var f=Zn(),m=Qr(i),_=xr(f,m);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=qr(i,_,m),s!==null&&(ki(s,i,m,f),Il(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Zn(),f=Qr(i),m=xr(l,f);m.tag=2,s!=null&&(m.callback=s),s=qr(i,m,f),s!==null&&(ki(s,i,f,l),Il(s,i,f))}};function P0(i,s,l,f,m,_,R){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,R):s.prototype&&s.prototype.isPureReactComponent?!sa(l,f)||!sa(m,_):!0}function D0(i,s,l){var f=!1,m=Xr,_=s.contextType;return typeof _=="object"&&_!==null?_=yi(_):(m=ni(s)?vs:kn.current,f=s.contextTypes,_=(f=f!=null)?to(i,m):Xr),s=new s(l,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Hl,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=_),s}function L0(i,s,l,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==i&&Hl.enqueueReplaceState(s,s.state,null)}function wf(i,s,l,f){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs={},ff(i);var _=s.contextType;typeof _=="object"&&_!==null?m.context=yi(_):(_=ni(s)?vs:kn.current,m.context=to(i,_)),m.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Tf(i,s,_,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Hl.enqueueReplaceState(m,m.state,null),Ul(i,l,m,f),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function co(i,s){try{var l="",f=s;do l+=Be(f),f=f.return;while(f);var m=l}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:m,digest:null}}function Af(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Rf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var CS=typeof WeakMap=="function"?WeakMap:Map;function N0(i,s,l){l=xr(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){Kl||(Kl=!0,Hf=f),Rf(i,s)},l}function I0(i,s,l){l=xr(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;l.payload=function(){return f(m)},l.callback=function(){Rf(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Rf(i,s),typeof f!="function"&&($r===null?$r=new Set([this]):$r.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})}),l}function U0(i,s,l){var f=i.pingCache;if(f===null){f=i.pingCache=new CS;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(l)||(m.add(l),i=HS.bind(null,i,s,l),s.then(i,i))}function F0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function O0(i,s,l,f,m){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=xr(-1,1),s.tag=2,qr(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var bS=b.ReactCurrentOwner,ii=!1;function $n(i,s,l,f){s.child=i===null?i0(s,null,l,f):so(s,i.child,l,f)}function B0(i,s,l,f,m){l=l.render;var _=s.ref;return ao(s,m),f=_f(i,s,l,f,_,m),l=xf(),i!==null&&!ii?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,yr(i,s,m)):(rn&&l&&ef(s),s.flags|=1,$n(i,s,f,m),s.child)}function k0(i,s,l,f,m){if(i===null){var _=l.type;return typeof _=="function"&&!Kf(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,z0(i,s,_,f,m)):(i=tc(l.type,null,f,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&m)===0){var R=_.memoizedProps;if(l=l.compare,l=l!==null?l:sa,l(R,f)&&i.ref===s.ref)return yr(i,s,m)}return s.flags|=1,i=es(_,f),i.ref=s.ref,i.return=s,s.child=i}function z0(i,s,l,f,m){if(i!==null){var _=i.memoizedProps;if(sa(_,f)&&i.ref===s.ref)if(ii=!1,s.pendingProps=f=_,(i.lanes&m)!==0)(i.flags&131072)!==0&&(ii=!0);else return s.lanes=i.lanes,yr(i,s,m)}return Cf(i,s,l,f,m)}function V0(i,s,l){var f=s.pendingProps,m=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Zt(fo,di),di|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Zt(fo,di),di|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:l,Zt(fo,di),di|=f}else _!==null?(f=_.baseLanes|l,s.memoizedState=null):f=l,Zt(fo,di),di|=f;return $n(i,s,m,l),s.child}function H0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Cf(i,s,l,f,m){var _=ni(l)?vs:kn.current;return _=to(s,_),ao(s,m),l=_f(i,s,l,f,_,m),f=xf(),i!==null&&!ii?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,yr(i,s,m)):(rn&&f&&ef(s),s.flags|=1,$n(i,s,l,m),s.child)}function G0(i,s,l,f,m){if(ni(l)){var _=!0;Al(s)}else _=!1;if(ao(s,m),s.stateNode===null)Wl(i,s),D0(s,l,f),wf(s,l,f,m),f=!0;else if(i===null){var R=s.stateNode,O=s.memoizedProps;R.props=O;var V=R.context,de=l.contextType;typeof de=="object"&&de!==null?de=yi(de):(de=ni(l)?vs:kn.current,de=to(s,de));var Te=l.getDerivedStateFromProps,Ae=typeof Te=="function"||typeof R.getSnapshotBeforeUpdate=="function";Ae||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(O!==f||V!==de)&&L0(s,R,f,de),Yr=!1;var Me=s.memoizedState;R.state=Me,Ul(s,f,R,m),V=s.memoizedState,O!==f||Me!==V||ti.current||Yr?(typeof Te=="function"&&(Tf(s,l,Te,f),V=s.memoizedState),(O=Yr||P0(s,l,O,f,Me,V,de))?(Ae||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(s.flags|=4194308)):(typeof R.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=V),R.props=f,R.state=V,R.context=de,f=O):(typeof R.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{R=s.stateNode,s0(i,s),O=s.memoizedProps,de=s.type===s.elementType?O:Fi(s.type,O),R.props=de,Ae=s.pendingProps,Me=R.context,V=l.contextType,typeof V=="object"&&V!==null?V=yi(V):(V=ni(l)?vs:kn.current,V=to(s,V));var je=l.getDerivedStateFromProps;(Te=typeof je=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(O!==Ae||Me!==V)&&L0(s,R,f,V),Yr=!1,Me=s.memoizedState,R.state=Me,Ul(s,f,R,m);var Je=s.memoizedState;O!==Ae||Me!==Je||ti.current||Yr?(typeof je=="function"&&(Tf(s,l,je,f),Je=s.memoizedState),(de=Yr||P0(s,l,de,f,Me,Je,V)||!1)?(Te||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(f,Je,V),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(f,Je,V)),typeof R.componentDidUpdate=="function"&&(s.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof R.componentDidUpdate!="function"||O===i.memoizedProps&&Me===i.memoizedState||(s.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&Me===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=Je),R.props=f,R.state=Je,R.context=V,f=de):(typeof R.componentDidUpdate!="function"||O===i.memoizedProps&&Me===i.memoizedState||(s.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&Me===i.memoizedState||(s.flags|=1024),f=!1)}return bf(i,s,l,f,_,m)}function bf(i,s,l,f,m,_){H0(i,s);var R=(s.flags&128)!==0;if(!f&&!R)return m&&qm(s,l,!1),yr(i,s,_);f=s.stateNode,bS.current=s;var O=R&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&R?(s.child=so(s,i.child,null,_),s.child=so(s,null,O,_)):$n(i,s,O,_),s.memoizedState=f.state,m&&qm(s,l,!0),s.child}function W0(i){var s=i.stateNode;s.pendingContext?jm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&jm(i,s.context,!1),df(i,s.containerInfo)}function X0(i,s,l,f,m){return ro(),sf(m),s.flags|=256,$n(i,s,l,f),s.child}var Pf={dehydrated:null,treeContext:null,retryLane:0};function Df(i){return{baseLanes:i,cachePool:null,transitions:null}}function j0(i,s,l){var f=s.pendingProps,m=sn.current,_=!1,R=(s.flags&128)!==0,O;if((O=R)||(O=i!==null&&i.memoizedState===null?!1:(m&2)!==0),O?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),Zt(sn,m&1),i===null)return rf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(R=f.children,i=f.fallback,_?(f=s.mode,_=s.child,R={mode:"hidden",children:R},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=R):_=nc(R,f,0,null),i=Rs(i,f,l,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=Df(l),s.memoizedState=Pf,i):Lf(s,R));if(m=i.memoizedState,m!==null&&(O=m.dehydrated,O!==null))return PS(i,s,R,f,O,m,l);if(_){_=f.fallback,R=s.mode,m=i.child,O=m.sibling;var V={mode:"hidden",children:f.children};return(R&1)===0&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=V,s.deletions=null):(f=es(m,V),f.subtreeFlags=m.subtreeFlags&14680064),O!==null?_=es(O,_):(_=Rs(_,R,l,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,R=i.child.memoizedState,R=R===null?Df(l):{baseLanes:R.baseLanes|l,cachePool:null,transitions:R.transitions},_.memoizedState=R,_.childLanes=i.childLanes&~l,s.memoizedState=Pf,f}return _=i.child,i=_.sibling,f=es(_,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=f,s.memoizedState=null,f}function Lf(i,s){return s=nc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Gl(i,s,l,f){return f!==null&&sf(f),so(s,i.child,null,l),i=Lf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function PS(i,s,l,f,m,_,R){if(l)return s.flags&256?(s.flags&=-257,f=Af(Error(t(422))),Gl(i,s,R,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=f.fallback,m=s.mode,f=nc({mode:"visible",children:f.children},m,0,null),_=Rs(_,m,R,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,(s.mode&1)!==0&&so(s,i.child,null,R),s.child.memoizedState=Df(R),s.memoizedState=Pf,_);if((s.mode&1)===0)return Gl(i,s,R,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var O=f.dgst;return f=O,_=Error(t(419)),f=Af(_,f,void 0),Gl(i,s,R,f)}if(O=(R&i.childLanes)!==0,ii||O){if(f=bn,f!==null){switch(R&-R){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|R))!==0?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,_r(i,m),ki(f,i,m,-1))}return qf(),f=Af(Error(t(421))),Gl(i,s,R,f)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=GS.bind(null,i),m._reactRetry=s,null):(i=_.treeContext,fi=Gr(m.nextSibling),ui=s,rn=!0,Ui=null,i!==null&&(_i[xi++]=gr,_i[xi++]=vr,_i[xi++]=_s,gr=i.id,vr=i.overflow,_s=s),s=Lf(s,f.children),s.flags|=4096,s)}function Y0(i,s,l){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),cf(i.return,s,l)}function Nf(i,s,l,f,m){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=l,_.tailMode=m)}function q0(i,s,l){var f=s.pendingProps,m=f.revealOrder,_=f.tail;if($n(i,s,f.children,l),f=sn.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Y0(i,l,s);else if(i.tag===19)Y0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Zt(sn,f),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)i=l.alternate,i!==null&&Fl(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),Nf(s,!1,m,l,_);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&Fl(i)===null){s.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}Nf(s,!0,l,null,_);break;case"together":Nf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Wl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function yr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Es|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=es(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=es(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function DS(i,s,l){switch(s.tag){case 3:W0(s),ro();break;case 5:l0(s);break;case 1:ni(s.type)&&Al(s);break;case 4:df(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;Zt(Ll,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Zt(sn,sn.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?j0(i,s,l):(Zt(sn,sn.current&1),i=yr(i,s,l),i!==null?i.sibling:null);Zt(sn,sn.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(i.flags&128)!==0){if(f)return q0(i,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Zt(sn,sn.current),f)break;return null;case 22:case 23:return s.lanes=0,V0(i,s,l)}return yr(i,s,l)}var K0,If,$0,Z0;K0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},If=function(){},$0=function(i,s,l,f){var m=i.memoizedProps;if(m!==f){i=s.stateNode,Ss(Ki.current);var _=null;switch(l){case"input":m=xt(i,m),f=xt(i,f),_=[];break;case"select":m=X({},m,{value:void 0}),f=X({},f,{value:void 0}),_=[];break;case"textarea":m=Nt(i,m),f=Nt(i,f),_=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=El)}et(l,f);var R;l=null;for(de in m)if(!f.hasOwnProperty(de)&&m.hasOwnProperty(de)&&m[de]!=null)if(de==="style"){var O=m[de];for(R in O)O.hasOwnProperty(R)&&(l||(l={}),l[R]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(o.hasOwnProperty(de)?_||(_=[]):(_=_||[]).push(de,null));for(de in f){var V=f[de];if(O=m!=null?m[de]:void 0,f.hasOwnProperty(de)&&V!==O&&(V!=null||O!=null))if(de==="style")if(O){for(R in O)!O.hasOwnProperty(R)||V&&V.hasOwnProperty(R)||(l||(l={}),l[R]="");for(R in V)V.hasOwnProperty(R)&&O[R]!==V[R]&&(l||(l={}),l[R]=V[R])}else l||(_||(_=[]),_.push(de,l)),l=V;else de==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,O=O?O.__html:void 0,V!=null&&O!==V&&(_=_||[]).push(de,V)):de==="children"?typeof V!="string"&&typeof V!="number"||(_=_||[]).push(de,""+V):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(o.hasOwnProperty(de)?(V!=null&&de==="onScroll"&&Jt("scroll",i),_||O===V||(_=[])):(_=_||[]).push(de,V))}l&&(_=_||[]).push("style",l);var de=_;(s.updateQueue=de)&&(s.flags|=4)}},Z0=function(i,s,l,f){l!==f&&(s.flags|=4)};function ya(i,s){if(!rn)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function Vn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(s)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=f,i.childLanes=l,s}function LS(i,s,l){var f=s.pendingProps;switch(tf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(s),null;case 1:return ni(s.type)&&wl(),Vn(s),null;case 3:return f=s.stateNode,lo(),en(ti),en(kn),mf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Pl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ui!==null&&(Xf(Ui),Ui=null))),If(i,s),Vn(s),null;case 5:hf(s);var m=Ss(ma.current);if(l=s.type,i!==null&&s.stateNode!=null)$0(i,s,l,f,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Vn(s),null}if(i=Ss(Ki.current),Pl(s)){f=s.stateNode,l=s.type;var _=s.memoizedProps;switch(f[qi]=s,f[ua]=_,i=(s.mode&1)!==0,l){case"dialog":Jt("cancel",f),Jt("close",f);break;case"iframe":case"object":case"embed":Jt("load",f);break;case"video":case"audio":for(m=0;m<aa.length;m++)Jt(aa[m],f);break;case"source":Jt("error",f);break;case"img":case"image":case"link":Jt("error",f),Jt("load",f);break;case"details":Jt("toggle",f);break;case"input":At(f,_),Jt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Jt("invalid",f);break;case"textarea":z(f,_),Jt("invalid",f)}et(l,_),m=null;for(var R in _)if(_.hasOwnProperty(R)){var O=_[R];R==="children"?typeof O=="string"?f.textContent!==O&&(_.suppressHydrationWarning!==!0&&Ml(f.textContent,O,i),m=["children",O]):typeof O=="number"&&f.textContent!==""+O&&(_.suppressHydrationWarning!==!0&&Ml(f.textContent,O,i),m=["children",""+O]):o.hasOwnProperty(R)&&O!=null&&R==="onScroll"&&Jt("scroll",f)}switch(l){case"input":Pe(f),pt(f,_,!0);break;case"textarea":Pe(f),ct(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=El)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{R=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=N(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=R.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=R.createElement(l,{is:f.is}):(i=R.createElement(l),l==="select"&&(R=i,f.multiple?R.multiple=!0:f.size&&(R.size=f.size))):i=R.createElementNS(i,l),i[qi]=s,i[ua]=f,K0(i,s,!1,!1),s.stateNode=i;e:{switch(R=Oe(l,f),l){case"dialog":Jt("cancel",i),Jt("close",i),m=f;break;case"iframe":case"object":case"embed":Jt("load",i),m=f;break;case"video":case"audio":for(m=0;m<aa.length;m++)Jt(aa[m],i);m=f;break;case"source":Jt("error",i),m=f;break;case"img":case"image":case"link":Jt("error",i),Jt("load",i),m=f;break;case"details":Jt("toggle",i),m=f;break;case"input":At(i,f),m=xt(i,f),Jt("invalid",i);break;case"option":m=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},m=X({},f,{value:void 0}),Jt("invalid",i);break;case"textarea":z(i,f),m=Nt(i,f),Jt("invalid",i);break;default:m=f}et(l,m),O=m;for(_ in O)if(O.hasOwnProperty(_)){var V=O[_];_==="style"?_e(i,V):_==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&se(i,V)):_==="children"?typeof V=="string"?(l!=="textarea"||V!=="")&&pe(i,V):typeof V=="number"&&pe(i,""+V):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?V!=null&&_==="onScroll"&&Jt("scroll",i):V!=null&&I(i,_,V,R))}switch(l){case"input":Pe(i),pt(i,f,!1);break;case"textarea":Pe(i),ct(i);break;case"option":f.value!=null&&i.setAttribute("value",""+ue(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?Ct(i,!!f.multiple,_,!1):f.defaultValue!=null&&Ct(i,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=El)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Vn(s),null;case 6:if(i&&s.stateNode!=null)Z0(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=Ss(ma.current),Ss(Ki.current),Pl(s)){if(f=s.stateNode,l=s.memoizedProps,f[qi]=s,(_=f.nodeValue!==l)&&(i=ui,i!==null))switch(i.tag){case 3:Ml(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ml(f.nodeValue,l,(i.mode&1)!==0)}_&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[qi]=s,s.stateNode=f}return Vn(s),null;case 13:if(en(sn),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(rn&&fi!==null&&(s.mode&1)!==0&&(s.flags&128)===0)e0(),ro(),s.flags|=98560,_=!1;else if(_=Pl(s),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[qi]=s}else ro(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Vn(s),_=!1}else Ui!==null&&(Xf(Ui),Ui=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(sn.current&1)!==0?En===0&&(En=3):qf())),s.updateQueue!==null&&(s.flags|=4),Vn(s),null);case 4:return lo(),If(i,s),i===null&&la(s.stateNode.containerInfo),Vn(s),null;case 10:return lf(s.type._context),Vn(s),null;case 17:return ni(s.type)&&wl(),Vn(s),null;case 19:if(en(sn),_=s.memoizedState,_===null)return Vn(s),null;if(f=(s.flags&128)!==0,R=_.rendering,R===null)if(f)ya(_,!1);else{if(En!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(R=Fl(i),R!==null){for(s.flags|=128,ya(_,!1),f=R.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)_=l,i=f,_.flags&=14680066,R=_.alternate,R===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=R.childLanes,_.lanes=R.lanes,_.child=R.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=R.memoizedProps,_.memoizedState=R.memoizedState,_.updateQueue=R.updateQueue,_.type=R.type,i=R.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Zt(sn,sn.current&1|2),s.child}i=i.sibling}_.tail!==null&&ut()>ho&&(s.flags|=128,f=!0,ya(_,!1),s.lanes=4194304)}else{if(!f)if(i=Fl(R),i!==null){if(s.flags|=128,f=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),ya(_,!0),_.tail===null&&_.tailMode==="hidden"&&!R.alternate&&!rn)return Vn(s),null}else 2*ut()-_.renderingStartTime>ho&&l!==1073741824&&(s.flags|=128,f=!0,ya(_,!1),s.lanes=4194304);_.isBackwards?(R.sibling=s.child,s.child=R):(l=_.last,l!==null?l.sibling=R:s.child=R,_.last=R)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=ut(),s.sibling=null,l=sn.current,Zt(sn,f?l&1|2:l&1),s):(Vn(s),null);case 22:case 23:return Yf(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(di&1073741824)!==0&&(Vn(s),s.subtreeFlags&6&&(s.flags|=8192)):Vn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function NS(i,s){switch(tf(s),s.tag){case 1:return ni(s.type)&&wl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return lo(),en(ti),en(kn),mf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return hf(s),null;case 13:if(en(sn),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ro()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return en(sn),null;case 4:return lo(),null;case 10:return lf(s.type._context),null;case 22:case 23:return Yf(),null;case 24:return null;default:return null}}var Xl=!1,Hn=!1,IS=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function uo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){fn(i,s,f)}else l.current=null}function Uf(i,s,l){try{l()}catch(f){fn(i,s,f)}}var Q0=!1;function US(i,s){if(ju=fl,i=Pm(),Bu(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var R=0,O=-1,V=-1,de=0,Te=0,Ae=i,Me=null;t:for(;;){for(var je;Ae!==l||m!==0&&Ae.nodeType!==3||(O=R+m),Ae!==_||f!==0&&Ae.nodeType!==3||(V=R+f),Ae.nodeType===3&&(R+=Ae.nodeValue.length),(je=Ae.firstChild)!==null;)Me=Ae,Ae=je;for(;;){if(Ae===i)break t;if(Me===l&&++de===m&&(O=R),Me===_&&++Te===f&&(V=R),(je=Ae.nextSibling)!==null)break;Ae=Me,Me=Ae.parentNode}Ae=je}l=O===-1||V===-1?null:{start:O,end:V}}else l=null}l=l||{start:0,end:0}}else l=null;for(Yu={focusedElem:i,selectionRange:l},fl=!1,Ke=s;Ke!==null;)if(s=Ke,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Ke=i;else for(;Ke!==null;){s=Ke;try{var Je=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var it=Je.memoizedProps,gn=Je.memoizedState,re=s.stateNode,j=re.getSnapshotBeforeUpdate(s.elementType===s.type?it:Fi(s.type,it),gn);re.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var le=s.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){fn(s,s.return,be)}if(i=s.sibling,i!==null){i.return=s.return,Ke=i;break}Ke=s.return}return Je=Q0,Q0=!1,Je}function Sa(i,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&i)===i){var _=m.destroy;m.destroy=void 0,_!==void 0&&Uf(s,l,_)}m=m.next}while(m!==f)}}function jl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function Ff(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function J0(i){var s=i.alternate;s!==null&&(i.alternate=null,J0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[qi],delete s[ua],delete s[Zu],delete s[vS],delete s[_S])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function eg(i){return i.tag===5||i.tag===3||i.tag===4}function tg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||eg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Of(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=El));else if(f!==4&&(i=i.child,i!==null))for(Of(i,s,l),i=i.sibling;i!==null;)Of(i,s,l),i=i.sibling}function Bf(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Bf(i,s,l),i=i.sibling;i!==null;)Bf(i,s,l),i=i.sibling}var Nn=null,Oi=!1;function Kr(i,s,l){for(l=l.child;l!==null;)ng(i,s,l),l=l.sibling}function ng(i,s,l){if(te&&typeof te.onCommitFiberUnmount=="function")try{te.onCommitFiberUnmount(ie,l)}catch{}switch(l.tag){case 5:Hn||uo(l,s);case 6:var f=Nn,m=Oi;Nn=null,Kr(i,s,l),Nn=f,Oi=m,Nn!==null&&(Oi?(i=Nn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Nn.removeChild(l.stateNode));break;case 18:Nn!==null&&(Oi?(i=Nn,l=l.stateNode,i.nodeType===8?$u(i.parentNode,l):i.nodeType===1&&$u(i,l),Jo(i)):$u(Nn,l.stateNode));break;case 4:f=Nn,m=Oi,Nn=l.stateNode.containerInfo,Oi=!0,Kr(i,s,l),Nn=f,Oi=m;break;case 0:case 11:case 14:case 15:if(!Hn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var _=m,R=_.destroy;_=_.tag,R!==void 0&&((_&2)!==0||(_&4)!==0)&&Uf(l,s,R),m=m.next}while(m!==f)}Kr(i,s,l);break;case 1:if(!Hn&&(uo(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(O){fn(l,s,O)}Kr(i,s,l);break;case 21:Kr(i,s,l);break;case 22:l.mode&1?(Hn=(f=Hn)||l.memoizedState!==null,Kr(i,s,l),Hn=f):Kr(i,s,l);break;default:Kr(i,s,l)}}function ig(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new IS),s.forEach(function(f){var m=WS.bind(null,i,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Bi(i,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var _=i,R=s,O=R;e:for(;O!==null;){switch(O.tag){case 5:Nn=O.stateNode,Oi=!1;break e;case 3:Nn=O.stateNode.containerInfo,Oi=!0;break e;case 4:Nn=O.stateNode.containerInfo,Oi=!0;break e}O=O.return}if(Nn===null)throw Error(t(160));ng(_,R,m),Nn=null,Oi=!1;var V=m.alternate;V!==null&&(V.return=null),m.return=null}catch(de){fn(m,s,de)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)rg(s,i),s=s.sibling}function rg(i,s){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Bi(s,i),Zi(i),f&4){try{Sa(3,i,i.return),jl(3,i)}catch(it){fn(i,i.return,it)}try{Sa(5,i,i.return)}catch(it){fn(i,i.return,it)}}break;case 1:Bi(s,i),Zi(i),f&512&&l!==null&&uo(l,l.return);break;case 5:if(Bi(s,i),Zi(i),f&512&&l!==null&&uo(l,l.return),i.flags&32){var m=i.stateNode;try{pe(m,"")}catch(it){fn(i,i.return,it)}}if(f&4&&(m=i.stateNode,m!=null)){var _=i.memoizedProps,R=l!==null?l.memoizedProps:_,O=i.type,V=i.updateQueue;if(i.updateQueue=null,V!==null)try{O==="input"&&_.type==="radio"&&_.name!=null&&Rt(m,_),Oe(O,R);var de=Oe(O,_);for(R=0;R<V.length;R+=2){var Te=V[R],Ae=V[R+1];Te==="style"?_e(m,Ae):Te==="dangerouslySetInnerHTML"?se(m,Ae):Te==="children"?pe(m,Ae):I(m,Te,Ae,de)}switch(O){case"input":Se(m,_);break;case"textarea":Yt(m,_);break;case"select":var Me=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var je=_.value;je!=null?Ct(m,!!_.multiple,je,!1):Me!==!!_.multiple&&(_.defaultValue!=null?Ct(m,!!_.multiple,_.defaultValue,!0):Ct(m,!!_.multiple,_.multiple?[]:"",!1))}m[ua]=_}catch(it){fn(i,i.return,it)}}break;case 6:if(Bi(s,i),Zi(i),f&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,_=i.memoizedProps;try{m.nodeValue=_}catch(it){fn(i,i.return,it)}}break;case 3:if(Bi(s,i),Zi(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Jo(s.containerInfo)}catch(it){fn(i,i.return,it)}break;case 4:Bi(s,i),Zi(i);break;case 13:Bi(s,i),Zi(i),m=i.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(Vf=ut())),f&4&&ig(i);break;case 22:if(Te=l!==null&&l.memoizedState!==null,i.mode&1?(Hn=(de=Hn)||Te,Bi(s,i),Hn=de):Bi(s,i),Zi(i),f&8192){if(de=i.memoizedState!==null,(i.stateNode.isHidden=de)&&!Te&&(i.mode&1)!==0)for(Ke=i,Te=i.child;Te!==null;){for(Ae=Ke=Te;Ke!==null;){switch(Me=Ke,je=Me.child,Me.tag){case 0:case 11:case 14:case 15:Sa(4,Me,Me.return);break;case 1:uo(Me,Me.return);var Je=Me.stateNode;if(typeof Je.componentWillUnmount=="function"){f=Me,l=Me.return;try{s=f,Je.props=s.memoizedProps,Je.state=s.memoizedState,Je.componentWillUnmount()}catch(it){fn(f,l,it)}}break;case 5:uo(Me,Me.return);break;case 22:if(Me.memoizedState!==null){ag(Ae);continue}}je!==null?(je.return=Me,Ke=je):ag(Ae)}Te=Te.sibling}e:for(Te=null,Ae=i;;){if(Ae.tag===5){if(Te===null){Te=Ae;try{m=Ae.stateNode,de?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(O=Ae.stateNode,V=Ae.memoizedProps.style,R=V!=null&&V.hasOwnProperty("display")?V.display:null,O.style.display=me("display",R))}catch(it){fn(i,i.return,it)}}}else if(Ae.tag===6){if(Te===null)try{Ae.stateNode.nodeValue=de?"":Ae.memoizedProps}catch(it){fn(i,i.return,it)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===i)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===i)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===i)break e;Te===Ae&&(Te=null),Ae=Ae.return}Te===Ae&&(Te=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:Bi(s,i),Zi(i),f&4&&ig(i);break;case 21:break;default:Bi(s,i),Zi(i)}}function Zi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(eg(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(pe(m,""),f.flags&=-33);var _=tg(i);Bf(i,_,m);break;case 3:case 4:var R=f.stateNode.containerInfo,O=tg(i);Of(i,O,R);break;default:throw Error(t(161))}}catch(V){fn(i,i.return,V)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function FS(i,s,l){Ke=i,sg(i)}function sg(i,s,l){for(var f=(i.mode&1)!==0;Ke!==null;){var m=Ke,_=m.child;if(m.tag===22&&f){var R=m.memoizedState!==null||Xl;if(!R){var O=m.alternate,V=O!==null&&O.memoizedState!==null||Hn;O=Xl;var de=Hn;if(Xl=R,(Hn=V)&&!de)for(Ke=m;Ke!==null;)R=Ke,V=R.child,R.tag===22&&R.memoizedState!==null?lg(m):V!==null?(V.return=R,Ke=V):lg(m);for(;_!==null;)Ke=_,sg(_),_=_.sibling;Ke=m,Xl=O,Hn=de}og(i)}else(m.subtreeFlags&8772)!==0&&_!==null?(_.return=m,Ke=_):og(i)}}function og(i){for(;Ke!==null;){var s=Ke;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Hn||jl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!Hn)if(l===null)f.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:Fi(s.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&a0(s,_,f);break;case 3:var R=s.updateQueue;if(R!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}a0(s,R,l)}break;case 5:var O=s.stateNode;if(l===null&&s.flags&4){l=O;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&l.focus();break;case"img":V.src&&(l.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var de=s.alternate;if(de!==null){var Te=de.memoizedState;if(Te!==null){var Ae=Te.dehydrated;Ae!==null&&Jo(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Hn||s.flags&512&&Ff(s)}catch(Me){fn(s,s.return,Me)}}if(s===i){Ke=null;break}if(l=s.sibling,l!==null){l.return=s.return,Ke=l;break}Ke=s.return}}function ag(i){for(;Ke!==null;){var s=Ke;if(s===i){Ke=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Ke=l;break}Ke=s.return}}function lg(i){for(;Ke!==null;){var s=Ke;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{jl(4,s)}catch(V){fn(s,l,V)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(V){fn(s,m,V)}}var _=s.return;try{Ff(s)}catch(V){fn(s,_,V)}break;case 5:var R=s.return;try{Ff(s)}catch(V){fn(s,R,V)}}}catch(V){fn(s,s.return,V)}if(s===i){Ke=null;break}var O=s.sibling;if(O!==null){O.return=s.return,Ke=O;break}Ke=s.return}}var OS=Math.ceil,Yl=b.ReactCurrentDispatcher,kf=b.ReactCurrentOwner,Mi=b.ReactCurrentBatchConfig,Vt=0,bn=null,_n=null,In=0,di=0,fo=Wr(0),En=0,Ma=null,Es=0,ql=0,zf=0,Ea=null,ri=null,Vf=0,ho=1/0,Sr=null,Kl=!1,Hf=null,$r=null,$l=!1,Zr=null,Zl=0,Ta=0,Gf=null,Ql=-1,Jl=0;function Zn(){return(Vt&6)!==0?ut():Ql!==-1?Ql:Ql=ut()}function Qr(i){return(i.mode&1)===0?1:(Vt&2)!==0&&In!==0?In&-In:yS.transition!==null?(Jl===0&&(Jl=Sn()),Jl):(i=bt,i!==0||(i=window.event,i=i===void 0?16:um(i.type)),i)}function ki(i,s,l,f){if(50<Ta)throw Ta=0,Gf=null,Error(t(185));mn(i,l,f),((Vt&2)===0||i!==bn)&&(i===bn&&((Vt&2)===0&&(ql|=l),En===4&&Jr(i,In)),si(i,f),l===1&&Vt===0&&(s.mode&1)===0&&(ho=ut()+500,Rl&&jr()))}function si(i,s){var l=i.callbackNode;$t(i,s);var f=Ft(i,i===bn?In:0);if(f===0)l!==null&&Fe(l),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(l!=null&&Fe(l),s===1)i.tag===0?xS(ug.bind(null,i)):Km(ug.bind(null,i)),mS(function(){(Vt&6)===0&&jr()}),l=null;else{switch(Pi(f)){case 1:l=Qt;break;case 4:l=On;break;case 16:l=C;break;case 536870912:l=fe;break;default:l=C}l=_g(l,cg.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function cg(i,s){if(Ql=-1,Jl=0,(Vt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(po()&&i.callbackNode!==l)return null;var f=Ft(i,i===bn?In:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=ec(i,f);else{s=f;var m=Vt;Vt|=2;var _=dg();(bn!==i||In!==s)&&(Sr=null,ho=ut()+500,ws(i,s));do try{zS();break}catch(O){fg(i,O)}while(!0);af(),Yl.current=_,Vt=m,_n!==null?s=0:(bn=null,In=0,s=En)}if(s!==0){if(s===2&&(m=Xt(i),m!==0&&(f=m,s=Wf(i,m))),s===1)throw l=Ma,ws(i,0),Jr(i,f),si(i,ut()),l;if(s===6)Jr(i,f);else{if(m=i.current.alternate,(f&30)===0&&!BS(m)&&(s=ec(i,f),s===2&&(_=Xt(i),_!==0&&(f=_,s=Wf(i,_))),s===1))throw l=Ma,ws(i,0),Jr(i,f),si(i,ut()),l;switch(i.finishedWork=m,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:As(i,ri,Sr);break;case 3:if(Jr(i,f),(f&130023424)===f&&(s=Vf+500-ut(),10<s)){if(Ft(i,0)!==0)break;if(m=i.suspendedLanes,(m&f)!==f){Zn(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=Ku(As.bind(null,i,ri,Sr),s);break}As(i,ri,Sr);break;case 4:if(Jr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,m=-1;0<f;){var R=31-ke(f);_=1<<R,R=s[R],R>m&&(m=R),f&=~_}if(f=m,f=ut()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*OS(f/1960))-f,10<f){i.timeoutHandle=Ku(As.bind(null,i,ri,Sr),f);break}As(i,ri,Sr);break;case 5:As(i,ri,Sr);break;default:throw Error(t(329))}}}return si(i,ut()),i.callbackNode===l?cg.bind(null,i):null}function Wf(i,s){var l=Ea;return i.current.memoizedState.isDehydrated&&(ws(i,s).flags|=256),i=ec(i,s),i!==2&&(s=ri,ri=l,s!==null&&Xf(s)),i}function Xf(i){ri===null?ri=i:ri.push.apply(ri,i)}function BS(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],_=m.getSnapshot;m=m.value;try{if(!Ii(_(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Jr(i,s){for(s&=~zf,s&=~ql,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-ke(s),f=1<<l;i[l]=-1,s&=~f}}function ug(i){if((Vt&6)!==0)throw Error(t(327));po();var s=Ft(i,0);if((s&1)===0)return si(i,ut()),null;var l=ec(i,s);if(i.tag!==0&&l===2){var f=Xt(i);f!==0&&(s=f,l=Wf(i,f))}if(l===1)throw l=Ma,ws(i,0),Jr(i,s),si(i,ut()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,As(i,ri,Sr),si(i,ut()),null}function jf(i,s){var l=Vt;Vt|=1;try{return i(s)}finally{Vt=l,Vt===0&&(ho=ut()+500,Rl&&jr())}}function Ts(i){Zr!==null&&Zr.tag===0&&(Vt&6)===0&&po();var s=Vt;Vt|=1;var l=Mi.transition,f=bt;try{if(Mi.transition=null,bt=1,i)return i()}finally{bt=f,Mi.transition=l,Vt=s,(Vt&6)===0&&jr()}}function Yf(){di=fo.current,en(fo)}function ws(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,pS(l)),_n!==null)for(l=_n.return;l!==null;){var f=l;switch(tf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&wl();break;case 3:lo(),en(ti),en(kn),mf();break;case 5:hf(f);break;case 4:lo();break;case 13:en(sn);break;case 19:en(sn);break;case 10:lf(f.type._context);break;case 22:case 23:Yf()}l=l.return}if(bn=i,_n=i=es(i.current,null),In=di=s,En=0,Ma=null,zf=ql=Es=0,ri=Ea=null,ys!==null){for(s=0;s<ys.length;s++)if(l=ys[s],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,_=l.pending;if(_!==null){var R=_.next;_.next=m,f.next=R}l.pending=f}ys=null}return i}function fg(i,s){do{var l=_n;try{if(af(),Ol.current=Vl,Bl){for(var f=on.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Bl=!1}if(Ms=0,Cn=Mn=on=null,ga=!1,va=0,kf.current=null,l===null||l.return===null){En=1,Ma=s,_n=null;break}e:{var _=i,R=l.return,O=l,V=s;if(s=In,O.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var de=V,Te=O,Ae=Te.tag;if((Te.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var Me=Te.alternate;Me?(Te.updateQueue=Me.updateQueue,Te.memoizedState=Me.memoizedState,Te.lanes=Me.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var je=F0(R);if(je!==null){je.flags&=-257,O0(je,R,O,_,s),je.mode&1&&U0(_,de,s),s=je,V=de;var Je=s.updateQueue;if(Je===null){var it=new Set;it.add(V),s.updateQueue=it}else Je.add(V);break e}else{if((s&1)===0){U0(_,de,s),qf();break e}V=Error(t(426))}}else if(rn&&O.mode&1){var gn=F0(R);if(gn!==null){(gn.flags&65536)===0&&(gn.flags|=256),O0(gn,R,O,_,s),sf(co(V,O));break e}}_=V=co(V,O),En!==4&&(En=2),Ea===null?Ea=[_]:Ea.push(_),_=R;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var re=N0(_,V,s);o0(_,re);break e;case 1:O=V;var j=_.type,le=_.stateNode;if((_.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&($r===null||!$r.has(le)))){_.flags|=65536,s&=-s,_.lanes|=s;var be=I0(_,O,s);o0(_,be);break e}}_=_.return}while(_!==null)}pg(l)}catch(ot){s=ot,_n===l&&l!==null&&(_n=l=l.return);continue}break}while(!0)}function dg(){var i=Yl.current;return Yl.current=Vl,i===null?Vl:i}function qf(){(En===0||En===3||En===2)&&(En=4),bn===null||(Es&268435455)===0&&(ql&268435455)===0||Jr(bn,In)}function ec(i,s){var l=Vt;Vt|=2;var f=dg();(bn!==i||In!==s)&&(Sr=null,ws(i,s));do try{kS();break}catch(m){fg(i,m)}while(!0);if(af(),Vt=l,Yl.current=f,_n!==null)throw Error(t(261));return bn=null,In=0,En}function kS(){for(;_n!==null;)hg(_n)}function zS(){for(;_n!==null&&!ht();)hg(_n)}function hg(i){var s=vg(i.alternate,i,di);i.memoizedProps=i.pendingProps,s===null?pg(i):_n=s,kf.current=null}function pg(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=LS(l,s,di),l!==null){_n=l;return}}else{if(l=NS(l,s),l!==null){l.flags&=32767,_n=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{En=6,_n=null;return}}if(s=s.sibling,s!==null){_n=s;return}_n=s=i}while(s!==null);En===0&&(En=5)}function As(i,s,l){var f=bt,m=Mi.transition;try{Mi.transition=null,bt=1,VS(i,s,l,f)}finally{Mi.transition=m,bt=f}return null}function VS(i,s,l,f){do po();while(Zr!==null);if((Vt&6)!==0)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(Ot(i,_),i===bn&&(_n=bn=null,In=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||$l||($l=!0,_g(C,function(){return po(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=Mi.transition,Mi.transition=null;var R=bt;bt=1;var O=Vt;Vt|=4,kf.current=null,US(i,l),rg(l,i),aS(Yu),fl=!!ju,Yu=ju=null,i.current=l,FS(l),Ut(),Vt=O,bt=R,Mi.transition=_}else i.current=l;if($l&&($l=!1,Zr=i,Zl=m),_=i.pendingLanes,_===0&&($r=null),He(l.stateNode),si(i,ut()),s!==null)for(f=i.onRecoverableError,l=0;l<s.length;l++)m=s[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(Kl)throw Kl=!1,i=Hf,Hf=null,i;return(Zl&1)!==0&&i.tag!==0&&po(),_=i.pendingLanes,(_&1)!==0?i===Gf?Ta++:(Ta=0,Gf=i):Ta=0,jr(),null}function po(){if(Zr!==null){var i=Pi(Zl),s=Mi.transition,l=bt;try{if(Mi.transition=null,bt=16>i?16:i,Zr===null)var f=!1;else{if(i=Zr,Zr=null,Zl=0,(Vt&6)!==0)throw Error(t(331));var m=Vt;for(Vt|=4,Ke=i.current;Ke!==null;){var _=Ke,R=_.child;if((Ke.flags&16)!==0){var O=_.deletions;if(O!==null){for(var V=0;V<O.length;V++){var de=O[V];for(Ke=de;Ke!==null;){var Te=Ke;switch(Te.tag){case 0:case 11:case 15:Sa(8,Te,_)}var Ae=Te.child;if(Ae!==null)Ae.return=Te,Ke=Ae;else for(;Ke!==null;){Te=Ke;var Me=Te.sibling,je=Te.return;if(J0(Te),Te===de){Ke=null;break}if(Me!==null){Me.return=je,Ke=Me;break}Ke=je}}}var Je=_.alternate;if(Je!==null){var it=Je.child;if(it!==null){Je.child=null;do{var gn=it.sibling;it.sibling=null,it=gn}while(it!==null)}}Ke=_}}if((_.subtreeFlags&2064)!==0&&R!==null)R.return=_,Ke=R;else e:for(;Ke!==null;){if(_=Ke,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Sa(9,_,_.return)}var re=_.sibling;if(re!==null){re.return=_.return,Ke=re;break e}Ke=_.return}}var j=i.current;for(Ke=j;Ke!==null;){R=Ke;var le=R.child;if((R.subtreeFlags&2064)!==0&&le!==null)le.return=R,Ke=le;else e:for(R=j;Ke!==null;){if(O=Ke,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:jl(9,O)}}catch(ot){fn(O,O.return,ot)}if(O===R){Ke=null;break e}var be=O.sibling;if(be!==null){be.return=O.return,Ke=be;break e}Ke=O.return}}if(Vt=m,jr(),te&&typeof te.onPostCommitFiberRoot=="function")try{te.onPostCommitFiberRoot(ie,i)}catch{}f=!0}return f}finally{bt=l,Mi.transition=s}}return!1}function mg(i,s,l){s=co(l,s),s=N0(i,s,1),i=qr(i,s,1),s=Zn(),i!==null&&(mn(i,1,s),si(i,s))}function fn(i,s,l){if(i.tag===3)mg(i,i,l);else for(;s!==null;){if(s.tag===3){mg(s,i,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&($r===null||!$r.has(f))){i=co(l,i),i=I0(s,i,1),s=qr(s,i,1),i=Zn(),s!==null&&(mn(s,1,i),si(s,i));break}}s=s.return}}function HS(i,s,l){var f=i.pingCache;f!==null&&f.delete(s),s=Zn(),i.pingedLanes|=i.suspendedLanes&l,bn===i&&(In&l)===l&&(En===4||En===3&&(In&130023424)===In&&500>ut()-Vf?ws(i,0):zf|=l),si(i,s)}function gg(i,s){s===0&&((i.mode&1)===0?s=1:(s=wt,wt<<=1,(wt&130023424)===0&&(wt=4194304)));var l=Zn();i=_r(i,s),i!==null&&(mn(i,s,l),si(i,l))}function GS(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),gg(i,l)}function WS(i,s){var l=0;switch(i.tag){case 13:var f=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),gg(i,l)}var vg;vg=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||ti.current)ii=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return ii=!1,DS(i,s,l);ii=(i.flags&131072)!==0}else ii=!1,rn&&(s.flags&1048576)!==0&&$m(s,bl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Wl(i,s),i=s.pendingProps;var m=to(s,kn.current);ao(s,l),m=_f(null,s,f,i,m,l);var _=xf();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,ni(f)?(_=!0,Al(s)):_=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,ff(s),m.updater=Hl,s.stateNode=m,m._reactInternals=s,wf(s,f,i,l),s=bf(null,s,f,!0,_,l)):(s.tag=0,rn&&_&&ef(s),$n(null,s,m,l),s=s.child),s;case 16:f=s.elementType;e:{switch(Wl(i,s),i=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=jS(f),i=Fi(f,i),m){case 0:s=Cf(null,s,f,i,l);break e;case 1:s=G0(null,s,f,i,l);break e;case 11:s=B0(null,s,f,i,l);break e;case 14:s=k0(null,s,f,Fi(f.type,i),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Fi(f,m),Cf(i,s,f,m,l);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Fi(f,m),G0(i,s,f,m,l);case 3:e:{if(W0(s),i===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,m=_.element,s0(i,s),Ul(s,f,null,l);var R=s.memoizedState;if(f=R.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){m=co(Error(t(423)),s),s=X0(i,s,f,l,m);break e}else if(f!==m){m=co(Error(t(424)),s),s=X0(i,s,f,l,m);break e}else for(fi=Gr(s.stateNode.containerInfo.firstChild),ui=s,rn=!0,Ui=null,l=i0(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ro(),f===m){s=yr(i,s,l);break e}$n(i,s,f,l)}s=s.child}return s;case 5:return l0(s),i===null&&rf(s),f=s.type,m=s.pendingProps,_=i!==null?i.memoizedProps:null,R=m.children,qu(f,m)?R=null:_!==null&&qu(f,_)&&(s.flags|=32),H0(i,s),$n(i,s,R,l),s.child;case 6:return i===null&&rf(s),null;case 13:return j0(i,s,l);case 4:return df(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=so(s,null,f,l):$n(i,s,f,l),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Fi(f,m),B0(i,s,f,m,l);case 7:return $n(i,s,s.pendingProps,l),s.child;case 8:return $n(i,s,s.pendingProps.children,l),s.child;case 12:return $n(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,_=s.memoizedProps,R=m.value,Zt(Ll,f._currentValue),f._currentValue=R,_!==null)if(Ii(_.value,R)){if(_.children===m.children&&!ti.current){s=yr(i,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var O=_.dependencies;if(O!==null){R=_.child;for(var V=O.firstContext;V!==null;){if(V.context===f){if(_.tag===1){V=xr(-1,l&-l),V.tag=2;var de=_.updateQueue;if(de!==null){de=de.shared;var Te=de.pending;Te===null?V.next=V:(V.next=Te.next,Te.next=V),de.pending=V}}_.lanes|=l,V=_.alternate,V!==null&&(V.lanes|=l),cf(_.return,l,s),O.lanes|=l;break}V=V.next}}else if(_.tag===10)R=_.type===s.type?null:_.child;else if(_.tag===18){if(R=_.return,R===null)throw Error(t(341));R.lanes|=l,O=R.alternate,O!==null&&(O.lanes|=l),cf(R,l,s),R=_.sibling}else R=_.child;if(R!==null)R.return=_;else for(R=_;R!==null;){if(R===s){R=null;break}if(_=R.sibling,_!==null){_.return=R.return,R=_;break}R=R.return}_=R}$n(i,s,m.children,l),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,ao(s,l),m=yi(m),f=f(m),s.flags|=1,$n(i,s,f,l),s.child;case 14:return f=s.type,m=Fi(f,s.pendingProps),m=Fi(f.type,m),k0(i,s,f,m,l);case 15:return z0(i,s,s.type,s.pendingProps,l);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Fi(f,m),Wl(i,s),s.tag=1,ni(f)?(i=!0,Al(s)):i=!1,ao(s,l),D0(s,f,m),wf(s,f,m,l),bf(null,s,f,!0,i,l);case 19:return q0(i,s,l);case 22:return V0(i,s,l)}throw Error(t(156,s.tag))};function _g(i,s){return ve(i,s)}function XS(i,s,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(i,s,l,f){return new XS(i,s,l,f)}function Kf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function jS(i){if(typeof i=="function")return Kf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===ee)return 11;if(i===J)return 14}return 2}function es(i,s){var l=i.alternate;return l===null?(l=Ei(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function tc(i,s,l,f,m,_){var R=2;if(f=i,typeof i=="function")Kf(i)&&(R=1);else if(typeof i=="string")R=5;else e:switch(i){case F:return Rs(l.children,m,_,s);case T:R=8,m|=8;break;case w:return i=Ei(12,l,s,m|2),i.elementType=w,i.lanes=_,i;case ne:return i=Ei(13,l,s,m),i.elementType=ne,i.lanes=_,i;case K:return i=Ei(19,l,s,m),i.elementType=K,i.lanes=_,i;case Z:return nc(l,m,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case B:R=10;break e;case Y:R=9;break e;case ee:R=11;break e;case J:R=14;break e;case ge:R=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=Ei(R,l,s,m),s.elementType=i,s.type=f,s.lanes=_,s}function Rs(i,s,l,f){return i=Ei(7,i,f,s),i.lanes=l,i}function nc(i,s,l,f){return i=Ei(22,i,f,s),i.elementType=Z,i.lanes=l,i.stateNode={isHidden:!1},i}function $f(i,s,l){return i=Ei(6,i,null,s),i.lanes=l,i}function Zf(i,s,l){return s=Ei(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function YS(i,s,l,f,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xe(0),this.expirationTimes=Xe(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Qf(i,s,l,f,m,_,R,O,V){return i=new YS(i,s,l,O,V),s===1?(s=1,_===!0&&(s|=8)):s=0,_=Ei(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},ff(_),i}function qS(i,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:f==null?null:""+f,children:i,containerInfo:s,implementation:l}}function xg(i){if(!i)return Xr;i=i._reactInternals;e:{if(Rn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(ni(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(ni(l))return Ym(i,l,s)}return s}function yg(i,s,l,f,m,_,R,O,V){return i=Qf(l,f,!0,i,m,_,R,O,V),i.context=xg(null),l=i.current,f=Zn(),m=Qr(l),_=xr(f,m),_.callback=s??null,qr(l,_,m),i.current.lanes=m,mn(i,m,f),si(i,f),i}function ic(i,s,l,f){var m=s.current,_=Zn(),R=Qr(m);return l=xg(l),s.context===null?s.context=l:s.pendingContext=l,s=xr(_,R),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=qr(m,s,R),i!==null&&(ki(i,m,R,_),Il(i,m,R)),R}function rc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Sg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Jf(i,s){Sg(i,s),(i=i.alternate)&&Sg(i,s)}function KS(){return null}var Mg=typeof reportError=="function"?reportError:function(i){console.error(i)};function ed(i){this._internalRoot=i}sc.prototype.render=ed.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));ic(i,s,null,null)},sc.prototype.unmount=ed.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Ts(function(){ic(null,i,null,null)}),s[pr]=null}};function sc(i){this._internalRoot=i}sc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Di();i={blockedOn:null,target:i,priority:s};for(var l=0;l<zr.length&&s!==0&&s<zr[l].priority;l++);zr.splice(l,0,i),l===0&&lm(i)}};function td(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function oc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Eg(){}function $S(i,s,l,f,m){if(m){if(typeof f=="function"){var _=f;f=function(){var de=rc(R);_.call(de)}}var R=yg(s,f,i,0,null,!1,!1,"",Eg);return i._reactRootContainer=R,i[pr]=R.current,la(i.nodeType===8?i.parentNode:i),Ts(),R}for(;m=i.lastChild;)i.removeChild(m);if(typeof f=="function"){var O=f;f=function(){var de=rc(V);O.call(de)}}var V=Qf(i,0,!1,null,null,!1,!1,"",Eg);return i._reactRootContainer=V,i[pr]=V.current,la(i.nodeType===8?i.parentNode:i),Ts(function(){ic(s,V,l,f)}),V}function ac(i,s,l,f,m){var _=l._reactRootContainer;if(_){var R=_;if(typeof m=="function"){var O=m;m=function(){var V=rc(R);O.call(V)}}ic(s,R,i,m)}else R=$S(l,s,i,m,f);return rc(R)}hr=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=qe(s.pendingLanes);l!==0&&(Bn(s,l|1),si(s,ut()),(Vt&6)===0&&(ho=ut()+500,jr()))}break;case 13:Ts(function(){var f=_r(i,1);if(f!==null){var m=Zn();ki(f,i,1,m)}}),Jf(i,1)}},Ht=function(i){if(i.tag===13){var s=_r(i,134217728);if(s!==null){var l=Zn();ki(s,i,134217728,l)}Jf(i,134217728)}},nn=function(i){if(i.tag===13){var s=Qr(i),l=_r(i,s);if(l!==null){var f=Zn();ki(l,i,s,f)}Jf(i,s)}},Di=function(){return bt},qt=function(i,s){var l=bt;try{return bt=i,s()}finally{bt=l}},ft=function(i,s,l){switch(s){case"input":if(Se(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==i&&f.form===i.form){var m=Tl(f);if(!m)throw Error(t(90));at(f),Se(f,m)}}}break;case"textarea":Yt(i,l);break;case"select":s=l.value,s!=null&&Ct(i,!!l.multiple,s,!1)}},ze=jf,ye=Ts;var ZS={usingClientEntryPoint:!1,Events:[fa,Js,Tl,xe,Ie,jf]},wa={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QS={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=k(i),i===null?null:i.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||KS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{ie=lc.inject(QS),te=lc}catch{}}return oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS,oi.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(s))throw Error(t(200));return qS(i,s,null,l)},oi.createRoot=function(i,s){if(!td(i))throw Error(t(299));var l=!1,f="",m=Mg;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=Qf(i,1,!1,null,null,l,!1,f,m),i[pr]=s.current,la(i.nodeType===8?i.parentNode:i),new ed(s)},oi.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=k(s),i=i===null?null:i.stateNode,i},oi.flushSync=function(i){return Ts(i)},oi.hydrate=function(i,s,l){if(!oc(s))throw Error(t(200));return ac(null,i,s,!0,l)},oi.hydrateRoot=function(i,s,l){if(!td(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,_="",R=Mg;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(R=l.onRecoverableError)),s=yg(s,null,i,1,l??null,m,!1,_,R),i[pr]=s.current,la(i),f)for(i=0;i<f.length;i++)l=f[i],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new sc(s)},oi.render=function(i,s,l){if(!oc(s))throw Error(t(200));return ac(null,i,s,!1,l)},oi.unmountComponentAtNode=function(i){if(!oc(i))throw Error(t(40));return i._reactRootContainer?(Ts(function(){ac(null,null,i,!1,function(){i._reactRootContainer=null,i[pr]=null})}),!0):!1},oi.unstable_batchedUpdates=jf,oi.unstable_renderSubtreeIntoContainer=function(i,s,l,f){if(!oc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return ac(i,s,l,!1,f)},oi.version="18.3.1-next-f1338f8080-20240426",oi}var Dg;function oM(){if(Dg)return rd.exports;Dg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),rd.exports=sM(),rd.exports}var Lg;function aM(){if(Lg)return cc;Lg=1;var n=oM();return cc.createRoot=n.createRoot,cc.hydrateRoot=n.hydrateRoot,cc}var lM=aM();const cM=Q_(lM),J_=Ce.createContext(null);function uM({children:n}){Ce.useEffect(()=>{document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")},[]);const e=()=>{};return q.jsx(J_.Provider,{value:{theme:"dark",toggleTheme:e,setTheme:()=>{}},children:n})}function fM(){const n=Ce.useContext(J_);if(!n)throw new Error("useTheme must be used within ThemeProvider");return n}const cp=Ce.createContext({});function up(n){const e=Ce.useRef(null);return e.current===null&&(e.current=n()),e.current}const gu=Ce.createContext(null),fp=Ce.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class dM extends Ce.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function hM({children:n,isPresent:e}){const t=Ce.useId(),r=Ce.useRef(null),o=Ce.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=Ce.useContext(fp);return Ce.useInsertionEffect(()=>{const{width:c,height:u,top:d,left:h}=o.current;if(e||!r.current||!c||!u)return;r.current.dataset.motionPopId=t;const p=document.createElement("style");return a&&(p.nonce=a),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            top: ${d}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[e]),q.jsx(dM,{isPresent:e,childRef:r,sizeRef:o,children:Ce.cloneElement(n,{ref:r})})}const pM=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:c})=>{const u=up(mM),d=Ce.useId(),h=Ce.useCallback(v=>{u.set(v,!0);for(const g of u.values())if(!g)return;r&&r()},[u,r]),p=Ce.useMemo(()=>({id:d,initial:e,isPresent:t,custom:o,onExitComplete:h,register:v=>(u.set(v,!1),()=>u.delete(v))}),a?[Math.random(),h]:[t,h]);return Ce.useMemo(()=>{u.forEach((v,g)=>u.set(g,!1))},[t]),Ce.useEffect(()=>{!t&&!u.size&&r&&r()},[t]),c==="popLayout"&&(n=q.jsx(hM,{isPresent:t,children:n})),q.jsx(gu.Provider,{value:p,children:n})};function mM(){return new Map}function ex(n=!0){const e=Ce.useContext(gu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=Ce.useId();Ce.useEffect(()=>{n&&o(a)},[n]);const c=Ce.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,c]:[!0]}const uc=n=>n.key||"";function Ng(n){const e=[];return Ce.Children.forEach(n,t=>{Ce.isValidElement(t)&&e.push(t)}),e}const dp=typeof window<"u",tx=dp?Ce.useLayoutEffect:Ce.useEffect,nh=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1})=>{const[u,d]=ex(c),h=Ce.useMemo(()=>Ng(n),[n]),p=c&&!u?[]:h.map(uc),v=Ce.useRef(!0),g=Ce.useRef(h),y=up(()=>new Map),[M,A]=Ce.useState(h),[S,x]=Ce.useState(h);tx(()=>{v.current=!1,g.current=h;for(let b=0;b<S.length;b++){const P=uc(S[b]);p.includes(P)?y.delete(P):y.get(P)!==!0&&y.set(P,!1)}},[S,p.length,p.join("-")]);const D=[];if(h!==M){let b=[...h];for(let P=0;P<S.length;P++){const L=S[P],F=uc(L);p.includes(F)||(b.splice(P,0,L),D.push(L))}a==="wait"&&D.length&&(b=D),x(Ng(b)),A(h);return}const{forceRender:I}=Ce.useContext(cp);return q.jsx(q.Fragment,{children:S.map(b=>{const P=uc(b),L=c&&!u?!1:h===S||p.includes(P),F=()=>{if(y.has(P))y.set(P,!0);else return;let T=!0;y.forEach(w=>{w||(T=!1)}),T&&(I==null||I(),x(g.current),c&&(d==null||d()),r&&r())};return q.jsx(pM,{isPresent:L,initial:!v.current||t?void 0:!1,custom:L?void 0:e,presenceAffectsLayout:o,mode:a,onExitComplete:L?void 0:F,children:b},P)})})},mi=n=>n;let nx=mi;function hp(n){let e;return()=>(e===void 0&&(e=n()),e)}const Bo=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},br=n=>n*1e3,Pr=n=>n/1e3,gM={useManualTiming:!1};function vM(n){let e=new Set,t=new Set,r=!1,o=!1;const a=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function u(h){a.has(h)&&(d.schedule(h),n()),h(c)}const d={schedule:(h,p=!1,v=!1)=>{const y=v&&r?e:t;return p&&a.add(h),y.has(h)||y.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(c=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(u),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const fc=["read","resolveKeyframes","update","preRender","render","postRender"],_M=40;function ix(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=fc.reduce((x,D)=>(x[D]=vM(a),x),{}),{read:u,resolveKeyframes:d,update:h,preRender:p,render:v,postRender:g}=c,y=()=>{const x=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(x-o.timestamp,_M),1),o.timestamp=x,o.isProcessing=!0,u.process(o),d.process(o),h.process(o),p.process(o),v.process(o),g.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(y))},M=()=>{t=!0,r=!0,o.isProcessing||n(y)};return{schedule:fc.reduce((x,D)=>{const I=c[D];return x[D]=(b,P=!1,L=!1)=>(t||M(),I.schedule(b,P,L)),x},{}),cancel:x=>{for(let D=0;D<fc.length;D++)c[fc[D]].cancel(x)},state:o,steps:c}}const{schedule:tn,cancel:fs,state:Un,steps:ad}=ix(typeof requestAnimationFrame<"u"?requestAnimationFrame:mi,!0),rx=Ce.createContext({strict:!1}),Ig={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ko={};for(const n in Ig)ko[n]={isEnabled:e=>Ig[n].some(t=>!!e[t])};function xM(n){for(const e in n)ko[e]={...ko[e],...n[e]}}const yM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Qc(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||yM.has(n)}let sx=n=>!Qc(n);function SM(n){n&&(sx=e=>e.startsWith("on")?!Qc(e):n(e))}try{SM(require("@emotion/is-prop-valid").default)}catch{}function MM(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(sx(o)||t===!0&&Qc(o)||!e&&!Qc(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function EM(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const vu=Ce.createContext({});function Ya(n){return typeof n=="string"||Array.isArray(n)}function _u(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const pp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],mp=["initial",...pp];function xu(n){return _u(n.animate)||mp.some(e=>Ya(n[e]))}function ox(n){return!!(xu(n)||n.variants)}function TM(n,e){if(xu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Ya(t)?t:void 0,animate:Ya(r)?r:void 0}}return n.inherit!==!1?e:{}}function wM(n){const{initial:e,animate:t}=TM(n,Ce.useContext(vu));return Ce.useMemo(()=>({initial:e,animate:t}),[Ug(e),Ug(t)])}function Ug(n){return Array.isArray(n)?n.join(" "):n}const AM=Symbol.for("motionComponentSymbol");function bo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function RM(n,e,t){return Ce.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):bo(t)&&(t.current=r))},[e])}const gp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),CM="framerAppearId",ax="data-"+gp(CM),{schedule:vp}=ix(queueMicrotask,!1),lx=Ce.createContext({});function bM(n,e,t,r,o){var a,c;const{visualElement:u}=Ce.useContext(vu),d=Ce.useContext(rx),h=Ce.useContext(gu),p=Ce.useContext(fp).reducedMotion,v=Ce.useRef(null);r=r||d.renderer,!v.current&&r&&(v.current=r(n,{visualState:e,parent:u,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:p}));const g=v.current,y=Ce.useContext(lx);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&PM(v.current,t,o,y);const M=Ce.useRef(!1);Ce.useInsertionEffect(()=>{g&&M.current&&g.update(t,h)});const A=t[ax],S=Ce.useRef(!!A&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,A))&&((c=window.MotionHasOptimisedAnimation)===null||c===void 0?void 0:c.call(window,A)));return tx(()=>{g&&(M.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),vp.render(g.render),S.current&&g.animationState&&g.animationState.animateChanges())}),Ce.useEffect(()=>{g&&(!S.current&&g.animationState&&g.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var x;(x=window.MotionHandoffMarkAsComplete)===null||x===void 0||x.call(window,A)}),S.current=!1))}),g}function PM(n,e,t,r){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:cx(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&bo(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function cx(n){if(n)return n.options.allowProjection!==!1?n.projection:cx(n.parent)}function DM({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var a,c;n&&xM(n);function u(h,p){let v;const g={...Ce.useContext(fp),...h,layoutId:LM(h)},{isStatic:y}=g,M=wM(h),A=r(h,y);if(!y&&dp){NM();const S=IM(g);v=S.MeasureLayout,M.visualElement=bM(o,A,g,e,S.ProjectionNode)}return q.jsxs(vu.Provider,{value:M,children:[v&&M.visualElement?q.jsx(v,{visualElement:M.visualElement,...g}):null,t(o,h,RM(A,M.visualElement,p),A,y,M.visualElement)]})}u.displayName=`motion.${typeof o=="string"?o:`create(${(c=(a=o.displayName)!==null&&a!==void 0?a:o.name)!==null&&c!==void 0?c:""})`}`;const d=Ce.forwardRef(u);return d[AM]=o,d}function LM({layoutId:n}){const e=Ce.useContext(cp).id;return e&&n!==void 0?e+"-"+n:n}function NM(n,e){Ce.useContext(rx).strict}function IM(n){const{drag:e,layout:t}=ko;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const UM=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function _p(n){return typeof n!="string"||n.includes("-")?!1:!!(UM.indexOf(n)>-1||/[A-Z]/u.test(n))}function Fg(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function xp(n,e,t,r){if(typeof e=="function"){const[o,a]=Fg(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=Fg(r);e=e(t!==void 0?t:n.custom,o,a)}return e}const ih=n=>Array.isArray(n),FM=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),OM=n=>ih(n)?n[n.length-1]||0:n,Yn=n=>!!(n&&n.getVelocity);function Vc(n){const e=Yn(n)?n.get():n;return FM(e)?e.toValue():e}function BM({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,a){const c={latestValues:kM(r,o,a,n),renderState:e()};return t&&(c.onMount=u=>t({props:r,current:u,...c}),c.onUpdate=u=>t(u)),c}const ux=n=>(e,t)=>{const r=Ce.useContext(vu),o=Ce.useContext(gu),a=()=>BM(n,e,r,o);return t?a():up(a)};function kM(n,e,t,r){const o={},a=r(n,{});for(const g in a)o[g]=Vc(a[g]);let{initial:c,animate:u}=n;const d=xu(n),h=ox(n);e&&h&&!d&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const v=p?u:c;if(v&&typeof v!="boolean"&&!_u(v)){const g=Array.isArray(v)?v:[v];for(let y=0;y<g.length;y++){const M=xp(n,g[y]);if(M){const{transitionEnd:A,transition:S,...x}=M;for(const D in x){let I=x[D];if(Array.isArray(I)){const b=p?I.length-1:0;I=I[b]}I!==null&&(o[D]=I)}for(const D in A)o[D]=A[D]}}}return o}const Go=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ws=new Set(Go),fx=n=>e=>typeof e=="string"&&e.startsWith(n),dx=fx("--"),zM=fx("var(--"),yp=n=>zM(n)?VM.test(n.split("/*")[0].trim()):!1,VM=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,hx=(n,e)=>e&&typeof n=="number"?e.transform(n):n,Nr=(n,e,t)=>t>e?e:t<n?n:t,Wo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},qa={...Wo,transform:n=>Nr(0,1,n)},dc={...Wo,default:1},nl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),as=nl("deg"),ir=nl("%"),_t=nl("px"),HM=nl("vh"),GM=nl("vw"),Og={...ir,parse:n=>ir.parse(n)/100,transform:n=>ir.transform(n*100)},WM={borderWidth:_t,borderTopWidth:_t,borderRightWidth:_t,borderBottomWidth:_t,borderLeftWidth:_t,borderRadius:_t,radius:_t,borderTopLeftRadius:_t,borderTopRightRadius:_t,borderBottomRightRadius:_t,borderBottomLeftRadius:_t,width:_t,maxWidth:_t,height:_t,maxHeight:_t,top:_t,right:_t,bottom:_t,left:_t,padding:_t,paddingTop:_t,paddingRight:_t,paddingBottom:_t,paddingLeft:_t,margin:_t,marginTop:_t,marginRight:_t,marginBottom:_t,marginLeft:_t,backgroundPositionX:_t,backgroundPositionY:_t},XM={rotate:as,rotateX:as,rotateY:as,rotateZ:as,scale:dc,scaleX:dc,scaleY:dc,scaleZ:dc,skew:as,skewX:as,skewY:as,distance:_t,translateX:_t,translateY:_t,translateZ:_t,x:_t,y:_t,z:_t,perspective:_t,transformPerspective:_t,opacity:qa,originX:Og,originY:Og,originZ:_t},Bg={...Wo,transform:Math.round},Sp={...WM,...XM,zIndex:Bg,size:_t,fillOpacity:qa,strokeOpacity:qa,numOctaves:Bg},jM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},YM=Go.length;function qM(n,e,t){let r="",o=!0;for(let a=0;a<YM;a++){const c=Go[a],u=n[c];if(u===void 0)continue;let d=!0;if(typeof u=="number"?d=u===(c.startsWith("scale")?1:0):d=parseFloat(u)===0,!d||t){const h=hx(u,Sp[c]);if(!d){o=!1;const p=jM[c]||c;r+=`${p}(${h}) `}t&&(e[c]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function Mp(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const d in e){const h=e[d];if(Ws.has(d)){c=!0;continue}else if(dx(d)){o[d]=h;continue}else{const p=hx(h,Sp[d]);d.startsWith("origin")?(u=!0,a[d]=p):r[d]=p}}if(e.transform||(c||t?r.transform=qM(e,n.transform,t):r.transform&&(r.transform="none")),u){const{originX:d="50%",originY:h="50%",originZ:p=0}=a;r.transformOrigin=`${d} ${h} ${p}`}}const KM={offset:"stroke-dashoffset",array:"stroke-dasharray"},$M={offset:"strokeDashoffset",array:"strokeDasharray"};function ZM(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?KM:$M;n[a.offset]=_t.transform(-r);const c=_t.transform(e),u=_t.transform(t);n[a.array]=`${c} ${u}`}function kg(n,e,t){return typeof n=="string"?n:_t.transform(e+t*n)}function QM(n,e,t){const r=kg(e,n.x,n.width),o=kg(t,n.y,n.height);return`${r} ${o}`}function Ep(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},p,v){if(Mp(n,h,v),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:g,style:y,dimensions:M}=n;g.transform&&(M&&(y.transform=g.transform),delete g.transform),M&&(o!==void 0||a!==void 0||y.transform)&&(y.transformOrigin=QM(M,o!==void 0?o:.5,a!==void 0?a:.5)),e!==void 0&&(g.x=e),t!==void 0&&(g.y=t),r!==void 0&&(g.scale=r),c!==void 0&&ZM(g,c,u,d,!1)}const Tp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),px=()=>({...Tp(),attrs:{}}),wp=n=>typeof n=="string"&&n.toLowerCase()==="svg";function mx(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const a in t)n.style.setProperty(a,t[a])}const gx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function vx(n,e,t,r){mx(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(gx.has(o)?o:gp(o),e.attrs[o])}const Jc={};function JM(n){Object.assign(Jc,n)}function _x(n,{layout:e,layoutId:t}){return Ws.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Jc[n]||n==="opacity")}function Ap(n,e,t){var r;const{style:o}=n,a={};for(const c in o)(Yn(o[c])||e.style&&Yn(e.style[c])||_x(c,n)||((r=t==null?void 0:t.getValue(c))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[c]=o[c]);return a}function xx(n,e,t){const r=Ap(n,e,t);for(const o in n)if(Yn(n[o])||Yn(e[o])){const a=Go.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}function e2(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const zg=["x","y","width","height","cx","cy","r"],t2={useVisualState:ux({scrapeMotionValuesFromProps:xx,createRenderState:px,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let a=!!n.drag;if(!a){for(const u in o)if(Ws.has(u)){a=!0;break}}if(!a)return;let c=!e;if(e)for(let u=0;u<zg.length;u++){const d=zg[u];n[d]!==e[d]&&(c=!0)}c&&tn.read(()=>{e2(t,r),tn.render(()=>{Ep(r,o,wp(t.tagName),n.transformTemplate),vx(t,r)})})}})},n2={useVisualState:ux({scrapeMotionValuesFromProps:Ap,createRenderState:Tp})};function yx(n,e,t){for(const r in e)!Yn(e[r])&&!_x(r,t)&&(n[r]=e[r])}function i2({transformTemplate:n},e){return Ce.useMemo(()=>{const t=Tp();return Mp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function r2(n,e){const t=n.style||{},r={};return yx(r,t,n),Object.assign(r,i2(n,e)),r}function s2(n,e){const t={},r=r2(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function o2(n,e,t,r){const o=Ce.useMemo(()=>{const a=px();return Ep(a,e,wp(r),n.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};yx(a,n.style,n),o.style={...a,...o.style}}return o}function a2(n=!1){return(t,r,o,{latestValues:a},c)=>{const d=(_p(t)?o2:s2)(r,a,c,t),h=MM(r,typeof t=="string",n),p=t!==Ce.Fragment?{...h,...d,ref:o}:{},{children:v}=r,g=Ce.useMemo(()=>Yn(v)?v.get():v,[v]);return Ce.createElement(t,{...p,children:g})}}function l2(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const c={..._p(r)?t2:n2,preloadedFeatures:n,useRender:a2(o),createVisualElement:e,Component:r};return DM(c)}}function Sx(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function yu(n,e,t){const r=n.getProps();return xp(r,e,t!==void 0?t:r.custom,n)}const c2=hp(()=>window.ScrollTimeline!==void 0);class u2{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(c2()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,a)=>{o&&o(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class f2 extends u2{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function Rp(n,e){return n?n[e]||n.default||n:void 0}const rh=2e4;function Mx(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<rh;)e+=t,r=n.next(e);return e>=rh?1/0:e}function Cp(n){return typeof n=="function"}function Vg(n,e){n.timeline=e,n.onfinish=null}const bp=n=>Array.isArray(n)&&typeof n[0]=="number",d2={linearEasing:void 0};function h2(n,e){const t=hp(n);return()=>{var r;return(r=d2[e])!==null&&r!==void 0?r:t()}}const eu=h2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ex=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=n(Bo(0,o-1,a))+", ";return`linear(${r.substring(0,r.length-2)})`};function Tx(n){return!!(typeof n=="function"&&eu()||!n||typeof n=="string"&&(n in sh||eu())||bp(n)||Array.isArray(n)&&n.every(Tx))}const Fa=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,sh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Fa([0,.65,.55,1]),circOut:Fa([.55,0,1,.45]),backIn:Fa([.31,.01,.66,-.59]),backOut:Fa([.33,1.53,.69,.99])};function wx(n,e){if(n)return typeof n=="function"&&eu()?Ex(n,e):bp(n)?Fa(n):Array.isArray(n)?n.map(t=>wx(t,e)||sh.easeOut):sh[n]}const Gi={x:!1,y:!1};function Ax(){return Gi.x||Gi.y}function p2(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const a=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n)}function Rx(n,e){const t=p2(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function Hg(n){return e=>{e.pointerType==="touch"||Ax()||n(e)}}function m2(n,e,t={}){const[r,o,a]=Rx(n,t),c=Hg(u=>{const{target:d}=u,h=e(u);if(typeof h!="function"||!d)return;const p=Hg(v=>{h(v),d.removeEventListener("pointerleave",p)});d.addEventListener("pointerleave",p,o)});return r.forEach(u=>{u.addEventListener("pointerenter",c,o)}),a}const Cx=(n,e)=>e?n===e?!0:Cx(n,e.parentElement):!1,Pp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,g2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function v2(n){return g2.has(n.tagName)||n.tabIndex!==-1}const Oa=new WeakSet;function Gg(n){return e=>{e.key==="Enter"&&n(e)}}function ld(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const _2=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=Gg(()=>{if(Oa.has(t))return;ld(t,"down");const o=Gg(()=>{ld(t,"up")}),a=()=>ld(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function Wg(n){return Pp(n)&&!Ax()}function x2(n,e,t={}){const[r,o,a]=Rx(n,t),c=u=>{const d=u.currentTarget;if(!Wg(u)||Oa.has(d))return;Oa.add(d);const h=e(u),p=(y,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",g),!(!Wg(y)||!Oa.has(d))&&(Oa.delete(d),typeof h=="function"&&h(y,{success:M}))},v=y=>{p(y,t.useGlobalTarget||Cx(d,y.target))},g=y=>{p(y,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",g,o)};return r.forEach(u=>{!v2(u)&&u.getAttribute("tabindex")===null&&(u.tabIndex=0),(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),u.addEventListener("focus",h=>_2(h,o),o)}),a}function y2(n){return n==="x"||n==="y"?Gi[n]?null:(Gi[n]=!0,()=>{Gi[n]=!1}):Gi.x||Gi.y?null:(Gi.x=Gi.y=!0,()=>{Gi.x=Gi.y=!1})}const bx=new Set(["width","height","top","left","right","bottom",...Go]);let Hc;function S2(){Hc=void 0}const rr={now:()=>(Hc===void 0&&rr.set(Un.isProcessing||gM.useManualTiming?Un.timestamp:performance.now()),Hc),set:n=>{Hc=n,queueMicrotask(S2)}};function Dp(n,e){n.indexOf(e)===-1&&n.push(e)}function Lp(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class Np{constructor(){this.subscriptions=[]}add(e){return Dp(this.subscriptions,e),()=>Lp(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Px(n,e){return e?n*(1e3/e):0}const Xg=30,M2=n=>!isNaN(parseFloat(n));class E2{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const a=rr.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=rr.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=M2(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Np);const r=this.events[e].add(t);return e==="change"?()=>{r(),tn.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=rr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Xg)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Xg);return Px(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ka(n,e){return new E2(n,e)}function T2(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Ka(t))}function w2(n,e){const t=yu(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const c in a){const u=OM(a[c]);T2(n,c,u)}}function A2(n){return!!(Yn(n)&&n.add)}function oh(n,e){const t=n.getValue("willChange");if(A2(t))return t.add(e)}function Dx(n){return n.props[ax]}const Lx=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,R2=1e-7,C2=12;function b2(n,e,t,r,o){let a,c,u=0;do c=e+(t-e)/2,a=Lx(c,r,o)-n,a>0?t=c:e=c;while(Math.abs(a)>R2&&++u<C2);return c}function il(n,e,t,r){if(n===e&&t===r)return mi;const o=a=>b2(a,0,1,n,t);return a=>a===0||a===1?a:Lx(o(a),e,r)}const Nx=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,Ix=n=>e=>1-n(1-e),Ux=il(.33,1.53,.69,.99),Ip=Ix(Ux),Fx=Nx(Ip),Ox=n=>(n*=2)<1?.5*Ip(n):.5*(2-Math.pow(2,-10*(n-1))),Up=n=>1-Math.sin(Math.acos(n)),Bx=Ix(Up),kx=Nx(Up),zx=n=>/^0[^.\s]+$/u.test(n);function P2(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||zx(n):!0}const Ha=n=>Math.round(n*1e5)/1e5,Fp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function D2(n){return n==null}const L2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Op=(n,e)=>t=>!!(typeof t=="string"&&L2.test(t)&&t.startsWith(n)||e&&!D2(t)&&Object.prototype.hasOwnProperty.call(t,e)),Vx=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,c,u]=r.match(Fp);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},N2=n=>Nr(0,255,n),cd={...Wo,transform:n=>Math.round(N2(n))},Fs={test:Op("rgb","red"),parse:Vx("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+cd.transform(n)+", "+cd.transform(e)+", "+cd.transform(t)+", "+Ha(qa.transform(r))+")"};function I2(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const ah={test:Op("#"),parse:I2,transform:Fs.transform},Po={test:Op("hsl","hue"),parse:Vx("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+ir.transform(Ha(e))+", "+ir.transform(Ha(t))+", "+Ha(qa.transform(r))+")"},Xn={test:n=>Fs.test(n)||ah.test(n)||Po.test(n),parse:n=>Fs.test(n)?Fs.parse(n):Po.test(n)?Po.parse(n):ah.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Fs.transform(n):Po.transform(n)},U2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function F2(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Fp))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(U2))===null||t===void 0?void 0:t.length)||0)>0}const Hx="number",Gx="color",O2="var",B2="var(",jg="${}",k2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function $a(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(k2,d=>(Xn.test(d)?(r.color.push(a),o.push(Gx),t.push(Xn.parse(d))):d.startsWith(B2)?(r.var.push(a),o.push(O2),t.push(d)):(r.number.push(a),o.push(Hx),t.push(parseFloat(d))),++a,jg)).split(jg);return{values:t,split:u,indexes:r,types:o}}function Wx(n){return $a(n).values}function Xx(n){const{split:e,types:t}=$a(n),r=e.length;return o=>{let a="";for(let c=0;c<r;c++)if(a+=e[c],o[c]!==void 0){const u=t[c];u===Hx?a+=Ha(o[c]):u===Gx?a+=Xn.transform(o[c]):a+=o[c]}return a}}const z2=n=>typeof n=="number"?0:n;function V2(n){const e=Wx(n);return Xx(n)(e.map(z2))}const ds={test:F2,parse:Wx,createTransformer:Xx,getAnimatableNone:V2},H2=new Set(["brightness","contrast","saturate","opacity"]);function G2(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(Fp)||[];if(!r)return n;const o=t.replace(r,"");let a=H2.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const W2=/\b([a-z-]*)\(.*?\)/gu,lh={...ds,getAnimatableNone:n=>{const e=n.match(W2);return e?e.map(G2).join(" "):n}},X2={...Sp,color:Xn,backgroundColor:Xn,outlineColor:Xn,fill:Xn,stroke:Xn,borderColor:Xn,borderTopColor:Xn,borderRightColor:Xn,borderBottomColor:Xn,borderLeftColor:Xn,filter:lh,WebkitFilter:lh},Bp=n=>X2[n];function jx(n,e){let t=Bp(n);return t!==lh&&(t=ds),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const j2=new Set(["auto","none","0"]);function Y2(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!j2.has(a)&&$a(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=jx(t,o)}const Yg=n=>n===Wo||n===_t,qg=(n,e)=>parseFloat(n.split(", ")[e]),Kg=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return qg(o[1],e);{const a=r.match(/^matrix\((.+)\)$/u);return a?qg(a[1],n):0}},q2=new Set(["x","y","z"]),K2=Go.filter(n=>!q2.has(n));function $2(n){const e=[];return K2.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const zo={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:Kg(4,13),y:Kg(5,14)};zo.translateX=zo.x;zo.translateY=zo.y;const ks=new Set;let ch=!1,uh=!1;function Yx(){if(uh){const n=Array.from(ks).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=$2(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,c])=>{var u;(u=r.getValue(a))===null||u===void 0||u.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}uh=!1,ch=!1,ks.forEach(n=>n.complete()),ks.clear()}function qx(){ks.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(uh=!0)})}function Z2(){qx(),Yx()}class kp{constructor(e,t,r,o,a,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ks.add(this),ch||(ch=!0,tn.read(qx),tn.resolveKeyframes(Yx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let a=0;a<e.length;a++)if(e[a]===null)if(a===0){const c=o==null?void 0:o.get(),u=e[e.length-1];if(c!==void 0)e[0]=c;else if(r&&t){const d=r.readValue(t,u);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=u),o&&c===void 0&&o.set(e[0])}else e[a]=e[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ks.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ks.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Kx=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),Q2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function J2(n){const e=Q2.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function $x(n,e,t=1){const[r,o]=J2(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const c=a.trim();return Kx(c)?parseFloat(c):c}return yp(o)?$x(o,e,t+1):o}const Zx=n=>e=>e.test(n),eE={test:n=>n==="auto",parse:n=>n},Qx=[Wo,_t,ir,as,GM,HM,eE],$g=n=>Qx.find(Zx(n));class Jx extends kp{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),yp(h))){const p=$x(h,t.current);p!==void 0&&(e[d]=p),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!bx.has(r)||e.length!==2)return;const[o,a]=e,c=$g(o),u=$g(a);if(c!==u)if(Yg(c)&&Yg(u))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)P2(e[o])&&r.push(o);r.length&&Y2(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=zo[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const a=t.getValue(r);a&&a.jump(this.measuredOrigin,!1);const c=o.length-1,u=o[c];o[c]=zo[r](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const Zg=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ds.test(n)||n==="0")&&!n.startsWith("url("));function tE(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function nE(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=Zg(o,e),u=Zg(a,e);return!c||!u?!1:tE(n)||(t==="spring"||Cp(t))&&r}const iE=n=>n!==null;function Su(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(iE),a=e&&t!=="loop"&&e%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const rE=40;class e1{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",...u}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=rr.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:c,...u},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>rE?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Z2(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=rr.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:a,delay:c,onComplete:u,onUpdate:d,isGenerator:h}=this.options;if(!h&&!nE(e,r,o,a))if(c)this.options.duration=0;else{d&&d(Su(e,this.options,t)),u&&u(),this.resolveFinishedPromise();return}const p=this.initPlayback(e,t);p!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...p},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const an=(n,e,t)=>n+(e-n)*t;function ud(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function sE({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,d=2*t-u;o=ud(d,u,n+1/3),a=ud(d,u,n),c=ud(d,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:r}}function tu(n,e){return t=>t>0?e:n}const fd=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},oE=[ah,Fs,Po],aE=n=>oE.find(e=>e.test(n));function Qg(n){const e=aE(n);if(!e)return!1;let t=e.parse(n);return e===Po&&(t=sE(t)),t}const Jg=(n,e)=>{const t=Qg(n),r=Qg(e);if(!t||!r)return tu(n,e);const o={...t};return a=>(o.red=fd(t.red,r.red,a),o.green=fd(t.green,r.green,a),o.blue=fd(t.blue,r.blue,a),o.alpha=an(t.alpha,r.alpha,a),Fs.transform(o))},lE=(n,e)=>t=>e(n(t)),rl=(...n)=>n.reduce(lE),fh=new Set(["none","hidden"]);function cE(n,e){return fh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function uE(n,e){return t=>an(n,e,t)}function zp(n){return typeof n=="number"?uE:typeof n=="string"?yp(n)?tu:Xn.test(n)?Jg:hE:Array.isArray(n)?t1:typeof n=="object"?Xn.test(n)?Jg:fE:tu}function t1(n,e){const t=[...n],r=t.length,o=n.map((a,c)=>zp(a)(a,e[c]));return a=>{for(let c=0;c<r;c++)t[c]=o[c](a);return t}}function fE(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=zp(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function dE(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const c=e.types[a],u=n.indexes[c][o[c]],d=(t=n.values[u])!==null&&t!==void 0?t:0;r[a]=d,o[c]++}return r}const hE=(n,e)=>{const t=ds.createTransformer(e),r=$a(n),o=$a(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?fh.has(n)&&!o.values.length||fh.has(e)&&!r.values.length?cE(n,e):rl(t1(dE(r,o),o.values),t):tu(n,e)};function n1(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?an(n,e,t):zp(n)(n,e)}const pE=5;function i1(n,e,t){const r=Math.max(e-pE,0);return Px(t-n(r),e-r)}const dn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},dd=.001;function mE({duration:n=dn.duration,bounce:e=dn.bounce,velocity:t=dn.velocity,mass:r=dn.mass}){let o,a,c=1-e;c=Nr(dn.minDamping,dn.maxDamping,c),n=Nr(dn.minDuration,dn.maxDuration,Pr(n)),c<1?(o=h=>{const p=h*c,v=p*n,g=p-t,y=dh(h,c),M=Math.exp(-v);return dd-g/y*M},a=h=>{const v=h*c*n,g=v*t+t,y=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-v),A=dh(Math.pow(h,2),c);return(-o(h)+dd>0?-1:1)*((g-y)*M)/A}):(o=h=>{const p=Math.exp(-h*n),v=(h-t)*n+1;return-dd+p*v},a=h=>{const p=Math.exp(-h*n),v=(t-h)*(n*n);return p*v});const u=5/n,d=vE(o,a,u);if(n=br(n),isNaN(d))return{stiffness:dn.stiffness,damping:dn.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:c*2*Math.sqrt(r*h),duration:n}}}const gE=12;function vE(n,e,t){let r=t;for(let o=1;o<gE;o++)r=r-n(r)/e(r);return r}function dh(n,e){return n*Math.sqrt(1-e*e)}const _E=["duration","bounce"],xE=["stiffness","damping","mass"];function ev(n,e){return e.some(t=>n[t]!==void 0)}function yE(n){let e={velocity:dn.velocity,stiffness:dn.stiffness,damping:dn.damping,mass:dn.mass,isResolvedFromDuration:!1,...n};if(!ev(n,xE)&&ev(n,_E))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*Nr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:dn.mass,stiffness:o,damping:a}}else{const t=mE(n);e={...e,...t,mass:dn.mass},e.isResolvedFromDuration=!0}return e}function r1(n=dn.visualDuration,e=dn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:d,damping:h,mass:p,duration:v,velocity:g,isResolvedFromDuration:y}=yE({...t,velocity:-Pr(t.velocity||0)}),M=g||0,A=h/(2*Math.sqrt(d*p)),S=c-a,x=Pr(Math.sqrt(d/p)),D=Math.abs(S)<5;r||(r=D?dn.restSpeed.granular:dn.restSpeed.default),o||(o=D?dn.restDelta.granular:dn.restDelta.default);let I;if(A<1){const P=dh(x,A);I=L=>{const F=Math.exp(-A*x*L);return c-F*((M+A*x*S)/P*Math.sin(P*L)+S*Math.cos(P*L))}}else if(A===1)I=P=>c-Math.exp(-x*P)*(S+(M+x*S)*P);else{const P=x*Math.sqrt(A*A-1);I=L=>{const F=Math.exp(-A*x*L),T=Math.min(P*L,300);return c-F*((M+A*x*S)*Math.sinh(T)+P*S*Math.cosh(T))/P}}const b={calculatedDuration:y&&v||null,next:P=>{const L=I(P);if(y)u.done=P>=v;else{let F=0;A<1&&(F=P===0?br(M):i1(I,P,L));const T=Math.abs(F)<=r,w=Math.abs(c-L)<=o;u.done=T&&w}return u.value=u.done?c:L,u},toString:()=>{const P=Math.min(Mx(b),rh),L=Ex(F=>b.next(P*F).value,P,30);return P+"ms "+L}};return b}function tv({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:d,restDelta:h=.5,restSpeed:p}){const v=n[0],g={done:!1,value:v},y=T=>u!==void 0&&T<u||d!==void 0&&T>d,M=T=>u===void 0?d:d===void 0||Math.abs(u-T)<Math.abs(d-T)?u:d;let A=t*e;const S=v+A,x=c===void 0?S:c(S);x!==S&&(A=x-v);const D=T=>-A*Math.exp(-T/r),I=T=>x+D(T),b=T=>{const w=D(T),B=I(T);g.done=Math.abs(w)<=h,g.value=g.done?x:B};let P,L;const F=T=>{y(g.value)&&(P=T,L=r1({keyframes:[g.value,M(g.value)],velocity:i1(I,T,g.value),damping:o,stiffness:a,restDelta:h,restSpeed:p}))};return F(0),{calculatedDuration:null,next:T=>{let w=!1;return!L&&P===void 0&&(w=!0,b(T),F(T)),P!==void 0&&T>=P?L.next(T-P):(!w&&b(T),g)}}}const SE=il(.42,0,1,1),ME=il(0,0,.58,1),s1=il(.42,0,.58,1),EE=n=>Array.isArray(n)&&typeof n[0]!="number",TE={linear:mi,easeIn:SE,easeInOut:s1,easeOut:ME,circIn:Up,circInOut:kx,circOut:Bx,backIn:Ip,backInOut:Fx,backOut:Ux,anticipate:Ox},nv=n=>{if(bp(n)){nx(n.length===4);const[e,t,r,o]=n;return il(e,t,r,o)}else if(typeof n=="string")return TE[n];return n};function wE(n,e,t){const r=[],o=t||n1,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const d=Array.isArray(e)?e[c]||mi:e;u=rl(d,u)}r.push(u)}return r}function AE(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(nx(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=wE(e,r,o),d=u.length,h=p=>{if(c&&p<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(p<n[v+1]);v++);const g=Bo(n[v],n[v+1],p);return u[v](g)};return t?p=>h(Nr(n[0],n[a-1],p)):h}function RE(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Bo(0,e,r);n.push(an(t,1,o))}}function CE(n){const e=[0];return RE(e,n.length-1),e}function bE(n,e){return n.map(t=>t*e)}function PE(n,e){return n.map(()=>e||s1).splice(0,n.length-1)}function nu({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=EE(r)?r.map(nv):nv(r),a={done:!1,value:e[0]},c=bE(t&&t.length===e.length?t:CE(e),n),u=AE(c,e,{ease:Array.isArray(o)?o:PE(e,o)});return{calculatedDuration:n,next:d=>(a.value=u(d),a.done=d>=n,a)}}const DE=n=>{const e=({timestamp:t})=>n(t);return{start:()=>tn.update(e,!0),stop:()=>fs(e),now:()=>Un.isProcessing?Un.timestamp:rr.now()}},LE={decay:tv,inertia:tv,tween:nu,keyframes:nu,spring:r1},NE=n=>n/100;class Vp extends e1{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:a}=this.options,c=(o==null?void 0:o.KeyframeResolver)||kp,u=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new c(a,u,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=this.options,u=Cp(t)?t:LE[t]||nu;let d,h;u!==nu&&typeof e[0]!="number"&&(d=rl(NE,n1(e[0],e[1])),e=[0,100]);const p=u({...this.options,keyframes:e});a==="mirror"&&(h=u({...this.options,keyframes:[...e].reverse(),velocity:-c})),p.calculatedDuration===null&&(p.calculatedDuration=Mx(p));const{calculatedDuration:v}=p,g=v+o,y=g*(r+1)-o;return{generator:p,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:v,resolvedDuration:g,totalDuration:y}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:o,generator:a,mirroredGenerator:c,mapPercentToKeyframes:u,keyframes:d,calculatedDuration:h,totalDuration:p,resolvedDuration:v}=r;if(this.startTime===null)return a.next(0);const{delay:g,repeat:y,repeatType:M,repeatDelay:A,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-p/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const x=this.currentTime-g*(this.speed>=0?1:-1),D=this.speed>=0?x<0:x>p;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let I=this.currentTime,b=a;if(y){const T=Math.min(this.currentTime,p)/v;let w=Math.floor(T),B=T%1;!B&&T>=1&&(B=1),B===1&&w--,w=Math.min(w,y+1),!!(w%2)&&(M==="reverse"?(B=1-B,A&&(B-=A/v)):M==="mirror"&&(b=c)),I=Nr(0,1,B)*v}const P=D?{done:!1,value:d[0]}:b.next(I);u&&(P.value=u(P.value));let{done:L}=P;!D&&h!==null&&(L=this.speed>=0?this.currentTime>=p:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return F&&o!==void 0&&(P.value=Su(d,this.options,o)),S&&S(P.value),F&&this.finish(),P}get duration(){const{resolved:e}=this;return e?Pr(e.calculatedDuration):0}get time(){return Pr(this.currentTime)}set time(e){e=br(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Pr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=DE,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const IE=new Set(["opacity","clipPath","filter","transform"]);function UE(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const p=wx(u,o);return Array.isArray(p)&&(h.easing=p),n.animate(h,{delay:r,duration:o,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"})}const FE=hp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),iu=10,OE=2e4;function BE(n){return Cp(n.type)||n.type==="spring"||!Tx(n.ease)}function kE(n,e){const t=new Vp({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let a=0;for(;!r.done&&a<OE;)r=t.sample(a),o.push(r.value),a+=iu;return{times:void 0,keyframes:o,duration:a-iu,ease:"linear"}}const o1={anticipate:Ox,backInOut:Fx,circInOut:kx};function zE(n){return n in o1}class iv extends e1{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:a}=this.options;this.resolver=new Jx(a,(c,u)=>this.onKeyframesResolved(c,u),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:a,type:c,motionValue:u,name:d,startTime:h}=this.options;if(!u.owner||!u.owner.current)return!1;if(typeof a=="string"&&eu()&&zE(a)&&(a=o1[a]),BE(this.options)){const{onComplete:v,onUpdate:g,motionValue:y,element:M,...A}=this.options,S=kE(e,A);e=S.keyframes,e.length===1&&(e[1]=e[0]),r=S.duration,o=S.times,a=S.ease,c="keyframes"}const p=UE(u.owner.current,d,e,{...this.options,duration:r,times:o,ease:a});return p.startTime=h??this.calcStartTime(),this.pendingTimeline?(Vg(p,this.pendingTimeline),this.pendingTimeline=void 0):p.onfinish=()=>{const{onComplete:v}=this.options;u.set(Su(e,this.options,t)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:p,duration:r,times:o,type:c,ease:a,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return Pr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return Pr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=br(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return mi;const{animation:r}=t;Vg(r,e)}return mi}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:a,ease:c,times:u}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:p,onComplete:v,element:g,...y}=this.options,M=new Vp({...y,keyframes:r,duration:o,type:a,ease:c,times:u,isGenerator:!0}),A=br(this.time);h.setWithVelocity(M.sample(A-iu).value,M.sample(A).value,iu)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:a,damping:c,type:u}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return FE()&&r&&IE.has(r)&&!d&&!h&&!o&&a!=="mirror"&&c!==0&&u!=="inertia"}}const VE={type:"spring",stiffness:500,damping:25,restSpeed:10},HE=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),GE={type:"keyframes",duration:.8},WE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},XE=(n,{keyframes:e})=>e.length>2?GE:Ws.has(n)?n.startsWith("scale")?HE(e[1]):VE:WE;function jE({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:c,repeatDelay:u,from:d,elapsed:h,...p}){return!!Object.keys(p).length}const Hp=(n,e,t,r={},o,a)=>c=>{const u=Rp(r,n)||{},d=u.delay||r.delay||0;let{elapsed:h=0}=r;h=h-br(d);let p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:g=>{e.set(g),u.onUpdate&&u.onUpdate(g)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};jE(u)||(p={...p,...XE(n,p)}),p.duration&&(p.duration=br(p.duration)),p.repeatDelay&&(p.repeatDelay=br(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let v=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0,p.delay===0&&(v=!0)),v&&!a&&e.get()!==void 0){const g=Su(p.keyframes,u);if(g!==void 0)return tn.update(()=>{p.onUpdate(g),p.onComplete()}),new f2([])}return!a&&iv.supports(p)?new iv(p):new Vp(p)};function YE({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function a1(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var a;let{transition:c=n.getDefaultTransition(),transitionEnd:u,...d}=e;r&&(c=r);const h=[],p=o&&n.animationState&&n.animationState.getState()[o];for(const v in d){const g=n.getValue(v,(a=n.latestValues[v])!==null&&a!==void 0?a:null),y=d[v];if(y===void 0||p&&YE(p,v))continue;const M={delay:t,...Rp(c||{},v)};let A=!1;if(window.MotionHandoffAnimation){const x=Dx(n);if(x){const D=window.MotionHandoffAnimation(x,v,tn);D!==null&&(M.startTime=D,A=!0)}}oh(n,v),g.start(Hp(v,g,y,n.shouldReduceMotion&&bx.has(v)?{type:!1}:M,n,A));const S=g.animation;S&&h.push(S)}return u&&Promise.all(h).then(()=>{tn.update(()=>{u&&w2(n,u)})}),h}function hh(n,e,t={}){var r;const o=yu(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(a=t.transitionOverride);const c=o?()=>Promise.all(a1(n,o,t)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:v,staggerDirection:g}=a;return qE(n,e,p+h,v,g,t)}:()=>Promise.resolve(),{when:d}=a;if(d){const[h,p]=d==="beforeChildren"?[c,u]:[u,c];return h().then(()=>p())}else return Promise.all([c(),u(t.delay)])}function qE(n,e,t=0,r=0,o=1,a){const c=[],u=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>u-h*r;return Array.from(n.variantChildren).sort(KE).forEach((h,p)=>{h.notify("AnimationStart",e),c.push(hh(h,e,{...a,delay:t+d(p)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(c)}function KE(n,e){return n.sortNodePosition(e)}function $E(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>hh(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=hh(n,e,t);else{const o=typeof e=="function"?yu(n,e,t.custom):e;r=Promise.all(a1(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const ZE=mp.length;function l1(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?l1(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<ZE;t++){const r=mp[t],o=n.props[r];(Ya(o)||o===!1)&&(e[r]=o)}return e}const QE=[...pp].reverse(),JE=pp.length;function eT(n){return e=>Promise.all(e.map(({animation:t,options:r})=>$E(n,t,r)))}function tT(n){let e=eT(n),t=rv(),r=!0;const o=d=>(h,p)=>{var v;const g=yu(n,p,d==="exit"?(v=n.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(g){const{transition:y,transitionEnd:M,...A}=g;h={...h,...A,...M}}return h};function a(d){e=d(n)}function c(d){const{props:h}=n,p=l1(n.parent)||{},v=[],g=new Set;let y={},M=1/0;for(let S=0;S<JE;S++){const x=QE[S],D=t[x],I=h[x]!==void 0?h[x]:p[x],b=Ya(I),P=x===d?D.isActive:null;P===!1&&(M=S);let L=I===p[x]&&I!==h[x]&&b;if(L&&r&&n.manuallyAnimateOnMount&&(L=!1),D.protectedKeys={...y},!D.isActive&&P===null||!I&&!D.prevProp||_u(I)||typeof I=="boolean")continue;const F=nT(D.prevProp,I);let T=F||x===d&&D.isActive&&!L&&b||S>M&&b,w=!1;const B=Array.isArray(I)?I:[I];let Y=B.reduce(o(x),{});P===!1&&(Y={});const{prevResolvedValues:ee={}}=D,ne={...ee,...Y},K=Z=>{T=!0,g.has(Z)&&(w=!0,g.delete(Z)),D.needsAnimating[Z]=!0;const W=n.getValue(Z);W&&(W.liveStyle=!1)};for(const Z in ne){const W=Y[Z],Q=ee[Z];if(y.hasOwnProperty(Z))continue;let X=!1;ih(W)&&ih(Q)?X=!Sx(W,Q):X=W!==Q,X?W!=null?K(Z):g.add(Z):W!==void 0&&g.has(Z)?K(Z):D.protectedKeys[Z]=!0}D.prevProp=I,D.prevResolvedValues=Y,D.isActive&&(y={...y,...Y}),r&&n.blockInitialAnimation&&(T=!1),T&&(!(L&&F)||w)&&v.push(...B.map(Z=>({animation:Z,options:{type:x}})))}if(g.size){const S={};g.forEach(x=>{const D=n.getBaseTarget(x),I=n.getValue(x);I&&(I.liveStyle=!0),S[x]=D??null}),v.push({animation:S})}let A=!!v.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(A=!1),r=!1,A?e(v):Promise.resolve()}function u(d,h){var p;if(t[d].isActive===h)return Promise.resolve();(p=n.variantChildren)===null||p===void 0||p.forEach(g=>{var y;return(y=g.animationState)===null||y===void 0?void 0:y.setActive(d,h)}),t[d].isActive=h;const v=c(d);for(const g in t)t[g].protectedKeys={};return v}return{animateChanges:c,setActive:u,setAnimateFunction:a,getState:()=>t,reset:()=>{t=rv(),r=!0}}}function nT(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Sx(e,n):!1}function Cs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function rv(){return{animate:Cs(!0),whileInView:Cs(),whileHover:Cs(),whileTap:Cs(),whileDrag:Cs(),whileFocus:Cs(),exit:Cs()}}class hs{constructor(e){this.isMounted=!1,this.node=e}update(){}}class iT extends hs{constructor(e){super(e),e.animationState||(e.animationState=tT(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();_u(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let rT=0;class sT extends hs{constructor(){super(...arguments),this.id=rT++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const oT={animation:{Feature:iT},exit:{Feature:sT}};function Za(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function sl(n){return{point:{x:n.pageX,y:n.pageY}}}const aT=n=>e=>Pp(e)&&n(e,sl(e));function Ga(n,e,t,r){return Za(n,e,aT(t),r)}const sv=(n,e)=>Math.abs(n-e);function lT(n,e){const t=sv(n.x,e.x),r=sv(n.y,e.y);return Math.sqrt(t**2+r**2)}class c1{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=pd(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,y=lT(v.offset,{x:0,y:0})>=3;if(!g&&!y)return;const{point:M}=v,{timestamp:A}=Un;this.history.push({...M,timestamp:A});const{onStart:S,onMove:x}=this.handlers;g||(S&&S(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,v)},this.handlePointerMove=(v,g)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=hd(g,this.transformPagePoint),tn.update(this.updatePoint,!0)},this.handlePointerUp=(v,g)=>{this.end();const{onEnd:y,onSessionEnd:M,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=pd(v.type==="pointercancel"?this.lastMoveEventInfo:hd(g,this.transformPagePoint),this.history);this.startEvent&&y&&y(v,S),M&&M(v,S)},!Pp(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const c=sl(e),u=hd(c,this.transformPagePoint),{point:d}=u,{timestamp:h}=Un;this.history=[{...d,timestamp:h}];const{onSessionStart:p}=t;p&&p(e,pd(u,this.history)),this.removeListeners=rl(Ga(this.contextWindow,"pointermove",this.handlePointerMove),Ga(this.contextWindow,"pointerup",this.handlePointerUp),Ga(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),fs(this.updatePoint)}}function hd(n,e){return e?{point:e(n.point)}:n}function ov(n,e){return{x:n.x-e.x,y:n.y-e.y}}function pd({point:n},e){return{point:n,delta:ov(n,u1(e)),offset:ov(n,cT(e)),velocity:uT(e,.1)}}function cT(n){return n[0]}function u1(n){return n[n.length-1]}function uT(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=u1(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>br(e)));)t--;if(!r)return{x:0,y:0};const a=Pr(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}const f1=1e-4,fT=1-f1,dT=1+f1,d1=.01,hT=0-d1,pT=0+d1;function gi(n){return n.max-n.min}function mT(n,e,t){return Math.abs(n-e)<=t}function av(n,e,t,r=.5){n.origin=r,n.originPoint=an(e.min,e.max,n.origin),n.scale=gi(t)/gi(e),n.translate=an(t.min,t.max,n.origin)-n.originPoint,(n.scale>=fT&&n.scale<=dT||isNaN(n.scale))&&(n.scale=1),(n.translate>=hT&&n.translate<=pT||isNaN(n.translate))&&(n.translate=0)}function Wa(n,e,t,r){av(n.x,e.x,t.x,r?r.originX:void 0),av(n.y,e.y,t.y,r?r.originY:void 0)}function lv(n,e,t){n.min=t.min+e.min,n.max=n.min+gi(e)}function gT(n,e,t){lv(n.x,e.x,t.x),lv(n.y,e.y,t.y)}function cv(n,e,t){n.min=e.min-t.min,n.max=n.min+gi(e)}function Xa(n,e,t){cv(n.x,e.x,t.x),cv(n.y,e.y,t.y)}function vT(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?an(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?an(t,n,r.max):Math.min(n,t)),n}function uv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function _T(n,{top:e,left:t,bottom:r,right:o}){return{x:uv(n.x,t,o),y:uv(n.y,e,r)}}function fv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function xT(n,e){return{x:fv(n.x,e.x),y:fv(n.y,e.y)}}function yT(n,e){let t=.5;const r=gi(n),o=gi(e);return o>r?t=Bo(e.min,e.max-r,n.min):r>o&&(t=Bo(n.min,n.max-o,e.min)),Nr(0,1,t)}function ST(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const ph=.35;function MT(n=ph){return n===!1?n=0:n===!0&&(n=ph),{x:dv(n,"left","right"),y:dv(n,"top","bottom")}}function dv(n,e,t){return{min:hv(n,e),max:hv(n,t)}}function hv(n,e){return typeof n=="number"?n:n[e]||0}const pv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Do=()=>({x:pv(),y:pv()}),mv=()=>({min:0,max:0}),vn=()=>({x:mv(),y:mv()});function Ai(n){return[n("x"),n("y")]}function h1({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function ET({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function TT(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function md(n){return n===void 0||n===1}function mh({scale:n,scaleX:e,scaleY:t}){return!md(n)||!md(e)||!md(t)}function Is(n){return mh(n)||p1(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function p1(n){return gv(n.x)||gv(n.y)}function gv(n){return n&&n!=="0%"}function ru(n,e,t){const r=n-t,o=e*r;return t+o}function vv(n,e,t,r,o){return o!==void 0&&(n=ru(n,o,r)),ru(n,t,r)+e}function gh(n,e=0,t=1,r,o){n.min=vv(n.min,e,t,r,o),n.max=vv(n.max,e,t,r,o)}function m1(n,{x:e,y:t}){gh(n.x,e.translate,e.scale,e.originPoint),gh(n.y,t.translate,t.scale,t.originPoint)}const _v=.999999999999,xv=1.0000000000001;function wT(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let u=0;u<o;u++){a=t[u],c=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&No(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,m1(n,c)),r&&Is(a.latestValues)&&No(n,a.latestValues))}e.x<xv&&e.x>_v&&(e.x=1),e.y<xv&&e.y>_v&&(e.y=1)}function Lo(n,e){n.min=n.min+e,n.max=n.max+e}function yv(n,e,t,r,o=.5){const a=an(n.min,n.max,o);gh(n,e,t,a,r)}function No(n,e){yv(n.x,e.x,e.scaleX,e.scale,e.originX),yv(n.y,e.y,e.scaleY,e.scale,e.originY)}function g1(n,e){return h1(TT(n.getBoundingClientRect(),e))}function AT(n,e,t){const r=g1(n,t),{scroll:o}=e;return o&&(Lo(r.x,o.offset.x),Lo(r.y,o.offset.y)),r}const v1=({current:n})=>n?n.ownerDocument.defaultView:null,RT=new WeakMap;class CT{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=vn(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=p=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(sl(p).point)},a=(p,v)=>{const{drag:g,dragPropagation:y,onDragStart:M}=this.getProps();if(g&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=y2(g),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ai(S=>{let x=this.getAxisMotionValue(S).get()||0;if(ir.test(x)){const{projection:D}=this.visualElement;if(D&&D.layout){const I=D.layout.layoutBox[S];I&&(x=gi(I)*(parseFloat(x)/100))}}this.originPoint[S]=x}),M&&tn.postRender(()=>M(p,v)),oh(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},c=(p,v)=>{const{dragPropagation:g,dragDirectionLock:y,onDirectionLock:M,onDrag:A}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:S}=v;if(y&&this.currentDirection===null){this.currentDirection=bT(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",v.point,S),this.updateAxis("y",v.point,S),this.visualElement.render(),A&&A(p,v)},u=(p,v)=>this.stop(p,v),d=()=>Ai(p=>{var v;return this.getAnimationState(p)==="paused"&&((v=this.getAxisMotionValue(p).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new c1(e,{onSessionStart:o,onStart:a,onMove:c,onSessionEnd:u,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:v1(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&tn.postRender(()=>a(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!hc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=vT(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,a=this.constraints;t&&bo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=_T(o.layoutBox,t):this.constraints=!1,this.elastic=MT(r),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Ai(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=ST(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!bo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=AT(r,o.root,this.visualElement.getTransformPagePoint());let c=xT(o.layout.layoutBox,a);if(t){const u=t(ET(c));this.hasMutatedConstraints=!!u,u&&(c=h1(u))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),d=this.constraints||{},h=Ai(p=>{if(!hc(p,t,this.currentDirection))return;let v=d&&d[p]||{};c&&(v={min:0,max:0});const g=o?200:1e6,y=o?40:1e7,M={type:"inertia",velocity:r?e[p]:0,bounceStiffness:g,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(p,M)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return oh(this.visualElement,e),r.start(Hp(e,r,0,t,this.visualElement,!1))}stopAnimation(){Ai(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Ai(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Ai(t=>{const{drag:r}=this.getProps();if(!hc(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t];a.set(e[t]-an(c,u,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!bo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Ai(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const d=u.get();o[c]=yT({min:d,max:d},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ai(c=>{if(!hc(c,e,null))return;const u=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];u.set(an(d,h,o[c]))})}addListeners(){if(!this.visualElement.current)return;RT.set(this.visualElement,this);const e=this.visualElement.current,t=Ga(e,"pointerdown",d=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();bo(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),tn.read(r);const c=Za(window,"resize",()=>this.scalePositionWithinConstraints()),u=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(Ai(p=>{const v=this.getAxisMotionValue(p);v&&(this.originPoint[p]+=d[p].translate,v.set(v.get()+d[p].translate))}),this.visualElement.render())}));return()=>{c(),t(),a(),u&&u()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=ph,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function hc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function bT(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class PT extends hs{constructor(e){super(e),this.removeGroupControls=mi,this.removeListeners=mi,this.controls=new CT(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||mi}unmount(){this.removeGroupControls(),this.removeListeners()}}const Sv=n=>(e,t)=>{n&&tn.postRender(()=>n(e,t))};class DT extends hs{constructor(){super(...arguments),this.removePointerDownListener=mi}onPointerDown(e){this.session=new c1(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:v1(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Sv(e),onStart:Sv(t),onMove:r,onEnd:(a,c)=>{delete this.session,o&&tn.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=Ga(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Gc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Mv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Ra={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(_t.test(n))n=parseFloat(n);else return n;const t=Mv(n,e.target.x),r=Mv(n,e.target.y);return`${t}% ${r}%`}},LT={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=ds.parse(n);if(o.length>5)return r;const a=ds.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,d=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=d;const h=an(u,d,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}};class NT extends Ce.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;JM(IT),a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Gc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,c=r.projection;return c&&(c.isPresent=a,o||e.layoutDependency!==t||t===void 0?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||tn.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),vp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function _1(n){const[e,t]=ex(),r=Ce.useContext(cp);return q.jsx(NT,{...n,layoutGroup:r,switchLayoutGroup:Ce.useContext(lx),isPresent:e,safeToRemove:t})}const IT={borderRadius:{...Ra,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ra,borderTopRightRadius:Ra,borderBottomLeftRadius:Ra,borderBottomRightRadius:Ra,boxShadow:LT};function UT(n,e,t){const r=Yn(n)?n:Ka(n);return r.start(Hp("",r,e,t)),r.animation}function FT(n){return n instanceof SVGElement&&n.tagName!=="svg"}const OT=(n,e)=>n.depth-e.depth;class BT{constructor(){this.children=[],this.isDirty=!1}add(e){Dp(this.children,e),this.isDirty=!0}remove(e){Lp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(OT),this.isDirty=!1,this.children.forEach(e)}}function kT(n,e){const t=rr.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(fs(r),n(a-e))};return tn.read(r,!0),()=>fs(r)}const x1=["TopLeft","TopRight","BottomLeft","BottomRight"],zT=x1.length,Ev=n=>typeof n=="string"?parseFloat(n):n,Tv=n=>typeof n=="number"||_t.test(n);function VT(n,e,t,r,o,a){o?(n.opacity=an(0,t.opacity!==void 0?t.opacity:1,HT(r)),n.opacityExit=an(e.opacity!==void 0?e.opacity:1,0,GT(r))):a&&(n.opacity=an(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let c=0;c<zT;c++){const u=`border${x1[c]}Radius`;let d=wv(e,u),h=wv(t,u);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Tv(d)===Tv(h)?(n[u]=Math.max(an(Ev(d),Ev(h),r),0),(ir.test(h)||ir.test(d))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=an(e.rotate||0,t.rotate||0,r))}function wv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const HT=y1(0,.5,Bx),GT=y1(.5,.95,mi);function y1(n,e,t){return r=>r<n?0:r>e?1:t(Bo(n,e,r))}function Av(n,e){n.min=e.min,n.max=e.max}function Ti(n,e){Av(n.x,e.x),Av(n.y,e.y)}function Rv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function Cv(n,e,t,r,o){return n-=e,n=ru(n,1/t,r),o!==void 0&&(n=ru(n,1/o,r)),n}function WT(n,e=0,t=1,r=.5,o,a=n,c=n){if(ir.test(e)&&(e=parseFloat(e),e=an(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=an(a.min,a.max,r);n===a&&(u-=e),n.min=Cv(n.min,e,t,u,o),n.max=Cv(n.max,e,t,u,o)}function bv(n,e,[t,r,o],a,c){WT(n,e[t],e[r],e[o],e.scale,a,c)}const XT=["x","scaleX","originX"],jT=["y","scaleY","originY"];function Pv(n,e,t,r){bv(n.x,e,XT,t?t.x:void 0,r?r.x:void 0),bv(n.y,e,jT,t?t.y:void 0,r?r.y:void 0)}function Dv(n){return n.translate===0&&n.scale===1}function S1(n){return Dv(n.x)&&Dv(n.y)}function Lv(n,e){return n.min===e.min&&n.max===e.max}function YT(n,e){return Lv(n.x,e.x)&&Lv(n.y,e.y)}function Nv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function M1(n,e){return Nv(n.x,e.x)&&Nv(n.y,e.y)}function Iv(n){return gi(n.x)/gi(n.y)}function Uv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class qT{constructor(){this.members=[]}add(e){Dp(this.members,e),e.scheduleRender()}remove(e){if(Lp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function KT(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(r=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:v,rotateY:g,skewX:y,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),p&&(r+=`rotate(${p}deg) `),v&&(r+=`rotateX(${v}deg) `),g&&(r+=`rotateY(${g}deg) `),y&&(r+=`skewX(${y}deg) `),M&&(r+=`skewY(${M}deg) `)}const u=n.x.scale*e.x,d=n.y.scale*e.y;return(u!==1||d!==1)&&(r+=`scale(${u}, ${d})`),r||"none"}const Us={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ba=typeof window<"u"&&window.MotionDebug!==void 0,gd=["","X","Y","Z"],$T={visibility:"hidden"},Fv=1e3;let ZT=0;function vd(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function E1(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=Dx(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",tn,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&E1(r)}function T1({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=ZT++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ba&&(Us.totalNodes=Us.resolvedTargetDeltas=Us.recalculatedProjection=0),this.nodes.forEach(e3),this.nodes.forEach(s3),this.nodes.forEach(o3),this.nodes.forEach(t3),Ba&&window.MotionDebug.record(Us)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new BT)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Np),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const d=this.eventHandlers.get(c);d&&d.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,u=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=FT(c),this.instance=c;const{layoutId:d,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),u&&(h||d)&&(this.isLayoutDirty=!0),n){let v;const g=()=>this.root.updateBlockedByResize=!1;n(c,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=kT(g,250),Gc.hasAnimatedSinceResize&&(Gc.hasAnimatedSinceResize=!1,this.nodes.forEach(Bv))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&p&&(d||h)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:g,hasRelativeTargetChanged:y,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const A=this.options.transition||p.getDefaultTransition()||f3,{onLayoutAnimationStart:S,onLayoutAnimationComplete:x}=p.getProps(),D=!this.targetLayout||!M1(this.targetLayout,M)||y,I=!g&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||I||g&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,I);const b={...Rp(A,"layout"),onPlay:S,onComplete:x};(p.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else g||Bv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,fs(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(a3),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&E1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const v=this.path[p];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ov);return}this.isUpdating||this.nodes.forEach(i3),this.isUpdating=!1,this.nodes.forEach(r3),this.nodes.forEach(QT),this.nodes.forEach(JT),this.clearAllSnapshots();const u=rr.now();Un.delta=Nr(0,1e3/60,u-Un.timestamp),Un.timestamp=u,Un.isProcessing=!0,ad.update.process(Un),ad.preRender.process(Un),ad.render.process(Un),Un.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,vp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(n3),this.sharedNodes.forEach(l3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,tn.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){tn.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=vn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!S1(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&(u||Is(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let d=this.removeElementScroll(u);return c&&(d=this.removeTransform(d)),d3(d),{animationId:this.root.animationId,measuredBox:u,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:u}=this.options;if(!u)return vn();const d=u.measureViewportBox();if(!(((c=this.scroll)===null||c===void 0?void 0:c.wasRoot)||this.path.some(h3))){const{scroll:p}=this.root;p&&(Lo(d.x,p.offset.x),Lo(d.y,p.offset.y))}return d}removeElementScroll(c){var u;const d=vn();if(Ti(d,c),!((u=this.scroll)===null||u===void 0)&&u.wasRoot)return d;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:v,options:g}=p;p!==this.root&&v&&g.layoutScroll&&(v.wasRoot&&Ti(d,c),Lo(d.x,v.offset.x),Lo(d.y,v.offset.y))}return d}applyTransform(c,u=!1){const d=vn();Ti(d,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];!u&&p.options.layoutScroll&&p.scroll&&p!==p.root&&No(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Is(p.latestValues)&&No(d,p.latestValues)}return Is(this.latestValues)&&No(d,this.latestValues),d}removeTransform(c){const u=vn();Ti(u,c);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Is(h.latestValues))continue;mh(h.latestValues)&&h.updateSnapshot();const p=vn(),v=h.measurePageBox();Ti(p,v),Pv(u,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return Is(this.latestValues)&&Pv(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Un.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var u;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:g}=this.options;if(!(!this.layout||!(v||g))){if(this.resolvedRelativeTargetAt=Un.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=vn(),this.relativeTargetOrigin=vn(),Xa(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Ti(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=vn(),this.targetWithTransforms=vn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),gT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ti(this.target,this.layout.layoutBox),m1(this.target,this.targetDelta)):Ti(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=vn(),this.relativeTargetOrigin=vn(),Xa(this.relativeTargetOrigin,this.target,y.target),Ti(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ba&&Us.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||mh(this.parent.latestValues)||p1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var c;const u=this.getLead(),d=!!this.resumingFrom||this!==u;let h=!0;if((this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Un.timestamp&&(h=!1),h)return;const{layout:p,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||v))return;Ti(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,y=this.treeScale.y;wT(this.layoutCorrected,this.treeScale,this.path,d),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=vn());const{target:M}=u;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Rv(this.prevProjectionDelta.x,this.projectionDelta.x),Rv(this.prevProjectionDelta.y,this.projectionDelta.y)),Wa(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==y||!Uv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Uv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Ba&&Us.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)===null||u===void 0||u.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Do(),this.projectionDelta=Do(),this.projectionDeltaWithTransform=Do()}setAnimationOrigin(c,u=!1){const d=this.snapshot,h=d?d.latestValues:{},p={...this.latestValues},v=Do();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const g=vn(),y=d?d.source:void 0,M=this.layout?this.layout.source:void 0,A=y!==M,S=this.getStack(),x=!S||S.members.length<=1,D=!!(A&&!x&&this.options.crossfade===!0&&!this.path.some(u3));this.animationProgress=0;let I;this.mixTargetDelta=b=>{const P=b/1e3;kv(v.x,c.x,P),kv(v.y,c.y,P),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Xa(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox),c3(this.relativeTarget,this.relativeTargetOrigin,g,P),I&&YT(this.relativeTarget,I)&&(this.isProjectionDirty=!1),I||(I=vn()),Ti(I,this.relativeTarget)),A&&(this.animationValues=p,VT(p,h,this.latestValues,P,D,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(fs(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=tn.update(()=>{Gc.hasAnimatedSinceResize=!0,this.currentAnimation=UT(0,Fv,{...c,onUpdate:u=>{this.mixTargetDelta(u),c.onUpdate&&c.onUpdate(u)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Fv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:d,layout:h,latestValues:p}=c;if(!(!u||!d||!h)){if(this!==c&&this.layout&&h&&w1(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||vn();const v=gi(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+v;const g=gi(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+g}Ti(u,d),No(u,p),Wa(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new qT),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var c;const{layoutId:u}=this.options;return u?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:u}=this.options;return u?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(u=!0),!u)return;const h={};d.z&&vd("z",c,h,this.animationValues);for(let p=0;p<gd.length;p++)vd(`rotate${gd[p]}`,c,h,this.animationValues),vd(`skew${gd[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}getProjectionStyles(c){var u,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return $T;const h={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Vc(c==null?void 0:c.pointerEvents)||"",h.transform=p?p(this.latestValues,""):"none",h;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const A={};return this.options.layoutId&&(A.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,A.pointerEvents=Vc(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!Is(this.latestValues)&&(A.transform=p?p({},""):"none",this.hasProjected=!1),A}const g=v.animationValues||v.latestValues;this.applyTransformsToTarget(),h.transform=KT(this.projectionDeltaWithTransform,this.treeScale,g),p&&(h.transform=p(g,h.transform));const{x:y,y:M}=this.projectionDelta;h.transformOrigin=`${y.origin*100}% ${M.origin*100}% 0`,v.animationValues?h.opacity=v===this?(d=(u=g.opacity)!==null&&u!==void 0?u:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:h.opacity=v===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const A in Jc){if(g[A]===void 0)continue;const{correct:S,applyTo:x}=Jc[A],D=h.transform==="none"?g[A]:S(g[A],v);if(x){const I=x.length;for(let b=0;b<I;b++)h[x[b]]=D}else h[A]=D}return this.options.layoutId&&(h.pointerEvents=v===this?Vc(c==null?void 0:c.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)===null||u===void 0?void 0:u.stop()}),this.root.nodes.forEach(Ov),this.root.sharedNodes.clear()}}}function QT(n){n.updateLayout()}function JT(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,c=t.source!==n.layout.source;a==="size"?Ai(v=>{const g=c?t.measuredBox[v]:t.layoutBox[v],y=gi(g);g.min=r[v].min,g.max=g.min+y}):w1(a,t.layoutBox,r)&&Ai(v=>{const g=c?t.measuredBox[v]:t.layoutBox[v],y=gi(r[v]);g.max=g.min+y,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+y)});const u=Do();Wa(u,r,t.layoutBox);const d=Do();c?Wa(d,n.applyTransform(o,!0),t.measuredBox):Wa(d,r,t.layoutBox);const h=!S1(u);let p=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:g,layout:y}=v;if(g&&y){const M=vn();Xa(M,t.layoutBox,g.layoutBox);const A=vn();Xa(A,r,y.layoutBox),M1(M,A)||(p=!0),v.options.layoutRoot&&(n.relativeTarget=A,n.relativeTargetOrigin=M,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:u,hasLayoutChanged:h,hasRelativeTargetChanged:p})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function e3(n){Ba&&Us.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function t3(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function n3(n){n.clearSnapshot()}function Ov(n){n.clearMeasurements()}function i3(n){n.isLayoutDirty=!1}function r3(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Bv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function s3(n){n.resolveTargetDelta()}function o3(n){n.calcProjection()}function a3(n){n.resetSkewAndRotation()}function l3(n){n.removeLeadSnapshot()}function kv(n,e,t){n.translate=an(e.translate,0,t),n.scale=an(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function zv(n,e,t,r){n.min=an(e.min,t.min,r),n.max=an(e.max,t.max,r)}function c3(n,e,t,r){zv(n.x,e.x,t.x,r),zv(n.y,e.y,t.y,r)}function u3(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const f3={duration:.45,ease:[.4,0,.1,1]},Vv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Hv=Vv("applewebkit/")&&!Vv("chrome/")?Math.round:mi;function Gv(n){n.min=Hv(n.min),n.max=Hv(n.max)}function d3(n){Gv(n.x),Gv(n.y)}function w1(n,e,t){return n==="position"||n==="preserve-aspect"&&!mT(Iv(e),Iv(t),.2)}function h3(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const p3=T1({attachResizeListener:(n,e)=>Za(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),_d={current:void 0},A1=T1({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!_d.current){const n=new p3({});n.mount(window),n.setOptions({layoutScroll:!0}),_d.current=n}return _d.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),m3={pan:{Feature:DT},drag:{Feature:PT,ProjectionNode:A1,MeasureLayout:_1}};function Wv(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&tn.postRender(()=>a(e,sl(e)))}class g3 extends hs{mount(){const{current:e}=this.node;e&&(this.unmount=m2(e,t=>(Wv(this.node,t,"Start"),r=>Wv(this.node,r,"End"))))}unmount(){}}class v3 extends hs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=rl(Za(this.node.current,"focus",()=>this.onFocus()),Za(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Xv(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&tn.postRender(()=>a(e,sl(e)))}class _3 extends hs{mount(){const{current:e}=this.node;e&&(this.unmount=x2(e,t=>(Xv(this.node,t,"Start"),(r,{success:o})=>Xv(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const vh=new WeakMap,xd=new WeakMap,x3=n=>{const e=vh.get(n.target);e&&e(n)},y3=n=>{n.forEach(x3)};function S3({root:n,...e}){const t=n||document;xd.has(t)||xd.set(t,{});const r=xd.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(y3,{root:n,...e})),r[o]}function M3(n,e,t){const r=S3(e);return vh.set(n,t),r.observe(n),()=>{vh.delete(n),r.unobserve(n)}}const E3={some:0,all:1};class T3 extends hs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:E3[o]},u=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,a&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:v}=this.node.getProps(),g=h?p:v;g&&g(d)};return M3(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(w3(e,t))&&this.startObserver()}unmount(){}}function w3({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const A3={inView:{Feature:T3},tap:{Feature:_3},focus:{Feature:v3},hover:{Feature:g3}},R3={layout:{ProjectionNode:A1,MeasureLayout:_1}},_h={current:null},R1={current:!1};function C3(){if(R1.current=!0,!!dp)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>_h.current=n.matches;n.addListener(e),e()}else _h.current=!1}const b3=[...Qx,Xn,ds],P3=n=>b3.find(Zx(n)),jv=new WeakMap;function D3(n,e,t){for(const r in e){const o=e[r],a=t[r];if(Yn(o))n.addValue(r,o);else if(Yn(a))n.addValue(r,Ka(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,Ka(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const Yv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class L3{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:a,visualState:c},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=kp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=rr.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,tn.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:p}=c;this.onUpdate=p,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=u,this.blockInitialAnimation=!!a,this.isControllingVariants=xu(t),this.isVariantNode=ox(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const y in g){const M=g[y];d[y]!==void 0&&Yn(M)&&M.set(d[y],!1)}}mount(e){this.current=e,jv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),R1.current||C3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:_h.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){jv.delete(this.current),this.projection&&this.projection.unmount(),fs(this.notifyUpdate),fs(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Ws.has(e),o=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&tn.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=t.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a(),c&&c(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ko){const t=ko[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):vn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<Yv.length;r++){const o=Yv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=D3(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Ka(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(Kx(o)||zx(o))?o=parseFloat(o):!P3(o)&&ds.test(t)&&(o=jx(e,t)),this.setBaseTarget(e,Yn(o)?o.get():o)),Yn(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const c=xp(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);c&&(o=c[e])}if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!Yn(a)?a:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Np),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class C1 extends L3{constructor(){super(...arguments),this.KeyframeResolver=Jx}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Yn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function N3(n){return window.getComputedStyle(n)}class I3 extends C1{constructor(){super(...arguments),this.type="html",this.renderInstance=mx}readValueFromInstance(e,t){if(Ws.has(t)){const r=Bp(t);return r&&r.default||0}else{const r=N3(e),o=(dx(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return g1(e,t)}build(e,t,r){Mp(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return Ap(e,t,r)}}class U3 extends C1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=vn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ws.has(t)){const r=Bp(t);return r&&r.default||0}return t=gx.has(t)?t:gp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return xx(e,t,r)}build(e,t,r){Ep(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){vx(e,t,r,o)}mount(e){this.isSVGTag=wp(e.tagName),super.mount(e)}}const F3=(n,e)=>_p(n)?new U3(e):new I3(e,{allowProjection:n!==Ce.Fragment}),O3=l2({...oT,...A3,...m3,...R3},F3),yt=EM(O3);var b1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qv=us.createContext&&us.createContext(b1),B3=["attr","size","title"];function k3(n,e){if(n==null)return{};var t,r,o=z3(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function z3(n,e){if(n==null)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)!==-1)continue;t[r]=n[r]}return t}function su(){return su=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},su.apply(null,arguments)}function Kv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function ou(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Kv(Object(t),!0).forEach(function(r){V3(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Kv(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function V3(n,e,t){return(e=H3(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function H3(n){var e=G3(n,"string");return typeof e=="symbol"?e:e+""}function G3(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function P1(n){return n&&n.map((e,t)=>us.createElement(e.tag,ou({key:t},e.attr),P1(e.child)))}function ln(n){return e=>us.createElement(W3,su({attr:ou({},n.attr)},e),P1(n.child))}function W3(n){var e=t=>{var{attr:r,size:o,title:a}=n,c=k3(n,B3),u=o||t.size||"1em",d;return t.className&&(d=t.className),n.className&&(d=(d?d+" ":"")+n.className),us.createElement("svg",su({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:d,style:ou(ou({color:n.color||t.color},t.style),n.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&us.createElement("title",null,a),n.children)};return qv!==void 0?us.createElement(qv.Consumer,null,t=>e(t)):e(b1)}function X3(n){return ln({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"},child:[]}]})(n)}function j3(n){return ln({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"},child:[]},{tag:"path",attr:{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"},child:[]}]})(n)}function Y3(n){return ln({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",clipRule:"evenodd"},child:[]}]})(n)}function q3(n){return ln({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"},child:[]}]})(n)}function K3(n){return ln({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"},child:[]},{tag:"path",attr:{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"},child:[]}]})(n)}function $3(n){return ln({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(n)}function Z3(n){return ln({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(n)}function Q3(n){return ln({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"},child:[]}]})(n)}function D1(n){return ln({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},child:[]}]})(n)}function J3(n){return ln({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"},child:[]}]})(n)}const yd=[{href:"#home",label:"Home",Icon:q3},{href:"#about",label:"About",Icon:X3},{href:"#skills",label:"Skills",Icon:Y3},{href:"#projects",label:"Projects",Icon:$3},{href:"#contact",label:"Contact",Icon:j3}];function ew(){const[n,e]=Ce.useState(!1),[t,r]=Ce.useState("home");Ce.useEffect(()=>{const a=()=>e(window.scrollY>50);return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),Ce.useEffect(()=>{const a=new IntersectionObserver(c=>c.forEach(u=>u.isIntersecting&&r(u.target.id)),{rootMargin:"-40% 0px -55% 0px"});return yd.forEach(({href:c})=>{const u=document.getElementById(c.slice(1));u&&a.observe(u)}),()=>a.disconnect()},[]);const o=a=>{var c;return(c=document.querySelector(a))==null?void 0:c.scrollIntoView({behavior:"smooth"})};return q.jsxs(q.Fragment,{children:[q.jsx(yt.header,{className:`navbar ${n?"navbar--scrolled":""}`,initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,ease:[.22,1,.36,1]},children:q.jsxs("nav",{className:"navbar__inner container",children:[q.jsxs(yt.a,{href:"#home",className:"navbar__logo",onClick:a=>{a.preventDefault(),o("#home")},whileHover:{scale:1.05},whileTap:{scale:.95},children:["SD",q.jsx("span",{className:"navbar__logo-dot",children:"."})]}),q.jsx("ul",{className:"navbar__links",role:"list",children:yd.map((a,c)=>{const u=a.href.slice(1),d=t===u;return q.jsx(yt.li,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.1*c+.3,duration:.5},children:q.jsxs("button",{className:`nav-btn ${d?"is-active":""}`,onClick:()=>o(a.href),children:[q.jsx(yt.span,{className:"nav-btn__bg",animate:{opacity:d?1:0},transition:{duration:.25}}),q.jsx(yt.span,{className:"nav-btn__bar",animate:{opacity:d?1:0,scaleX:d?1:.3},transition:{type:"spring",stiffness:400,damping:28}}),q.jsx(yt.span,{className:"nav-btn__cone",animate:{opacity:d?1:0},transition:{duration:.28}}),q.jsx(yt.span,{className:"nav-btn__icon",animate:d?{y:-2,scale:1.15}:{y:0,scale:1},transition:{type:"spring",stiffness:440,damping:26},children:q.jsx(a.Icon,{})}),q.jsx("span",{className:"nav-btn__label",children:a.label})]})},a.href)})}),q.jsx("div",{className:"navbar__actions",children:q.jsx(yt.a,{href:"#contact",className:"btn btn--primary navbar__cta",onClick:a=>{a.preventDefault(),o("#contact")},whileHover:{scale:1.04,boxShadow:"0 8px 30px rgba(99,102,241,0.4)"},whileTap:{scale:.97},children:"Let's Talk"})})]})}),q.jsx(yt.nav,{className:"bottom-nav","aria-label":"Mobile navigation",initial:{y:100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,delay:.4,ease:[.22,1,.36,1]},children:yd.map(a=>{const c=a.href.slice(1),u=t===c;return q.jsxs("button",{className:`nav-btn bottom-nav__btn ${u?"is-active":""}`,onClick:()=>o(a.href),children:[q.jsx(yt.span,{className:"nav-btn__bg",animate:{opacity:u?1:0},transition:{duration:.25}}),q.jsx(yt.span,{className:"nav-btn__bar",animate:{opacity:u?1:0,scaleX:u?1:.3},transition:{type:"spring",stiffness:400,damping:28}}),q.jsx(yt.span,{className:"nav-btn__cone",animate:{opacity:u?1:0},transition:{duration:.28}}),q.jsx(yt.span,{className:"nav-btn__icon",animate:u?{y:-2,scale:1.15}:{y:0,scale:1},transition:{type:"spring",stiffness:440,damping:26},children:q.jsx(a.Icon,{})}),q.jsx("span",{className:"nav-btn__label",children:a.label})]},a.href)})})]})}function L1(n){return ln({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(n)}function Gp(n){return ln({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(n)}const $v="0123456789ABCDEF!@#$%&*<>~✦";function Zv({word:n,className:e="",isAccent:t=!1}){const[r,o]=Ce.useState(n.split("")),[a,c]=Ce.useState([]),u=Ce.useRef({}),d=Ce.useCallback(p=>{u.current[p]&&clearInterval(u.current[p]);let v=0;const g=7;u.current[p]=setInterval(()=>{v++,v>=g?(clearInterval(u.current[p]),delete u.current[p],o(y=>{const M=[...y];return M[p]=n[p],M})):o(y=>{const M=[...y];return M[p]=$v[Math.floor(Math.random()*$v.length)],M})},32)},[n]),h=Ce.useCallback(p=>{const v=p.currentTarget.getBoundingClientRect(),g=p.clientX-v.left,y=p.clientY-v.top,M=Array.from({length:4}).map((A,S)=>({id:Math.random()+Date.now(),x:g+(Math.random()-.5)*20,y:y+(Math.random()-.5)*16,dx:(Math.random()-.5)*45,dy:-15-Math.random()*35,size:Math.random()*4+2,color:t?S%2===0?"#00f0ff":"#38bdf8":S%2===0?"#ffffff":"#818cf8"}));c(A=>[...A.slice(-16),...M]),setTimeout(()=>{c(A=>A.filter(S=>!M.some(x=>x.id===S.id)))},700)},[t]);return q.jsxs("span",{className:`interactive-word ${e}`,children:[q.jsx("span",{className:"interactive-word__sparks","aria-hidden":"true",children:a.map(p=>q.jsx(yt.span,{className:"spark-particle",style:{left:p.x,top:p.y,width:p.size,height:p.size,backgroundColor:p.color,boxShadow:`0 0 10px ${p.color}, 0 0 20px ${p.color}`},initial:{opacity:1,scale:1},animate:{x:p.dx,y:p.dy,opacity:0,scale:.2},transition:{duration:.65,ease:"easeOut"}},p.id))}),r.map((p,v)=>{const g=(v%2===0?1:-1)*(5+v%3*2);return q.jsx(yt.span,{className:`interactive-char ${t?"interactive-char--accent":"interactive-char--first"}`,onMouseEnter:y=>{d(v),h(y)},whileHover:{y:-8,scale:1.15,rotate:g,filter:t?"drop-shadow(0 0 25px rgba(0, 240, 255, 1)) drop-shadow(0 0 45px rgba(56, 189, 248, 0.9))":"drop-shadow(0 0 25px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 40px rgba(99, 102, 241, 0.7))",transition:{type:"spring",stiffness:500,damping:14,mass:.5}},whileTap:{scale:.95},children:p},v)})]})}function tw({firstName:n="Sourabh",lastName:e="Dhulrao"}){return q.jsxs(yt.h1,{className:"hero__name",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.35,ease:[.22,1,.36,1]},children:[q.jsx(Zv,{word:n,className:"hero__word-first",isAccent:!1}),q.jsx(Zv,{word:e,className:"hero__word-accent",isAccent:!0})]})}function nw(){return q.jsxs("section",{id:"home",className:"hero",children:[q.jsxs("div",{className:"hero__bg",children:[q.jsx(yt.div,{className:"hero__orb hero__orb--1",animate:{x:[0,30,0],y:[0,-20,0]},transition:{duration:8,repeat:1/0,ease:"easeInOut"}}),q.jsx(yt.div,{className:"hero__orb hero__orb--2",animate:{x:[0,-25,0],y:[0,25,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}}),q.jsx("div",{className:"hero__grid"})]}),q.jsxs("div",{className:"container hero__container",children:[q.jsxs("div",{className:"hero__content",children:[q.jsx(yt.div,{className:"hero__greeting-wrapper",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:q.jsx("span",{className:"hero__greeting",children:"Hello, I'm"})}),q.jsx(tw,{firstName:"Sourabh",lastName:"Dhulrao"}),q.jsx(yt.p,{className:"hero__tagline",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.55},children:"An AI Developer who Build things that people remember, not just websites."}),q.jsxs(yt.div,{className:"hero__actions",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.75},children:[q.jsx(yt.a,{href:"#projects",className:"btn btn--primary",onClick:n=>{var e;n.preventDefault(),(e=document.querySelector("#projects"))==null||e.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.05,boxShadow:"0 8px 30px rgba(99, 102, 241, 0.45)"},whileTap:{scale:.97},children:"View My Work"}),q.jsxs(yt.a,{href:"#contact",className:"btn btn--outline",onClick:n=>{var e;n.preventDefault(),(e=document.querySelector("#contact"))==null||e.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.05,borderColor:"var(--accent)"},whileTap:{scale:.97},children:[q.jsx(D1,{})," Get In Touch"]})]}),q.jsx(yt.div,{className:"hero__socials",initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:1},children:[{icon:Gp,href:"https://github.com",label:"GitHub"},{icon:L1,href:"https://linkedin.com",label:"LinkedIn"}].map(({icon:n,href:e,label:t},r)=>q.jsx(yt.a,{href:e,target:"_blank",rel:"noopener noreferrer","aria-label":t,initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{delay:1.1+r*.1},whileHover:{y:-4,color:"var(--accent)"},children:q.jsx(n,{})},t))})]}),q.jsx("div",{className:"hero__stage","aria-hidden":"true"})]}),q.jsx(yt.a,{href:"#about",className:"hero__scroll",onClick:n=>{var e;n.preventDefault(),(e=document.querySelector("#about"))==null||e.scrollIntoView({behavior:"smooth"})},initial:{opacity:0},animate:{opacity:1},transition:{delay:1.4},children:q.jsx(yt.span,{animate:{y:[0,8,0]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"},children:q.jsx(Q3,{})})})]})}const N1={hidden:{opacity:0,y:40},visible:(n=0)=>({opacity:1,y:0,transition:{duration:.7,delay:n,ease:[.22,1,.36,1]}})},I1={hidden:{opacity:0,x:-60},visible:(n=0)=>({opacity:1,x:0,transition:{duration:.7,delay:n,ease:[.22,1,.36,1]}})},U1={hidden:{opacity:0,x:60},visible:(n=0)=>({opacity:1,x:0,transition:{duration:.7,delay:n,ease:[.22,1,.36,1]}})};function Wc({children:n,variant:e=N1,delay:t=0,className:r=""}){return q.jsx(yt.div,{className:r,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},custom:t,variants:e,children:n})}function Mu({label:n,title:e,description:t}){return q.jsxs(Wc,{className:"section-heading",children:[q.jsx("span",{className:"section-label",children:n}),q.jsx("h2",{className:"section-title",children:e}),t&&q.jsx("p",{className:"section-desc",children:t})]})}const iw="/Portfolio/assets/sourabh-CZjpEgx1.png",rw=[{value:"3+",label:"Years Experience"},{value:"20+",label:"Projects Completed"},{value:"15+",label:"Technologies"}];function sw(){return q.jsx("section",{id:"about",className:"section about",children:q.jsxs("div",{className:"container about__grid",children:[q.jsxs(yt.div,{className:"about__visual",initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},variants:I1,children:[q.jsxs("div",{className:"about__photo-stack",children:[q.jsx(yt.div,{className:"about__photo-ring",animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"}}),q.jsx("div",{className:"about__photo-card-back about__photo-card-back--left"}),q.jsx("div",{className:"about__photo-card-back about__photo-card-back--right"}),q.jsxs("div",{className:"about__photo-card",children:[q.jsx("img",{src:iw,alt:"Sourabh Dhulrao",className:"about__photo-img"}),q.jsx("div",{className:"about__photo-sweep"}),q.jsx("span",{className:"about__photo-hint",children:"Hover to reveal"})]})]}),q.jsx("div",{className:"about__stats",children:rw.map((n,e)=>q.jsxs(yt.div,{className:"about__stat",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2+e*.1,duration:.5},whileHover:{y:-4,transition:{duration:.2}},children:[q.jsx("span",{className:"about__stat-value",children:n.value}),q.jsx("span",{className:"about__stat-label",children:n.label})]},n.label))})]}),q.jsxs(yt.div,{className:"about__text",initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},variants:U1,children:[q.jsx(Mu,{label:"About Me",title:"Passionate about building things that matter"}),q.jsx(Wc,{delay:.1,children:q.jsxs("p",{children:["I'm ",q.jsx("strong",{children:"Sourabh Dhulrao"}),", a developer who loves turning ideas into polished, performant web applications. I focus on writing maintainable code, creating intuitive user interfaces, and delivering solutions that make a real impact."]})}),q.jsx(Wc,{delay:.2,children:q.jsx("p",{children:"When I'm not coding, you'll find me exploring new technologies, contributing to open source, or refining my craft one project at a time. I believe great software is a blend of technical excellence and human-centered design."})}),q.jsx(Wc,{delay:.3,children:q.jsx(yt.a,{href:"#contact",className:"btn btn--primary",onClick:n=>{var e;n.preventDefault(),(e=document.querySelector("#contact"))==null||e.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.04},whileTap:{scale:.97},children:"Download Resume"})})]})]})})}function ow(n){return ln({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(n)}function aw(n){return ln({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(n)}function lw(n){return ln({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(n)}function cw(n){return ln({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"},child:[]}]})(n)}function uw(n){return ln({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"},child:[]}]})(n)}function fw(n){return ln({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"},child:[]}]})(n)}function dw(n){return ln({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"},child:[]}]})(n)}function hw(n){return ln({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(n)}function pw(n){return ln({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(n)}function mw(n){return ln({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"},child:[]}]})(n)}function gw(n){return ln({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"},child:[]}]})(n)}const vw=["All","Frontend","Backend","Database","DevOps & Tools"],pc=[{name:"React",icon:lw,color:"#61DAFB",category:"Frontend",level:"Frontend"},{name:"Next.js",icon:dw,color:"#ffffff",category:"Frontend",level:"Framework"},{name:"TypeScript",icon:ow,color:"#3178C6",category:"Frontend",level:"Language"},{name:"JavaScript",icon:pw,color:"#F7DF1E",category:"Frontend",level:"Language"},{name:"Tailwind",icon:aw,color:"#06B6D4",category:"Frontend",level:"Styling"},{name:"Node.js",icon:fw,color:"#339933",category:"Backend",level:"Runtime"},{name:"Python",icon:cw,color:"#3776AB",category:"Backend",level:"Language"},{name:"MongoDB",icon:hw,color:"#47A248",category:"Database",level:"NoSQL"},{name:"PostgreSQL",icon:uw,color:"#4169E1",category:"Database",level:"Relational"},{name:"Docker",icon:gw,color:"#2496ED",category:"DevOps & Tools",level:"Containers"},{name:"Git",icon:mw,color:"#F05032",category:"DevOps & Tools",level:"Version Control"}];function _w(){const{theme:n}=fM(),[e,t]=Ce.useState("All"),[r,o]=Ce.useState(null),a=e==="All"?pc:pc.filter(c=>c.category===e);return q.jsx("section",{id:"skills",className:"section skills",children:q.jsxs("div",{className:"container",children:[q.jsx(Mu,{label:"Skills & Expertise",title:"Technologies I work with",description:"A curated toolkit built through production projects, open source, and continuous learning."}),q.jsx("div",{className:"skills__filters",children:vw.map(c=>{const u=c==="All"?pc.length:pc.filter(h=>h.category===c).length,d=e===c;return q.jsxs("button",{type:"button",className:`skills__filter-btn ${d?"active":""}`,onClick:()=>t(c),children:[c," (",u,")"]},c)})}),q.jsx(yt.div,{className:"skills__grid",layout:!0,transition:{duration:.35,ease:[.22,1,.36,1]},children:q.jsx(nh,{children:a.map(c=>{const u=r===c.name,d=c.name==="Next.js"?n==="dark"?"#ffffff":"#000000":c.color;return q.jsxs(yt.div,{layout:!0,initial:{opacity:0,scale:.85,y:15},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.85,y:-15},transition:{duration:.3},className:"skill-card",onMouseEnter:()=>o(c.name),onMouseLeave:()=>o(null),whileHover:{y:-8,scale:1.03,borderColor:`${c.color}99`,boxShadow:`0 0 32px -4px ${c.color}45, 0 16px 32px rgba(0, 0, 0, 0.45)`},whileTap:{scale:.98},children:[q.jsx("div",{className:"skill-card__glow",style:{background:`radial-gradient(circle at 50% 25%, ${c.color}24 0%, transparent 75%)`}}),q.jsx("div",{className:"skill-card__icon-wrapper",style:{borderColor:u?`${c.color}55`:void 0,boxShadow:u?`0 0 20px ${c.color}35`:void 0},children:q.jsx(c.icon,{style:{color:d,filter:u?`drop-shadow(0 0 14px ${c.color})`:`drop-shadow(0 0 6px ${c.color}40)`},className:"skill-card__icon"})}),q.jsx("span",{className:"skill-card__name",children:c.name}),q.jsx("span",{className:"skill-card__badge",children:c.level})]},c.name)})})})]})})}const xw=[{id:1,title:"E-Commerce Platform",description:"A full-stack online store with cart, payments, and admin dashboard. Built for performance and scalability with real-time inventory tracking.",tags:["React","Node.js","MongoDB","Stripe"],accent:"#f59e0b",size:"large",year:"2024",category:"Full-Stack",live:"#",github:"#"},{id:2,title:"Task Management App",description:"Real-time collaborative task board with drag-and-drop, notifications, and team workspaces.",tags:["Next.js","TypeScript","PostgreSQL","Socket.io"],accent:"#e11d48",size:"medium",year:"2024",category:"SaaS",live:"#",github:"#"},{id:3,title:"Weather Dashboard",description:"Beautiful weather app with location search, 7-day forecasts, and animated data visualizations.",tags:["React","OpenWeather API","Chart.js"],accent:"#06b6d4",size:"medium",year:"2023",category:"Data Viz",live:"#",github:"#"},{id:4,title:"Portfolio CMS",description:"Headless CMS for developers to manage portfolio content with a clean admin interface.",tags:["Python","Django","React","Docker"],accent:"#10b981",size:"medium",year:"2023",category:"Dev Tools",live:"#",github:"#"},{id:5,title:"AI Chat Bot",description:"Intelligent conversational AI assistant powered by LLMs with context memory, multi-turn dialogue, and a sleek real-time UI.",tags:["Python","FastAPI","LangChain","React"],accent:"#a855f7",size:"medium",year:"2024",category:"AI / ML",live:"#",github:"#"}];function yw({project:n,index:e}){const[t,r]=Ce.useState(!1);return q.jsxs(yt.article,{className:`pj-card pj-card--${n.size}`,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},custom:e*.08,variants:N1,onHoverStart:()=>r(!0),onHoverEnd:()=>r(!1),style:{"--accent":n.accent},children:[q.jsx(yt.div,{className:"pj-card__bar",animate:{scaleX:t?1:.28,opacity:t?1:.5},transition:{duration:.35,ease:[.22,1,.36,1]}}),q.jsx("span",{className:"pj-card__index",children:String(e+1).padStart(2,"0")}),q.jsx("div",{className:"pj-card__category",children:n.category}),q.jsxs("div",{className:"pj-card__body",children:[q.jsx("h3",{className:"pj-card__title",children:n.title}),q.jsx("p",{className:"pj-card__desc",children:n.description}),q.jsx("div",{className:"pj-card__tags",children:n.tags.map(o=>q.jsx("span",{className:"pj-card__tag",children:o},o))})]}),q.jsxs("div",{className:"pj-card__footer",children:[q.jsx("span",{className:"pj-card__year",children:n.year}),q.jsxs("div",{className:"pj-card__links",children:[q.jsx(yt.a,{href:n.github,"aria-label":"GitHub",className:"pj-link",whileHover:{scale:1.12},whileTap:{scale:.9},children:q.jsx(Gp,{})}),q.jsx(yt.a,{href:n.live,"aria-label":"Live demo",className:"pj-link pj-link--accent",whileHover:{scale:1.12},whileTap:{scale:.9},children:q.jsx(K3,{})})]})]}),q.jsx(nh,{children:t&&q.jsx(yt.div,{className:"pj-card__glow",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}})}),q.jsx(nh,{children:t&&q.jsxs(yt.div,{className:"pj-card__reveal",initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:8},transition:{duration:.25},children:["View Project ",q.jsx(Z3,{})]})})]})}function Sw(){return q.jsx("section",{id:"projects",className:"section projects",children:q.jsxs("div",{className:"container",children:[q.jsx(Mu,{label:"Projects",title:"Selected work",description:"A curated set of projects that reflect my craft."}),q.jsx("div",{className:"pj-grid",children:xw.map((n,e)=>q.jsx(yw,{project:n,index:e},n.id))})]})})}function Mw(){const[n,e]=Ce.useState({name:"",email:"",message:""}),[t,r]=Ce.useState(!1),o=a=>{a.preventDefault(),r(!0),setTimeout(()=>{r(!1),e({name:"",email:"",message:""})},3e3)};return q.jsx("section",{id:"contact",className:"section contact",children:q.jsxs("div",{className:"container contact__grid",children:[q.jsxs(yt.div,{className:"contact__info",initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},variants:I1,children:[q.jsx(Mu,{label:"Contact",title:"Let's work together",description:"Have a project in mind or just want to say hello? I'd love to hear from you."}),q.jsxs("div",{className:"contact__details",children:[q.jsxs(yt.a,{href:"mailto:sourabh.dhulrao@email.com",className:"contact__detail",whileHover:{x:6},children:[q.jsx(D1,{}),q.jsx("span",{children:"sourabh.dhulrao@email.com"})]}),q.jsxs("div",{className:"contact__detail",children:[q.jsx(J3,{}),q.jsx("span",{children:"India"})]})]}),q.jsx("div",{className:"contact__socials",children:[{icon:Gp,href:"https://github.com",label:"GitHub"},{icon:L1,href:"https://linkedin.com",label:"LinkedIn"}].map(({icon:a,href:c,label:u})=>q.jsx(yt.a,{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":u,whileHover:{y:-4,color:"var(--accent)"},children:q.jsx(a,{})},u))})]}),q.jsxs(yt.form,{className:"contact__form",onSubmit:o,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},variants:U1,children:[["name","email","message"].map((a,c)=>q.jsxs(yt.div,{className:`form-group ${a==="message"?"form-group--full":""}`,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1*c,duration:.5},children:[q.jsx("label",{htmlFor:a,children:a.charAt(0).toUpperCase()+a.slice(1)}),a==="message"?q.jsx("textarea",{id:a,rows:5,value:n.message,onChange:u=>e({...n,message:u.target.value}),required:!0,placeholder:"Tell me about your project..."}):q.jsx("input",{id:a,type:a==="email"?"email":"text",value:n[a],onChange:u=>e({...n,[a]:u.target.value}),required:!0,placeholder:a==="name"?"Your name":"your@email.com"})]},a)),q.jsx(yt.button,{type:"submit",className:"btn btn--primary btn--full",whileHover:{scale:1.02,boxShadow:"0 8px 30px rgba(99, 102, 241, 0.4)"},whileTap:{scale:.98},children:t?"Message Sent!":"Send Message"})]})]})})}function Ew(){const n=new Date().getFullYear();return q.jsx(yt.footer,{className:"footer",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6},children:q.jsxs("div",{className:"container footer__inner",children:[q.jsxs("p",{children:["Designed & Built by ",q.jsx("strong",{children:"Sourabh Dhulrao"})]}),q.jsxs("p",{className:"footer__copy",children:["© ",n," All rights reserved."]})]})})}function Tw({SIM_RESOLUTION:n=128,DYE_RESOLUTION:e=1440,CAPTURE_RESOLUTION:t=512,DENSITY_DISSIPATION:r=3.5,VELOCITY_DISSIPATION:o=2,PRESSURE:a=.1,PRESSURE_ITERATIONS:c=20,CURL:u=3,SPLAT_RADIUS:d=.2,SPLAT_FORCE:h=6e3,SHADING:p=!0,COLOR_UPDATE_SPEED:v=10,BACK_COLOR:g={r:.5,g:0,b:0},TRANSPARENT:y=!0,RAINBOW_MODE:M=!0,COLOR:A="#ff0000",OPACITY:S=.35}){const x=Ce.useRef(null),D=Ce.useRef(null);return Ce.useEffect(()=>{const I=x.current;if(!I)return;let b=!0;function P(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}const L=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=768;let F={SIM_RESOLUTION:L?Math.min(n,96):n,DYE_RESOLUTION:L?Math.min(e,512):e,DENSITY_DISSIPATION:r,VELOCITY_DISSIPATION:o,PRESSURE:a,PRESSURE_ITERATIONS:L?Math.min(c,14):c,CURL:u,SPLAT_RADIUS:d,SPLAT_FORCE:h,SHADING:p,COLOR_UPDATE_SPEED:v,RAINBOW_MODE:M,COLOR:A},T=[new P];const{gl:w,ext:B}=Y(I);B.supportLinearFiltering||(F.DYE_RESOLUTION=256,F.SHADING=!1);function Y(k){const he={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let ve=k.getContext("webgl2",he);const Fe=!!ve;Fe||(ve=k.getContext("webgl",he)||k.getContext("experimental-webgl",he));let ht,Ut;Fe?(ve.getExtension("EXT_color_buffer_float"),Ut=ve.getExtension("OES_texture_float_linear")):(ht=ve.getExtension("OES_texture_half_float"),Ut=ve.getExtension("OES_texture_half_float_linear")),ve.clearColor(0,0,0,1);const ut=Fe?ve.HALF_FLOAT:ht&&ht.HALF_FLOAT_OES;let cn,Qt,On;return Fe?(cn=ee(ve,ve.RGBA16F,ve.RGBA,ut),Qt=ee(ve,ve.RG16F,ve.RG,ut),On=ee(ve,ve.R16F,ve.RED,ut)):(cn=ee(ve,ve.RGBA,ve.RGBA,ut),Qt=ee(ve,ve.RGBA,ve.RGBA,ut),On=ee(ve,ve.RGBA,ve.RGBA,ut)),{gl:ve,ext:{formatRGBA:cn,formatRG:Qt,formatR:On,halfFloatTexType:ut,supportLinearFiltering:Ut}}}function ee(k,he,ve,Fe){if(!ne(k,he,ve,Fe))switch(he){case k.R16F:return ee(k,k.RG16F,k.RG,Fe);case k.RG16F:return ee(k,k.RGBA16F,k.RGBA,Fe);default:return null}return{internalFormat:he,format:ve}}function ne(k,he,ve,Fe){const ht=k.createTexture();k.bindTexture(k.TEXTURE_2D,ht),k.texParameteri(k.TEXTURE_2D,k.TEXTURE_MIN_FILTER,k.NEAREST),k.texParameteri(k.TEXTURE_2D,k.TEXTURE_MAG_FILTER,k.NEAREST),k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_S,k.CLAMP_TO_EDGE),k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_T,k.CLAMP_TO_EDGE),k.texImage2D(k.TEXTURE_2D,0,he,4,4,0,ve,Fe,null);const Ut=k.createFramebuffer();return k.bindFramebuffer(k.FRAMEBUFFER,Ut),k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ht,0),k.checkFramebufferStatus(k.FRAMEBUFFER)===k.FRAMEBUFFER_COMPLETE}class K{constructor(he,ve){this.vertexShader=he,this.fragmentShaderSource=ve,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(he){let ve=0;for(let ht=0;ht<he.length;ht++)ve+=qo(he[ht]);let Fe=this.programs[ve];if(Fe==null){let ht=W(w.FRAGMENT_SHADER,this.fragmentShaderSource,he);Fe=ge(this.vertexShader,ht),this.programs[ve]=Fe}Fe!==this.activeProgram&&(this.uniforms=Z(Fe),this.activeProgram=Fe)}bind(){w.useProgram(this.activeProgram)}}class J{constructor(he,ve){this.uniforms={},this.program=ge(he,ve),this.uniforms=Z(this.program)}bind(){w.useProgram(this.program)}}function ge(k,he){let ve=w.createProgram();return w.attachShader(ve,k),w.attachShader(ve,he),w.linkProgram(ve),w.getProgramParameter(ve,w.LINK_STATUS)||console.trace(w.getProgramInfoLog(ve)),ve}function Z(k){let he=[],ve=w.getProgramParameter(k,w.ACTIVE_UNIFORMS);for(let Fe=0;Fe<ve;Fe++){let ht=w.getActiveUniform(k,Fe).name;he[ht]=w.getUniformLocation(k,ht)}return he}function W(k,he,ve){he=Q(he,ve);const Fe=w.createShader(k);return w.shaderSource(Fe,he),w.compileShader(Fe),w.getShaderParameter(Fe,w.COMPILE_STATUS)||console.trace(w.getShaderInfoLog(Fe)),Fe}function Q(k,he){if(!he)return k;let ve="";return he.forEach(Fe=>{ve+="#define "+Fe+`
`}),ve+k}const X=W(w.VERTEX_SHADER,`
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
      `),U=W(w.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `),ae=W(w.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `),Ee=`
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
    `,We=W(w.FRAGMENT_SHADER,`
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
      `),Be=W(w.FRAGMENT_SHADER,`
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
      `,B.supportLinearFiltering?null:["MANUAL_FILTERING"]),Ye=W(w.FRAGMENT_SHADER,`
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
      `),oe=W(w.FRAGMENT_SHADER,`
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
      `),ue=W(w.FRAGMENT_SHADER,`
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
      `),Re=W(w.FRAGMENT_SHADER,`
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
      `),nt=W(w.FRAGMENT_SHADER,`
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
      `),Pe=(w.bindBuffer(w.ARRAY_BUFFER,w.createBuffer()),w.bufferData(w.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),w.STATIC_DRAW),w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,w.createBuffer()),w.bufferData(w.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),w.STATIC_DRAW),w.vertexAttribPointer(0,2,w.FLOAT,!1,0,0),w.enableVertexAttribArray(0),(k,he=!1)=>{k==null?(w.viewport(0,0,w.drawingBufferWidth,w.drawingBufferHeight),w.bindFramebuffer(w.FRAMEBUFFER,null)):(w.viewport(0,0,k.width,k.height),w.bindFramebuffer(w.FRAMEBUFFER,k.fbo)),he&&(w.clearColor(0,0,0,1),w.clear(w.COLOR_BUFFER_BIT)),w.drawElements(w.TRIANGLES,6,w.UNSIGNED_SHORT,0)});let at,rt,xt,At,Rt;const Se=new J(X,U),pt=new J(X,ae),lt=new J(X,We),dt=new J(X,Be),Ct=new J(X,Ye),Nt=new J(X,oe),z=new J(X,ue),Yt=new J(X,Re),ct=new J(X,nt),N=new K(X,Ee);function E(){let k=Yi(F.SIM_RESOLUTION),he=Yi(F.DYE_RESOLUTION);const ve=B.halfFloatTexType,Fe=B.formatRGBA,ht=B.formatRG,Ut=B.formatR,ut=B.supportLinearFiltering?w.LINEAR:w.NEAREST;w.disable(w.BLEND),at?at=we(at,he.width,he.height,Fe.internalFormat,Fe.format,ve,ut):at=se(he.width,he.height,Fe.internalFormat,Fe.format,ve,ut),rt?rt=we(rt,k.width,k.height,ht.internalFormat,ht.format,ve,ut):rt=se(k.width,k.height,ht.internalFormat,ht.format,ve,ut),xt=$(k.width,k.height,Ut.internalFormat,Ut.format,ve,w.NEAREST),At=$(k.width,k.height,Ut.internalFormat,Ut.format,ve,w.NEAREST),Rt=se(k.width,k.height,Ut.internalFormat,Ut.format,ve,w.NEAREST)}function $(k,he,ve,Fe,ht,Ut){w.activeTexture(w.TEXTURE0);let ut=w.createTexture();w.bindTexture(w.TEXTURE_2D,ut),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MIN_FILTER,Ut),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MAG_FILTER,Ut),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_WRAP_S,w.CLAMP_TO_EDGE),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_WRAP_T,w.CLAMP_TO_EDGE),w.texImage2D(w.TEXTURE_2D,0,ve,k,he,0,Fe,ht,null);let cn=w.createFramebuffer();w.bindFramebuffer(w.FRAMEBUFFER,cn),w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ut,0),w.viewport(0,0,k,he),w.clear(w.COLOR_BUFFER_BIT);let Qt=1/k,On=1/he;return{texture:ut,fbo:cn,width:k,height:he,texelSizeX:Qt,texelSizeY:On,attach(C){return w.activeTexture(w.TEXTURE0+C),w.bindTexture(w.TEXTURE_2D,ut),C}}}function se(k,he,ve,Fe,ht,Ut){let ut=$(k,he,ve,Fe,ht,Ut),cn=$(k,he,ve,Fe,ht,Ut);return{width:k,height:he,texelSizeX:ut.texelSizeX,texelSizeY:ut.texelSizeY,get read(){return ut},set read(Qt){ut=Qt},get write(){return cn},set write(Qt){cn=Qt},swap(){let Qt=ut;ut=cn,cn=Qt}}}function pe(k,he,ve,Fe,ht,Ut,ut){let cn=$(he,ve,Fe,ht,Ut,ut);return Se.bind(),w.uniform1i(Se.uniforms.uTexture,k.attach(0)),Pe(cn),cn}function we(k,he,ve,Fe,ht,Ut,ut){return k.width===he&&k.height===ve||(k.read=pe(k.read,he,ve,Fe,ht,Ut,ut),k.write=$(he,ve,Fe,ht,Ut,ut),k.width=he,k.height=ve,k.texelSizeX=1/he,k.texelSizeY=1/ve),k}function De(){let k=[];F.SHADING&&k.push("SHADING"),N.setKeywords(k)}De(),E();let me=Date.now(),_e=0;function Le(){if(!b)return;const k=et();Oe()&&E(),Ne(k),tt(),ft(k),vt(null),D.current=requestAnimationFrame(Le)}function et(){let k=Date.now(),he=(k-me)/1e3;return he=Math.min(he,.016666),me=k,he}function Oe(){let k=An(I.clientWidth),he=An(I.clientHeight);return I.width!==k||I.height!==he?(I.width=k,I.height=he,!0):!1}function Ne(k){_e+=k*F.COLOR_UPDATE_SPEED,_e>=1&&(_e=Fr(_e,0,1),T.forEach(he=>{he.color=Ln()}))}function tt(){T.forEach(k=>{k.moved&&(k.moved=!1,Ue(k))})}function ft(k){w.disable(w.BLEND),Nt.bind(),w.uniform2f(Nt.uniforms.texelSize,rt.texelSizeX,rt.texelSizeY),w.uniform1i(Nt.uniforms.uVelocity,rt.read.attach(0)),Pe(At),z.bind(),w.uniform2f(z.uniforms.texelSize,rt.texelSizeX,rt.texelSizeY),w.uniform1i(z.uniforms.uVelocity,rt.read.attach(0)),w.uniform1i(z.uniforms.uCurl,At.attach(1)),w.uniform1f(z.uniforms.curl,F.CURL),w.uniform1f(z.uniforms.dt,k),Pe(rt.write),rt.swap(),Ct.bind(),w.uniform2f(Ct.uniforms.texelSize,rt.texelSizeX,rt.texelSizeY),w.uniform1i(Ct.uniforms.uVelocity,rt.read.attach(0)),Pe(xt),pt.bind(),w.uniform1i(pt.uniforms.uTexture,Rt.read.attach(0)),w.uniform1f(pt.uniforms.value,F.PRESSURE),Pe(Rt.write),Rt.swap(),Yt.bind(),w.uniform2f(Yt.uniforms.texelSize,rt.texelSizeX,rt.texelSizeY),w.uniform1i(Yt.uniforms.uDivergence,xt.attach(0));for(let ve=0;ve<F.PRESSURE_ITERATIONS;ve++)w.uniform1i(Yt.uniforms.uPressure,Rt.read.attach(1)),Pe(Rt.write),Rt.swap();ct.bind(),w.uniform2f(ct.uniforms.texelSize,rt.texelSizeX,rt.texelSizeY),w.uniform1i(ct.uniforms.uPressure,Rt.read.attach(0)),w.uniform1i(ct.uniforms.uVelocity,rt.read.attach(1)),Pe(rt.write),rt.swap(),dt.bind(),w.uniform2f(dt.uniforms.texelSize,rt.texelSizeX,rt.texelSizeY),B.supportLinearFiltering||w.uniform2f(dt.uniforms.dyeTexelSize,rt.texelSizeX,rt.texelSizeY);let he=rt.read.attach(0);w.uniform1i(dt.uniforms.uVelocity,he),w.uniform1i(dt.uniforms.uSource,he),w.uniform1f(dt.uniforms.dt,k),w.uniform1f(dt.uniforms.dissipation,F.VELOCITY_DISSIPATION),Pe(rt.write),rt.swap(),B.supportLinearFiltering||w.uniform2f(dt.uniforms.dyeTexelSize,at.texelSizeX,at.texelSizeY),w.uniform1i(dt.uniforms.uVelocity,rt.read.attach(0)),w.uniform1i(dt.uniforms.uSource,at.read.attach(1)),w.uniform1f(dt.uniforms.dissipation,F.DENSITY_DISSIPATION),Pe(at.write),at.swap()}function vt(k){w.blendFunc(w.ONE,w.ONE_MINUS_SRC_ALPHA),w.enable(w.BLEND),H(k)}function H(k){let he=w.drawingBufferWidth,ve=w.drawingBufferHeight;N.bind(),F.SHADING&&w.uniform2f(N.uniforms.texelSize,1/he,1/ve),w.uniform1i(N.uniforms.uTexture,at.read.attach(0)),Pe(k)}function Ue(k){let he=k.deltaX*F.SPLAT_FORCE,ve=k.deltaY*F.SPLAT_FORCE;Ie(k.texcoordX,k.texcoordY,he,ve,k.color)}function xe(k){const he=Ln();he.r*=10,he.g*=10,he.b*=10;let ve=10*(Math.random()-.5),Fe=30*(Math.random()-.5);Ie(k.texcoordX,k.texcoordY,ve,Fe,he)}function Ie(k,he,ve,Fe,ht){lt.bind(),w.uniform1i(lt.uniforms.uTarget,rt.read.attach(0)),w.uniform1f(lt.uniforms.aspectRatio,I.width/I.height),w.uniform2f(lt.uniforms.point,k,he),w.uniform3f(lt.uniforms.color,ve,Fe,0),w.uniform1f(lt.uniforms.radius,ze(F.SPLAT_RADIUS/100)),Pe(rt.write),rt.swap(),w.uniform1i(lt.uniforms.uTarget,at.read.attach(0)),w.uniform3f(lt.uniforms.color,ht.r,ht.g,ht.b),Pe(at.write),at.swap()}function ze(k){let he=I.width/I.height;return he>1&&(k*=he),k}function ye(k,he,ve,Fe){k.id=he,k.down=!0,k.moved=!1,k.texcoordX=ve/I.width,k.texcoordY=1-Fe/I.height,k.prevTexcoordX=k.texcoordX,k.prevTexcoordY=k.texcoordY,k.deltaX=0,k.deltaY=0,k.color=Ln()}function Ze(k,he,ve,Fe){k.prevTexcoordX=k.texcoordX,k.prevTexcoordY=k.texcoordY,k.texcoordX=he/I.width,k.texcoordY=1-ve/I.height,k.deltaX=zt(k.texcoordX-k.prevTexcoordX),k.deltaY=It(k.texcoordY-k.prevTexcoordY),k.moved=Math.abs(k.deltaX)>0||Math.abs(k.deltaY)>0,k.color=Fe}function $e(k){k.down=!1}function zt(k){let he=I.width/I.height;return he<1&&(k*=he),k}function It(k){let he=I.width/I.height;return he>1&&(k/=he),k}function yn(k){let he=k.replace("#","");he.length===3&&(he=he[0]+he[0]+he[1]+he[1]+he[2]+he[2]);const ve=parseInt(he.slice(0,2),16)/255,Fe=parseInt(he.slice(2,4),16)/255,ht=parseInt(he.slice(4,6),16)/255;return{r:ve*.15,g:Fe*.15,b:ht*.15}}function Ln(){if(!F.RAINBOW_MODE)return yn(F.COLOR);let k=ur(Math.random(),1,1);return k.r*=.15,k.g*=.15,k.b*=.15,k}function ur(k,he,ve){let Fe,ht,Ut,ut,cn,Qt,On,C;switch(ut=Math.floor(k*6),cn=k*6-ut,Qt=ve*(1-he),On=ve*(1-cn*he),C=ve*(1-(1-cn)*he),ut%6){case 0:Fe=ve,ht=C,Ut=Qt;break;case 1:Fe=On,ht=ve,Ut=Qt;break;case 2:Fe=Qt,ht=ve,Ut=C;break;case 3:Fe=Qt,ht=On,Ut=ve;break;case 4:Fe=C,ht=Qt,Ut=ve;break;case 5:Fe=ve,ht=Qt,Ut=On;break}return{r:Fe,g:ht,b:Ut}}function Fr(k,he,ve){const Fe=ve-he;return(k-he)%Fe+he}function Yi(k){let he=w.drawingBufferWidth/w.drawingBufferHeight;he<1&&(he=1/he);const ve=Math.round(k),Fe=Math.round(k*he);return w.drawingBufferWidth>w.drawingBufferHeight?{width:Fe,height:ve}:{width:ve,height:Fe}}function An(k){const he=L?Math.min(window.devicePixelRatio||1,2):window.devicePixelRatio||1;return Math.floor(k*he)}function qo(k){if(k.length===0)return 0;let he=0;for(let ve=0;ve<k.length;ve++)he=(he<<5)-he+k.charCodeAt(ve),he|=0;return he}function ps(k){let he=T[0],ve=An(k.clientX),Fe=An(k.clientY);ye(he,-1,ve,Fe),xe(he)}let ms=!1;function Rn(k){let he=T[0],ve=An(k.clientX),Fe=An(k.clientY);if(ms)Ze(he,ve,Fe,he.color);else{let ht=Ln();Ze(he,ve,Fe,ht),ms=!0}}function fr(k){const he=k.touches[0];if(!he)return;let ve=T[0],Fe=An(he.clientX),ht=An(he.clientY);ye(ve,he.identifier,Fe,ht),xe(ve)}function Or(k){const he=k.touches[0];if(!he)return;let ve=T[0],Fe=An(he.clientX),ht=An(he.clientY);Ze(ve,Fe,ht,ve.color)}function dr(){$e(T[0])}return window.addEventListener("mousedown",ps),window.addEventListener("mousemove",Rn),window.addEventListener("touchstart",fr,{passive:!0}),window.addEventListener("touchmove",Or,{passive:!0}),window.addEventListener("touchend",dr,{passive:!0}),window.addEventListener("touchcancel",dr,{passive:!0}),Le(),()=>{b=!1,D.current&&(cancelAnimationFrame(D.current),D.current=null),window.removeEventListener("mousedown",ps),window.removeEventListener("mousemove",Rn),window.removeEventListener("touchstart",fr),window.removeEventListener("touchmove",Or),window.removeEventListener("touchend",dr),window.removeEventListener("touchcancel",dr)}},[]),q.jsx("div",{style:{position:"fixed",top:0,left:0,zIndex:50,pointerEvents:"none",width:"100dvw",height:"100dvh",maxWidth:"100%",overflow:"hidden",opacity:S},children:q.jsx("canvas",{ref:x,id:"fluid",style:{width:"100%",height:"100%",display:"block"}})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wp="186",ww=0,Qv=1,Aw=2,Xc=1,Rw=2,ka=3,zs=0,li=1,Rr=2,Dr=0,ja=1,Io=2,Jv=3,e_=4,Cw=5,Co=100,bw=101,Pw=102,Dw=103,Lw=104,Nw=200,Iw=201,Uw=202,Fw=203,F1=204,O1=205,Ow=206,Bw=207,kw=208,zw=209,Vw=210,Hw=211,Gw=212,Ww=213,Xw=214,xh=0,yh=1,Sh=2,Qa=3,Mh=4,Eh=5,Th=6,wh=7,B1=0,jw=1,Yw=2,sr=0,k1=1,z1=2,V1=3,H1=4,G1=5,W1=6,X1=7,j1=300,Vs=301,Vo=302,Sd=303,Md=304,Eu=306,Ah=1e3,Cr=1001,Rh=1002,Fn=1003,qw=1004,mc=1005,qn=1006,Ed=1007,Os=1008,bi=1009,Y1=1010,q1=1011,Ja=1012,Xp=1013,ar=1014,tr=1015,lr=1016,jp=1017,Yp=1018,el=1020,K1=35902,$1=35899,Z1=1021,Q1=1022,Xi=1023,Ir=1026,Bs=1027,J1=1028,qp=1029,Hs=1030,Kp=1031,$p=1033,jc=33776,Yc=33777,qc=33778,Kc=33779,Ch=35840,bh=35841,Ph=35842,Dh=35843,Lh=36196,Nh=37492,Ih=37496,Uh=37488,Fh=37489,au=37490,Oh=37491,Bh=37808,kh=37809,zh=37810,Vh=37811,Hh=37812,Gh=37813,Wh=37814,Xh=37815,jh=37816,Yh=37817,qh=37818,Kh=37819,$h=37820,Zh=37821,Qh=36492,Jh=36494,ep=36495,tp=36283,np=36284,lu=36285,ip=36286,Kw=3200,t_=0,$w=1,cs="",Ri="srgb",cu="srgb-linear",uu="linear",Kt="srgb",Td=7680,Zw=519,Qw=512,Jw=513,eA=514,Zp=515,tA=516,nA=517,Qp=518,iA=519,rA=35044,n_="300 es",nr=2e3,fu=2001;function sA(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function du(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function oA(){const n=du("canvas");return n.style.display="block",n}const i_={};function r_(...n){const e="THREE."+n.shift();console.log(e,...n)}function ey(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function St(...n){n=ey(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Wt(...n){n=ey(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Fo(...n){const e=n.join(" ");e in i_||(i_[e]=!0,St(...n))}function aA(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const lA={[xh]:yh,[Sh]:Th,[Mh]:wh,[Qa]:Eh,[yh]:xh,[Th]:Sh,[wh]:Mh,[Eh]:Qa};class Xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wd=Math.PI/180,rp=180/Math.PI;function ol(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]).toLowerCase()}function kt(n,e,t){return Math.max(e,Math.min(t,n))}function cA(n,e){return(n%e+e)%e}function Ad(n,e,t){return(1-t)*n+t*e}function Ca(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ai(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const nm=class nm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(kt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(kt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nm.prototype.isVector2=!0;let jt=nm;class Xo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,u){let d=r[o+0],h=r[o+1],p=r[o+2],v=r[o+3],g=a[c+0],y=a[c+1],M=a[c+2],A=a[c+3];if(v!==A||d!==g||h!==y||p!==M){let S=d*g+h*y+p*M+v*A;S<0&&(g=-g,y=-y,M=-M,A=-A,S=-S);let x=1-u;if(S<.9995){const D=Math.acos(S),I=Math.sin(D);x=Math.sin(x*D)/I,u=Math.sin(u*D)/I,d=d*x+g*u,h=h*x+y*u,p=p*x+M*u,v=v*x+A*u}else{d=d*x+g*u,h=h*x+y*u,p=p*x+M*u,v=v*x+A*u;const D=1/Math.sqrt(d*d+h*h+p*p+v*v);d*=D,h*=D,p*=D,v*=D}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,a,c){const u=r[o],d=r[o+1],h=r[o+2],p=r[o+3],v=a[c],g=a[c+1],y=a[c+2],M=a[c+3];return e[t]=u*M+p*v+d*y-h*g,e[t+1]=d*M+p*g+h*v-u*y,e[t+2]=h*M+p*y+u*g-d*v,e[t+3]=p*M-u*v-d*g-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(r/2),p=u(o/2),v=u(a/2),g=d(r/2),y=d(o/2),M=d(a/2);switch(c){case"XYZ":this._x=g*p*v+h*y*M,this._y=h*y*v-g*p*M,this._z=h*p*M+g*y*v,this._w=h*p*v-g*y*M;break;case"YXZ":this._x=g*p*v+h*y*M,this._y=h*y*v-g*p*M,this._z=h*p*M-g*y*v,this._w=h*p*v+g*y*M;break;case"ZXY":this._x=g*p*v-h*y*M,this._y=h*y*v+g*p*M,this._z=h*p*M+g*y*v,this._w=h*p*v-g*y*M;break;case"ZYX":this._x=g*p*v-h*y*M,this._y=h*y*v+g*p*M,this._z=h*p*M-g*y*v,this._w=h*p*v+g*y*M;break;case"YZX":this._x=g*p*v+h*y*M,this._y=h*y*v+g*p*M,this._z=h*p*M-g*y*v,this._w=h*p*v-g*y*M;break;case"XZY":this._x=g*p*v-h*y*M,this._y=h*y*v-g*p*M,this._z=h*p*M+g*y*v,this._w=h*p*v+g*y*M;break;default:St("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],v=t[10],g=r+u+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(p-d)*y,this._y=(a-h)*y,this._z=(c-o)*y}else if(r>u&&r>v){const y=2*Math.sqrt(1+r-u-v);this._w=(p-d)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(a+h)/y}else if(u>v){const y=2*Math.sqrt(1+u-r-v);this._w=(a-h)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(d+p)/y}else{const y=2*Math.sqrt(1+v-r-u);this._w=(c-o)/y,this._x=(a+h)/y,this._y=(d+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=r*p+c*u+o*h-a*d,this._y=o*p+c*d+a*u-r*h,this._z=a*p+c*h+r*d-o*u,this._w=c*p-r*u-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(r=-r,o=-o,a=-a,c=-c,u=-u);let d=1-t;if(u<.9995){const h=Math.acos(u),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const im=class im{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(s_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(s_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*o-u*r),p=2*(u*t-a*o),v=2*(a*r-c*t);return this.x=t+d*h+c*v-u*p,this.y=r+d*p+u*h-a*v,this.z=o+d*v+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(kt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=o*d-a*u,this.y=a*c-r*d,this.z=r*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Rd.copy(this).projectOnVector(e),this.sub(Rd)}reflect(e){return this.sub(Rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(kt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};im.prototype.isVector3=!0;let ce=im;const Rd=new ce,s_=new Xo,rm=class rm{constructor(e,t,r,o,a,c,u,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,d,h)}set(e,t,r,o,a,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=d,p[6]=r,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[3],d=r[6],h=r[1],p=r[4],v=r[7],g=r[2],y=r[5],M=r[8],A=o[0],S=o[3],x=o[6],D=o[1],I=o[4],b=o[7],P=o[2],L=o[5],F=o[8];return a[0]=c*A+u*D+d*P,a[3]=c*S+u*I+d*L,a[6]=c*x+u*b+d*F,a[1]=h*A+p*D+v*P,a[4]=h*S+p*I+v*L,a[7]=h*x+p*b+v*F,a[2]=g*A+y*D+M*P,a[5]=g*S+y*I+M*L,a[8]=g*x+y*b+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-r*a*p+r*u*d+o*a*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=p*c-u*h,g=u*d-p*a,y=h*a-c*d,M=t*v+r*g+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=v*A,e[1]=(o*h-p*r)*A,e[2]=(u*r-o*c)*A,e[3]=g*A,e[4]=(p*t-o*d)*A,e[5]=(o*a-u*t)*A,e[6]=y*A,e[7]=(r*d-h*t)*A,e[8]=(c*t-r*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,u){const d=Math.cos(a),h=Math.sin(a);return this.set(r*d,r*h,-r*(d*c+h*u)+c+e,-o*h,o*d,-o*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return Fo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cd.makeScale(e,t)),this}rotate(e){return Fo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cd.makeRotation(-e)),this}translate(e,t){return Fo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rm.prototype.isMatrix3=!0;let Tt=rm;const Cd=new Tt,o_=new Tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),a_=new Tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uA(){const n={enabled:!0,workingColorSpace:cu,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Kt&&(o.r=Lr(o.r),o.g=Lr(o.g),o.b=Lr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Kt&&(o.r=Oo(o.r),o.g=Oo(o.g),o.b=Oo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===cs?uu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[cu]:{primaries:e,whitePoint:r,transfer:uu,toXYZ:o_,fromXYZ:a_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:e,whitePoint:r,transfer:Kt,toXYZ:o_,fromXYZ:a_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),n}const Bt=uA();function Lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Oo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let mo;class fA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{mo===void 0&&(mo=du("canvas")),mo.width=e.width,mo.height=e.height;const o=mo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=mo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=du("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Lr(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Lr(t[r]/255)*255):t[r]=Lr(t[r]);return{data:t,width:e.width,height:e.height}}else return St("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dA=0;class Jp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=ol(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(bd(o[c].image)):a.push(bd(o[c]))}else a=bd(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function bd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(St("Texture: Unable to serialize Texture."),{})}let hA=0;const Pd=new ce;class Kn extends Xs{constructor(e=Kn.DEFAULT_IMAGE,t=Kn.DEFAULT_MAPPING,r=Cr,o=Cr,a=qn,c=Os,u=Xi,d=bi,h=Kn.DEFAULT_ANISOTROPY,p=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hA++}),this.uuid=ol(),this.name="",this.source=new Jp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pd).x}get height(){return this.source.getSize(Pd).y}get depth(){return this.source.getSize(Pd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){St(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){St(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==j1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=j1;Kn.DEFAULT_ANISOTROPY=1;const sm=class sm{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const d=e.elements,h=d[0],p=d[4],v=d[8],g=d[1],y=d[5],M=d[9],A=d[2],S=d[6],x=d[10];if(Math.abs(p-g)<.01&&Math.abs(v-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+g)<.1&&Math.abs(v+A)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,b=(y+1)/2,P=(x+1)/2,L=(p+g)/4,F=(v+A)/4,T=(M+S)/4;return I>b&&I>P?I<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(I),o=L/r,a=F/r):b>P?b<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(b),r=L/o,a=T/o):P<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(P),r=F/a,o=T/a),this.set(r,o,a,t),this}let D=Math.sqrt((S-M)*(S-M)+(v-A)*(v-A)+(g-p)*(g-p));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(v-A)/D,this.z=(g-p)/D,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this.w=kt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this.w=kt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(kt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sm.prototype.isVector4=!0;let hn=sm;class pA extends Xs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new Kn(o),c=r.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Jp(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends pA{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ty extends Kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mA extends Kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const mu=class mu{constructor(e,t,r,o,a,c,u,d,h,p,v,g,y,M,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,d,h,p,v,g,y,M,A,S)}set(e,t,r,o,a,c,u,d,h,p,v,g,y,M,A,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=a,x[5]=c,x[9]=u,x[13]=d,x[2]=h,x[6]=p,x[10]=v,x[14]=g,x[3]=y,x[7]=M,x[11]=A,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mu().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/go.setFromMatrixColumn(e,0).length(),a=1/go.setFromMatrixColumn(e,1).length(),c=1/go.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),u=Math.sin(r),d=Math.cos(o),h=Math.sin(o),p=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const g=c*p,y=c*v,M=u*p,A=u*v;t[0]=d*p,t[4]=-d*v,t[8]=h,t[1]=y+M*h,t[5]=g-A*h,t[9]=-u*d,t[2]=A-g*h,t[6]=M+y*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*p,y=d*v,M=h*p,A=h*v;t[0]=g+A*u,t[4]=M*u-y,t[8]=c*h,t[1]=c*v,t[5]=c*p,t[9]=-u,t[2]=y*u-M,t[6]=A+g*u,t[10]=c*d}else if(e.order==="ZXY"){const g=d*p,y=d*v,M=h*p,A=h*v;t[0]=g-A*u,t[4]=-c*v,t[8]=M+y*u,t[1]=y+M*u,t[5]=c*p,t[9]=A-g*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const g=c*p,y=c*v,M=u*p,A=u*v;t[0]=d*p,t[4]=M*h-y,t[8]=g*h+A,t[1]=d*v,t[5]=A*h+g,t[9]=y*h-M,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,y=c*h,M=u*d,A=u*h;t[0]=d*p,t[4]=A-g*v,t[8]=M*v+y,t[1]=v,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=y*v+M,t[10]=g-A*v}else if(e.order==="XZY"){const g=c*d,y=c*h,M=u*d,A=u*h;t[0]=d*p,t[4]=-v,t[8]=h*p,t[1]=g*v+A,t[5]=c*p,t[9]=y*v-M,t[2]=M*v-y,t[6]=u*p,t[10]=A*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gA,e,vA)}lookAt(e,t,r){const o=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),ns.crossVectors(r,hi),ns.lengthSq()===0&&(Math.abs(r.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),ns.crossVectors(r,hi)),ns.normalize(),gc.crossVectors(hi,ns),o[0]=ns.x,o[4]=gc.x,o[8]=hi.x,o[1]=ns.y,o[5]=gc.y,o[9]=hi.y,o[2]=ns.z,o[6]=gc.z,o[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[4],d=r[8],h=r[12],p=r[1],v=r[5],g=r[9],y=r[13],M=r[2],A=r[6],S=r[10],x=r[14],D=r[3],I=r[7],b=r[11],P=r[15],L=o[0],F=o[4],T=o[8],w=o[12],B=o[1],Y=o[5],ee=o[9],ne=o[13],K=o[2],J=o[6],ge=o[10],Z=o[14],W=o[3],Q=o[7],X=o[11],U=o[15];return a[0]=c*L+u*B+d*K+h*W,a[4]=c*F+u*Y+d*J+h*Q,a[8]=c*T+u*ee+d*ge+h*X,a[12]=c*w+u*ne+d*Z+h*U,a[1]=p*L+v*B+g*K+y*W,a[5]=p*F+v*Y+g*J+y*Q,a[9]=p*T+v*ee+g*ge+y*X,a[13]=p*w+v*ne+g*Z+y*U,a[2]=M*L+A*B+S*K+x*W,a[6]=M*F+A*Y+S*J+x*Q,a[10]=M*T+A*ee+S*ge+x*X,a[14]=M*w+A*ne+S*Z+x*U,a[3]=D*L+I*B+b*K+P*W,a[7]=D*F+I*Y+b*J+P*Q,a[11]=D*T+I*ee+b*ge+P*X,a[15]=D*w+I*ne+b*Z+P*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],v=e[6],g=e[10],y=e[14],M=e[3],A=e[7],S=e[11],x=e[15],D=d*y-h*g,I=u*y-h*v,b=u*g-d*v,P=c*y-h*p,L=c*g-d*p,F=c*v-u*p;return t*(A*D-S*I+x*b)-r*(M*D-S*P+x*L)+o*(M*I-A*P+x*F)-a*(M*b-A*L+S*F)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[1],c=e[5],u=e[9],d=e[2],h=e[6],p=e[10];return t*(c*p-u*h)-r*(a*p-u*d)+o*(a*h-c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=e[9],g=e[10],y=e[11],M=e[12],A=e[13],S=e[14],x=e[15],D=t*u-r*c,I=t*d-o*c,b=t*h-a*c,P=r*d-o*u,L=r*h-a*u,F=o*h-a*d,T=p*A-v*M,w=p*S-g*M,B=p*x-y*M,Y=v*S-g*A,ee=v*x-y*A,ne=g*x-y*S,K=D*ne-I*ee+b*Y+P*B-L*w+F*T;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/K;return e[0]=(u*ne-d*ee+h*Y)*J,e[1]=(o*ee-r*ne-a*Y)*J,e[2]=(A*F-S*L+x*P)*J,e[3]=(g*L-v*F-y*P)*J,e[4]=(d*B-c*ne-h*w)*J,e[5]=(t*ne-o*B+a*w)*J,e[6]=(S*b-M*F-x*I)*J,e[7]=(p*F-g*b+y*I)*J,e[8]=(c*ee-u*B+h*T)*J,e[9]=(r*B-t*ee-a*T)*J,e[10]=(M*L-A*b+x*D)*J,e[11]=(v*b-p*L-y*D)*J,e[12]=(u*w-c*Y-d*T)*J,e[13]=(t*Y-r*w+o*T)*J,e[14]=(A*I-M*P-S*D)*J,e[15]=(p*P-v*I+g*D)*J,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,u=e.y,d=e.z,h=a*c,p=a*u;return this.set(h*c+r,h*u-o*d,h*d+o*u,0,h*u+o*d,p*u+r,p*d-o*c,0,h*d-o*u,p*d+o*c,a*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,h=a+a,p=c+c,v=u+u,g=a*h,y=a*p,M=a*v,A=c*p,S=c*v,x=u*v,D=d*h,I=d*p,b=d*v,P=r.x,L=r.y,F=r.z;return o[0]=(1-(A+x))*P,o[1]=(y+b)*P,o[2]=(M-I)*P,o[3]=0,o[4]=(y-b)*L,o[5]=(1-(g+x))*L,o[6]=(S+D)*L,o[7]=0,o[8]=(M+I)*F,o[9]=(S-D)*F,o[10]=(1-(g+A))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinantAffine();if(a===0)return r.set(1,1,1),t.identity(),this;let c=go.set(o[0],o[1],o[2]).length();const u=go.set(o[4],o[5],o[6]).length(),d=go.set(o[8],o[9],o[10]).length();a<0&&(c=-c),zi.copy(this);const h=1/c,p=1/u,v=1/d;return zi.elements[0]*=h,zi.elements[1]*=h,zi.elements[2]*=h,zi.elements[4]*=p,zi.elements[5]*=p,zi.elements[6]*=p,zi.elements[8]*=v,zi.elements[9]*=v,zi.elements[10]*=v,t.setFromRotationMatrix(zi),r.x=c,r.y=u,r.z=d,this}makePerspective(e,t,r,o,a,c,u=nr,d=!1){const h=this.elements,p=2*a/(t-e),v=2*a/(r-o),g=(t+e)/(t-e),y=(r+o)/(r-o);let M,A;if(d)M=a/(c-a),A=c*a/(c-a);else if(u===nr)M=-(c+a)/(c-a),A=-2*c*a/(c-a);else if(u===fu)M=-c/(c-a),A=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,a,c,u=nr,d=!1){const h=this.elements,p=2/(t-e),v=2/(r-o),g=-(t+e)/(t-e),y=-(r+o)/(r-o);let M,A;if(d)M=1/(c-a),A=c/(c-a);else if(u===nr)M=-2/(c-a),A=-(c+a)/(c-a);else if(u===fu)M=-1/(c-a),A=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};mu.prototype.isMatrix4=!0;let pn=mu;const go=new ce,zi=new pn,gA=new ce(0,0,0),vA=new ce(1,1,1),ns=new ce,gc=new ce,hi=new ce,l_=new pn,c_=new Xo;class Gs{constructor(e=0,t=0,r=0,o=Gs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],d=o[1],h=o[5],p=o[9],v=o[2],g=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(kt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-kt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:St("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return l_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(l_,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return c_.setFromEuler(this),this.setFromQuaternion(c_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gs.DEFAULT_ORDER="XYZ";class ny{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _A=0;const u_=new ce,vo=new Xo,Mr=new pn,vc=new ce,ba=new ce,xA=new ce,yA=new Xo,f_=new ce(1,0,0),d_=new ce(0,1,0),h_=new ce(0,0,1),p_={type:"added"},SA={type:"removed"},_o={type:"childadded",child:null},Dd={type:"childremoved",child:null};class ei extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_A++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const e=new ce,t=new Gs,r=new Xo,o=new ce(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new pn},normalMatrix:{value:new Tt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ny,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vo.setFromAxisAngle(e,t),this.quaternion.multiply(vo),this}rotateOnWorldAxis(e,t){return vo.setFromAxisAngle(e,t),this.quaternion.premultiply(vo),this}rotateX(e){return this.rotateOnAxis(f_,e)}rotateY(e){return this.rotateOnAxis(d_,e)}rotateZ(e){return this.rotateOnAxis(h_,e)}translateOnAxis(e,t){return u_.copy(e).applyQuaternion(this.quaternion),this.position.add(u_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(f_,e)}translateY(e){return this.translateOnAxis(d_,e)}translateZ(e){return this.translateOnAxis(h_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?vc.copy(e):vc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(ba,vc,this.up):Mr.lookAt(vc,ba,this.up),this.quaternion.setFromRotationMatrix(Mr),o&&(Mr.extractRotation(o.matrixWorld),vo.setFromRotationMatrix(Mr),this.quaternion.premultiply(vo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(p_),_o.child=e,this.dispatchEvent(_o),_o.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(SA),Dd.child=e,this.dispatchEvent(Dd),Dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(p_),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,xA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,yA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const v=d[h];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(a(e.materials,this.material[d]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),v=c(e.shapes),g=c(e.skeletons),y=c(e.animations),M=c(e.nodes);u.length>0&&(r.geometries=u),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ei.DEFAULT_UP=new ce(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class za extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MA={type:"move"};class Ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,r),x=this._getHandJoint(h,A);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=p.position.distanceTo(v.position),y=.02,M=.005;h.inputState.pinching&&g>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(MA)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new za;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const iy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Nd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Lt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Bt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Bt.workingColorSpace){if(e=cA(e,1),t=kt(t,0,1),r=kt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=Nd(c,a,e+1/3),this.g=Nd(c,a,e),this.b=Nd(c,a,e-1/3)}return Bt.colorSpaceToWorking(this,o),this}setStyle(e,t=Ri){function r(a){a!==void 0&&parseFloat(a)<1&&St("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:St("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);St("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ri){const r=iy[e.toLowerCase()];return r!==void 0?this.setHex(r,t):St("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return Bt.workingToColorSpace(Wn.copy(this),e),Math.round(kt(Wn.r*255,0,255))*65536+Math.round(kt(Wn.g*255,0,255))*256+Math.round(kt(Wn.b*255,0,255))}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(Wn.copy(this),t);const r=Wn.r,o=Wn.g,a=Wn.b,c=Math.max(r,o,a),u=Math.min(r,o,a);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const v=c-u;switch(h=p<=.5?v/(c+u):v/(2-c-u),c){case r:d=(o-a)/v+(o<a?6:0);break;case o:d=(a-r)/v+2;break;case a:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Ri){Bt.workingToColorSpace(Wn.copy(this),e);const t=Wn.r,r=Wn.g,o=Wn.b;return e!==Ri?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(_c);const r=Ad(is.h,_c.h,t),o=Ad(is.s,_c.s,t),a=Ad(is.l,_c.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Lt;Lt.NAMES=iy;class em{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(e),this.density=t}clone(){return new em(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class EA extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gs,this.environmentIntensity=1,this.environmentRotation=new Gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Vi=new ce,Er=new ce,Id=new ce,Tr=new ce,xo=new ce,yo=new ce,m_=new ce,Ud=new ce,Fd=new ce,Od=new ce,Bd=new hn,kd=new hn,zd=new hn;class Wi{constructor(e=new ce,t=new ce,r=new ce){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Vi.subVectors(e,t),o.cross(Vi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){Vi.subVectors(o,t),Er.subVectors(r,t),Id.subVectors(e,t);const c=Vi.dot(Vi),u=Vi.dot(Er),d=Vi.dot(Id),h=Er.dot(Er),p=Er.dot(Id),v=c*h-u*u;if(v===0)return a.set(0,0,0),null;const g=1/v,y=(h*d-u*p)*g,M=(c*p-u*d)*g;return a.set(1-y-M,M,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(e,t,r,o,a,c,u,d){return this.getBarycoord(e,t,r,o,Tr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Tr.x),d.addScaledVector(c,Tr.y),d.addScaledVector(u,Tr.z),d)}static getInterpolatedAttribute(e,t,r,o,a,c){return Bd.setScalar(0),kd.setScalar(0),zd.setScalar(0),Bd.fromBufferAttribute(e,t),kd.fromBufferAttribute(e,r),zd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Bd,a.x),c.addScaledVector(kd,a.y),c.addScaledVector(zd,a.z),c}static isFrontFacing(e,t,r,o){return Vi.subVectors(r,t),Er.subVectors(e,t),Vi.cross(Er).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),Vi.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Wi.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,u;xo.subVectors(o,r),yo.subVectors(a,r),Ud.subVectors(e,r);const d=xo.dot(Ud),h=yo.dot(Ud);if(d<=0&&h<=0)return t.copy(r);Fd.subVectors(e,o);const p=xo.dot(Fd),v=yo.dot(Fd);if(p>=0&&v<=p)return t.copy(o);const g=d*v-p*h;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(r).addScaledVector(xo,c);Od.subVectors(e,a);const y=xo.dot(Od),M=yo.dot(Od);if(M>=0&&y<=M)return t.copy(a);const A=y*h-d*M;if(A<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(r).addScaledVector(yo,u);const S=p*M-y*v;if(S<=0&&v-p>=0&&y-M>=0)return m_.subVectors(a,o),u=(v-p)/(v-p+(y-M)),t.copy(o).addScaledVector(m_,u);const x=1/(S+A+g);return c=A*x,u=g*x,t.copy(r).addScaledVector(xo,c).addScaledVector(yo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class al{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Hi):Hi.fromBufferAttribute(a,c),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xc.copy(r.boundingBox)),xc.applyMatrix4(e.matrixWorld),this.union(xc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),yc.subVectors(this.max,Pa),So.subVectors(e.a,Pa),Mo.subVectors(e.b,Pa),Eo.subVectors(e.c,Pa),rs.subVectors(Mo,So),ss.subVectors(Eo,Mo),bs.subVectors(So,Eo);let t=[0,-rs.z,rs.y,0,-ss.z,ss.y,0,-bs.z,bs.y,rs.z,0,-rs.x,ss.z,0,-ss.x,bs.z,0,-bs.x,-rs.y,rs.x,0,-ss.y,ss.x,0,-bs.y,bs.x,0];return!Vd(t,So,Mo,Eo,yc)||(t=[1,0,0,0,1,0,0,0,1],!Vd(t,So,Mo,Eo,yc))?!1:(Sc.crossVectors(rs,ss),t=[Sc.x,Sc.y,Sc.z],Vd(t,So,Mo,Eo,yc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wr=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Hi=new ce,xc=new al,So=new ce,Mo=new ce,Eo=new ce,rs=new ce,ss=new ce,bs=new ce,Pa=new ce,yc=new ce,Sc=new ce,Ps=new ce;function Vd(n,e,t,r,o){for(let a=0,c=n.length-3;a<=c;a+=3){Ps.fromArray(n,a);const u=o.x*Math.abs(Ps.x)+o.y*Math.abs(Ps.y)+o.z*Math.abs(Ps.z),d=e.dot(Ps),h=t.dot(Ps),p=r.dot(Ps);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const xn=new ce,Mc=new jt;let TA=0;class jn extends Xs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=rA,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Mc.fromBufferAttribute(this,t),Mc.applyMatrix3(e),this.setXY(t,Mc.x,Mc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ca(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ai(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ca(t,this.array)),t}setX(e,t){return this.normalized&&(t=ai(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ca(t,this.array)),t}setY(e,t){return this.normalized&&(t=ai(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ca(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ai(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ca(t,this.array)),t}setW(e,t){return this.normalized&&(t=ai(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ai(t,this.array),r=ai(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=ai(t,this.array),r=ai(r,this.array),o=ai(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=ai(t,this.array),r=ai(r,this.array),o=ai(o,this.array),a=ai(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ry extends jn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class sy extends jn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class or extends jn{constructor(e,t,r){super(new Float32Array(e),t,r)}}const wA=new al,Da=new ce,Hd=new ce;class ll{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):wA.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Da.subVectors(e,this.center);const t=Da.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Da,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Da.copy(e.center).add(Hd)),this.expandByPoint(Da.copy(e.center).sub(Hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let AA=0;const wi=new pn,Gd=new ei,To=new ce,pi=new al,La=new al,Dn=new ce;class Jn extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AA++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sA(e)?sy:ry)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Tt().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,r){return wi.makeTranslation(e,t,r),this.applyMatrix4(wi),this}scale(e,t,r){return wi.makeScale(e,t,r),this.applyMatrix4(wi),this}lookAt(e){return Gd.lookAt(e),Gd.updateMatrix(),this.applyMatrix4(Gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(To).negate(),this.translate(To.x,To.y,To.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new or(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&St("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];pi.setFromBufferAttribute(a),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ll);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];La.setFromBufferAttribute(u),this.morphTargetsRelative?(Dn.addVectors(pi.min,La.min),pi.expandByPoint(Dn),Dn.addVectors(pi.max,La.max),pi.expandByPoint(Dn)):(pi.expandByPoint(La.min),pi.expandByPoint(La.max))}pi.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)Dn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(Dn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)Dn.fromBufferAttribute(u,h),d&&(To.fromBufferAttribute(e,h),Dn.add(To)),o=Math.max(o,r.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new jn(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const u=[],d=[];for(let T=0;T<r.count;T++)u[T]=new ce,d[T]=new ce;const h=new ce,p=new ce,v=new ce,g=new jt,y=new jt,M=new jt,A=new ce,S=new ce;function x(T,w,B){h.fromBufferAttribute(r,T),p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,B),g.fromBufferAttribute(a,T),y.fromBufferAttribute(a,w),M.fromBufferAttribute(a,B),p.sub(h),v.sub(h),y.sub(g),M.sub(g);const Y=1/(y.x*M.y-M.x*y.y);isFinite(Y)&&(A.copy(p).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(Y),S.copy(v).multiplyScalar(y.x).addScaledVector(p,-M.x).multiplyScalar(Y),u[T].add(A),u[w].add(A),u[B].add(A),d[T].add(S),d[w].add(S),d[B].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let T=0,w=D.length;T<w;++T){const B=D[T],Y=B.start,ee=B.count;for(let ne=Y,K=Y+ee;ne<K;ne+=3)x(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const I=new ce,b=new ce,P=new ce,L=new ce;function F(T){P.fromBufferAttribute(o,T),L.copy(P);const w=u[T];I.copy(w),I.sub(P.multiplyScalar(P.dot(w))).normalize(),b.crossVectors(L,w);const Y=b.dot(d[T])<0?-1:1;c.setXYZW(T,I.x,I.y,I.z,Y)}for(let T=0,w=D.length;T<w;++T){const B=D[T],Y=B.start,ee=B.count;for(let ne=Y,K=Y+ee;ne<K;ne+=3)F(e.getX(ne+0)),F(e.getX(ne+1)),F(e.getX(ne+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new jn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const o=new ce,a=new ce,c=new ce,u=new ce,d=new ce,h=new ce,p=new ce,v=new ce;if(e)for(let g=0,y=e.count;g<y;g+=3){const M=e.getX(g+0),A=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,A),c.fromBufferAttribute(t,S),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),u.fromBufferAttribute(r,M),d.fromBufferAttribute(r,A),h.fromBufferAttribute(r,S),u.add(p),d.add(p),h.add(p),r.setXYZ(M,u.x,u.y,u.z),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,y=t.count;g<y;g+=3)o.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),r.setXYZ(g+0,p.x,p.y,p.z),r.setXYZ(g+1,p.x,p.y,p.z),r.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Dn.fromBufferAttribute(e,t),Dn.normalize(),e.setXYZ(t,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,v=u.normalized,g=new h.constructor(d.length*p);let y=0,M=0;for(let A=0,S=d.length;A<S;A++){u.isInterleavedBufferAttribute?y=d[A]*u.data.stride+u.offset:y=d[A]*p;for(let x=0;x<p;x++)g[M++]=h[y++]}return new jn(g,p,v)}if(this.index===null)return St("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jn,r=this.index.array,o=this.attributes;for(const u in o){const d=o[u],h=e(d,r);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const d=[],h=a[u];for(let p=0,v=h.length;p<v;p++){const g=h[p],y=e(g,r);d.push(y)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let v=0,g=h.length;v<g;v++){const y=h[v];p.push(y.toJSON(e.data))}p.length>0&&(o[d]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],v=a[h];for(let g=0,y=v.length;g<y;g++)p.push(v[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wd=new ce,RA=new ce,CA=new Tt;class ls{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Wd.subVectors(r,t).cross(RA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Wd),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||CA.getNormalMatrix(e),o=this.coplanarPoint(Wd).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let bA=0;class jo extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bA++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=ja,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=F1,this.blendDst=O1,this.blendEquation=Co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Td,this.stencilZFail=Td,this.stencilZPass=Td,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){St(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){St(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new ls().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new jt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ar=new ce,Xd=new ce,Ec=new ce,Tc=new ce;class tm{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Xd.copy(e).add(t).multiplyScalar(.5),Ec.copy(t).sub(e).normalize(),Tc.copy(this.origin).sub(Xd);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Ec),u=Tc.dot(this.direction),d=-Tc.dot(Ec),h=Tc.lengthSq(),p=Math.abs(1-c*c);let v,g,y,M;if(p>0)if(v=c*d-u,g=c*u-d,M=a*p,v>=0)if(g>=-M)if(g<=M){const A=1/p;v*=A,g*=A,y=v*(v+c*g+2*u)+g*(c*v+g+2*d)+h}else g=a,v=Math.max(0,-(c*g+u)),y=-v*v+g*(g+2*d)+h;else g=-a,v=Math.max(0,-(c*g+u)),y=-v*v+g*(g+2*d)+h;else g<=-M?(v=Math.max(0,-(-c*a+u)),g=v>0?-a:Math.min(Math.max(-a,-d),a),y=-v*v+g*(g+2*d)+h):g<=M?(v=0,g=Math.min(Math.max(-a,-d),a),y=g*(g+2*d)+h):(v=Math.max(0,-(c*a+u)),g=v>0?a:Math.min(Math.max(-a,-d),a),y=-v*v+g*(g+2*d)+h);else g=c>0?-a:a,v=Math.max(0,-(c*g+u)),y=-v*v+g*(g+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Xd).addScaledVector(Ec,g),y}intersectSphere(e,t){if(e.radius<0)return null;Ar.subVectors(e.center,this.origin);const r=Ar.dot(this.direction),o=Ar.dot(Ar)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=r-c,d=r+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),p>=0?(a=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),v>=0?(u=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(u=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),r>d||u>o)||((u>r||r!==r)&&(r=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,r,o,a){const c=this.origin,u=this.direction,d=u.x,h=u.y,p=u.z,v=e.x-c.x,g=e.y-c.y,y=e.z-c.z,M=t.x-c.x,A=t.y-c.y,S=t.z-c.z,x=r.x-c.x,D=r.y-c.y,I=r.z-c.z,b=Math.abs(d),P=Math.abs(h),L=Math.abs(p);let F,T,w,B,Y,ee,ne,K,J,ge,Z,W;if(b>=P&&b>=L?(w=d,ee=v,J=M,W=x,d>=0?(F=h,T=p,B=g,Y=y,ne=A,K=S,ge=D,Z=I):(F=p,T=h,B=y,Y=g,ne=S,K=A,ge=I,Z=D)):P>=L?(w=h,ee=g,J=A,W=D,h>=0?(F=p,T=d,B=y,Y=v,ne=S,K=M,ge=I,Z=x):(F=d,T=p,B=v,Y=y,ne=M,K=S,ge=x,Z=I)):(w=p,ee=y,J=S,W=I,p>=0?(F=d,T=h,B=v,Y=g,ne=M,K=A,ge=x,Z=D):(F=h,T=d,B=g,Y=v,ne=A,K=M,ge=D,Z=x)),w===0)return null;const Q=F/w,X=T/w,U=1/w,ae=B-Q*ee,Ee=Y-X*ee,We=ne-Q*J,Be=K-X*J,Ye=ge-Q*W,oe=Z-X*W,ue=Ye*Be-oe*We,Re=ae*oe-Ee*Ye,nt=We*Ee-Be*ae;if(o){if(ue<0||Re<0||nt<0)return null}else if((ue<0||Re<0||nt<0)&&(ue>0||Re>0||nt>0))return null;const Pe=ue+Re+nt;if(Pe===0)return null;const at=U*(ue*ee+Re*J+nt*W);return(Pe>0?at<0:at>0)?null:this.at(at/Pe,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oy extends jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gs,this.combine=B1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const g_=new pn,Ds=new tm,wc=new ll,v_=new ce,Ac=new ce,Rc=new ce,Cc=new ce,jd=new ce,bc=new ce,__=new ce,Pc=new ce;class Ur extends ei{constructor(e=new Jn,t=new oy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){bc.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=u[d],v=a[d];p!==0&&(jd.fromBufferAttribute(v,e),c?bc.addScaledVector(jd,p):bc.addScaledVector(jd.sub(t),p))}t.add(bc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wc.copy(r.boundingSphere),wc.applyMatrix4(a),Ds.copy(e.ray).recast(e.near),!(wc.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(wc,v_)===null||Ds.origin.distanceToSquared(v_)>(e.far-e.near)**2))&&(g_.copy(a).invert(),Ds.copy(e.ray).applyMatrix4(g_),!(r.boundingBox!==null&&Ds.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,v=a.attributes.normal,g=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,A=g.length;M<A;M++){const S=g[M],x=c[S.materialIndex],D=Math.max(S.start,y.start),I=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let b=D,P=I;b<P;b+=3){const L=u.getX(b),F=u.getX(b+1),T=u.getX(b+2);o=Dc(this,x,e,r,h,p,v,L,F,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(u.count,y.start+y.count);for(let S=M,x=A;S<x;S+=3){const D=u.getX(S),I=u.getX(S+1),b=u.getX(S+2);o=Dc(this,c,e,r,h,p,v,D,I,b),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,A=g.length;M<A;M++){const S=g[M],x=c[S.materialIndex],D=Math.max(S.start,y.start),I=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let b=D,P=I;b<P;b+=3){const L=b,F=b+1,T=b+2;o=Dc(this,x,e,r,h,p,v,L,F,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=M,x=A;S<x;S+=3){const D=S,I=S+1,b=S+2;o=Dc(this,c,e,r,h,p,v,D,I,b),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function PA(n,e,t,r,o,a,c,u){let d;if(e.side===li?d=r.intersectTriangle(c,a,o,!0,u):d=r.intersectTriangle(o,a,c,e.side===zs,u),d===null)return null;Pc.copy(u),Pc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Pc);return h<t.near||h>t.far?null:{distance:h,point:Pc.clone(),object:n}}function Dc(n,e,t,r,o,a,c,u,d,h){n.getVertexPosition(u,Ac),n.getVertexPosition(d,Rc),n.getVertexPosition(h,Cc);const p=PA(n,e,t,r,Ac,Rc,Cc,__);if(p){const v=new ce;Wi.getBarycoord(__,Ac,Rc,Cc,v),o&&(p.uv=Wi.getInterpolatedAttribute(o,u,d,h,v,new jt)),a&&(p.uv1=Wi.getInterpolatedAttribute(a,u,d,h,v,new jt)),c&&(p.normal=Wi.getInterpolatedAttribute(c,u,d,h,v,new ce),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:d,c:h,normal:new ce,materialIndex:0};Wi.getNormal(Ac,Rc,Cc,g.normal),p.face=g,p.barycoord=v}return p}class DA extends Kn{constructor(e=null,t=1,r=1,o,a,c,u,d,h=Fn,p=Fn,v,g){super(null,c,u,d,h,p,o,a,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ls=new ll,LA=new jt(.5,.5),Lc=new ce;class ay{constructor(e=new ls,t=new ls,r=new ls,o=new ls,a=new ls,c=new ls){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=nr,r=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],h=a[3],p=a[4],v=a[5],g=a[6],y=a[7],M=a[8],A=a[9],S=a[10],x=a[11],D=a[12],I=a[13],b=a[14],P=a[15];if(o[0].setComponents(h-c,y-p,x-M,P-D).normalize(),o[1].setComponents(h+c,y+p,x+M,P+D).normalize(),o[2].setComponents(h+u,y+v,x+A,P+I).normalize(),o[3].setComponents(h-u,y-v,x-A,P-I).normalize(),r)o[4].setComponents(d,g,S,b).normalize(),o[5].setComponents(h-d,y-g,x-S,P-b).normalize();else if(o[4].setComponents(h-d,y-g,x-S,P-b).normalize(),t===nr)o[5].setComponents(h+d,y+g,x+S,P+b).normalize();else if(t===fu)o[5].setComponents(d,g,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);const t=LA.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Lc.x=o.normal.x>0?e.max.x:e.min.x,Lc.y=o.normal.y>0?e.max.y:e.min.y,Lc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ly extends jo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hu=new ce,pu=new ce,x_=new pn,Na=new tm,Nc=new ll,Yd=new ce,y_=new ce;class NA extends ei{constructor(e=new Jn,t=new ly){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,a=t.count;o<a;o++)hu.fromBufferAttribute(t,o-1),pu.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=hu.distanceTo(pu);e.setAttribute("lineDistance",new or(r,1))}else St("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Nc.copy(r.boundingSphere),Nc.applyMatrix4(o),Nc.radius+=a,e.ray.intersectsSphere(Nc)===!1)return;x_.copy(o).invert(),Na.copy(e.ray).applyMatrix4(x_);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=this.isLineSegments?2:1,p=r.index,g=r.attributes.position;if(p!==null){const y=Math.max(0,c.start),M=Math.min(p.count,c.start+c.count);for(let A=y,S=M-1;A<S;A+=h){const x=p.getX(A),D=p.getX(A+1),I=Ic(this,e,Na,d,x,D,A);I&&t.push(I)}if(this.isLineLoop){const A=p.getX(M-1),S=p.getX(y),x=Ic(this,e,Na,d,A,S,M-1);x&&t.push(x)}}else{const y=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let A=y,S=M-1;A<S;A+=h){const x=Ic(this,e,Na,d,A,A+1,A);x&&t.push(x)}if(this.isLineLoop){const A=Ic(this,e,Na,d,M-1,y,M-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Ic(n,e,t,r,o,a,c){const u=n.geometry.attributes.position;if(hu.fromBufferAttribute(u,o),pu.fromBufferAttribute(u,a),t.distanceSqToSegment(hu,pu,Yd,y_)>r)return;Yd.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Yd);if(!(h<e.near||h>e.far))return{distance:h,point:y_.clone().applyMatrix4(n.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:n}}class IA extends NA{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class $c extends jo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const S_=new pn,sp=new tm,Uc=new ll,Fc=new ce;class qd extends ei{constructor(e=new Jn,t=new $c){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(o),Uc.radius+=a,e.ray.intersectsSphere(Uc)===!1)return;S_.copy(o).invert(),sp.copy(e.ray).applyMatrix4(S_);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=r.index,v=r.attributes.position;if(h!==null){const g=Math.max(0,c.start),y=Math.min(h.count,c.start+c.count);for(let M=g,A=y;M<A;M++){const S=h.getX(M);Fc.fromBufferAttribute(v,S),M_(Fc,S,d,o,e,t,this)}}else{const g=Math.max(0,c.start),y=Math.min(v.count,c.start+c.count);for(let M=g,A=y;M<A;M++)Fc.fromBufferAttribute(v,M),M_(Fc,M,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function M_(n,e,t,r,o,a,c){const u=sp.distanceSqToPoint(n);if(u<t){const d=new ce;sp.closestPointToPoint(n,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class cy extends Kn{constructor(e=[],t=Vs,r,o,a,c,u,d,h,p){super(e,t,r,o,a,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class UA extends Kn{constructor(e,t,r,o,a,c,u,d,h){super(e,t,r,o,a,c,u,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tl extends Kn{constructor(e,t,r=ar,o,a,c,u=Fn,d=Fn,h,p=Ir,v=1){if(p!==Ir&&p!==Bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,o,a,c,u,d,p,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class FA extends tl{constructor(e,t=ar,r=Vs,o,a,c=Fn,u=Fn,d,h=Ir){const p={width:e,height:e,depth:1},v=[p,p,p,p,p,p];super(e,e,t,r,o,a,c,u,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class uy extends Kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cl extends Jn{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],p=[],v=[];let g=0,y=0;M("z","y","x",-1,-1,r,t,e,c,a,0),M("z","y","x",1,-1,r,t,-e,c,a,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(d),this.setAttribute("position",new or(h,3)),this.setAttribute("normal",new or(p,3)),this.setAttribute("uv",new or(v,2));function M(A,S,x,D,I,b,P,L,F,T,w){const B=b/F,Y=P/T,ee=b/2,ne=P/2,K=L/2,J=F+1,ge=T+1;let Z=0,W=0;const Q=new ce;for(let X=0;X<ge;X++){const U=X*Y-ne;for(let ae=0;ae<J;ae++){const Ee=ae*B-ee;Q[A]=Ee*D,Q[S]=U*I,Q[x]=K,h.push(Q.x,Q.y,Q.z),Q[A]=0,Q[S]=0,Q[x]=L>0?1:-1,p.push(Q.x,Q.y,Q.z),v.push(ae/F),v.push(1-X/T),Z+=1}}for(let X=0;X<T;X++)for(let U=0;U<F;U++){const ae=g+U+J*X,Ee=g+U+J*(X+1),We=g+(U+1)+J*(X+1),Be=g+(U+1)+J*X;d.push(ae,Ee,Be),d.push(Ee,We,Be),W+=6}u.addGroup(y,W,w),y+=W,g+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Tu extends Jn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(r),d=Math.floor(o),h=u+1,p=d+1,v=e/u,g=t/d,y=[],M=[],A=[],S=[];for(let x=0;x<p;x++){const D=x*g-c;for(let I=0;I<h;I++){const b=I*v-a;M.push(b,-D,0),A.push(0,0,1),S.push(I/u),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let D=0;D<u;D++){const I=D+h*x,b=D+h*(x+1),P=D+1+h*(x+1),L=D+1+h*x;y.push(I,b,L),y.push(b,P,L)}this.setIndex(y),this.setAttribute("position",new or(M,3)),this.setAttribute("normal",new or(A,3)),this.setAttribute("uv",new or(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ho(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(E_(o))o.isRenderTargetTexture?(St("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(E_(o[0])){const a=[];for(let c=0,u=o.length;c<u;c++)a[c]=o[c].clone();e[t][r]=a}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Qn(n){const e={};for(let t=0;t<n.length;t++){const r=Ho(n[t]);for(const o in r)e[o]=r[o]}return e}function E_(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function OA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function fy(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const BA={clone:Ho,merge:Qn};var kA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kA,this.fragmentShader=zA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ho(e.uniforms),this.uniformsGroups=OA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Lt().setHex(o.value);break;case"v2":this.uniforms[r].value=new jt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ce().fromArray(o.value);break;case"v4":this.uniforms[r].value=new hn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new Tt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new pn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class VA extends cr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class HA extends jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GA extends jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Oc=new ce,Bc=new Xo,Qi=new ce;class dy extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oc,Bc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Bc,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Oc,Bc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Bc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const os=new ce,T_=new jt,w_=new jt;class Ci extends dy{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rp*2*Math.atan(Math.tan(wd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,T_,w_),t.subVectors(w_,T_)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class hy extends dy{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wo=-90,Ao=1;class WA extends ei{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ci(wo,Ao,e,t);o.layers=this.layers,this.add(o);const a=new Ci(wo,Ao,e,t);a.layers=this.layers,this.add(a);const c=new Ci(wo,Ao,e,t);c.layers=this.layers,this.add(c);const u=new Ci(wo,Ao,e,t);u.layers=this.layers,this.add(u);const d=new Ci(wo,Ao,e,t);d.layers=this.layers,this.add(d);const h=new Ci(wo,Ao,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,u,d]=t;for(const h of t)this.remove(h);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===fu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,h,p]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(v,g,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class XA extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class jA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,St("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const om=class om{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=r,a[3]=o,this}};om.prototype.isMatrix2=!0;let A_=om;function R_(n,e,t,r){const o=YA(r);switch(t){case Z1:return n*e;case J1:return n*e/o.components*o.byteLength;case qp:return n*e/o.components*o.byteLength;case Hs:return n*e*2/o.components*o.byteLength;case Kp:return n*e*2/o.components*o.byteLength;case Q1:return n*e*3/o.components*o.byteLength;case Xi:return n*e*4/o.components*o.byteLength;case $p:return n*e*4/o.components*o.byteLength;case jc:case Yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qc:case Kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bh:case Dh:return Math.max(n,16)*Math.max(e,8)/4;case Ch:case Ph:return Math.max(n,8)*Math.max(e,8)/2;case Lh:case Nh:case Uh:case Fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ih:case au:case Oh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case jh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $h:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Qh:case Jh:case ep:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tp:case np:return Math.ceil(n/4)*Math.ceil(e/4)*8;case lu:case ip:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function YA(n){switch(n){case bi:case Y1:return{byteLength:1,components:1};case Ja:case q1:case lr:return{byteLength:2,components:1};case jp:case Yp:return{byteLength:2,components:4};case ar:case Xp:case tr:return{byteLength:4,components:1};case K1:case $1:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wp}}));typeof window<"u"&&(window.__THREE__?St("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function py(){let n=null,e=!1,t=null,r=null;function o(a,c){r=n.requestAnimationFrame(o),t(a,c)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function qA(n){const e=new WeakMap;function t(u,d){const h=u.array,p=u.usage,v=h.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,h,p),u.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:v}}function r(u,d,h){const p=d.array,v=d.updateRanges;if(n.bindBuffer(h,u),v.length===0)n.bufferSubData(h,0,p);else{v.sort((y,M)=>y.start-M.start);let g=0;for(let y=1;y<v.length;y++){const M=v[g],A=v[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++g,v[g]=A)}v.length=g+1;for(let y=0,M=v.length;y<M;y++){const A=v[y];n.bufferSubData(h,A.start*p.BYTES_PER_ELEMENT,p,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(n.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,d),h.version=u.version}}return{get:o,remove:a,update:c}}var KA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$A=`#ifdef USE_ALPHAHASH
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
#endif`,ZA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tR=`#ifdef USE_AOMAP
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
#endif`,nR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iR=`#ifdef USE_BATCHING
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
#endif`,rR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lR=`#ifdef USE_IRIDESCENCE
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
#endif`,cR=`#ifdef USE_BUMPMAP
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
#endif`,uR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_R=`#define PI 3.141592653589793
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
} // validated`,xR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yR=`vec3 transformedNormal = objectNormal;
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
#endif`,SR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ER=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wR="gl_FragColor = linearToOutputTexel( gl_FragColor );",AR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RR=`#ifdef USE_ENVMAP
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
#endif`,CR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bR=`#ifdef USE_ENVMAP
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
#endif`,PR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DR=`#ifdef USE_ENVMAP
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
#endif`,LR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FR=`#ifdef USE_GRADIENTMAP
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
}`,OR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zR=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,VR=`#ifdef USE_ENVMAP
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
#endif`,HR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jR=`PhysicalMaterial material;
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
#endif`,YR=`uniform sampler2D dfgLUT;
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
}`,qR=`
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
#endif`,KR=`#if defined( RE_IndirectDiffuse )
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
#endif`,$R=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZR=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,QR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sC=`#if defined( USE_POINTS_UV )
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
#endif`,oC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fC=`#ifdef USE_MORPHTARGETS
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
#endif`,dC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_C=`#ifdef USE_NORMALMAP
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
#endif`,xC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IC=`float getShadowMask() {
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
}`,UC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FC=`#ifdef USE_SKINNING
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
#endif`,OC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BC=`#ifdef USE_SKINNING
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
#endif`,kC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GC=`#ifdef USE_TRANSMISSION
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
#endif`,WC=`#ifdef USE_TRANSMISSION
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
#endif`,XC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$C=`uniform sampler2D t2D;
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
}`,ZC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,JC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`#include <common>
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
}`,nb=`#if DEPTH_PACKING == 3200
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
}`,ib=`#define DISTANCE
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
}`,rb=`#define DISTANCE
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`uniform float scale;
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
}`,lb=`uniform vec3 diffuse;
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
}`,cb=`#include <common>
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
}`,ub=`uniform vec3 diffuse;
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
}`,fb=`#define LAMBERT
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
}`,db=`#define LAMBERT
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
}`,hb=`#define MATCAP
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
}`,pb=`#define MATCAP
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
}`,mb=`#define NORMAL
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
}`,gb=`#define NORMAL
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
}`,vb=`#define PHONG
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
}`,_b=`#define PHONG
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
}`,xb=`#define STANDARD
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
}`,yb=`#define STANDARD
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
}`,Sb=`#define TOON
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
}`,Mb=`#define TOON
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
}`,Eb=`uniform float size;
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
}`,Tb=`uniform vec3 diffuse;
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
}`,wb=`#include <common>
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
}`,Ab=`uniform vec3 color;
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
}`,Rb=`uniform float rotation;
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
}`,Cb=`uniform vec3 diffuse;
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
}`,Pt={alphahash_fragment:KA,alphahash_pars_fragment:$A,alphamap_fragment:ZA,alphamap_pars_fragment:QA,alphatest_fragment:JA,alphatest_pars_fragment:eR,aomap_fragment:tR,aomap_pars_fragment:nR,batching_pars_vertex:iR,batching_vertex:rR,begin_vertex:sR,beginnormal_vertex:oR,bsdfs:aR,iridescence_fragment:lR,bumpmap_pars_fragment:cR,clipping_planes_fragment:uR,clipping_planes_pars_fragment:fR,clipping_planes_pars_vertex:dR,clipping_planes_vertex:hR,color_fragment:pR,color_pars_fragment:mR,color_pars_vertex:gR,color_vertex:vR,common:_R,cube_uv_reflection_fragment:xR,defaultnormal_vertex:yR,displacementmap_pars_vertex:SR,displacementmap_vertex:MR,emissivemap_fragment:ER,emissivemap_pars_fragment:TR,colorspace_fragment:wR,colorspace_pars_fragment:AR,envmap_fragment:RR,envmap_common_pars_fragment:CR,envmap_pars_fragment:bR,envmap_pars_vertex:PR,envmap_physical_pars_fragment:VR,envmap_vertex:DR,fog_vertex:LR,fog_pars_vertex:NR,fog_fragment:IR,fog_pars_fragment:UR,gradientmap_pars_fragment:FR,lightmap_pars_fragment:OR,lights_lambert_fragment:BR,lights_lambert_pars_fragment:kR,lights_pars_begin:zR,lights_toon_fragment:HR,lights_toon_pars_fragment:GR,lights_phong_fragment:WR,lights_phong_pars_fragment:XR,lights_physical_fragment:jR,lights_physical_pars_fragment:YR,lights_fragment_begin:qR,lights_fragment_maps:KR,lights_fragment_end:$R,lightprobes_pars_fragment:ZR,logdepthbuf_fragment:QR,logdepthbuf_pars_fragment:JR,logdepthbuf_pars_vertex:eC,logdepthbuf_vertex:tC,map_fragment:nC,map_pars_fragment:iC,map_particle_fragment:rC,map_particle_pars_fragment:sC,metalnessmap_fragment:oC,metalnessmap_pars_fragment:aC,morphinstance_vertex:lC,morphcolor_vertex:cC,morphnormal_vertex:uC,morphtarget_pars_vertex:fC,morphtarget_vertex:dC,normal_fragment_begin:hC,normal_fragment_maps:pC,normal_pars_fragment:mC,normal_pars_vertex:gC,normal_vertex:vC,normalmap_pars_fragment:_C,clearcoat_normal_fragment_begin:xC,clearcoat_normal_fragment_maps:yC,clearcoat_pars_fragment:SC,iridescence_pars_fragment:MC,opaque_fragment:EC,packing:TC,premultiplied_alpha_fragment:wC,project_vertex:AC,dithering_fragment:RC,dithering_pars_fragment:CC,roughnessmap_fragment:bC,roughnessmap_pars_fragment:PC,shadowmap_pars_fragment:DC,shadowmap_pars_vertex:LC,shadowmap_vertex:NC,shadowmask_pars_fragment:IC,skinbase_vertex:UC,skinning_pars_vertex:FC,skinning_vertex:OC,skinnormal_vertex:BC,specularmap_fragment:kC,specularmap_pars_fragment:zC,tonemapping_fragment:VC,tonemapping_pars_fragment:HC,transmission_fragment:GC,transmission_pars_fragment:WC,uv_pars_fragment:XC,uv_pars_vertex:jC,uv_vertex:YC,worldpos_vertex:qC,background_vert:KC,background_frag:$C,backgroundCube_vert:ZC,backgroundCube_frag:QC,cube_vert:JC,cube_frag:eb,depth_vert:tb,depth_frag:nb,distance_vert:ib,distance_frag:rb,equirect_vert:sb,equirect_frag:ob,linedashed_vert:ab,linedashed_frag:lb,meshbasic_vert:cb,meshbasic_frag:ub,meshlambert_vert:fb,meshlambert_frag:db,meshmatcap_vert:hb,meshmatcap_frag:pb,meshnormal_vert:mb,meshnormal_frag:gb,meshphong_vert:vb,meshphong_frag:_b,meshphysical_vert:xb,meshphysical_frag:yb,meshtoon_vert:Sb,meshtoon_frag:Mb,points_vert:Eb,points_frag:Tb,shadow_vert:wb,shadow_frag:Ab,sprite_vert:Rb,sprite_frag:Cb},Ge={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ce},probesMax:{value:new ce},probesResolution:{value:new ce}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},er={basic:{uniforms:Qn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Qn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Qn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Qn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Qn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Qn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Qn([Ge.points,Ge.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Qn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Qn([Ge.common,Ge.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Qn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Qn([Ge.sprite,Ge.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distance:{uniforms:Qn([Ge.common,Ge.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distance_vert,fragmentShader:Pt.distance_frag},shadow:{uniforms:Qn([Ge.lights,Ge.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};er.physical={uniforms:Qn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const kc={r:0,b:0,g:0},bb=new pn,my=new Tt;my.set(-1,0,0,0,1,0,0,0,1);function Pb(n,e,t,r,o,a){const c=new Lt(0);let u=o===!0?0:1,d,h,p=null,v=0,g=null;function y(D){let I=D.isScene===!0?D.background:null;if(I&&I.isTexture){const b=D.backgroundBlurriness>0;I=e.get(I,b)}return I}function M(D){let I=!1;const b=y(D);b===null?S(c,u):b&&b.isColor&&(S(b,1),I=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(D,I){const b=y(I);b&&(b.isCubeTexture||b.mapping===Eu)?(h===void 0&&(h=new Ur(new cl(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:Ho(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bb.makeRotationFromEuler(I.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(my),h.material.toneMapped=Bt.getTransfer(b.colorSpace)!==Kt,(p!==b||v!==b.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,p=b,v=b.version,g=n.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(d===void 0&&(d=new Ur(new Tu(2,2),new cr({name:"BackgroundMaterial",uniforms:Ho(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=b,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.toneMapped=Bt.getTransfer(b.colorSpace)!==Kt,b.matrixAutoUpdate===!0&&b.updateMatrix(),d.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||v!==b.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,p=b,v=b.version,g=n.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function S(D,I){D.getRGB(kc,fy(n)),t.buffers.color.setClear(kc.r,kc.g,kc.b,I,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(D,I=1){c.set(D),u=I,S(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(D){u=D,S(c,u)},render:M,addToRenderList:A,dispose:x}}function Db(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=g(null);let a=o,c=!1;function u(Y,ee,ne,K,J){let ge=!1;const Z=v(Y,K,ne,ee);a!==Z&&(a=Z,h(a.object)),ge=y(Y,K,ne,J),ge&&M(Y,K,ne,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(ge||c)&&(c=!1,b(Y,ee,ne,K),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function d(){return n.createVertexArray()}function h(Y){return n.bindVertexArray(Y)}function p(Y){return n.deleteVertexArray(Y)}function v(Y,ee,ne,K){const J=K.wireframe===!0;let ge=r[ee.id];ge===void 0&&(ge={},r[ee.id]=ge);const Z=Y.isInstancedMesh===!0?Y.id:0;let W=ge[Z];W===void 0&&(W={},ge[Z]=W);let Q=W[ne.id];Q===void 0&&(Q={},W[ne.id]=Q);let X=Q[J];return X===void 0&&(X=g(d()),Q[J]=X),X}function g(Y){const ee=[],ne=[],K=[];for(let J=0;J<t;J++)ee[J]=0,ne[J]=0,K[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:ne,attributeDivisors:K,object:Y,attributes:{},index:null}}function y(Y,ee,ne,K){const J=a.attributes,ge=ee.attributes;let Z=0;const W=ne.getAttributes();for(const Q in W)if(W[Q].location>=0){const U=J[Q];let ae=ge[Q];if(ae===void 0&&(Q==="instanceMatrix"&&Y.instanceMatrix&&(ae=Y.instanceMatrix),Q==="instanceColor"&&Y.instanceColor&&(ae=Y.instanceColor)),U===void 0||U.attribute!==ae||ae&&U.data!==ae.data)return!0;Z++}return a.attributesNum!==Z||a.index!==K}function M(Y,ee,ne,K){const J={},ge=ee.attributes;let Z=0;const W=ne.getAttributes();for(const Q in W)if(W[Q].location>=0){let U=ge[Q];U===void 0&&(Q==="instanceMatrix"&&Y.instanceMatrix&&(U=Y.instanceMatrix),Q==="instanceColor"&&Y.instanceColor&&(U=Y.instanceColor));const ae={};ae.attribute=U,U&&U.data&&(ae.data=U.data),J[Q]=ae,Z++}a.attributes=J,a.attributesNum=Z,a.index=K}function A(){const Y=a.newAttributes;for(let ee=0,ne=Y.length;ee<ne;ee++)Y[ee]=0}function S(Y){x(Y,0)}function x(Y,ee){const ne=a.newAttributes,K=a.enabledAttributes,J=a.attributeDivisors;ne[Y]=1,K[Y]===0&&(n.enableVertexAttribArray(Y),K[Y]=1),J[Y]!==ee&&(n.vertexAttribDivisor(Y,ee),J[Y]=ee)}function D(){const Y=a.newAttributes,ee=a.enabledAttributes;for(let ne=0,K=ee.length;ne<K;ne++)ee[ne]!==Y[ne]&&(n.disableVertexAttribArray(ne),ee[ne]=0)}function I(Y,ee,ne,K,J,ge,Z){Z===!0?n.vertexAttribIPointer(Y,ee,ne,J,ge):n.vertexAttribPointer(Y,ee,ne,K,J,ge)}function b(Y,ee,ne,K){A();const J=K.attributes,ge=ne.getAttributes(),Z=ee.defaultAttributeValues;for(const W in ge){const Q=ge[W];if(Q.location>=0){let X=J[W];if(X===void 0&&(W==="instanceMatrix"&&Y.instanceMatrix&&(X=Y.instanceMatrix),W==="instanceColor"&&Y.instanceColor&&(X=Y.instanceColor)),X!==void 0){const U=X.normalized,ae=X.itemSize,Ee=e.get(X);if(Ee===void 0)continue;const We=Ee.buffer,Be=Ee.type,Ye=Ee.bytesPerElement,oe=Be===n.INT||Be===n.UNSIGNED_INT||X.gpuType===Xp;if(X.isInterleavedBufferAttribute){const ue=X.data,Re=ue.stride,nt=X.offset;if(ue.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Q.locationSize;Pe++)x(Q.location+Pe,ue.meshPerAttribute);Y.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Pe=0;Pe<Q.locationSize;Pe++)S(Q.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,We);for(let Pe=0;Pe<Q.locationSize;Pe++)I(Q.location+Pe,ae/Q.locationSize,Be,U,Re*Ye,(nt+ae/Q.locationSize*Pe)*Ye,oe)}else{if(X.isInstancedBufferAttribute){for(let ue=0;ue<Q.locationSize;ue++)x(Q.location+ue,X.meshPerAttribute);Y.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ue=0;ue<Q.locationSize;ue++)S(Q.location+ue);n.bindBuffer(n.ARRAY_BUFFER,We);for(let ue=0;ue<Q.locationSize;ue++)I(Q.location+ue,ae/Q.locationSize,Be,U,ae*Ye,ae/Q.locationSize*ue*Ye,oe)}}else if(Z!==void 0){const U=Z[W];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(Q.location,U);break;case 3:n.vertexAttrib3fv(Q.location,U);break;case 4:n.vertexAttrib4fv(Q.location,U);break;default:n.vertexAttrib1fv(Q.location,U)}}}}D()}function P(){w();for(const Y in r){const ee=r[Y];for(const ne in ee){const K=ee[ne];for(const J in K){const ge=K[J];for(const Z in ge)p(ge[Z].object),delete ge[Z];delete K[J]}}delete r[Y]}}function L(Y){if(r[Y.id]===void 0)return;const ee=r[Y.id];for(const ne in ee){const K=ee[ne];for(const J in K){const ge=K[J];for(const Z in ge)p(ge[Z].object),delete ge[Z];delete K[J]}}delete r[Y.id]}function F(Y){for(const ee in r){const ne=r[ee];for(const K in ne){const J=ne[K];if(J[Y.id]===void 0)continue;const ge=J[Y.id];for(const Z in ge)p(ge[Z].object),delete ge[Z];delete J[Y.id]}}}function T(Y){for(const ee in r){const ne=r[ee],K=Y.isInstancedMesh===!0?Y.id:0,J=ne[K];if(J!==void 0){for(const ge in J){const Z=J[ge];for(const W in Z)p(Z[W].object),delete Z[W];delete J[ge]}delete ne[K],Object.keys(ne).length===0&&delete r[ee]}}}function w(){B(),c=!0,a!==o&&(a=o,h(a.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:w,resetDefaultState:B,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:S,disableUnusedAttributes:D}}function Lb(n,e,t){let r;function o(d){r=d}function a(d,h){n.drawArrays(r,d,h),t.update(h,r,1)}function c(d,h,p){p!==0&&(n.drawArraysInstanced(r,d,h,p),t.update(h,r,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,p);let g=0;for(let y=0;y<p;y++)g+=h[y];t.update(g,r,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function Nb(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==Xi&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const T=F===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==bi&&F!==tr&&!T&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function d(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(St("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&St("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),D=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:D,maxVaryings:I,maxFragmentUniforms:b,maxSamples:P,samples:L}}function Ib(n){const e=this;let t=null,r=0,o=!1,a=!1;const c=new ls,u=new Tt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||r!==0||o;return o=g,r=v.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,g){t=p(v,g,0)},this.setState=function(v,g,y){const M=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,x=n.get(v);if(!o||M===null||M.length===0||a&&!S)a?p(null):h();else{const D=a?0:r,I=D*4;let b=x.clippingState||null;d.value=b,b=p(M,g,I,y);for(let P=0;P!==I;++P)b[P]=t[P];x.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(v,g,y,M){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=d.value,M!==!0||S===null){const x=y+A*4,D=g.matrixWorldInverse;u.getNormalMatrix(D),(S===null||S.length<x)&&(S=new Float32Array(x));for(let I=0,b=y;I!==A;++I,b+=4)c.copy(v[I]).applyMatrix4(D,u),c.normal.toArray(S,b),S[b+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}const Uo=4,Ub=6,Fb=20,Ob=256,Ia=new hy,C_=new Lt;let Kd=null,$d=0,Zd=0,Qd=!1;const Bb=new ce,Ns=new ce;class b_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:u=Bb}=a;Kd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=D_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kd,$d,Zd),this._renderer.xr.enabled=Qd,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:lr,format:Xi,colorSpace:cu,depthBuffer:!1},o=P_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P_(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kb(a)),this._blurMaterial=Vb(a,e,t),this._ggxMaterial=zb(a,e,t)}return o}_compileMaterial(e){const t=new Ur(new Jn,e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,r,o,a){const d=new Ci(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(C_),v.toneMapping=sr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ur(new cl,new oy({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let x=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,x=!0):(S.color.copy(C_),x=!0);for(let I=0;I<6;I++){const b=I%3;b===0?(d.up.set(0,h[I],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[I],a.y,a.z)):b===1?(d.up.set(0,0,h[I]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[I],a.z)):(d.up.set(0,h[I],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[I]));const P=this._cubeSize;Ro(o,b*P,I>2?P:0,P,P),v.setRenderTarget(o),x&&v.render(A,d),v.render(e,d)}v.toneMapping=y,v.autoClear=g,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Vs||e.mapping===Vo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=L_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=D_());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;Ro(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,Ia)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[r];u.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-p*p),g=h*1.25,y=v*g,{_lodMax:M}=this,A=this._sizeLods[r],S=3*A*(r>M-Uo?r-M+Uo:0),x=4*(this._cubeSize-A);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=M-t,Ro(a,S,x,3*A,2*A),o.setRenderTarget(a),o.render(u,Ia),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-r,Ro(e,S,x,3*A,2*A),o.setRenderTarget(e),o.render(u,Ia)}_blur(e,t,r,o){const a=this._pingPongRenderTarget,c=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,r,c),this._blurPass(a,e,r,r,c)}_blurPass(e,t,r,o,a){const c=this._renderer,u=this._blurMaterial,d=this._lodMeshes[o];d.material=u;const h=u.uniforms;h.envMap.value=e.texture,h.sigma.value=a,h.mipInt.value=this._lodMax-r;const p=this._sizeLods[o],v=3*p*(o>this._lodMax-Uo?o-this._lodMax+Uo:0),g=4*(this._cubeSize-p);Ro(t,v,g,3*p,2*p),c.setRenderTarget(t),c.render(d,Ia)}}function kb(n){const e=[],t=[];let r=n;const o=n-Uo+1+Ub;for(let a=0;a<o;a++){const c=Math.pow(2,r);e.push(c);const u=1/(c-2),d=-u,h=1+u,p=[d,d,h,d,h,h,d,d,h,h,d,h],v=6,g=6,y=3,M=new Float32Array(y*g*v),A=new Float32Array(y*g*v);for(let x=0;x<v;x++){const D=x%3*2/3-1,I=x>2?0:-1,b=[D,I,0,D+2/3,I,0,D+2/3,I+1,0,D,I,0,D+2/3,I+1,0,D,I+1,0];M.set(b,y*g*x);for(let P=0;P<g;P++){const L=p[P*2]*2-1,F=p[P*2+1]*2-1;x===0?Ns.set(1,F,L):x===1?Ns.set(-L,1,-F):x===2?Ns.set(-L,F,1):x===3?Ns.set(-1,F,-L):x===4?Ns.set(-L,-1,F):Ns.set(L,F,-1),Ns.toArray(A,(x*g+P)*y)}}const S=new Jn;S.setAttribute("position",new jn(M,y)),S.setAttribute("outputDirection",new jn(A,y)),t.push(new Ur(S,null)),r>Uo&&r--}return{lodMeshes:t,sizeLods:e}}function P_(n,e,t){const r=new ji(n,e,t);return r.texture.mapping=Eu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ro(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function zb(n,e,t){return new cr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ob,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Vb(n,e,t){return new cr({name:"SphericalGaussianBlur",defines:{SAMPLES:Fb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function D_(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function L_(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function wu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class gy extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new cy(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new cl(5,5,5),a=new cr({name:"CubemapFromEquirect",uniforms:Ho(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:li,blending:Dr});a.uniforms.tEquirect.value=t;const c=new Ur(o,a),u=t.minFilter;return t.minFilter===Os&&(t.minFilter=qn),new WA(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}function Hb(n){let e=new WeakMap,t=new WeakMap,r=null;function o(g,y=!1){return g==null?null:y?c(g):a(g)}function a(g){if(g&&g.isTexture){const y=g.mapping;if(y===Sd||y===Md)if(e.has(g)){const M=e.get(g).texture;return u(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const A=new gy(M.height);return A.fromEquirectangularTexture(n,g),e.set(g,A),g.addEventListener("dispose",h),u(A.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const y=g.mapping,M=y===Sd||y===Md,A=y===Vs||y===Vo;if(M||A){let S=t.get(g);const x=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new b_(n)),S=M?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const D=g.image;return M&&D&&D.height>0||A&&D&&d(D)?(r===null&&(r=new b_(n)),S=M?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",p),S.texture):null}}}return g}function u(g,y){return y===Sd?g.mapping=Vs:y===Md&&(g.mapping=Vo),g}function d(g){let y=0;const M=6;for(let A=0;A<M;A++)g[A]!==void 0&&y++;return y===M}function h(g){const y=g.target;y.removeEventListener("dispose",h);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function p(g){const y=g.target;y.removeEventListener("dispose",p);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function Gb(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Fo("WebGLRenderer: "+r+" extension not supported."),o}}}function Wb(n,e,t,r){const o={},a=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete o[g.id];const y=a.get(g);y&&(e.remove(y),a.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(v,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const y in g)e.update(g[y],n.ARRAY_BUFFER)}function h(v){const g=[],y=v.index,M=v.attributes.position;let A=0;if(M===void 0)return;if(y!==null){const D=y.array;A=y.version;for(let I=0,b=D.length;I<b;I+=3){const P=D[I+0],L=D[I+1],F=D[I+2];g.push(P,L,L,F,F,P)}}else{const D=M.array;A=M.version;for(let I=0,b=D.length/3-1;I<b;I+=3){const P=I+0,L=I+1,F=I+2;g.push(P,L,L,F,F,P)}}const S=new(M.count>=65535?sy:ry)(g,1);S.version=A;const x=a.get(v);x&&e.remove(x),a.set(v,S)}function p(v){const g=a.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&h(v)}else h(v);return a.get(v)}return{get:u,update:d,getWireframeAttribute:p}}function Xb(n,e,t){let r;function o(v){r=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function d(v,g){n.drawElements(r,g,a,v*c),t.update(g,r,1)}function h(v,g,y){y!==0&&(n.drawElementsInstanced(r,g,a,v*c,y),t.update(g,r,y))}function p(v,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,a,v,0,y);let A=0;for(let S=0;S<y;S++)A+=g[S];t.update(A,r,1)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function jb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:Wt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Yb(n,e,t){const r=new WeakMap,o=new hn;function a(c,u,d){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let g=r.get(u);if(g===void 0||g.count!==v){let B=function(){T.dispose(),r.delete(u),u.removeEventListener("dispose",B)};var y=B;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let b=0;M===!0&&(b=1),A===!0&&(b=2),S===!0&&(b=3);let P=u.attributes.position.count*b,L=1;P>e.maxTextureSize&&(L=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*L*4*v),T=new ty(F,P,L,v);T.type=tr,T.needsUpdate=!0;const w=b*4;for(let Y=0;Y<v;Y++){const ee=x[Y],ne=D[Y],K=I[Y],J=P*L*4*Y;for(let ge=0;ge<ee.count;ge++){const Z=ge*w;M===!0&&(o.fromBufferAttribute(ee,ge),F[J+Z+0]=o.x,F[J+Z+1]=o.y,F[J+Z+2]=o.z,F[J+Z+3]=0),A===!0&&(o.fromBufferAttribute(ne,ge),F[J+Z+4]=o.x,F[J+Z+5]=o.y,F[J+Z+6]=o.z,F[J+Z+7]=0),S===!0&&(o.fromBufferAttribute(K,ge),F[J+Z+8]=o.x,F[J+Z+9]=o.y,F[J+Z+10]=o.z,F[J+Z+11]=K.itemSize===4?o.w:1)}}g={count:v,texture:T,size:new jt(P,L)},r.set(u,g),u.addEventListener("dispose",B)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const A=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",A),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:a}}function qb(n,e,t,r,o){let a=new WeakMap;function c(h){const p=o.render.frame,v=h.geometry,g=e.get(h,v);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==p&&(y.update(),a.set(y,p))}return g}function u(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),r.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const Kb={[k1]:"LINEAR_TONE_MAPPING",[z1]:"REINHARD_TONE_MAPPING",[V1]:"CINEON_TONE_MAPPING",[H1]:"ACES_FILMIC_TONE_MAPPING",[W1]:"AGX_TONE_MAPPING",[X1]:"NEUTRAL_TONE_MAPPING",[G1]:"CUSTOM_TONE_MAPPING"};function $b(n,e,t,r,o,a){const c=new ji(e,t,{type:n,depthBuffer:o,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let u=null,d=null;const h=new Jn;h.setAttribute("position",new or([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new or([0,2,0,0,2,0],2));const p=new VA({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Ur(h,p),g=new hy(-1,1,1,-1,0,1);let y=null,M=null,A=!1,S,x=null,D=[],I=!1;this.setSize=function(b,P){c.setSize(b,P),u!==null&&u.setSize(b,P),d!==null&&d.setSize(b,P);for(let L=0;L<D.length;L++){const F=D[L];F.setSize&&F.setSize(b,P)}},this.setEffects=function(b){D=b,I=D.length>0&&D[0].isRenderPass===!0;const P=c.width,L=c.height;D.length>0&&u===null&&(u=new ji(P,L,{type:lr,depthBuffer:!1,stencilBuffer:!1}),d=new ji(P,L,{type:lr,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<D.length;F++){const T=D[F];T.setSize&&T.setSize(P,L)}},this.begin=function(b,P){if(A||b.toneMapping===sr&&D.length===0)return!1;if(x=P,P!==null){const L=P.width,F=P.height;(c.width!==L||c.height!==F)&&this.setSize(L,F)}return I===!1&&b.setRenderTarget(c),S=b.toneMapping,b.toneMapping=sr,!0},this.hasRenderPass=function(){return I},this.end=function(b,P){b.toneMapping=S,A=!0;let L=c,F=u;for(let T=0;T<D.length;T++){const w=D[T];w.enabled!==!1&&(w.render(b,F,L,P),w.needsSwap!==!1&&(L=F,F=F===u?d:u))}if(y!==b.outputColorSpace||M!==b.toneMapping){y=b.outputColorSpace,M=b.toneMapping,p.defines={},Bt.getTransfer(y)===Kt&&(p.defines.SRGB_TRANSFER="");const T=Kb[M];T&&(p.defines[T]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,b.setRenderTarget(x),b.render(v,g),x=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),d!==null&&d.dispose(),h.dispose(),p.dispose()}}const vy=new Kn,op=new tl(1,1),_y=new ty,xy=new mA,yy=new cy,N_=[],I_=[],U_=new Float32Array(16),F_=new Float32Array(9),O_=new Float32Array(4);function Yo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=N_[o];if(a===void 0&&(a=new Float32Array(o),N_[o]=a),e!==0){r.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function Tn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function wn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Au(n,e){let t=I_[e];t===void 0&&(t=new Int32Array(e),I_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function Zb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Qb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;n.uniform2fv(this.addr,e),wn(t,e)}}function Jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;n.uniform3fv(this.addr,e),wn(t,e)}}function eP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;n.uniform4fv(this.addr,e),wn(t,e)}}function tP(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,r))return;O_.set(r),n.uniformMatrix2fv(this.addr,!1,O_),wn(t,r)}}function nP(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,r))return;F_.set(r),n.uniformMatrix3fv(this.addr,!1,F_),wn(t,r)}}function iP(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,r))return;U_.set(r),n.uniformMatrix4fv(this.addr,!1,U_),wn(t,r)}}function rP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;n.uniform2iv(this.addr,e),wn(t,e)}}function oP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;n.uniform3iv(this.addr,e),wn(t,e)}}function aP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;n.uniform4iv(this.addr,e),wn(t,e)}}function lP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;n.uniform2uiv(this.addr,e),wn(t,e)}}function uP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;n.uniform3uiv(this.addr,e),wn(t,e)}}function fP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;n.uniform4uiv(this.addr,e),wn(t,e)}}function dP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(op.compareFunction=t.isReversedDepthBuffer()?Qp:Zp,a=op):a=vy,t.setTexture2D(e||a,o)}function hP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||xy,o)}function pP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||yy,o)}function mP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||_y,o)}function gP(n){switch(n){case 5126:return Zb;case 35664:return Qb;case 35665:return Jb;case 35666:return eP;case 35674:return tP;case 35675:return nP;case 35676:return iP;case 5124:case 35670:return rP;case 35667:case 35671:return sP;case 35668:case 35672:return oP;case 35669:case 35673:return aP;case 5125:return lP;case 36294:return cP;case 36295:return uP;case 36296:return fP;case 35678:case 36198:case 36298:case 36306:case 35682:return dP;case 35679:case 36299:case 36307:return hP;case 35680:case 36300:case 36308:case 36293:return pP;case 36289:case 36303:case 36311:case 36292:return mP}}function vP(n,e){n.uniform1fv(this.addr,e)}function _P(n,e){const t=Yo(e,this.size,2);n.uniform2fv(this.addr,t)}function xP(n,e){const t=Yo(e,this.size,3);n.uniform3fv(this.addr,t)}function yP(n,e){const t=Yo(e,this.size,4);n.uniform4fv(this.addr,t)}function SP(n,e){const t=Yo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function MP(n,e){const t=Yo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function EP(n,e){const t=Yo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function TP(n,e){n.uniform1iv(this.addr,e)}function wP(n,e){n.uniform2iv(this.addr,e)}function AP(n,e){n.uniform3iv(this.addr,e)}function RP(n,e){n.uniform4iv(this.addr,e)}function CP(n,e){n.uniform1uiv(this.addr,e)}function bP(n,e){n.uniform2uiv(this.addr,e)}function PP(n,e){n.uniform3uiv(this.addr,e)}function DP(n,e){n.uniform4uiv(this.addr,e)}function LP(n,e,t){const r=this.cache,o=e.length,a=Au(t,o);Tn(r,a)||(n.uniform1iv(this.addr,a),wn(r,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=op:c=vy;for(let u=0;u!==o;++u)t.setTexture2D(e[u]||c,a[u])}function NP(n,e,t){const r=this.cache,o=e.length,a=Au(t,o);Tn(r,a)||(n.uniform1iv(this.addr,a),wn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||xy,a[c])}function IP(n,e,t){const r=this.cache,o=e.length,a=Au(t,o);Tn(r,a)||(n.uniform1iv(this.addr,a),wn(r,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||yy,a[c])}function UP(n,e,t){const r=this.cache,o=e.length,a=Au(t,o);Tn(r,a)||(n.uniform1iv(this.addr,a),wn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||_y,a[c])}function FP(n){switch(n){case 5126:return vP;case 35664:return _P;case 35665:return xP;case 35666:return yP;case 35674:return SP;case 35675:return MP;case 35676:return EP;case 5124:case 35670:return TP;case 35667:case 35671:return wP;case 35668:case 35672:return AP;case 35669:case 35673:return RP;case 5125:return CP;case 36294:return bP;case 36295:return PP;case 36296:return DP;case 35678:case 36198:case 36298:case 36306:case 35682:return LP;case 35679:case 36299:case 36307:return NP;case 35680:case 36300:case 36308:case 36293:return IP;case 36289:case 36303:case 36311:case 36292:return UP}}class OP{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=gP(t.type)}}class BP{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FP(t.type)}}class kP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],r)}}}const Jd=/(\w+)(\])?(\[|\.)?/g;function B_(n,e){n.seq.push(e),n.map[e.id]=e}function zP(n,e,t){const r=n.name,o=r.length;for(Jd.lastIndex=0;;){const a=Jd.exec(r),c=Jd.lastIndex;let u=a[1];const d=a[2]==="]",h=a[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===o){B_(t,h===void 0?new OP(u,n,e):new BP(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new kP(u),B_(t,v)),t=v}}}class Zc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const u=e.getActiveUniform(t,c),d=e.getUniformLocation(t,u.name);zP(u,d,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=r[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function k_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const VP=37297;let HP=0;function GP(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}const z_=new Tt;function WP(n){Bt._getMatrix(z_,Bt.workingColorSpace,n);const e=`mat3( ${z_.elements.map(t=>t.toFixed(4))} )`;switch(Bt.getTransfer(n)){case uu:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return St("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function V_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+GP(n.getShaderSource(e),u)}else return a}function XP(n,e){const t=WP(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jP={[k1]:"Linear",[z1]:"Reinhard",[V1]:"Cineon",[H1]:"ACESFilmic",[W1]:"AgX",[X1]:"Neutral",[G1]:"Custom"};function YP(n,e){const t=jP[e];return t===void 0?(St("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zc=new ce;function qP(){Bt.getLuminanceCoefficients(zc);const n=zc.x.toFixed(4),e=zc.y.toFixed(4),t=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function $P(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function ZP(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function Va(n){return n!==""}function H_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function G_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QP=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(n){return n.replace(QP,eD)}const JP=new Map;function eD(n,e){let t=Pt[e];if(t===void 0){const r=JP.get(e);if(r!==void 0)t=Pt[r],St('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ap(t)}const tD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W_(n){return n.replace(tD,nD)}function nD(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function X_(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const iD={[Xc]:"SHADOWMAP_TYPE_PCF",[ka]:"SHADOWMAP_TYPE_VSM"};function rD(n){return iD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sD={[Vs]:"ENVMAP_TYPE_CUBE",[Vo]:"ENVMAP_TYPE_CUBE",[Eu]:"ENVMAP_TYPE_CUBE_UV"};function oD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":sD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const aD={[Vo]:"ENVMAP_MODE_REFRACTION"};function lD(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":aD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cD={[B1]:"ENVMAP_BLENDING_MULTIPLY",[jw]:"ENVMAP_BLENDING_MIX",[Yw]:"ENVMAP_BLENDING_ADD"};function uD(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":cD[n.combine]||"ENVMAP_BLENDING_NONE"}function fD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function dD(n,e,t,r){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=rD(t),h=oD(t),p=lD(t),v=uD(t),g=fD(t),y=KP(t),M=$P(a),A=o.createProgram();let S,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Va).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Va).join(`
`),x.length>0&&(x+=`
`)):(S=[X_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),x=[X_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?Pt.tonemapping_pars_fragment:"",t.toneMapping!==sr?YP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,XP("linearToOutputTexel",t.outputColorSpace),qP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Va).join(`
`)),c=ap(c),c=H_(c,t),c=G_(c,t),u=ap(u),u=H_(u,t),u=G_(u,t),c=W_(c),u=W_(u),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===n_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===n_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=D+S+c,b=D+x+u,P=k_(o,o.VERTEX_SHADER,I),L=k_(o,o.FRAGMENT_SHADER,b);o.attachShader(A,P),o.attachShader(A,L),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(Y){if(n.debug.checkShaderErrors){const ee=o.getProgramInfoLog(A)||"",ne=o.getShaderInfoLog(P)||"",K=o.getShaderInfoLog(L)||"",J=ee.trim(),ge=ne.trim(),Z=K.trim();let W=!0,Q=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,A,P,L);else{const X=V_(o,P,"vertex"),U=V_(o,L,"fragment");Wt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+J+`
`+X+`
`+U)}else J!==""?St("WebGLProgram: Program Info Log:",J):(ge===""||Z==="")&&(Q=!1);Q&&(Y.diagnostics={runnable:W,programLog:J,vertexShader:{log:ge,prefix:S},fragmentShader:{log:Z,prefix:x}})}o.deleteShader(P),o.deleteShader(L),T=new Zc(o,A),w=ZP(o,A)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(A,VP)),B},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HP++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=P,this.fragmentShader=L,this}let hD=0;class pD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new mD(e),t.set(e,r)),r}}class mD{constructor(e){this.id=hD++,this.code=e,this.usedTimes=0}}function gD(n){return n===Hs||n===au||n===lu}function vD(n,e,t,r,o,a){const c=new ny,u=new pD,d=new Set,h=[],p=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return d.add(T),T===0?"uv":`uv${T}`}function A(T,w,B,Y,ee,ne){const K=Y.fog,J=ee.geometry,ge=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?Y.environment:null,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,W=e.get(T.envMap||ge,Z),Q=W&&W.mapping===Eu?W.image.height:null,X=y[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&St("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const U=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ae=U!==void 0?U.length:0;let Ee=0;J.morphAttributes.position!==void 0&&(Ee=1),J.morphAttributes.normal!==void 0&&(Ee=2),J.morphAttributes.color!==void 0&&(Ee=3);let We,Be,Ye,oe;if(X){const zt=er[X];We=zt.vertexShader,Be=zt.fragmentShader}else{We=T.vertexShader,Be=T.fragmentShader;const zt=u.getVertexShaderStage(T),It=u.getFragmentShaderStage(T);u.update(T,zt,It),Ye=zt.id,oe=It.id}const ue=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),nt=ee.isInstancedMesh===!0,Pe=ee.isBatchedMesh===!0,at=!!T.map,rt=!!T.matcap,xt=!!W,At=!!T.aoMap,Rt=!!T.lightMap,Se=!!T.bumpMap&&T.wireframe===!1,pt=!!T.normalMap,lt=!!T.displacementMap,dt=!!T.emissiveMap,Ct=!!T.metalnessMap,Nt=!!T.roughnessMap,z=T.anisotropy>0,Yt=T.clearcoat>0,ct=T.dispersion>0,N=T.retroreflectivity>0,E=T.iridescence>0,$=T.sheen>0,se=T.transmission>0,pe=z&&!!T.anisotropyMap,we=Yt&&!!T.clearcoatMap,De=Yt&&!!T.clearcoatNormalMap,me=Yt&&!!T.clearcoatRoughnessMap,_e=E&&!!T.iridescenceMap,Le=E&&!!T.iridescenceThicknessMap,et=$&&!!T.sheenColorMap,Oe=$&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,tt=!!T.specularColorMap,ft=!!T.specularIntensityMap,vt=se&&!!T.transmissionMap,H=se&&!!T.thicknessMap,Ue=!!T.gradientMap,xe=!!T.alphaMap,Ie=T.alphaTest>0,ze=!!T.alphaHash,ye=!!T.extensions;let Ze=sr;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const $e={shaderID:X,shaderType:T.type,shaderName:T.name,vertexShader:We,fragmentShader:Be,defines:T.defines,customVertexShaderID:Ye,customFragmentShaderID:oe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Pe,batchingColor:Pe&&ee._colorsTexture!==null,instancing:nt,instancingColor:nt&&ee.instanceColor!==null,instancingMorph:nt&&ee.morphTexture!==null,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:at,matcap:rt,envMap:xt,envMapMode:xt&&W.mapping,envMapCubeUVHeight:Q,aoMap:At,lightMap:Rt,bumpMap:Se,normalMap:pt,displacementMap:lt,emissiveMap:dt,normalMapObjectSpace:pt&&T.normalMapType===$w,normalMapTangentSpace:pt&&T.normalMapType===t_,packedNormalMap:pt&&T.normalMapType===t_&&gD(T.normalMap.format),metalnessMap:Ct,roughnessMap:Nt,anisotropy:z,anisotropyMap:pe,clearcoat:Yt,clearcoatMap:we,clearcoatNormalMap:De,clearcoatRoughnessMap:me,dispersion:ct,retroreflection:N,iridescence:E,iridescenceMap:_e,iridescenceThicknessMap:Le,sheen:$,sheenColorMap:et,sheenRoughnessMap:Oe,specularMap:Ne,specularColorMap:tt,specularIntensityMap:ft,transmission:se,transmissionMap:vt,thicknessMap:H,gradientMap:Ue,opaque:T.transparent===!1&&T.blending===ja&&T.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ie,alphaHash:ze,combine:T.combine,mapUv:at&&M(T.map.channel),aoMapUv:At&&M(T.aoMap.channel),lightMapUv:Rt&&M(T.lightMap.channel),bumpMapUv:Se&&M(T.bumpMap.channel),normalMapUv:pt&&M(T.normalMap.channel),displacementMapUv:lt&&M(T.displacementMap.channel),emissiveMapUv:dt&&M(T.emissiveMap.channel),metalnessMapUv:Ct&&M(T.metalnessMap.channel),roughnessMapUv:Nt&&M(T.roughnessMap.channel),anisotropyMapUv:pe&&M(T.anisotropyMap.channel),clearcoatMapUv:we&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:De&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:et&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&M(T.sheenRoughnessMap.channel),specularMapUv:Ne&&M(T.specularMap.channel),specularColorMapUv:tt&&M(T.specularColorMap.channel),specularIntensityMapUv:ft&&M(T.specularIntensityMap.channel),transmissionMapUv:vt&&M(T.transmissionMap.channel),thicknessMapUv:H&&M(T.thicknessMap.channel),alphaMapUv:xe&&M(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(pt||z),vertexNormals:!!J.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!J.attributes.uv&&(at||xe),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||J.attributes.normal===void 0&&pt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Re,skinning:ee.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ee,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:ne.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:at&&T.map.isVideoTexture===!0&&Bt.getTransfer(T.map.colorSpace)===Kt,decodeVideoTextureEmissive:dt&&T.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(T.emissiveMap.colorSpace)===Kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Rr,flipSided:T.side===li,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ye&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&T.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return $e.vertexUv1s=d.has(1),$e.vertexUv2s=d.has(2),$e.vertexUv3s=d.has(3),d.clear(),$e}function S(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const B in T.defines)w.push(B),w.push(T.defines[B]);return T.isRawShaderMaterial===!1&&(x(w,T),D(w,T),w.push(n.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function x(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numSunLights),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numSunLightShadows),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function D(T,w){c.disableAll(),w.instancing&&c.enable(0),w.instancingColor&&c.enable(1),w.instancingMorph&&c.enable(2),w.matcap&&c.enable(3),w.envMap&&c.enable(4),w.normalMapObjectSpace&&c.enable(5),w.normalMapTangentSpace&&c.enable(6),w.clearcoat&&c.enable(7),w.iridescence&&c.enable(8),w.alphaTest&&c.enable(9),w.vertexColors&&c.enable(10),w.vertexAlphas&&c.enable(11),w.vertexUv1s&&c.enable(12),w.vertexUv2s&&c.enable(13),w.vertexUv3s&&c.enable(14),w.vertexTangents&&c.enable(15),w.anisotropy&&c.enable(16),w.alphaHash&&c.enable(17),w.batching&&c.enable(18),w.dispersion&&c.enable(19),w.retroreflection&&c.enable(24),w.batchingColor&&c.enable(20),w.gradientMap&&c.enable(21),w.packedNormalMap&&c.enable(22),w.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),w.fog&&c.enable(0),w.useFog&&c.enable(1),w.flatShading&&c.enable(2),w.logarithmicDepthBuffer&&c.enable(3),w.reversedDepthBuffer&&c.enable(4),w.skinning&&c.enable(5),w.morphTargets&&c.enable(6),w.morphNormals&&c.enable(7),w.morphColors&&c.enable(8),w.premultipliedAlpha&&c.enable(9),w.shadowMapEnabled&&c.enable(10),w.doubleSided&&c.enable(11),w.flipSided&&c.enable(12),w.useDepthPacking&&c.enable(13),w.dithering&&c.enable(14),w.transmission&&c.enable(15),w.sheen&&c.enable(16),w.opaque&&c.enable(17),w.pointsUvs&&c.enable(18),w.decodeVideoTexture&&c.enable(19),w.decodeVideoTextureEmissive&&c.enable(20),w.alphaToCoverage&&c.enable(21),w.numLightProbeGrids>0&&c.enable(22),w.hasPositionAttribute&&c.enable(23),T.push(c.mask)}function I(T){const w=y[T.type];let B;if(w){const Y=er[w];B=BA.clone(Y.uniforms)}else B=T.uniforms;return B}function b(T,w){let B=p.get(w);return B!==void 0?++B.usedTimes:(B=new dD(n,w,T,o),h.push(B),p.set(w,B)),B}function P(T){if(--T.usedTimes===0){const w=h.indexOf(T);h[w]=h[h.length-1],h.pop(),p.delete(T.cacheKey),T.destroy()}}function L(T){u.remove(T)}function F(){u.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:I,acquireProgram:b,releaseProgram:P,releaseShaderCache:L,programs:h,dispose:F}}function _D(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function r(c){n.delete(c)}function o(c,u,d){n.get(c)[u]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function xD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function j_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Y_(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function u(g,y,M,A,S,x){let D=n[e];return D===void 0?(D={id:g.id,object:g,geometry:y,material:M,materialVariant:c(g),groupOrder:A,renderOrder:g.renderOrder,z:S,group:x},n[e]=D):(D.id=g.id,D.object=g,D.geometry=y,D.material=M,D.materialVariant=c(g),D.groupOrder=A,D.renderOrder=g.renderOrder,D.z=S,D.group=x),e++,D}function d(g,y,M,A,S,x,D){D.reversedDepth===!0&&(S=-S);const I=u(g,y,M,A,S,x);M.transmission>0?r.push(I):M.transparent===!0?o.push(I):t.push(I)}function h(g,y,M,A,S,x){const D=u(g,y,M,A,S,x);M.transmission>0?r.unshift(D):M.transparent===!0?o.unshift(D):t.unshift(D)}function p(g,y){t.length>1&&t.sort(g||xD),r.length>1&&r.sort(y||j_),o.length>1&&o.sort(y||j_)}function v(){for(let g=e,y=n.length;g<y;g++){const M=n[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:d,unshift:h,finish:v,sort:p}}function yD(){let n=new WeakMap;function e(r,o){const a=n.get(r);let c;return a===void 0?(c=new Y_,n.set(r,[c])):o>=a.length?(c=new Y_,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function SD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ce,color:new Lt};break;case"SpotLight":t={position:new ce,direction:new ce,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":t={color:new Lt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return n[e.id]=t,t}}}function MD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ED=0;function TD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wD(n){const e=new SD,t=MD(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ce);const o=new ce,a=new pn,c=new pn;function u(h){let p=0,v=0,g=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let y=0,M=0,A=0,S=0,x=0,D=0,I=0,b=0,P=0,L=0,F=0,T=0,w=0,B=0;h.sort(TD);for(let ee=0,ne=h.length;ee<ne;ee++){const K=h[ee],J=K.color,ge=K.intensity,Z=K.distance;let W=null;if(K.shadow&&K.shadow.map&&(K.shadow.map.texture.format===Hs?W=K.shadow.map.texture:W=K.shadow.map.depthTexture||K.shadow.map.texture),K.isAmbientLight)p+=J.r*ge,v+=J.g*ge,g+=J.b*ge;else if(K.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(K.sh.coefficients[Q],ge);B++}else if(K.isSunLight){const Q=e.get(K);if(Q.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const X=K.shadow,U=t.get(K);U.shadowIntensity=X.intensity,U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),r.sunShadow[M]=U,r.sunShadowMap[M]=W;const ae=X.getViewportCount();for(let Ee=0;Ee<ae;Ee++)r.sunShadowMatrix[A+Ee]=X.getMatrix(Ee),r.sunShadowCascade[A+Ee]=X._cascadeData[Ee];A+=ae,M++}r.sun[y]=Q,y++}else if(K.isDirectionalLight){const Q=e.get(K);if(Q.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const X=K.shadow,U=t.get(K);U.shadowIntensity=X.intensity,U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,r.directionalShadow[S]=U,r.directionalShadowMap[S]=W,r.directionalShadowMatrix[S]=K.shadow.matrix,P++}r.directional[S]=Q,S++}else if(K.isSpotLight){const Q=e.get(K);Q.position.setFromMatrixPosition(K.matrixWorld),Q.color.copy(J).multiplyScalar(ge),Q.distance=Z,Q.coneCos=Math.cos(K.angle),Q.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),Q.decay=K.decay,r.spot[D]=Q;const X=K.shadow;if(K.map&&(r.spotLightMap[T]=K.map,T++,X.updateMatrices(K),K.castShadow&&w++),r.spotLightMatrix[D]=X.matrix,K.castShadow){const U=t.get(K);U.shadowIntensity=X.intensity,U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,r.spotShadow[D]=U,r.spotShadowMap[D]=W,F++}D++}else if(K.isRectAreaLight){const Q=e.get(K);Q.color.copy(J).multiplyScalar(ge),Q.halfWidth.set(K.width*.5,0,0),Q.halfHeight.set(0,K.height*.5,0),r.rectArea[I]=Q,I++}else if(K.isPointLight){const Q=e.get(K);if(Q.color.copy(K.color).multiplyScalar(K.intensity),Q.distance=K.distance,Q.decay=K.decay,K.castShadow){const X=K.shadow,U=t.get(K);U.shadowIntensity=X.intensity,U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,U.shadowCameraNear=X.camera.near,U.shadowCameraFar=X.camera.far,r.pointShadow[x]=U,r.pointShadowMap[x]=W,r.pointShadowMatrix[x]=K.shadow.matrix,L++}r.point[x]=Q,x++}else if(K.isHemisphereLight){const Q=e.get(K);Q.skyColor.copy(K.color).multiplyScalar(ge),Q.groundColor.copy(K.groundColor).multiplyScalar(ge),r.hemi[b]=Q,b++}}I>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=v,r.ambient[2]=g;const Y=r.hash;(Y.sunLength!==y||Y.directionalLength!==S||Y.pointLength!==x||Y.spotLength!==D||Y.rectAreaLength!==I||Y.hemiLength!==b||Y.numSunShadows!==M||Y.numDirectionalShadows!==P||Y.numPointShadows!==L||Y.numSpotShadows!==F||Y.numSpotMaps!==T||Y.numLightProbes!==B)&&(r.sun.length=y,r.directional.length=S,r.spot.length=D,r.rectArea.length=I,r.point.length=x,r.hemi.length=b,r.sunShadow.length=M,r.sunShadowMap.length=M,r.sunShadowMatrix.length=A,r.sunShadowCascade.length=A,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.directionalShadowMatrix.length=P,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=F,r.spotShadowMap.length=F,r.spotLightMatrix.length=F+T-w,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=B,Y.sunLength=y,Y.directionalLength=S,Y.pointLength=x,Y.spotLength=D,Y.rectAreaLength=I,Y.hemiLength=b,Y.numSunShadows=M,Y.numDirectionalShadows=P,Y.numPointShadows=L,Y.numSpotShadows=F,Y.numSpotMaps=T,Y.numLightProbes=B,r.version=ED++)}function d(h,p){let v=0,g=0,y=0,M=0,A=0,S=0;const x=p.matrixWorldInverse;for(let D=0,I=h.length;D<I;D++){const b=h[D];if(b.isSunLight){const P=r.sun[v];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(x),v++}else if(b.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),g++}else if(b.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),M++}else if(b.isRectAreaLight){const P=r.rectArea[A];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(x),c.identity(),a.copy(b.matrixWorld),a.premultiply(x),c.extractRotation(a),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),A++}else if(b.isPointLight){const P=r.point[y];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(x),y++}else if(b.isHemisphereLight){const P=r.hemi[S];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(x),S++}}}return{setup:u,setupView:d,state:r}}function q_(n){const e=new wD(n),t=[],r=[],o=[];function a(g){v.camera=g,t.length=0,r.length=0,o.length=0}function c(g){t.push(g)}function u(g){r.push(g)}function d(g){o.push(g)}function h(){e.setup(t)}function p(g){e.setupView(t,g)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:v,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:d}}function AD(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new q_(n),e.set(o,[u])):a>=c.length?(u=new q_(n),c.push(u)):u=c[a],u}function r(){e=new WeakMap}return{get:t,dispose:r}}const RD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CD=`uniform sampler2D shadow_pass;
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
}`,bD=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],PD=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],K_=new pn,Ua=new ce,eh=new ce;function DD(n,e,t){let r=new ay;const o=new jt,a=new jt,c=new hn,u=new HA,d=new GA,h={},p=t.maxTextureSize,v={[zs]:li,[li]:zs,[Rr]:Rr},g=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:RD,fragmentShader:CD}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const M=new Jn;M.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ur(M,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let x=this.type;this.render=function(L,F,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===Rw&&(St("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xc);const w=n.getRenderTarget(),B=n.getActiveCubeFace(),Y=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(Dr),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const ne=x!==this.type;ne&&F.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(J=>J.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,J=L.length;K<J;K++){const ge=L[K],Z=ge.shadow;if(Z===void 0){St("WebGLShadowMap:",ge,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const W=Z.getFrameExtents();o.multiply(W),a.copy(Z.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/W.x),o.x=a.x*W.x,Z.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/W.y),o.y=a.y*W.y,Z.mapSize.y=a.y));const Q=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=Q,Z.map===null||ne===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===ka){if(ge.isPointLight){St("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new ji(o.x,o.y,{format:Hs,type:lr,minFilter:qn,magFilter:qn,generateMipmaps:!1}),Z.map.texture.name=ge.name+".shadowMap",Z.map.depthTexture=new tl(o.x,o.y,tr),Z.map.depthTexture.name=ge.name+".shadowMapDepth",Z.map.depthTexture.format=Ir,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Fn,Z.map.depthTexture.magFilter=Fn}else ge.isPointLight?(Z.map=new gy(o.x),Z.map.depthTexture=new FA(o.x,ar)):(Z.map=new ji(o.x,o.y),Z.map.depthTexture=new tl(o.x,o.y,ar)),Z.map.depthTexture.name=ge.name+".shadowMap",Z.map.depthTexture.format=Ir,this.type===Xc?(Z.map.depthTexture.compareFunction=Q?Qp:Zp,Z.map.depthTexture.minFilter=qn,Z.map.depthTexture.magFilter=qn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Fn,Z.map.depthTexture.magFilter=Fn);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==o.x||Z.map.height!==o.y)&&Z.map.setSize(o.x,o.y);const X=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();ge.isPointLight!==!0&&Z.updateMatrices(ge,T);for(let U=0;U<X;U++){const ae=Z.getCamera(U);if(ge.isPointLight){const Ee=Z.camera,We=Z.matrix,Be=ge.distance||Ee.far;Be!==Ee.far&&(Ee.far=Be,Ee.updateProjectionMatrix()),Ua.setFromMatrixPosition(ge.matrixWorld),Ee.position.copy(Ua),eh.copy(Ee.position),eh.add(bD[U]),Ee.up.copy(PD[U]),Ee.lookAt(eh),Ee.updateMatrixWorld(),We.makeTranslation(-Ua.x,-Ua.y,-Ua.z),K_.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(K_,Ee.coordinateSystem,Ee.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,U),n.clear();else{U===0&&(n.setRenderTarget(Z.map),n.clear());const Ee=Z.getViewport(U);c.set(a.x*Ee.x,a.y*Ee.y,a.x*Ee.z,a.y*Ee.w),ee.viewport(c)}r=Z.getFrustum(U),b(F,T,ae,ge,this.type)}Z.isPointLightShadow!==!0&&this.type===ka&&D(Z,T),Z.needsUpdate=!1}x=this.type,S.needsUpdate=!1,n.setRenderTarget(w,B,Y)};function D(L,F){const T=e.update(A);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null?L.mapPass=new ji(o.x,o.y,{format:Hs,type:lr}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value.set(L.map.width,L.map.height),g.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(F,null,T,g,A,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value.set(L.map.width,L.map.height),y.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(F,null,T,y,A,null)}function I(L,F,T,w){let B=null;const Y=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(Y!==void 0)B=Y;else if(B=T.isPointLight===!0?d:u,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ee=B.uuid,ne=F.uuid;let K=h[ee];K===void 0&&(K={},h[ee]=K);let J=K[ne];J===void 0&&(J=B.clone(),K[ne]=J,F.addEventListener("dispose",P)),B=J}if(B.visible=F.visible,B.wireframe=F.wireframe,w===ka?B.side=F.shadowSide!==null?F.shadowSide:F.side:B.side=F.shadowSide!==null?F.shadowSide:v[F.side],B.alphaMap=F.alphaMap,B.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,B.map=F.map,B.clipShadows=F.clipShadows,B.clippingPlanes=F.clippingPlanes,B.clipIntersection=F.clipIntersection,B.displacementMap=F.displacementMap,B.displacementScale=F.displacementScale,B.displacementBias=F.displacementBias,B.wireframeLinewidth=F.wireframeLinewidth,B.linewidth=F.linewidth,T.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const ee=n.properties.get(B);ee.light=T}return B}function b(L,F,T,w,B){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&B===ka)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const ne=e.update(L),K=L.material;if(Array.isArray(K)){const J=ne.groups;for(let ge=0,Z=J.length;ge<Z;ge++){const W=J[ge],Q=K[W.materialIndex];if(Q&&Q.visible){const X=I(L,Q,w,B);L.onBeforeShadow(n,L,F,T,ne,X,W),n.renderBufferDirect(T,null,ne,X,L,W),L.onAfterShadow(n,L,F,T,ne,X,W)}}}else if(K.visible){const J=I(L,K,w,B);L.onBeforeShadow(n,L,F,T,ne,J,null),n.renderBufferDirect(T,null,ne,J,L,null),L.onAfterShadow(n,L,F,T,ne,J,null)}}const ee=L.children;for(let ne=0,K=ee.length;ne<K;ne++)b(ee[ne],F,T,w,B)}function P(L){L.target.removeEventListener("dispose",P);for(const T in h){const w=h[T],B=L.target.uuid;B in w&&(w[B].dispose(),delete w[B])}}}function LD(n,e){function t(){let H=!1;const Ue=new hn;let xe=null;const Ie=new hn(0,0,0,0);return{setMask:function(ze){xe!==ze&&!H&&(n.colorMask(ze,ze,ze,ze),xe=ze)},setLocked:function(ze){H=ze},setClear:function(ze,ye,Ze,$e,zt){zt===!0&&(ze*=$e,ye*=$e,Ze*=$e),Ue.set(ze,ye,Ze,$e),Ie.equals(Ue)===!1&&(n.clearColor(ze,ye,Ze,$e),Ie.copy(Ue))},reset:function(){H=!1,xe=null,Ie.set(-1,0,0,0)}}}function r(){let H=!1,Ue=!1,xe=null,Ie=null,ze=null;return{setReversed:function(ye){if(Ue!==ye){const Ze=e.get("EXT_clip_control");ye?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Ue=ye;const $e=ze;ze=null,this.setClear($e)}},getReversed:function(){return Ue},setTest:function(ye){ye?ue(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(ye){xe!==ye&&!H&&(n.depthMask(ye),xe=ye)},setFunc:function(ye){if(Ue&&(ye=lA[ye]),Ie!==ye){switch(ye){case xh:n.depthFunc(n.NEVER);break;case yh:n.depthFunc(n.ALWAYS);break;case Sh:n.depthFunc(n.LESS);break;case Qa:n.depthFunc(n.LEQUAL);break;case Mh:n.depthFunc(n.EQUAL);break;case Eh:n.depthFunc(n.GEQUAL);break;case Th:n.depthFunc(n.GREATER);break;case wh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=ye}},setLocked:function(ye){H=ye},setClear:function(ye){ze!==ye&&(ze=ye,Ue&&(ye=1-ye),n.clearDepth(ye))},reset:function(){H=!1,xe=null,Ie=null,ze=null,Ue=!1}}}function o(){let H=!1,Ue=null,xe=null,Ie=null,ze=null,ye=null,Ze=null,$e=null,zt=null;return{setTest:function(It){H||(It?ue(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(It){Ue!==It&&!H&&(n.stencilMask(It),Ue=It)},setFunc:function(It,yn,Ln){(xe!==It||Ie!==yn||ze!==Ln)&&(n.stencilFunc(It,yn,Ln),xe=It,Ie=yn,ze=Ln)},setOp:function(It,yn,Ln){(ye!==It||Ze!==yn||$e!==Ln)&&(n.stencilOp(It,yn,Ln),ye=It,Ze=yn,$e=Ln)},setLocked:function(It){H=It},setClear:function(It){zt!==It&&(n.clearStencil(It),zt=It)},reset:function(){H=!1,Ue=null,xe=null,Ie=null,ze=null,ye=null,Ze=null,$e=null,zt=null}}}const a=new t,c=new r,u=new o,d=new WeakMap,h=new WeakMap;let p={},v={},g={},y=new WeakMap,M=[],A=null,S=!1,x=null,D=null,I=null,b=null,P=null,L=null,F=null,T=new Lt(0,0,0),w=0,B=!1,Y=null,ee=null,ne=null,K=null,J=null;const ge=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,W=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=W>=1):Q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=W>=2);let X=null,U={};const ae=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),We=new hn().fromArray(ae),Be=new hn().fromArray(Ee);function Ye(H,Ue,xe,Ie){const ze=new Uint8Array(4),ye=n.createTexture();n.bindTexture(H,ye),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<xe;Ze++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ue,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,ze):n.texImage2D(Ue+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ze);return ye}const oe={};oe[n.TEXTURE_2D]=Ye(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=Ye(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=Ye(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=Ye(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ue(n.DEPTH_TEST),c.setFunc(Qa),Se(!1),pt(Qv),ue(n.CULL_FACE),At(Dr);function ue(H){p[H]!==!0&&(n.enable(H),p[H]=!0)}function Re(H){p[H]!==!1&&(n.disable(H),p[H]=!1)}function nt(H,Ue){return g[H]!==Ue?(n.bindFramebuffer(H,Ue),g[H]=Ue,H===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Ue),H===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Pe(H,Ue){let xe=M,Ie=!1;if(H){xe=y.get(Ue),xe===void 0&&(xe=[],y.set(Ue,xe));const ze=H.textures;if(xe.length!==ze.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,Ze=ze.length;ye<Ze;ye++)xe[ye]=n.COLOR_ATTACHMENT0+ye;xe.length=ze.length,Ie=!0}}else xe[0]!==n.BACK&&(xe[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(xe)}function at(H){return A!==H?(n.useProgram(H),A=H,!0):!1}const rt={[Co]:n.FUNC_ADD,[bw]:n.FUNC_SUBTRACT,[Pw]:n.FUNC_REVERSE_SUBTRACT};rt[Dw]=n.MIN,rt[Lw]=n.MAX;const xt={[Nw]:n.ZERO,[Iw]:n.ONE,[Uw]:n.SRC_COLOR,[F1]:n.SRC_ALPHA,[Vw]:n.SRC_ALPHA_SATURATE,[kw]:n.DST_COLOR,[Ow]:n.DST_ALPHA,[Fw]:n.ONE_MINUS_SRC_COLOR,[O1]:n.ONE_MINUS_SRC_ALPHA,[zw]:n.ONE_MINUS_DST_COLOR,[Bw]:n.ONE_MINUS_DST_ALPHA,[Hw]:n.CONSTANT_COLOR,[Gw]:n.ONE_MINUS_CONSTANT_COLOR,[Ww]:n.CONSTANT_ALPHA,[Xw]:n.ONE_MINUS_CONSTANT_ALPHA};function At(H,Ue,xe,Ie,ze,ye,Ze,$e,zt,It){if(H===Dr){S===!0&&(Re(n.BLEND),S=!1);return}if(S===!1&&(ue(n.BLEND),S=!0),H!==Cw){if(H!==x||It!==B){if((D!==Co||P!==Co)&&(n.blendEquation(n.FUNC_ADD),D=Co,P=Co),It)switch(H){case ja:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Io:n.blendFunc(n.ONE,n.ONE);break;case Jv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case e_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Wt("WebGLState: Invalid blending: ",H);break}else switch(H){case ja:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Io:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jv:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case e_:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",H);break}I=null,b=null,L=null,F=null,T.set(0,0,0),w=0,x=H,B=It}return}ze=ze||Ue,ye=ye||xe,Ze=Ze||Ie,(Ue!==D||ze!==P)&&(n.blendEquationSeparate(rt[Ue],rt[ze]),D=Ue,P=ze),(xe!==I||Ie!==b||ye!==L||Ze!==F)&&(n.blendFuncSeparate(xt[xe],xt[Ie],xt[ye],xt[Ze]),I=xe,b=Ie,L=ye,F=Ze),($e.equals(T)===!1||zt!==w)&&(n.blendColor($e.r,$e.g,$e.b,zt),T.copy($e),w=zt),x=H,B=!1}function Rt(H,Ue){H.side===Rr?Re(n.CULL_FACE):ue(n.CULL_FACE);let xe=H.side===li;Ue&&(xe=!xe),Se(xe),H.blending===ja&&H.transparent===!1?At(Dr):At(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const Ie=H.stencilWrite;u.setTest(Ie),Ie&&(u.setMask(H.stencilWriteMask),u.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),u.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),dt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Se(H){Y!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),Y=H)}function pt(H){H!==ww?(ue(n.CULL_FACE),H!==ee&&(H===Qv?n.cullFace(n.BACK):H===Aw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),ee=H}function lt(H){H!==ne&&(Z&&n.lineWidth(H),ne=H)}function dt(H,Ue,xe){H?(ue(n.POLYGON_OFFSET_FILL),(K!==Ue||J!==xe)&&(K=Ue,J=xe,c.getReversed()&&(Ue=-Ue),n.polygonOffset(Ue,xe))):Re(n.POLYGON_OFFSET_FILL)}function Ct(H){H?ue(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function Nt(H){H===void 0&&(H=n.TEXTURE0+ge-1),X!==H&&(n.activeTexture(H),X=H)}function z(H,Ue,xe){xe===void 0&&(X===null?xe=n.TEXTURE0+ge-1:xe=X);let Ie=U[xe];Ie===void 0&&(Ie={type:void 0,texture:void 0},U[xe]=Ie),(Ie.type!==H||Ie.texture!==Ue)&&(X!==xe&&(n.activeTexture(xe),X=xe),n.bindTexture(H,Ue||oe[H]),Ie.type=H,Ie.texture=Ue)}function Yt(){const H=U[X];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ct(){try{n.compressedTexImage2D(...arguments)}catch(H){Wt("WebGLState:",H)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(H){Wt("WebGLState:",H)}}function E(){try{n.texSubImage2D(...arguments)}catch(H){Wt("WebGLState:",H)}}function $(){try{n.texSubImage3D(...arguments)}catch(H){Wt("WebGLState:",H)}}function se(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Wt("WebGLState:",H)}}function pe(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Wt("WebGLState:",H)}}function we(){try{n.texStorage2D(...arguments)}catch(H){Wt("WebGLState:",H)}}function De(){try{n.texStorage3D(...arguments)}catch(H){Wt("WebGLState:",H)}}function me(){try{n.texImage2D(...arguments)}catch(H){Wt("WebGLState:",H)}}function _e(){try{n.texImage3D(...arguments)}catch(H){Wt("WebGLState:",H)}}function Le(H){return v[H]!==void 0?v[H]:n.getParameter(H)}function et(H,Ue){v[H]!==Ue&&(n.pixelStorei(H,Ue),v[H]=Ue)}function Oe(H){We.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),We.copy(H))}function Ne(H){Be.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Be.copy(H))}function tt(H,Ue){let xe=h.get(Ue);xe===void 0&&(xe=new WeakMap,h.set(Ue,xe));let Ie=xe.get(H);Ie===void 0&&(Ie=n.getUniformBlockIndex(Ue,H.name),xe.set(H,Ie))}function ft(H,Ue){const Ie=h.get(Ue).get(H);d.get(Ue)!==Ie&&(n.uniformBlockBinding(Ue,Ie,H.__bindingPointIndex),d.set(Ue,Ie))}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},v={},X=null,U={},g={},y=new WeakMap,M=[],A=null,S=!1,x=null,D=null,I=null,b=null,P=null,L=null,F=null,T=new Lt(0,0,0),w=0,B=!1,Y=null,ee=null,ne=null,K=null,J=null,We.set(0,0,n.canvas.width,n.canvas.height),Be.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:ue,disable:Re,bindFramebuffer:nt,drawBuffers:Pe,useProgram:at,setBlending:At,setMaterial:Rt,setFlipSided:Se,setCullFace:pt,setLineWidth:lt,setPolygonOffset:dt,setScissorTest:Ct,activeTexture:Nt,bindTexture:z,unbindTexture:Yt,compressedTexImage2D:ct,compressedTexImage3D:N,texImage2D:me,texImage3D:_e,pixelStorei:et,getParameter:Le,updateUBOMapping:tt,uniformBlockBinding:ft,texStorage2D:we,texStorage3D:De,texSubImage2D:E,texSubImage3D:$,compressedTexSubImage2D:se,compressedTexSubImage3D:pe,scissor:Oe,viewport:Ne,reset:vt}}function ND(n,e,t,r,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new jt,p=new WeakMap,v=new Set;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,E){return M?new OffscreenCanvas(N,E):du("canvas")}function S(N,E,$){let se=1;const pe=ct(N);if((pe.width>$||pe.height>$)&&(se=$/Math.max(pe.width,pe.height)),se<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const we=Math.floor(se*pe.width),De=Math.floor(se*pe.height);g===void 0&&(g=A(we,De));const me=E?A(we,De):g;return me.width=we,me.height=De,me.getContext("2d").drawImage(N,0,0,we,De),St("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+we+"x"+De+")."),me}else return"data"in N&&St("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),N;return N}function x(N){return N.generateMipmaps}function D(N){n.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(N,E,$,se,pe,we=!1){if(N!==null){if(n[N]!==void 0)return n[N];St("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let De;se&&(De=e.get("EXT_texture_norm16"),De||St("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=E;if(E===n.RED&&($===n.FLOAT&&(me=n.R32F),$===n.HALF_FLOAT&&(me=n.R16F),$===n.UNSIGNED_BYTE&&(me=n.R8),$===n.UNSIGNED_SHORT&&De&&(me=De.R16_EXT),$===n.SHORT&&De&&(me=De.R16_SNORM_EXT)),E===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(me=n.R8UI),$===n.UNSIGNED_SHORT&&(me=n.R16UI),$===n.UNSIGNED_INT&&(me=n.R32UI),$===n.BYTE&&(me=n.R8I),$===n.SHORT&&(me=n.R16I),$===n.INT&&(me=n.R32I)),E===n.RG&&($===n.FLOAT&&(me=n.RG32F),$===n.HALF_FLOAT&&(me=n.RG16F),$===n.UNSIGNED_BYTE&&(me=n.RG8),$===n.UNSIGNED_SHORT&&De&&(me=De.RG16_EXT),$===n.SHORT&&De&&(me=De.RG16_SNORM_EXT)),E===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(me=n.RG8UI),$===n.UNSIGNED_SHORT&&(me=n.RG16UI),$===n.UNSIGNED_INT&&(me=n.RG32UI),$===n.BYTE&&(me=n.RG8I),$===n.SHORT&&(me=n.RG16I),$===n.INT&&(me=n.RG32I)),E===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(me=n.RGB8UI),$===n.UNSIGNED_SHORT&&(me=n.RGB16UI),$===n.UNSIGNED_INT&&(me=n.RGB32UI),$===n.BYTE&&(me=n.RGB8I),$===n.SHORT&&(me=n.RGB16I),$===n.INT&&(me=n.RGB32I)),E===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(me=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(me=n.RGBA16UI),$===n.UNSIGNED_INT&&(me=n.RGBA32UI),$===n.BYTE&&(me=n.RGBA8I),$===n.SHORT&&(me=n.RGBA16I),$===n.INT&&(me=n.RGBA32I)),E===n.RGB&&($===n.UNSIGNED_SHORT&&De&&(me=De.RGB16_EXT),$===n.SHORT&&De&&(me=De.RGB16_SNORM_EXT),$===n.UNSIGNED_INT_5_9_9_9_REV&&(me=n.RGB9_E5),$===n.UNSIGNED_INT_10F_11F_11F_REV&&(me=n.R11F_G11F_B10F)),E===n.RGBA){const _e=we?uu:Bt.getTransfer(pe);$===n.FLOAT&&(me=n.RGBA32F),$===n.HALF_FLOAT&&(me=n.RGBA16F),$===n.UNSIGNED_BYTE&&(me=_e===Kt?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT&&De&&(me=De.RGBA16_EXT),$===n.SHORT&&De&&(me=De.RGBA16_SNORM_EXT),$===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function P(N,E){let $;return N?E===null||E===ar||E===el?$=n.DEPTH24_STENCIL8:E===tr?$=n.DEPTH32F_STENCIL8:E===Ja&&($=n.DEPTH24_STENCIL8,St("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ar||E===el?$=n.DEPTH_COMPONENT24:E===tr?$=n.DEPTH_COMPONENT32F:E===Ja&&($=n.DEPTH_COMPONENT16),$}function L(N,E){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==Fn&&N.minFilter!==qn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function F(N){const E=N.target;E.removeEventListener("dispose",F),w(E),E.isVideoTexture&&p.delete(E),E.isHTMLTexture&&v.delete(E)}function T(N){const E=N.target;E.removeEventListener("dispose",T),Y(E)}function w(N){const E=r.get(N);if(E.__webglInit===void 0)return;const $=N.source,se=y.get($);if(se){const pe=se[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&B(N),Object.keys(se).length===0&&y.delete($)}r.remove(N)}function B(N){const E=r.get(N);n.deleteTexture(E.__webglTexture);const $=N.source,se=y.get($);delete se[E.__cacheKey],c.memory.textures--}function Y(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let pe=0;pe<E.__webglFramebuffer[se].length;pe++)n.deleteFramebuffer(E.__webglFramebuffer[se][pe]);else n.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)n.deleteFramebuffer(E.__webglFramebuffer[se]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=N.textures;for(let se=0,pe=$.length;se<pe;se++){const we=r.get($[se]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),c.memory.textures--),r.remove($[se])}r.remove(N)}let ee=0;function ne(){ee=0}function K(){return ee}function J(N){ee=N}function ge(){const N=ee;return N>=o.maxTextures&&St("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+o.maxTextures),ee+=1,N}function Z(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function W(N,E){const $=r.get(N);if(N.isVideoTexture&&z(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&$.__version!==N.version){const se=N.image;if(se===null)St("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)St("WebGLRenderer: Texture marked for update but image is incomplete");else{Re($,N,E);return}}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+E)}function Q(N,E){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){Re($,N,E);return}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+E)}function X(N,E){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){Re($,N,E);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+E)}function U(N,E){const $=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&$.__version!==N.version){nt($,N,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+E)}const ae={[Ah]:n.REPEAT,[Cr]:n.CLAMP_TO_EDGE,[Rh]:n.MIRRORED_REPEAT},Ee={[Fn]:n.NEAREST,[qw]:n.NEAREST_MIPMAP_NEAREST,[mc]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[Ed]:n.LINEAR_MIPMAP_NEAREST,[Os]:n.LINEAR_MIPMAP_LINEAR},We={[Qw]:n.NEVER,[iA]:n.ALWAYS,[Jw]:n.LESS,[Zp]:n.LEQUAL,[eA]:n.EQUAL,[Qp]:n.GEQUAL,[tA]:n.GREATER,[nA]:n.NOTEQUAL};function Be(N,E){if(E.type===tr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===qn||E.magFilter===Ed||E.magFilter===mc||E.magFilter===Os||E.minFilter===qn||E.minFilter===Ed||E.minFilter===mc||E.minFilter===Os)&&St("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,ae[E.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,ae[E.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,ae[E.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,Ee[E.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,Ee[E.minFilter]),E.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,We[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==mc&&E.minFilter!==Os||E.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ye(N,E){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",F));const se=E.source;let pe=y.get(se);pe===void 0&&(pe={},y.set(se,pe));const we=Z(E);if(we!==N.__cacheKey){pe[we]===void 0&&(pe[we]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,$=!0),pe[we].usedTimes++;const De=pe[N.__cacheKey];De!==void 0&&(pe[N.__cacheKey].usedTimes--,De.usedTimes===0&&B(E)),N.__cacheKey=we,N.__webglTexture=pe[we].texture}return $}function oe(N,E,$){return Math.floor(Math.floor(N/$)/E)}function ue(N,E,$,se){const we=N.updateRanges;if(we.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,$,se,E.data);else{we.sort((et,Oe)=>et.start-Oe.start);let De=0;for(let et=1;et<we.length;et++){const Oe=we[De],Ne=we[et],tt=Oe.start+Oe.count,ft=oe(Ne.start,E.width,4),vt=oe(Oe.start,E.width,4);Ne.start<=tt+1&&ft===vt&&oe(Ne.start+Ne.count-1,E.width,4)===ft?Oe.count=Math.max(Oe.count,Ne.start+Ne.count-Oe.start):(++De,we[De]=Ne)}we.length=De+1;const me=t.getParameter(n.UNPACK_ROW_LENGTH),_e=t.getParameter(n.UNPACK_SKIP_PIXELS),Le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let et=0,Oe=we.length;et<Oe;et++){const Ne=we[et],tt=Math.floor(Ne.start/4),ft=Math.ceil(Ne.count/4),vt=tt%E.width,H=Math.floor(tt/E.width),Ue=ft,xe=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,vt),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,vt,H,Ue,xe,$,se,E.data)}N.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,me),t.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(n.UNPACK_SKIP_ROWS,Le)}}function Re(N,E,$){let se=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=n.TEXTURE_3D);const pe=Ye(N,E),we=E.source;t.bindTexture(se,N.__webglTexture,n.TEXTURE0+$);const De=r.get(we);if(we.version!==De.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const xe=Bt.getPrimaries(Bt.workingColorSpace),Ie=E.colorSpace===cs?null:Bt.getPrimaries(E.colorSpace),ze=E.colorSpace===cs||xe===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let _e=S(E.image,!1,o.maxTextureSize);_e=Yt(E,_e);const Le=a.convert(E.format,E.colorSpace),et=a.convert(E.type);let Oe=b(E.internalFormat,Le,et,E.normalized,E.colorSpace,E.isVideoTexture);Be(se,E);let Ne;const tt=E.mipmaps,ft=E.isVideoTexture!==!0,vt=De.__version===void 0||pe===!0,H=we.dataReady,Ue=L(E,_e);if(E.isDepthTexture)Oe=P(E.format===Bs,E.type),vt&&(ft?t.texStorage2D(n.TEXTURE_2D,1,Oe,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Oe,_e.width,_e.height,0,Le,et,null));else if(E.isDataTexture)if(tt.length>0){ft&&vt&&t.texStorage2D(n.TEXTURE_2D,Ue,Oe,tt[0].width,tt[0].height);for(let xe=0,Ie=tt.length;xe<Ie;xe++)Ne=tt[xe],ft?H&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,Le,et,Ne.data):t.texImage2D(n.TEXTURE_2D,xe,Oe,Ne.width,Ne.height,0,Le,et,Ne.data);E.generateMipmaps=!1}else ft?(vt&&t.texStorage2D(n.TEXTURE_2D,Ue,Oe,_e.width,_e.height),H&&ue(E,_e,Le,et)):t.texImage2D(n.TEXTURE_2D,0,Oe,_e.width,_e.height,0,Le,et,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ft&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Oe,tt[0].width,tt[0].height,_e.depth);for(let xe=0,Ie=tt.length;xe<Ie;xe++)if(Ne=tt[xe],E.format!==Xi)if(Le!==null)if(ft){if(H)if(E.layerUpdates.size>0){const ze=R_(Ne.width,Ne.height,E.format,E.type);for(const ye of E.layerUpdates){const Ze=Ne.data.subarray(ye*ze/Ne.data.BYTES_PER_ELEMENT,(ye+1)*ze/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,ye,Ne.width,Ne.height,1,Le,Ze)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ne.width,Ne.height,_e.depth,Le,Ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Oe,Ne.width,Ne.height,_e.depth,0,Ne.data,0,0);else St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ne.width,Ne.height,_e.depth,Le,et,Ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Oe,Ne.width,Ne.height,_e.depth,0,Le,et,Ne.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ft&&vt&&t.texStorage2D(n.TEXTURE_2D,Ue,Oe,tt[0].width,tt[0].height);for(let xe=0,Ie=tt.length;xe<Ie;xe++)Ne=tt[xe],E.format!==Xi?Le!==null?ft?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,Le,Ne.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Oe,Ne.width,Ne.height,0,Ne.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?H&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,Le,et,Ne.data):t.texImage2D(n.TEXTURE_2D,xe,Oe,Ne.width,Ne.height,0,Le,et,Ne.data)}else if(E.isDataArrayTexture)if(ft){if(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Oe,_e.width,_e.height,_e.depth),H)if(E.layerUpdates.size>0){const xe=R_(_e.width,_e.height,E.format,E.type);for(const Ie of E.layerUpdates){const ze=_e.data.subarray(Ie*xe/_e.data.BYTES_PER_ELEMENT,(Ie+1)*xe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,_e.width,_e.height,1,Le,et,ze)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Le,et,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,_e.width,_e.height,_e.depth,0,Le,et,_e.data);else if(E.isData3DTexture)ft?(vt&&t.texStorage3D(n.TEXTURE_3D,Ue,Oe,_e.width,_e.height,_e.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Le,et,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,_e.width,_e.height,_e.depth,0,Le,et,_e.data);else if(E.isFramebufferTexture){if(vt)if(ft)t.texStorage2D(n.TEXTURE_2D,Ue,Oe,_e.width,_e.height);else{let xe=_e.width,Ie=_e.height;for(let ze=0;ze<Ue;ze++)t.texImage2D(n.TEXTURE_2D,ze,Oe,xe,Ie,0,Le,et,null),xe>>=1,Ie>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const xe=n.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),_e.parentNode!==xe){xe.appendChild(_e),v.add(E),xe.onpaint=Ie=>{const ze=Ie.changedElements;for(const ye of v)ze.includes(ye.image)&&(ye.needsUpdate=!0)},xe.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,_e);else{const ze=n.RGBA,ye=n.RGBA,Ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ze,ye,Ze,_e)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(tt.length>0){if(ft&&vt){const xe=ct(tt[0]);t.texStorage2D(n.TEXTURE_2D,Ue,Oe,xe.width,xe.height)}for(let xe=0,Ie=tt.length;xe<Ie;xe++)Ne=tt[xe],ft?H&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Le,et,Ne):t.texImage2D(n.TEXTURE_2D,xe,Oe,Le,et,Ne);E.generateMipmaps=!1}else if(ft){if(vt){const xe=ct(_e);t.texStorage2D(n.TEXTURE_2D,Ue,Oe,xe.width,xe.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,et,_e)}else t.texImage2D(n.TEXTURE_2D,0,Oe,Le,et,_e);x(E)&&D(se),De.__version=we.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function nt(N,E,$){if(E.image.length!==6)return;const se=Ye(N,E),pe=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+$);const we=r.get(pe);if(pe.version!==we.__version||se===!0){t.activeTexture(n.TEXTURE0+$);const De=Bt.getPrimaries(Bt.workingColorSpace),me=E.colorSpace===cs?null:Bt.getPrimaries(E.colorSpace),_e=E.colorSpace===cs||De===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Le=E.isCompressedTexture||E.image[0].isCompressedTexture,et=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let ye=0;ye<6;ye++)!Le&&!et?Oe[ye]=S(E.image[ye],!0,o.maxCubemapSize):Oe[ye]=et?E.image[ye].image:E.image[ye],Oe[ye]=Yt(E,Oe[ye]);const Ne=Oe[0],tt=a.convert(E.format,E.colorSpace),ft=a.convert(E.type),vt=b(E.internalFormat,tt,ft,E.normalized,E.colorSpace),H=E.isVideoTexture!==!0,Ue=we.__version===void 0||se===!0,xe=pe.dataReady;let Ie=L(E,Ne);Be(n.TEXTURE_CUBE_MAP,E);let ze;if(Le){H&&Ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,vt,Ne.width,Ne.height);for(let ye=0;ye<6;ye++){ze=Oe[ye].mipmaps;for(let Ze=0;Ze<ze.length;Ze++){const $e=ze[Ze];E.format!==Xi?tt!==null?H?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ze,0,0,$e.width,$e.height,tt,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ze,vt,$e.width,$e.height,0,$e.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ze,0,0,$e.width,$e.height,tt,ft,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ze,vt,$e.width,$e.height,0,tt,ft,$e.data)}}}else{if(ze=E.mipmaps,H&&Ue){ze.length>0&&Ie++;const ye=ct(Oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,vt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(et){H?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Oe[ye].width,Oe[ye].height,tt,ft,Oe[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,vt,Oe[ye].width,Oe[ye].height,0,tt,ft,Oe[ye].data);for(let Ze=0;Ze<ze.length;Ze++){const zt=ze[Ze].image[ye].image;H?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ze+1,0,0,zt.width,zt.height,tt,ft,zt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ze+1,vt,zt.width,zt.height,0,tt,ft,zt.data)}}else{H?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,tt,ft,Oe[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,vt,tt,ft,Oe[ye]);for(let Ze=0;Ze<ze.length;Ze++){const $e=ze[Ze];H?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ze+1,0,0,tt,ft,$e.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ze+1,vt,tt,ft,$e.image[ye])}}}x(E)&&D(n.TEXTURE_CUBE_MAP),we.__version=pe.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Pe(N,E,$,se,pe,we){const De=a.convert($.format,$.colorSpace),me=a.convert($.type),_e=b($.internalFormat,De,me,$.normalized,$.colorSpace),Le=r.get(E),et=r.get($);if(et.__renderTarget=E,!Le.__hasExternalTextures){const Oe=Math.max(1,E.width>>we),Ne=Math.max(1,E.height>>we);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,we,_e,Oe,Ne,E.depth,0,De,me,null):t.texImage2D(pe,we,_e,Oe,Ne,0,De,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),Nt(E)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,pe,et.__webglTexture,0,Ct(E)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,pe,et.__webglTexture,we),t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(N,E,$){if(n.bindRenderbuffer(n.RENDERBUFFER,N),E.depthBuffer){const se=E.depthTexture,pe=se&&se.isDepthTexture?se.type:null,we=P(E.stencilBuffer,pe),De=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Nt(E)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct(E),we,E.width,E.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct(E),we,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,we,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,N)}else{const se=E.textures;for(let pe=0;pe<se.length;pe++){const we=se[pe],De=a.convert(we.format,we.colorSpace),me=a.convert(we.type),_e=b(we.internalFormat,De,me,we.normalized,we.colorSpace);Nt(E)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct(E),_e,E.width,E.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct(E),_e,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,_e,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rt(N,E,$){const se=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=r.get(E.depthTexture);if(pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),pe.__webglTexture===void 0){pe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),Be(n.TEXTURE_CUBE_MAP,E.depthTexture);const Le=a.convert(E.depthTexture.format),et=a.convert(E.depthTexture.type);let Oe;E.depthTexture.format===Ir?Oe=n.DEPTH_COMPONENT24:E.depthTexture.format===Bs&&(Oe=n.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Oe,E.width,E.height,0,Le,et,null)}}else W(E.depthTexture,0);const we=pe.__webglTexture,De=Ct(E),me=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+$:n.TEXTURE_2D,_e=E.depthTexture.format===Bs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ir)Nt(E)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,me,we,0,De):n.framebufferTexture2D(n.FRAMEBUFFER,_e,me,we,0);else if(E.depthTexture.format===Bs)Nt(E)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,me,we,0,De):n.framebufferTexture2D(n.FRAMEBUFFER,_e,me,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(N){const E=r.get(N),$=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const se=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const pe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",pe)};se.addEventListener("dispose",pe),E.__depthDisposeCallback=pe}E.__boundDepthTexture=se}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let se=0;se<6;se++)rt(E.__webglFramebuffer[se],N,se);else{const se=N.texture.mipmaps;se&&se.length>0?rt(E.__webglFramebuffer[0],N,0):rt(E.__webglFramebuffer,N,0)}else if($){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=n.createRenderbuffer(),at(E.__webglDepthbuffer[se],N,!1);else{const pe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,we)}}else{const se=N.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),at(E.__webglDepthbuffer,N,!1);else{const pe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,we)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function At(N,E,$){const se=r.get(N);E!==void 0&&Pe(se.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&xt(N)}function Rt(N){const E=N.texture,$=r.get(N),se=r.get(E);N.addEventListener("dispose",T);const pe=N.textures,we=N.isWebGLCubeRenderTarget===!0,De=pe.length>1;if(De||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=E.version,c.memory.textures++),we){$.__webglFramebuffer=[];for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[me]=[];for(let _e=0;_e<E.mipmaps.length;_e++)$.__webglFramebuffer[me][_e]=n.createFramebuffer()}else $.__webglFramebuffer[me]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let me=0;me<E.mipmaps.length;me++)$.__webglFramebuffer[me]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(De)for(let me=0,_e=pe.length;me<_e;me++){const Le=r.get(pe[me]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),c.memory.textures++)}if(N.samples>0&&Nt(N)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let me=0;me<pe.length;me++){const _e=pe[me];$.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[me]);const Le=a.convert(_e.format,_e.colorSpace),et=a.convert(_e.type),Oe=b(_e.internalFormat,Le,et,_e.normalized,_e.colorSpace,N.isXRRenderTarget===!0),Ne=Ct(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Oe,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,$.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),at($.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(we){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),Be(n.TEXTURE_CUBE_MAP,E);for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Pe($.__webglFramebuffer[me][_e],N,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,_e);else Pe($.__webglFramebuffer[me],N,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);x(E)&&D(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let me=0,_e=pe.length;me<_e;me++){const Le=pe[me],et=r.get(Le);let Oe=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Oe=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Oe,et.__webglTexture),Be(Oe,Le),Pe($.__webglFramebuffer,N,Le,n.COLOR_ATTACHMENT0+me,Oe,0),x(Le)&&D(Oe)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(me=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,se.__webglTexture),Be(me,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Pe($.__webglFramebuffer[_e],N,E,n.COLOR_ATTACHMENT0,me,_e);else Pe($.__webglFramebuffer,N,E,n.COLOR_ATTACHMENT0,me,0);x(E)&&D(me),t.unbindTexture()}N.depthBuffer&&xt(N)}function Se(N){const E=N.textures;for(let $=0,se=E.length;$<se;$++){const pe=E[$];if(x(pe)){const we=I(N),De=r.get(pe).__webglTexture;t.bindTexture(we,De),D(we),t.unbindTexture()}}}const pt=[],lt=[];function dt(N){if(N.samples>0){if(Nt(N)===!1){const E=N.textures,$=N.width,se=N.height;let pe=n.COLOR_BUFFER_BIT;const we=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=r.get(N),me=E.length>1;if(me)for(let Le=0;Le<E.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const _e=N.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Le]);const et=r.get(E[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,$,se,0,0,$,se,pe,n.NEAREST),d===!0&&(pt.length=0,lt.length=0,pt.push(n.COLOR_ATTACHMENT0+Le),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(pt.push(we),lt.push(we),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Le=0;Le<E.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,De.__webglColorRenderbuffer[Le]);const et=r.get(E[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&d){const E=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Ct(N){return Math.min(o.maxSamples,N.samples)}function Nt(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function z(N){const E=c.render.frame;p.get(N)!==E&&(p.set(N,E),N.update())}function Yt(N,E){const $=N.colorSpace,se=N.format,pe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==cu&&$!==cs&&(Bt.getTransfer($)===Kt?(se!==Xi||pe!==bi)&&St("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",$)),E}function ct(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=ge,this.resetTextureUnits=ne,this.getTextureUnits=K,this.setTextureUnits=J,this.setTexture2D=W,this.setTexture2DArray=Q,this.setTexture3D=X,this.setTextureCube=U,this.rebindTextures=At,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ID(n,e){function t(r,o=cs){let a;const c=Bt.getTransfer(o);if(r===bi)return n.UNSIGNED_BYTE;if(r===jp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Yp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===K1)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===$1)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===Y1)return n.BYTE;if(r===q1)return n.SHORT;if(r===Ja)return n.UNSIGNED_SHORT;if(r===Xp)return n.INT;if(r===ar)return n.UNSIGNED_INT;if(r===tr)return n.FLOAT;if(r===lr)return n.HALF_FLOAT;if(r===Z1)return n.ALPHA;if(r===Q1)return n.RGB;if(r===Xi)return n.RGBA;if(r===Ir)return n.DEPTH_COMPONENT;if(r===Bs)return n.DEPTH_STENCIL;if(r===J1)return n.RED;if(r===qp)return n.RED_INTEGER;if(r===Hs)return n.RG;if(r===Kp)return n.RG_INTEGER;if(r===$p)return n.RGBA_INTEGER;if(r===jc||r===Yc||r===qc||r===Kc)if(c===Kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===jc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Kc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===jc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Kc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ch||r===bh||r===Ph||r===Dh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ch)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ph)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lh||r===Nh||r===Ih||r===Uh||r===Fh||r===au||r===Oh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Lh||r===Nh)return c===Kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ih)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===Uh)return a.COMPRESSED_R11_EAC;if(r===Fh)return a.COMPRESSED_SIGNED_R11_EAC;if(r===au)return a.COMPRESSED_RG11_EAC;if(r===Oh)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Bh||r===kh||r===zh||r===Vh||r===Hh||r===Gh||r===Wh||r===Xh||r===jh||r===Yh||r===qh||r===Kh||r===$h||r===Zh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Bh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$h)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qh||r===Jh||r===ep)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Qh)return c===Kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ep)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tp||r===np||r===lu||r===ip)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===tp)return a.COMPRESSED_RED_RGTC1_EXT;if(r===np)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ip)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===el?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const UD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FD=`
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

}`;class OD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new uy(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new cr({vertexShader:UD,fragmentShader:FD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ur(new Tu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BD extends Xs{constructor(e,t){super();const r=this;let o=null,a=1,c=null,u="local-floor",d=1,h=null,p=null,v=null,g=null,y=null,M=null;const A=typeof XRWebGLBinding<"u",S=new OD,x={},D=t.getContextAttributes();let I=null,b=null;const P=[],L=[],F=new jt;let T=null,w=null;const B=new Ci;B.viewport=new hn;const Y=new Ci;Y.viewport=new hn;const ee=[B,Y],ne=new XA;let K=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ue=P[oe];return ue===void 0&&(ue=new Ld,P[oe]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(oe){let ue=P[oe];return ue===void 0&&(ue=new Ld,P[oe]=ue),ue.getGripSpace()},this.getHand=function(oe){let ue=P[oe];return ue===void 0&&(ue=new Ld,P[oe]=ue),ue.getHandSpace()};function ge(oe){const ue=L.indexOf(oe.inputSource);if(ue===-1)return;const Re=P[ue];Re!==void 0&&(Re.update(oe.inputSource,oe.frame,h||c),Re.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Z(){o.removeEventListener("select",ge),o.removeEventListener("selectstart",ge),o.removeEventListener("selectend",ge),o.removeEventListener("squeeze",ge),o.removeEventListener("squeezestart",ge),o.removeEventListener("squeezeend",ge),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",W);for(let oe=0;oe<P.length;oe++){const ue=L[oe];ue!==null&&(L[oe]=null,P[oe].disconnect(ue))}K=null,J=null,S.reset();for(const oe in x)delete x[oe];if(e.setRenderTarget(I),y=null,g=null,v=null,o=null,b=null,Ye.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),w!==null){const oe=w.camera;oe.fov=w.fov,oe.zoom=w.zoom,oe.updateProjectionMatrix(),w=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){a=oe,r.isPresenting===!0&&St("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){u=oe,r.isPresenting===!0&&St("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",ge),o.addEventListener("selectstart",ge),o.addEventListener("selectend",ge),o.addEventListener("squeeze",ge),o.addEventListener("squeezestart",ge),o.addEventListener("squeezeend",ge),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",W),D.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,nt=null,Pe=null;D.depth&&(Pe=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=D.stencil?Bs:Ir,nt=D.stencil?el:ar);const at={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:a};v=this.getBinding(),g=v.createProjectionLayer(at),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),b=new ji(g.textureWidth,g.textureHeight,{format:Xi,type:bi,depthTexture:new tl(g.textureWidth,g.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Re={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,Re),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new ji(y.framebufferWidth,y.framebufferHeight,{format:Xi,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(u),Ye.setContext(o),Ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function W(oe){for(let ue=0;ue<oe.removed.length;ue++){const Re=oe.removed[ue],nt=L.indexOf(Re);nt>=0&&(L[nt]=null,P[nt].disconnect(Re))}for(let ue=0;ue<oe.added.length;ue++){const Re=oe.added[ue];let nt=L.indexOf(Re);if(nt===-1){for(let at=0;at<P.length;at++)if(at>=L.length){L.push(Re),nt=at;break}else if(L[at]===null){L[at]=Re,nt=at;break}if(nt===-1)break}const Pe=P[nt];Pe&&Pe.connect(Re)}}const Q=new ce,X=new ce;function U(oe,ue,Re){Q.setFromMatrixPosition(ue.matrixWorld),X.setFromMatrixPosition(Re.matrixWorld);const nt=Q.distanceTo(X),Pe=ue.projectionMatrix.elements,at=Re.projectionMatrix.elements,rt=Pe[14]/(Pe[10]-1),xt=Pe[14]/(Pe[10]+1),At=(Pe[9]+1)/Pe[5],Rt=(Pe[9]-1)/Pe[5],Se=(Pe[8]-1)/Pe[0],pt=(at[8]+1)/at[0],lt=rt*Se,dt=rt*pt,Ct=nt/(-Se+pt),Nt=Ct*-Se;if(ue.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Nt),oe.translateZ(Ct),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Pe[10]===-1)oe.projectionMatrix.copy(ue.projectionMatrix),oe.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const z=rt+Ct,Yt=xt+Ct,ct=lt-Nt,N=dt+(nt-Nt),E=At*xt/Yt*z,$=Rt*xt/Yt*z;oe.projectionMatrix.makePerspective(ct,N,E,$,z,Yt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function ae(oe,ue){ue===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ue.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let ue=oe.near,Re=oe.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(Re=S.depthFar)),ne.near=Y.near=B.near=ue,ne.far=Y.far=B.far=Re,(K!==ne.near||J!==ne.far)&&(o.updateRenderState({depthNear:ne.near,depthFar:ne.far}),K=ne.near,J=ne.far),ne.layers.mask=oe.layers.mask|6,B.layers.mask=ne.layers.mask&-5,Y.layers.mask=ne.layers.mask&-3;const nt=oe.parent,Pe=ne.cameras;ae(ne,nt);for(let at=0;at<Pe.length;at++)ae(Pe[at],nt);Pe.length===2?U(ne,B,Y):ne.projectionMatrix.copy(B.projectionMatrix),w===null&&oe.isPerspectiveCamera&&(w={camera:oe,fov:oe.fov,zoom:oe.zoom}),Ee(oe,ne,nt)};function Ee(oe,ue,Re){Re===null?oe.matrix.copy(ue.matrixWorld):(oe.matrix.copy(Re.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ue.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ue.projectionMatrix),oe.projectionMatrixInverse.copy(ue.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=rp*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(g===null&&y===null))return d},this.setFoveation=function(oe){d=oe,g!==null&&(g.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ne)},this.getCameraTexture=function(oe){return x[oe]};let We=null;function Be(oe,ue){if(p=ue.getViewerPose(h||c),M=ue,p!==null){const Re=p.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let nt=!1;Re.length!==ne.cameras.length&&(ne.cameras.length=0,nt=!0);for(let xt=0;xt<Re.length;xt++){const At=Re[xt];let Rt=null;if(y!==null)Rt=y.getViewport(At);else{const pt=v.getViewSubImage(g,At);Rt=pt.viewport,xt===0&&(e.setRenderTargetTextures(b,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(b))}let Se=ee[xt];Se===void 0&&(Se=new Ci,Se.layers.enable(xt),Se.viewport=new hn,ee[xt]=Se),Se.matrix.fromArray(At.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(At.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),xt===0&&(ne.matrix.copy(Se.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),nt===!0&&ne.cameras.push(Se)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const xt=v.getDepthInformation(Re[0]);xt&&xt.isValid&&xt.texture&&S.init(xt,o.renderState)}if(Pe&&Pe.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let xt=0;xt<Re.length;xt++){const At=Re[xt].camera;if(At){let Rt=x[At];Rt||(Rt=new uy,x[At]=Rt);const Se=v.getCameraImage(At);Rt.sourceTexture=Se}}}}for(let Re=0;Re<P.length;Re++){const nt=L[Re],Pe=P[Re];nt!==null&&Pe!==void 0&&Pe.update(nt,ue,h||c)}We&&We(oe,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),M=null}const Ye=new py;Ye.setAnimationLoop(Be),this.setAnimationLoop=function(oe){We=oe},this.dispose=function(){}}}const kD=new pn,Sy=new Tt;Sy.set(-1,0,0,0,1,0,0,0,1);function zD(n,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,fy(n)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,D,I,b){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?a(S,x):x.isMeshLambertMaterial?(a(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(a(S,x),v(S,x)):x.isMeshPhongMaterial?(a(S,x),p(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(a(S,x),g(S,x),x.isMeshPhysicalMaterial&&y(S,x,b)):x.isMeshMatcapMaterial?(a(S,x),M(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),A(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?d(S,x,D,I):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===li&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===li&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const D=e.get(x),I=D.envMap,b=D.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(kD.makeRotationFromEuler(b)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Sy),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,D,I){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*D,S.scale.value=I*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,D){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===li&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.retroreflectivity>0&&(S.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function A(S,x){const D=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function VD(n,e,t,r){let o={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(b,P){const L=P.program;r.uniformBlockBinding(b,L)}function h(b,P){let L=o[b.id];L===void 0&&(S(b),L=p(b),o[b.id]=L,b.addEventListener("dispose",D));const F=P.program;r.updateUBOMapping(b,F);const T=e.render.frame;a[b.id]!==T&&(g(b),a[b.id]=T)}function p(b){const P=v();b.__bindingPointIndex=P;const L=n.createBuffer(),F=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,F,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,L),L}function v(){for(let b=0;b<u;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const P=o[b.id],L=b.uniforms,F=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let T=0,w=L.length;T<w;T++){const B=L[T];if(Array.isArray(B))for(let Y=0,ee=B.length;Y<ee;Y++)y(B[Y],T,Y,F);else y(B,T,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(b,P,L,F){if(A(b,P,L,F)===!0){const T=b.__offset,w=b.value;if(Array.isArray(w)){let B=0;for(let Y=0;Y<w.length;Y++){const ee=w[Y],ne=x(ee);M(ee,b.__data,B),typeof ee!="number"&&typeof ee!="boolean"&&!ee.isMatrix3&&!ArrayBuffer.isView(ee)&&(B+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(w,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,b.__data)}}function M(b,P,L){typeof b=="number"||typeof b=="boolean"?P[0]=b:b.isMatrix3?(P[0]=b.elements[0],P[1]=b.elements[1],P[2]=b.elements[2],P[3]=0,P[4]=b.elements[3],P[5]=b.elements[4],P[6]=b.elements[5],P[7]=0,P[8]=b.elements[6],P[9]=b.elements[7],P[10]=b.elements[8],P[11]=0):ArrayBuffer.isView(b)?P.set(new b.constructor(b.buffer,b.byteOffset,P.length)):b.toArray(P,L)}function A(b,P,L,F){const T=b.value,w=P+"_"+L;if(F[w]===void 0)return typeof T=="number"||typeof T=="boolean"?F[w]=T:ArrayBuffer.isView(T)?F[w]=T.slice():F[w]=T.clone(),!0;{const B=F[w];if(typeof T=="number"||typeof T=="boolean"){if(B!==T)return F[w]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(B.equals(T)===!1)return B.copy(T),!0}}return!1}function S(b){const P=b.uniforms;let L=0;const F=16;for(let w=0,B=P.length;w<B;w++){const Y=Array.isArray(P[w])?P[w]:[P[w]];for(let ee=0,ne=Y.length;ee<ne;ee++){const K=Y[ee],J=Array.isArray(K.value)?K.value:[K.value];for(let ge=0,Z=J.length;ge<Z;ge++){const W=J[ge],Q=x(W),X=L%F,U=X%Q.boundary,ae=X+U;L+=U,ae!==0&&F-ae<Q.storage&&(L+=F-ae),K.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=L,L+=Q.storage}}}const T=L%F;return T>0&&(L+=F-T),b.__size=L,b.__cache={},this}function x(b){const P={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(P.boundary=4,P.storage=4):b.isVector2?(P.boundary=8,P.storage=8):b.isVector3||b.isColor?(P.boundary=16,P.storage=12):b.isVector4?(P.boundary=16,P.storage=16):b.isMatrix3?(P.boundary=48,P.storage=48):b.isMatrix4?(P.boundary=64,P.storage=64):b.isTexture?St("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(P.boundary=16,P.storage=b.byteLength):St("WebGLRenderer: Unsupported uniform value type.",b),P}function D(b){const P=b.target;P.removeEventListener("dispose",D);const L=c.indexOf(P.__bindingPointIndex);c.splice(L,1),n.deleteBuffer(o[P.id]),delete o[P.id],delete a[P.id]}function I(){for(const b in o)n.deleteBuffer(o[b]);c=[],o={},a={}}return{bind:d,update:h,dispose:I}}const HD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function GD(){return Ji===null&&(Ji=new DA(HD,16,16,Hs,lr),Ji.name="DFG_LUT",Ji.minFilter=qn,Ji.magFilter=qn,Ji.wrapS=Cr,Ji.wrapT=Cr,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class WD{constructor(e={}){const{canvas:t=oA(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=bi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const A=y,S=new Set([$p,Kp,qp]),x=new Set([bi,ar,Ja,el,jp,Yp]),D=new Uint32Array(4),I=new Int32Array(4),b=new ce;let P=null,L=null;const F=[],T=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let Y=!1,ee=null,ne=null,K=null,J=null;this._outputColorSpace=Ri;let ge=0,Z=0,W=null,Q=-1,X=null;const U=new hn,ae=new hn;let Ee=null;const We=new Lt(0);let Be=0,Ye=t.width,oe=t.height,ue=1,Re=null,nt=null;const Pe=new hn(0,0,Ye,oe),at=new hn(0,0,Ye,oe);let rt=!1;const xt=new ay;let At=!1,Rt=!1;const Se=new pn,pt=new ce,lt=new hn,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Nt(){return W===null?ue:1}let z=r;function Yt(C,G){return t.getContext(C,G)}let ct,N,E,$,se,pe,we,De,me,_e,Le,et,Oe,Ne,tt,ft,vt,H,Ue,xe,Ie,ze,ye;try{const C={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wp}`),t.addEventListener("webglcontextlost",zt,!1),t.addEventListener("webglcontextrestored",It,!1),t.addEventListener("webglcontextcreationerror",yn,!1),z===null){const G="webgl2";if(z=Yt(G,C),z===null)throw Yt(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(C){throw t.removeEventListener("webglcontextlost",zt,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",yn,!1),Wt("WebGLRenderer: "+C.message),C}function Ze(){ct=new Gb(z),ct.init(),Ie=new ID(z,ct),N=new Nb(z,ct,e,Ie),E=new LD(z,ct),N.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),ne=z.createFramebuffer(),K=z.createFramebuffer(),J=z.createFramebuffer(),$=new jb(z),se=new _D,pe=new ND(z,ct,E,se,N,Ie,$),we=new Hb(B),De=new qA(z),ze=new Db(z,De),me=new Wb(z,De,$,ze),_e=new qb(z,me,De,ze,$),H=new Yb(z,N,pe),tt=new Ib(se),Le=new vD(B,we,ct,N,ze,tt),et=new zD(B,se),Oe=new yD,Ne=new AD(ct),vt=new Pb(B,we,E,_e,M,d),ft=new DD(B,_e,N),ye=new VD(z,$,N,E),Ue=new Lb(z,ct,$),xe=new Xb(z,ct,$),$.programs=Le.programs,B.capabilities=N,B.extensions=ct,B.properties=se,B.renderLists=Oe,B.shadowMap=ft,B.state=E,B.info=$}A!==bi&&(w=new $b(A,t.width,t.height,u,o,a));const $e=new BD(B,z);this.xr=$e,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=ct.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ct.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(C){C!==void 0&&(ue=C,this.setSize(Ye,oe,!1))},this.getSize=function(C){return C.set(Ye,oe)},this.setSize=function(C,G,fe=!0){if($e.isPresenting){St("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=C,oe=G,t.width=Math.floor(C*ue),t.height=Math.floor(G*ue),fe===!0&&(t.style.width=C+"px",t.style.height=G+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(Ye*ue,oe*ue).floor()},this.setDrawingBufferSize=function(C,G,fe){Ye=C,oe=G,ue=fe,t.width=Math.floor(C*fe),t.height=Math.floor(G*fe),this.setViewport(0,0,C,G)},this.setEffects=function(C){if(A===bi){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let G=0;G<C.length;G++)if(C[G].isOutputPass===!0){St("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(Pe)},this.setViewport=function(C,G,fe,ie){C.isVector4?Pe.set(C.x,C.y,C.z,C.w):Pe.set(C,G,fe,ie),E.viewport(U.copy(Pe).multiplyScalar(ue).round())},this.getScissor=function(C){return C.copy(at)},this.setScissor=function(C,G,fe,ie){C.isVector4?at.set(C.x,C.y,C.z,C.w):at.set(C,G,fe,ie),E.scissor(ae.copy(at).multiplyScalar(ue).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(C){E.setScissorTest(rt=C)},this.setOpaqueSort=function(C){Re=C},this.setTransparentSort=function(C){nt=C},this.getClearColor=function(C){return C.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,fe=!0){let ie=0;if(C){let te=!1;if(W!==null){const He=W.texture.format;te=S.has(He)}if(te){const He=W.texture.type,ke=x.has(He),Ve=vt.getClearColor(),Qe=vt.getClearAlpha(),st=Ve.r,Et=Ve.g,wt=Ve.b;ke?(D[0]=st,D[1]=Et,D[2]=wt,D[3]=Qe,z.clearBufferuiv(z.COLOR,0,D)):(I[0]=st,I[1]=Et,I[2]=wt,I[3]=Qe,z.clearBufferiv(z.COLOR,0,I))}else ie|=z.COLOR_BUFFER_BIT}G&&(ie|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ie|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&z.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),ee=C},this.dispose=function(){t.removeEventListener("webglcontextlost",zt,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",yn,!1),vt.dispose(),Oe.dispose(),Ne.dispose(),se.dispose(),we.dispose(),_e.dispose(),ze.dispose(),ye.dispose(),Le.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",ps),$e.removeEventListener("sessionend",ms),Rn.stop()};function zt(C){C.preventDefault(),r_("WebGLRenderer: Context Lost."),Y=!0}function It(){r_("WebGLRenderer: Context Restored."),Y=!1;const C=$.autoReset,G=ft.enabled,fe=ft.autoUpdate,ie=ft.needsUpdate,te=ft.type;Ze(),$.autoReset=C,ft.enabled=G,ft.autoUpdate=fe,ft.needsUpdate=ie,ft.type=te}function yn(C){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ln(C){const G=C.target;G.removeEventListener("dispose",Ln),ur(G)}function ur(C){Fr(C),se.remove(C)}function Fr(C){const G=se.get(C).programs;G!==void 0&&(G.forEach(function(fe){Le.releaseProgram(fe)}),C.isShaderMaterial&&Le.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,fe,ie,te,He){G===null&&(G=dt);const ke=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ve=ut(C,G,fe,ie,te);E.setMaterial(ie,ke);let Qe=fe.index,st=1;if(ie.wireframe===!0){if(Qe=me.getWireframeAttribute(fe),Qe===void 0)return;st=2}const Et=fe.drawRange,wt=fe.attributes.position;let qe=Et.start*st,Ft=(Et.start+Et.count)*st;He!==null&&(qe=Math.max(qe,He.start*st),Ft=Math.min(Ft,(He.start+He.count)*st)),Qe!==null?(qe=Math.max(qe,0),Ft=Math.min(Ft,Qe.count)):wt!=null&&(qe=Math.max(qe,0),Ft=Math.min(Ft,wt.count));const un=Ft-qe;if(un<0||un===1/0)return;ze.setup(te,ie,Ve,fe,Qe);let $t,Xt=Ue;if(Qe!==null&&($t=De.get(Qe),Xt=xe,Xt.setIndex($t)),te.isMesh)ie.wireframe===!0?(E.setLineWidth(ie.wireframeLinewidth*Nt()),Xt.setMode(z.LINES)):Xt.setMode(z.TRIANGLES);else if(te.isLine){let Sn=ie.linewidth;Sn===void 0&&(Sn=1),E.setLineWidth(Sn*Nt()),te.isLineSegments?Xt.setMode(z.LINES):te.isLineLoop?Xt.setMode(z.LINE_LOOP):Xt.setMode(z.LINE_STRIP)}else te.isPoints?Xt.setMode(z.POINTS):te.isSprite&&Xt.setMode(z.TRIANGLES);if(te.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))Xt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Sn=te._multiDrawStarts,Xe=te._multiDrawCounts,mn=te._multiDrawCount,Ot=Qe?De.get(Qe).bytesPerElement:1,Bn=se.get(ie).currentProgram.getUniforms();for(let bt=0;bt<mn;bt++)Bn.setValue(z,"_gl_DrawID",bt),Xt.render(Sn[bt]/Ot,Xe[bt])}else if(te.isInstancedMesh)Xt.renderInstances(qe,un,te.count);else if(fe.isInstancedBufferGeometry){const Sn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Xe=Math.min(fe.instanceCount,Sn);Xt.renderInstances(qe,un,Xe)}else Xt.render(qe,un)};function Yi(C,G,fe,ie){ee!==null&&C.isNodeMaterial&&ee.setObject(ie,C),At===!0&&tt.setState(C,fe,!1),C.transparent===!0&&C.side===Rr&&C.forceSinglePass===!1?(C.side=li,C.needsUpdate=!0,ve(C,G,ie),C.side=zs,C.needsUpdate=!0,ve(C,G,ie),C.side=Rr):ve(C,G,ie)}this.compile=function(C,G,fe=null){fe===null&&(fe=C),ee!==null&&ee.renderStart(C,G,fe),L=Ne.get(fe),L.init(G),T.push(L),fe.traverseVisible(function(te){te.isLight&&te.layers.test(G.layers)&&(L.pushLight(te),te.castShadow&&L.pushShadow(te))}),C!==fe&&C.traverseVisible(function(te){te.isLight&&te.layers.test(G.layers)&&(L.pushLight(te),te.castShadow&&L.pushShadow(te))}),L.setupLights(),ee!==null&&ee.updateLights(L.state.lightsArray),Rt=this.localClippingEnabled,At=tt.init(this.clippingPlanes,Rt),At===!0&&tt.setGlobalState(this.clippingPlanes,G),ee!==null&&ft.render(L.state.shadowsArray,fe,G);const ie=new Set;return C.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const He=te.material;if(He)if(Array.isArray(He))for(let ke=0;ke<He.length;ke++){const Ve=He[ke];Yi(Ve,fe,G,te),ie.add(Ve)}else Yi(He,fe,G,te),ie.add(He)}),L=T.pop(),ee!==null&&ee.renderEnd(),ie},this.compileAsync=function(C,G,fe=null){const ie=this.compile(C,G,fe);return new Promise(te=>{function He(){if(ie.forEach(function(ke){const Qe=se.get(ke).currentProgram;(Qe===void 0||Qe.isReady())&&ie.delete(ke)}),ie.size===0){te(C);return}setTimeout(He,10)}ct.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let An=null;function qo(C){An&&An(C)}function ps(){Rn.stop()}function ms(){Rn.start()}const Rn=new py;Rn.setAnimationLoop(qo),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(C){An=C,$e.setAnimationLoop(C),C===null?Rn.stop():Rn.start()},$e.addEventListener("sessionstart",ps),$e.addEventListener("sessionend",ms),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;ee!==null&&ee.renderStart(C,G);const fe=$e.enabled===!0&&$e.isPresenting===!0,ie=w!==null&&(W===null||fe)&&w.begin(B,W);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(G),G=$e.getCamera()),C.isScene===!0&&C.onBeforeRender(B,C,G,W),L=Ne.get(C,T.length),L.init(G),L.state.textureUnits=pe.getTextureUnits(),T.push(L),Se.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),xt.setFromProjectionMatrix(Se,nr,G.reversedDepth),Rt=this.localClippingEnabled,At=tt.init(this.clippingPlanes,Rt),P=Oe.get(C,F.length),P.init(),F.push(P),$e.enabled===!0&&$e.isPresenting===!0){const ke=B.xr.getDepthSensingMesh();ke!==null&&fr(ke,G,-1/0,B.sortObjects)}fr(C,G,0,B.sortObjects),P.finish(),ee!==null&&ee.updateLights(L.state.lightsArray),B.sortObjects===!0&&P.sort(Re,nt),Ct=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,Ct&&vt.addToRenderList(P,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),At===!0&&tt.beginShadows();const te=L.state.shadowsArray;if(ft.render(te,C,G),At===!0&&tt.endShadows(),(ie&&w.hasRenderPass())===!1){const ke=P.opaque,Ve=P.transmissive;if(L.setupLights(),G.isArrayCamera){const Qe=G.cameras;if(Ve.length>0)for(let st=0,Et=Qe.length;st<Et;st++){const wt=Qe[st];dr(ke,Ve,C,wt)}Ct&&vt.render(C);for(let st=0,Et=Qe.length;st<Et;st++){const wt=Qe[st];Or(P,C,wt,wt.viewport)}}else Ve.length>0&&dr(ke,Ve,C,G),Ct&&vt.render(C),Or(P,C,G)}W!==null&&Z===0&&(pe.updateMultisampleRenderTarget(W),pe.updateRenderTargetMipmap(W)),ie&&w.end(B),C.isScene===!0&&C.onAfterRender(B,C,G),ze.resetDefaultState(),Q=-1,X=null,T.pop(),T.length>0?(L=T[T.length-1],pe.setTextureUnits(L.state.textureUnits),At===!0&&tt.setGlobalState(B.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?P=F[F.length-1]:P=null,ee!==null&&ee.renderEnd()};function fr(C,G,fe,ie){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)fe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(xt)){ie&&lt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Se);const ke=_e.update(C),Ve=C.material;Ve.visible&&P.push(C,ke,Ve,fe,lt.z,null,G)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(xt))){const ke=_e.update(C),Ve=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),lt.copy(C.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),lt.copy(ke.boundingSphere.center)),lt.applyMatrix4(C.matrixWorld).applyMatrix4(Se)),Array.isArray(Ve)){const Qe=ke.groups;for(let st=0,Et=Qe.length;st<Et;st++){const wt=Qe[st],qe=Ve[wt.materialIndex];qe&&qe.visible&&P.push(C,ke,qe,fe,lt.z,wt,G)}}else Ve.visible&&P.push(C,ke,Ve,fe,lt.z,null,G)}}const He=C.children;for(let ke=0,Ve=He.length;ke<Ve;ke++)fr(He[ke],G,fe,ie)}function Or(C,G,fe,ie){const{opaque:te,transmissive:He,transparent:ke}=C;L.setupLightsView(fe),At===!0&&tt.setGlobalState(B.clippingPlanes,fe),ie&&E.viewport(U.copy(ie)),te.length>0&&k(te,G,fe),He.length>0&&k(He,G,fe),ke.length>0&&k(ke,G,fe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function dr(C,G,fe,ie){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ie.id]===void 0){const qe=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ie.id]=new ji(1,1,{generateMipmaps:!0,type:qe?lr:bi,minFilter:Os,samples:Math.max(4,N.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}const He=L.state.transmissionRenderTarget[ie.id],ke=ie.viewport||U;He.setSize(ke.z*B.transmissionResolutionScale,ke.w*B.transmissionResolutionScale);const Ve=B.getRenderTarget(),Qe=B.getActiveCubeFace(),st=B.getActiveMipmapLevel();B.setRenderTarget(He),B.getClearColor(We),Be=B.getClearAlpha(),Be<1&&B.setClearColor(16777215,.5),B.clear(),Ct&&vt.render(fe);const Et=B.toneMapping;B.toneMapping=sr;const wt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),L.setupLightsView(ie),At===!0&&tt.setGlobalState(B.clippingPlanes,ie),k(C,fe,ie),pe.updateMultisampleRenderTarget(He),pe.updateRenderTargetMipmap(He),ct.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ft=0,un=G.length;Ft<un;Ft++){const $t=G[Ft],{object:Xt,geometry:Sn,material:Xe,group:mn}=$t;if(Xe.side===Rr&&Xt.layers.test(ie.layers)){const Ot=Xe.side;Xe.side=li,Xe.needsUpdate=!0,he(Xt,fe,ie,Sn,Xe,mn),Xe.side=Ot,Xe.needsUpdate=!0,qe=!0}}qe===!0&&(pe.updateMultisampleRenderTarget(He),pe.updateRenderTargetMipmap(He))}B.setRenderTarget(Ve,Qe,st),B.setClearColor(We,Be),wt!==void 0&&(ie.viewport=wt),B.toneMapping=Et}function k(C,G,fe){const ie=G.isScene===!0?G.overrideMaterial:null;for(let te=0,He=C.length;te<He;te++){const ke=C[te],{object:Ve,geometry:Qe,group:st}=ke;let Et=ke.material;Et.allowOverride===!0&&ie!==null&&(Et=ie),Ve.layers.test(fe.layers)&&he(Ve,G,fe,Qe,Et,st)}}function he(C,G,fe,ie,te,He){ee!==null&&te.isNodeMaterial&&ee.setObject(C,te),C.onBeforeRender(B,G,fe,ie,te,He),C.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(B,G,fe,ie,C,He),te.transparent===!0&&te.side===Rr&&te.forceSinglePass===!1?(te.side=li,te.needsUpdate=!0,B.renderBufferDirect(fe,G,ie,te,C,He),te.side=zs,te.needsUpdate=!0,B.renderBufferDirect(fe,G,ie,te,C,He),te.side=Rr):B.renderBufferDirect(fe,G,ie,te,C,He),C.onAfterRender(B,G,fe,ie,te,He)}function ve(C,G,fe){G.isScene!==!0&&(G=dt);const ie=se.get(C),te=L.state.lights,He=L.state.shadowsArray,ke=te.state.version,Ve=Le.getParameters(C,te.state,He,G,fe,L.state.lightProbeGridArray),Qe=Le.getProgramCacheKey(Ve);let st=ie.programs;ie.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?G.environment:null,ie.fog=G.fog;const Et=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ie.envMap=we.get(C.envMap||ie.environment,Et),ie.envMapRotation=ie.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,st===void 0&&(C.addEventListener("dispose",Ln),st=new Map,ie.programs=st);let wt=st.get(Qe);if(wt!==void 0){if(ie.currentProgram===wt&&ie.lightsStateVersion===ke)return ht(C,Ve),wt}else Ve.uniforms=Le.getUniforms(C),ee!==null&&C.isNodeMaterial&&ee.build(C,fe,Ve),C.onBeforeCompile(Ve,B),wt=Le.acquireProgram(Ve,Qe),st.set(Qe,wt),ie.uniforms=Ve.uniforms;const qe=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=tt.uniform),ht(C,Ve),ie.needsLights=Qt(C),ie.lightsStateVersion=ke,ie.needsLights&&(qe.ambientLightColor.value=te.state.ambient,qe.lightProbe.value=te.state.probe,qe.sunLights.value=te.state.sun,qe.sunLightShadows.value=te.state.sunShadow,qe.directionalLights.value=te.state.directional,qe.directionalLightShadows.value=te.state.directionalShadow,qe.spotLights.value=te.state.spot,qe.spotLightShadows.value=te.state.spotShadow,qe.rectAreaLights.value=te.state.rectArea,qe.ltc_1.value=te.state.rectAreaLTC1,qe.ltc_2.value=te.state.rectAreaLTC2,qe.pointLights.value=te.state.point,qe.pointLightShadows.value=te.state.pointShadow,qe.hemisphereLights.value=te.state.hemi,qe.sunShadowMatrix.value=te.state.sunShadowMatrix,qe.sunShadowCascade.value=te.state.sunShadowCascade,qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,qe.spotLightMatrix.value=te.state.spotLightMatrix,qe.spotLightMap.value=te.state.spotLightMap,qe.pointShadowMatrix.value=te.state.pointShadowMatrix),ie.lightProbeGrid=L.state.lightProbeGridArray.length>0,ie.currentProgram=wt,ie.uniformsList=null,wt}function Fe(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=Zc.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function ht(C,G){const fe=se.get(C);fe.outputColorSpace=G.outputColorSpace,fe.batching=G.batching,fe.batchingColor=G.batchingColor,fe.instancing=G.instancing,fe.instancingColor=G.instancingColor,fe.instancingMorph=G.instancingMorph,fe.skinning=G.skinning,fe.morphTargets=G.morphTargets,fe.morphNormals=G.morphNormals,fe.morphColors=G.morphColors,fe.morphTargetsCount=G.morphTargetsCount,fe.numClippingPlanes=G.numClippingPlanes,fe.numIntersection=G.numClipIntersection,fe.vertexAlphas=G.vertexAlphas,fe.vertexTangents=G.vertexTangents,fe.toneMapping=G.toneMapping}function Ut(C,G){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;b.setFromMatrixPosition(G.matrixWorld);for(let fe=0,ie=C.length;fe<ie;fe++){const te=C[fe];if(te.texture!==null&&te.boundingBox.containsPoint(b))return te}return null}function ut(C,G,fe,ie,te){G.isScene!==!0&&(G=dt),pe.resetTextureUnits();const He=G.fog,ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?G.environment:null,Ve=W===null?B.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Bt.workingColorSpace,Qe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,st=we.get(ie.envMap||ke,Qe),Et=ie.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,wt=!!fe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),qe=!!fe.morphAttributes.position,Ft=!!fe.morphAttributes.normal,un=!!fe.morphAttributes.color;let $t=sr;ie.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&($t=B.toneMapping);const Xt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Sn=Xt!==void 0?Xt.length:0,Xe=se.get(ie),mn=L.state.lights;if(At===!0&&(Rt===!0||C!==X)){const qt=C===X&&ie.id===Q;tt.setState(ie,C,qt)}let Ot=!1;ie.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==mn.state.version||Xe.outputColorSpace!==Ve||te.isBatchedMesh&&Xe.batching===!1||!te.isBatchedMesh&&Xe.batching===!0||te.isBatchedMesh&&Xe.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Xe.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Xe.instancing===!1||!te.isInstancedMesh&&Xe.instancing===!0||te.isSkinnedMesh&&Xe.skinning===!1||!te.isSkinnedMesh&&Xe.skinning===!0||te.isInstancedMesh&&Xe.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Xe.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Xe.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Xe.instancingMorph===!1&&te.morphTexture!==null||Xe.envMap!==st||ie.fog===!0&&Xe.fog!==He||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==tt.numPlanes||Xe.numIntersection!==tt.numIntersection)||Xe.vertexAlphas!==Et||Xe.vertexTangents!==wt||Xe.morphTargets!==qe||Xe.morphNormals!==Ft||Xe.morphColors!==un||Xe.toneMapping!==$t||Xe.morphTargetsCount!==Sn||!!Xe.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Ot=!0):(Ot=!0,Xe.__version=ie.version);let Bn=Xe.currentProgram;Ot===!0&&(Bn=ve(ie,G,te),ee&&ie.isNodeMaterial&&ee.onUpdateProgram(ie,Bn,Xe));let bt=!1,Pi=!1,hr=!1;const Ht=Bn.getUniforms(),nn=Xe.uniforms;if(E.useProgram(Bn.program)&&(bt=!0,Pi=!0,hr=!0),ie.id!==Q&&(Q=ie.id,Pi=!0),Xe.needsLights){const qt=Ut(L.state.lightProbeGridArray,te);Xe.lightProbeGrid!==qt&&(Xe.lightProbeGrid=qt,Pi=!0)}if(bt||X!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ht.setValue(z,"projectionMatrix",C.projectionMatrix),Ht.setValue(z,"viewMatrix",C.matrixWorldInverse);const vi=Ht.map.cameraPosition;vi!==void 0&&vi.setValue(z,pt.setFromMatrixPosition(C.matrixWorld)),N.logarithmicDepthBuffer&&Ht.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ht.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),X!==C&&(X=C,Pi=!0,hr=!0)}if(Xe.needsLights&&(mn.state.sunShadowMap.length>0&&Ht.setValue(z,"sunShadowMap",mn.state.sunShadowMap,pe),mn.state.directionalShadowMap.length>0&&Ht.setValue(z,"directionalShadowMap",mn.state.directionalShadowMap,pe),mn.state.spotShadowMap.length>0&&Ht.setValue(z,"spotShadowMap",mn.state.spotShadowMap,pe),mn.state.pointShadowMap.length>0&&Ht.setValue(z,"pointShadowMap",mn.state.pointShadowMap,pe)),te.isSkinnedMesh){Ht.setOptional(z,te,"bindMatrix"),Ht.setOptional(z,te,"bindMatrixInverse");const qt=te.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Ht.setValue(z,"boneTexture",qt.boneTexture,pe))}te.isBatchedMesh&&(Ht.setOptional(z,te,"batchingTexture"),Ht.setValue(z,"batchingTexture",te._matricesTexture,pe),Ht.setOptional(z,te,"batchingIdTexture"),Ht.setValue(z,"batchingIdTexture",te._indirectTexture,pe),Ht.setOptional(z,te,"batchingColorTexture"),te._colorsTexture!==null&&Ht.setValue(z,"batchingColorTexture",te._colorsTexture,pe));const Di=fe.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&H.update(te,fe,Bn),(Pi||Xe.receiveShadow!==te.receiveShadow)&&(Xe.receiveShadow=te.receiveShadow,Ht.setValue(z,"receiveShadow",te.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&G.environment!==null&&(nn.envMapIntensity.value=G.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=GD()),Pi){if(Ht.setValue(z,"toneMappingExposure",B.toneMappingExposure),Xe.needsLights&&cn(nn,hr),He&&ie.fog===!0&&et.refreshFogUniforms(nn,He),et.refreshMaterialUniforms(nn,ie,ue,oe,L.state.transmissionRenderTarget[C.id]),Xe.needsLights&&Xe.lightProbeGrid){const qt=Xe.lightProbeGrid;nn.probesSH.value=qt.texture,nn.probesMin.value.copy(qt.boundingBox.min),nn.probesMax.value.copy(qt.boundingBox.max),nn.probesResolution.value.copy(qt.resolution)}Zc.upload(z,Fe(Xe),nn,pe)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Zc.upload(z,Fe(Xe),nn,pe),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ht.setValue(z,"center",te.center),Ht.setValue(z,"modelViewMatrix",te.modelViewMatrix),Ht.setValue(z,"normalMatrix",te.normalMatrix),Ht.setValue(z,"modelMatrix",te.matrixWorld),ie.uniformsGroups!==void 0){const qt=ie.uniformsGroups;for(let vi=0,Li=qt.length;vi<Li;vi++){const Ni=qt[vi];ye.update(Ni,Bn),ye.bind(Ni,Bn)}}return Bn}function cn(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.sunLights.needsUpdate=G,C.sunLightShadows.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Qt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ge},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,G,fe){const ie=se.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),se.get(C.texture).__webglTexture=G,se.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:fe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){const fe=se.get(C);fe.__webglFramebuffer=G,fe.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,fe=0){W=C,ge=G,Z=fe;let ie=null,te=!1,He=!1;if(C){const Ve=se.get(C);if(Ve.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(z.FRAMEBUFFER,Ve.__webglFramebuffer),U.copy(C.viewport),ae.copy(C.scissor),Ee=C.scissorTest,E.viewport(U),E.scissor(ae),E.setScissorTest(Ee),Q=-1;return}else if(Ve.__webglFramebuffer===void 0)pe.setupRenderTarget(C);else if(Ve.__hasExternalTextures)pe.rebindTextures(C,se.get(C.texture).__webglTexture,se.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Et=C.depthTexture;if(Ve.__boundDepthTexture!==Et){if(Et!==null&&se.has(Et)&&(C.width!==Et.image.width||C.height!==Et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(C)}}const Qe=C.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(He=!0);const st=se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(st[G])?ie=st[G][fe]:ie=st[G],te=!0):C.samples>0&&pe.useMultisampledRTT(C)===!1?ie=se.get(C).__webglMultisampledFramebuffer:Array.isArray(st)?ie=st[fe]:ie=st,U.copy(C.viewport),ae.copy(C.scissor),Ee=C.scissorTest}else U.copy(Pe).multiplyScalar(ue).floor(),ae.copy(at).multiplyScalar(ue).floor(),Ee=rt;if(fe!==0&&(ie=ne),E.bindFramebuffer(z.FRAMEBUFFER,ie)&&E.drawBuffers(C,ie),E.viewport(U),E.scissor(ae),E.setScissorTest(Ee),te){const Ve=se.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ve.__webglTexture,fe)}else if(He){const Ve=G;for(let Qe=0;Qe<C.textures.length;Qe++){const st=se.get(C.textures[Qe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Qe,st.__webglTexture,fe,Ve)}}else if(C!==null&&fe!==0){const Ve=se.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ve.__webglTexture,fe)}Q=-1};function On(C){const G=se.get(C);return(G.__readFormat!==C.format||G.__readType!==C.type)&&(G.__readFormat=C.format,G.__readType=C.type,G.__formatReadable=N.textureFormatReadable(C.format),G.__typeReadable=N.textureTypeReadable(C.type)),G}this.readRenderTargetPixels=function(C,G,fe,ie,te,He,ke,Ve=0){if(!(C&&C.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Qe=Qe[ke]),Qe){E.bindFramebuffer(z.FRAMEBUFFER,Qe);try{const st=C.textures[Ve],Et=st.format,wt=st.type;C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ve);const qe=On(st);if(qe.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-ie&&fe>=0&&fe<=C.height-te&&z.readPixels(G,fe,ie,te,Ie.convert(Et),Ie.convert(wt),He)}finally{const st=W!==null?se.get(W).__webglFramebuffer:null;E.bindFramebuffer(z.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(C,G,fe,ie,te,He,ke,Ve=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Qe=Qe[ke]),Qe)if(G>=0&&G<=C.width-ie&&fe>=0&&fe<=C.height-te){E.bindFramebuffer(z.FRAMEBUFFER,Qe);const st=C.textures[Ve],Et=st.format,wt=st.type;C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ve);const qe=On(st);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ft=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ft),z.bufferData(z.PIXEL_PACK_BUFFER,He.byteLength,z.STREAM_READ),z.readPixels(G,fe,ie,te,Ie.convert(Et),Ie.convert(wt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const un=W!==null?se.get(W).__webglFramebuffer:null;E.bindFramebuffer(z.FRAMEBUFFER,un);const $t=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await aA(z,$t,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ft),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,He),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Ft),z.deleteSync($t),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,fe=0){const ie=Math.pow(2,-fe),te=Math.floor(C.image.width*ie),He=Math.floor(C.image.height*ie),ke=G!==null?G.x:0,Ve=G!==null?G.y:0;pe.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,fe,0,0,ke,Ve,te,He),E.unbindTexture()},this.copyTextureToTexture=function(C,G,fe=null,ie=null,te=0,He=0){let ke,Ve,Qe,st,Et,wt,qe,Ft,un;const $t=C.isCompressedTexture?C.mipmaps[He]:C.image;if(fe!==null)ke=fe.max.x-fe.min.x,Ve=fe.max.y-fe.min.y,Qe=fe.isBox3?fe.max.z-fe.min.z:1,st=fe.min.x,Et=fe.min.y,wt=fe.isBox3?fe.min.z:0;else{const nn=Math.pow(2,-te);ke=Math.floor($t.width*nn),Ve=Math.floor($t.height*nn),C.isDataArrayTexture?Qe=$t.depth:C.isData3DTexture?Qe=Math.floor($t.depth*nn):Qe=1,st=0,Et=0,wt=0}ie!==null?(qe=ie.x,Ft=ie.y,un=ie.z):(qe=0,Ft=0,un=0);const Xt=Ie.convert(G.format),Sn=Ie.convert(G.type);let Xe;G.isData3DTexture?(pe.setTexture3D(G,0),Xe=z.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(pe.setTexture2DArray(G,0),Xe=z.TEXTURE_2D_ARRAY):(pe.setTexture2D(G,0),Xe=z.TEXTURE_2D),E.activeTexture(z.TEXTURE0),E.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),E.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),E.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);const mn=E.getParameter(z.UNPACK_ROW_LENGTH),Ot=E.getParameter(z.UNPACK_IMAGE_HEIGHT),Bn=E.getParameter(z.UNPACK_SKIP_PIXELS),bt=E.getParameter(z.UNPACK_SKIP_ROWS),Pi=E.getParameter(z.UNPACK_SKIP_IMAGES);E.pixelStorei(z.UNPACK_ROW_LENGTH,$t.width),E.pixelStorei(z.UNPACK_IMAGE_HEIGHT,$t.height),E.pixelStorei(z.UNPACK_SKIP_PIXELS,st),E.pixelStorei(z.UNPACK_SKIP_ROWS,Et),E.pixelStorei(z.UNPACK_SKIP_IMAGES,wt);const hr=C.isDataArrayTexture||C.isData3DTexture,Ht=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){const nn=se.get(C),Di=se.get(G),qt=se.get(nn.__renderTarget),vi=se.get(Di.__renderTarget);E.bindFramebuffer(z.READ_FRAMEBUFFER,qt.__webglFramebuffer),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Li=0;Li<Qe;Li++)hr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,se.get(C).__webglTexture,te,wt+Li),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,se.get(G).__webglTexture,He,un+Li)),z.blitFramebuffer(st,Et,ke,Ve,qe,Ft,ke,Ve,z.DEPTH_BUFFER_BIT,z.NEAREST);E.bindFramebuffer(z.READ_FRAMEBUFFER,null),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(te!==0||C.isRenderTargetTexture||se.has(C)){const nn=se.get(C),Di=se.get(G);E.bindFramebuffer(z.READ_FRAMEBUFFER,K),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,J);for(let qt=0;qt<Qe;qt++)hr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nn.__webglTexture,te,wt+qt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,nn.__webglTexture,te),Ht?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Di.__webglTexture,He,un+qt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Di.__webglTexture,He),te!==0?z.blitFramebuffer(st,Et,ke,Ve,qe,Ft,ke,Ve,z.COLOR_BUFFER_BIT,z.NEAREST):Ht?z.copyTexSubImage3D(Xe,He,qe,Ft,un+qt,st,Et,ke,Ve):z.copyTexSubImage2D(Xe,He,qe,Ft,st,Et,ke,Ve);E.bindFramebuffer(z.READ_FRAMEBUFFER,null),E.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ht?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Xe,He,qe,Ft,un,ke,Ve,Qe,Xt,Sn,$t.data):G.isCompressedArrayTexture?z.compressedTexSubImage3D(Xe,He,qe,Ft,un,ke,Ve,Qe,Xt,$t.data):z.texSubImage3D(Xe,He,qe,Ft,un,ke,Ve,Qe,Xt,Sn,$t):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,He,qe,Ft,ke,Ve,Xt,Sn,$t.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,He,qe,Ft,$t.width,$t.height,Xt,$t.data):z.texSubImage2D(z.TEXTURE_2D,He,qe,Ft,ke,Ve,Xt,Sn,$t);E.pixelStorei(z.UNPACK_ROW_LENGTH,mn),E.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ot),E.pixelStorei(z.UNPACK_SKIP_PIXELS,Bn),E.pixelStorei(z.UNPACK_SKIP_ROWS,bt),E.pixelStorei(z.UNPACK_SKIP_IMAGES,Pi),He===0&&G.generateMipmaps&&z.generateMipmap(Xe),E.unbindTexture()},this.initRenderTarget=function(C){se.get(C).__webglFramebuffer===void 0&&pe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?pe.setTextureCube(C,0):C.isData3DTexture?pe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?pe.setTexture2DArray(C,0):pe.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){ge=0,Z=0,W=null,E.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}}const th=["portal","logo","torus","constellation","tree"];function XD(){const n=document.createElement("canvas");n.width=128,n.height=128;const e=n.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255, 255, 255, 1)"),t.addColorStop(.18,"rgba(90, 242, 255, 1)"),t.addColorStop(.46,"rgba(67, 97, 238, 0.8)"),t.addColorStop(.75,"rgba(181, 23, 158, 0.3)"),t.addColorStop(1,"rgba(181, 23, 158, 0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const r=new UA(n);return r.needsUpdate=!0,r}function $_(n,e){const t=new Float32Array(e*3);switch(n){case"tree":jD(t,e);break;case"torus":YD(t,e);break;case"constellation":qD(t,e);break;case"portal":KD(t,e);break;case"logo":Z_(t,e);break;default:Z_(t,e)}return t}function jD(n,e){let t=0;const r=Math.floor(e*.22),o=Math.floor(e*.38);for(let u=0;u<r;u++){const d=u/r,h=-2.2+d*2,p=(1-d*.6)*.35+Math.sin(h*4)*.05,v=Math.random()*Math.PI*2,g=p*(.4+.6*Math.random());n[t++]=Math.cos(v)*g,n[t++]=h+(Math.random()-.5)*.05,n[t++]=Math.sin(v)*g}const a=8,c=Math.floor(o/a);for(let u=0;u<a;u++){const d=u/a*Math.PI*2+(Math.random()-.5)*.3,h=.3+Math.random()*.5;for(let p=0;p<c&&!(t>=(r+o)*3);p++){const v=p/c,g=v*1.9,y=-.2+v*h*2.2+Math.sin(v*5)*.15,M=v*.25;n[t++]=Math.cos(d)*g+(Math.random()-.5)*M,n[t++]=y+(Math.random()-.5)*M,n[t++]=Math.sin(d)*g+(Math.random()-.5)*M}}for(;t<e*3;){const u=Math.random()*Math.PI*2,d=Math.random()*Math.PI,h=1.4+Math.random()*1.2;n[t++]=h*Math.sin(d)*Math.cos(u)*1.2,n[t++]=1.2+h*Math.cos(d)*.85+(Math.random()-.5)*.3,n[t++]=h*Math.sin(d)*Math.sin(u)*1.2}}function YD(n,e){let t=0;const r=2,o=.65,a=Math.floor(e*.7);for(let c=0;c<a;c++){const u=Math.random()*Math.PI*2,d=Math.random()*Math.PI*2,h=o*(.3+.7*Math.sqrt(Math.random())),p=(r+h*Math.cos(d))*Math.cos(u),v=h*Math.sin(d)+Math.sin(u*3)*.2,g=(r+h*Math.cos(d))*Math.sin(u);n[t++]=p*.85-v*.3,n[t++]=v*.85+p*.3,n[t++]=g}for(;t<e*3;){const c=Math.random()*Math.PI*2,u=2.7+(Math.random()-.5)*.4;n[t++]=Math.cos(c)*u,n[t++]=Math.sin(c*2)*.6,n[t++]=Math.sin(c)*u}}function qD(n,e){let t=0;const r=[[-1.8,1.1,.5],[1.8,1.2,-.4],[-1.2,-.5,1.3],[1.3,-.6,-1.2],[0,1.9,0],[-1.9,-1,-.6],[1.7,-1.1,.7],[0,-1.8,0]],o=Math.floor(e*.55/r.length);for(const u of r)for(let d=0;d<o&&!(t>=e*.55*3);d++){const h=Math.pow(Math.random(),2)*.45,p=Math.random()*Math.PI*2,v=Math.acos(Math.random()*2-1);n[t++]=u[0]+h*Math.sin(v)*Math.cos(p),n[t++]=u[1]+h*Math.sin(v)*Math.sin(p),n[t++]=u[2]+h*Math.cos(v)}const a=[[0,1],[0,4],[1,4],[0,2],[1,3],[2,7],[3,7],[2,5],[3,6],[5,7],[6,7]],c=Math.floor(e*.3/a.length);for(const[u,d]of a){const h=r[u],p=r[d];for(let v=0;v<c&&!(t>=e*.85*3);v++){const g=v/c,y=(Math.random()-.5)*.12;n[t++]=h[0]+(p[0]-h[0])*g+y,n[t++]=h[1]+(p[1]-h[1])*g+y,n[t++]=h[2]+(p[2]-h[2])*g+y}}for(;t<e*3;){const u=Math.random()*Math.PI*2,d=Math.acos(Math.random()*2-1),h=1+Math.random()*2.2;n[t++]=h*Math.sin(d)*Math.cos(u),n[t++]=h*Math.sin(d)*Math.sin(u),n[t++]=h*Math.cos(d)}}function KD(n,e){let t=0;for(let r=0;r<e;r++){const a=-2.2+r/e*4.4,u=.35+Math.pow(a*.55,2)+Math.random()*.25,d=a*4.8+Math.PI*2*(r%6)/6+(Math.random()-.5)*.2;n[t++]=Math.cos(d)*u,n[t++]=a,n[t++]=Math.sin(d)*u}}function Z_(n,e){let t=0;const r=Math.floor(e*.44),o=Math.floor(e*.44),a=Math.floor(r/2),c=-.75,u=.52,d=-.52,h=.46,p=.55,v=1.5*Math.PI-.25;for(let x=0;x<a;x++){const I=.25+x/a*v,b=(Math.random()-.5)*.08,P=(Math.random()-.5)*.08,L=(Math.random()-.5)*.22;n[t++]=c+h*Math.cos(I)+b,n[t++]=u+p*Math.sin(I)+P,n[t++]=L}const g=r-a;for(let x=0;x<g;x++){const D=x/g,I=.5*Math.PI-D*v,b=(Math.random()-.5)*.08,P=(Math.random()-.5)*.08,L=(Math.random()-.5)*.22;n[t++]=c+h*Math.cos(I)+b,n[t++]=d+p*Math.sin(I)+P,n[t++]=L}const y=.25,M=.6,A=.65,S=1.07;for(let x=0;x<o;x++){const D=x/o;let I,b;if(D<.38){const T=D/.38;I=y,b=-S+T*(2*S)}else if(D<.45){const T=(D-.38)/.07;I=y+T*(M-y),b=S}else if(D<.93){const T=(D-.45)/.48,w=.5*Math.PI-T*Math.PI;I=M+A*Math.cos(w),b=S*Math.sin(w)}else{const T=(D-.93)/.07;I=M-T*(M-y),b=-S}const P=(Math.random()-.5)*.08,L=(Math.random()-.5)*.08,F=(Math.random()-.5)*.22;n[t++]=I+P,n[t++]=b+L,n[t++]=F}for(;t<e*3;){const x=Math.random()*Math.PI*2,D=2.2+(Math.random()-.5)*.25;n[t++]=Math.cos(x)*D,n[t++]=Math.sin(x)*D,n[t++]=(Math.random()-.5)*.3}}function $D({shape:n="portal",interactiveMouse:e=!0,autoMorph:t=!0,morphInterval:r=5e3,className:o="",style:a={}}){const c=Ce.useRef(null),u=Ce.useRef(n),d=Ce.useRef({x:0,y:0,targetX:0,targetY:0,worldX:0,worldY:0});return Ce.useEffect(()=>{u.current=n},[n]),Ce.useEffect(()=>{if(!t)return;let h=th.indexOf(u.current);h===-1&&(h=0);const p=setInterval(()=>{h=(h+1)%th.length,u.current=th[h]},r);return()=>clearInterval(p)},[t,r]),Ce.useEffect(()=>{const h=c.current;if(!h)return;const p=window.innerWidth<768,v=p?3600:7200,g=new EA;g.fog=new em(263953,.022);const y=new Ci(55,h.clientWidth/(h.clientHeight||1),.1,100);y.position.set(0,.2,5.8);const M=new WD({powerPreference:"high-performance",antialias:!0,alpha:!0});M.setSize(h.clientWidth,h.clientHeight),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.setClearColor(263953,0),h.appendChild(M.domElement);const A=p?600:1300,S=new Jn,x=new Float32Array(A*3),D=new Float32Array(A*3);for(let Se=0;Se<A;Se++){x[Se*3]=(Math.random()-.5)*48,x[Se*3+1]=(Math.random()-.5)*38,x[Se*3+2]=-4-Math.random()*26;const pt=Math.random();pt>.65?(D[Se*3]=.35,D[Se*3+1]=.95,D[Se*3+2]=1):pt>.35?(D[Se*3]=.55,D[Se*3+1]=.6,D[Se*3+2]=1):(D[Se*3]=.9,D[Se*3+1]=.92,D[Se*3+2]=1)}S.setAttribute("position",new jn(x,3)),S.setAttribute("color",new jn(D,3));const I=new $c({size:.07,vertexColors:!0,transparent:!0,opacity:.85,blending:Io,depthWrite:!1}),b=new qd(S,I);g.add(b);const P=p?250:600,L=new Jn,F=new Float32Array(P*3),T=[],w=new Float32Array(P*3);for(let Se=0;Se<P;Se++){F[Se*3]=(Math.random()-.5)*34,F[Se*3+1]=(Math.random()-.5)*26,F[Se*3+2]=-8+Math.random()*12,T.push({vx:(Math.random()-.5)*.003,vy:.002+Math.random()*.004});const pt=Math.random()>.4;w[Se*3]=pt?.3:.75,w[Se*3+1]=pt?.92:.45,w[Se*3+2]=1}L.setAttribute("position",new jn(F,3)),L.setAttribute("color",new jn(w,3));const B=XD(),Y=new $c({size:.08,map:B,vertexColors:!0,transparent:!0,opacity:.8,blending:Io,depthWrite:!1}),ee=new qd(L,Y);g.add(ee);const ne=new Jn,K=new Float32Array(v*3),J=new Float32Array(v*3),ge=new Float32Array(v*3),Z=new Float32Array(v*3),W=$_(u.current,v);for(let Se=0;Se<v*3;Se++)K[Se]=W[Se],J[Se]=W[Se],ge[Se]=W[Se];const Q=new Lt(5105919),X=new Lt(4094970),U=new Lt(10181887);for(let Se=0;Se<v;Se++){const pt=(W[Se*3+1]+2.5)/5,lt=new Lt;pt<.45?lt.copy(Q).lerp(X,pt/.45):lt.copy(X).lerp(U,(pt-.45)/.55);const dt=(Math.random()-.5)*.15;Z[Se*3]=Math.min(1,Math.max(0,lt.r+dt)),Z[Se*3+1]=Math.min(1,Math.max(0,lt.g+dt)),Z[Se*3+2]=Math.min(1,Math.max(0,lt.b+dt))}ne.setAttribute("position",new jn(K,3)),ne.setAttribute("color",new jn(Z,3));const ae=new $c({size:p?.115:.105,map:B,vertexColors:!0,transparent:!0,opacity:.95,blending:Io,depthWrite:!1}),Ee=()=>{const Se=h.clientWidth||window.innerWidth;return Se>=1200?.95:Se>=992?.65:0};let We=Ee();const Be=new qd(ne,ae);Be.position.x=We,g.add(Be);const Ye=6,oe=new za;oe.position.set(We,-2.2,0),oe.rotation.x=Math.PI/2;const ue=[];for(let Se=0;Se<Ye;Se++){const lt=new Jn,dt=new Float32Array(195);for(let z=0;z<=64;z++){const Yt=z/64*Math.PI*2;dt[z*3]=Math.cos(Yt),dt[z*3+1]=Math.sin(Yt),dt[z*3+2]=0}lt.setAttribute("position",new jn(dt,3));const Ct=new ly({color:Se%2===0?5105919:4094970,transparent:!0,opacity:.55,blending:Io,depthWrite:!1}),Nt=new IA(lt,Ct);ue.push({mesh:Nt,phase:Se/Ye,baseSpeed:.18}),oe.add(Nt)}g.add(oe);let Re=u.current;const nt=Se=>{const pt=$_(Se,v);for(let lt=0;lt<v*3;lt++)J[lt]=pt[lt],ge[lt]=pt[lt]},Pe=Se=>{if(!e)return;const pt=h.getBoundingClientRect(),lt=pt.width||window.innerWidth,dt=pt.height||window.innerHeight,Ct=(Se.clientX-pt.left)/lt*2-1,Nt=-((Se.clientY-pt.top)/dt*2-1);d.current.targetX=Ct,d.current.targetY=Nt,d.current.worldX=Ct*3.2,d.current.worldY=Nt*2.2};window.addEventListener("mousemove",Pe,{passive:!0});const at=()=>{if(!h)return;const Se=h.clientWidth||window.innerWidth,pt=h.clientHeight||window.innerHeight;y.aspect=Se/pt,y.updateProjectionMatrix(),M.setSize(Se,pt),We=Ee(),Be.position.x=We,oe.position.x=We},rt=new ResizeObserver(()=>at());rt.observe(h),window.addEventListener("resize",at);let xt;const At=new jA,Rt=()=>{xt=requestAnimationFrame(Rt);const Se=At.getElapsedTime();u.current!==Re&&(Re=u.current,nt(Re)),d.current.x+=(d.current.targetX-d.current.x)*.06,d.current.y+=(d.current.targetY-d.current.y)*.06,u.current==="logo"?Be.rotation.y=Math.sin(Se*.45)*.22+d.current.x*.4:Be.rotation.y=Se*.12+d.current.x*.45,Be.rotation.x=Math.sin(Se*.08)*.08-d.current.y*.35,Be.position.y=Math.sin(Se*.6)*.08,Be.position.x=We,b.rotation.y=Se*.02+d.current.x*.08,b.rotation.x=-d.current.y*.05,ee.rotation.y=Se*.015+d.current.x*.04,ee.rotation.x=Math.sin(Se*.05)*.03;const lt=L.attributes.position.array;for(let ct=0;ct<P;ct++)lt[ct*3]+=T[ct].vx,lt[ct*3+1]+=T[ct].vy,lt[ct*3+1]>14&&(lt[ct*3+1]=-14),lt[ct*3]>18&&(lt[ct*3]=-18),lt[ct*3]<-18&&(lt[ct*3]=18);L.attributes.position.needsUpdate=!0;const dt=ne.attributes.position.array,Ct=d.current.worldX,Nt=d.current.worldY,z=1.4*1.4,Yt=Ct-We;for(let ct=0;ct<v;ct++){const N=ct*3,E=J[N],$=J[N+1],se=J[N+2],pe=.065;if(dt[N]+=(E-dt[N])*pe,dt[N+1]+=($-dt[N+1])*pe,dt[N+2]+=(se-dt[N+2])*pe,e){const we=dt[N]-Yt,De=dt[N+1]-Nt,me=we*we+De*De;if(me<z&&me>.001){const _e=Math.sqrt(me),Le=(1.4-_e)*.07;dt[N]+=we/_e*Le,dt[N+1]+=De/_e*Le,dt[N+2]+=(Math.random()-.5)*.02}}}ne.attributes.position.needsUpdate=!0;for(let ct=0;ct<ue.length;ct++){const N=ue[ct];N.phase=(N.phase+N.baseSpeed*.015)%1;const E=.4+N.phase*3.4;N.mesh.scale.set(E,E,1);const $=N.mesh.material,se=Math.sin(N.phase*Math.PI);$.opacity=se*.55}M.render(g,y)};return Rt(),()=>{cancelAnimationFrame(xt),window.removeEventListener("mousemove",Pe),window.removeEventListener("resize",at),rt.disconnect(),h.contains(M.domElement)&&h.removeChild(M.domElement),M.dispose(),ne.dispose(),ae.dispose(),S.dispose(),I.dispose(),L.dispose(),Y.dispose(),B.dispose(),ue.forEach(Se=>{Se.mesh.geometry.dispose(),Se.mesh.material.dispose()})}},[e]),q.jsx("div",{ref:c,"aria-hidden":"true",className:`particle-bg-root ${o}`,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:-1,overflow:"hidden",background:"radial-gradient(ellipse at 50% 35%, #0c1538 0%, #050816 65%, #020308 100%)",...a}})}const ZD=({onComplete:n,name:e="SD"})=>{const[t,r]=Ce.useState(0),[o,a]=Ce.useState(1),[c,u]=Ce.useState(!1);Ce.useEffect(()=>{const h=setTimeout(()=>r(1),400),p=setTimeout(()=>r(2),1200),v=setTimeout(()=>r(3),2e3),g=setTimeout(()=>r(4),2400),y=Date.now(),M=3200,A=setInterval(()=>{const S=Date.now()-y,x=Math.min(S/M,1),D=Math.floor(1+Math.pow(x,1.2)*99);a(D),x>=1&&(clearInterval(A),a(100),setTimeout(()=>{u(!0),setTimeout(n,950)},350))},35);return()=>{clearTimeout(h),clearTimeout(p),clearTimeout(v),clearTimeout(g),clearInterval(A)}},[n]);const d=()=>{u(!0),setTimeout(n,900)};return q.jsxs("div",{id:"intro-loader-curtain",className:`fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-10 md:p-12 bg-[#0c0d12] text-neutral-100 select-none overflow-hidden transition-transform duration-[950ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${c?"curtain-up -translate-y-full shadow-[0_30px_90px_rgba(0,0,0,0.9)]":"curtain-down translate-y-0"}`,children:[q.jsx("div",{className:"loader-header flex items-center justify-end w-full",children:q.jsx("button",{onClick:d,className:"loader-skip-btn text-[10px] font-mono tracking-[0.2em] text-neutral-500 hover:text-neutral-200 transition-colors uppercase cursor-pointer px-2 py-1",children:"SKIP"})}),q.jsxs("div",{className:"loader-hero flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto my-auto",children:[q.jsx("div",{className:`loader-accent-line w-12 sm:w-14 h-[1px] bg-neutral-600/80 mb-6 sm:mb-8 transition-all duration-700 ${t>=1?"loader-line-visible opacity-100 scale-100":"loader-line-hidden opacity-0 scale-50"}`}),q.jsxs("div",{className:"loader-headline space-y-1 sm:space-y-2 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[0.14em] sm:tracking-[0.18em] text-[#FAFAFC] uppercase leading-[1.25]",children:[q.jsx("div",{className:"loader-line-mask overflow-hidden py-1",children:q.jsx("div",{className:`loader-line-text transform transition-all duration-700 ease-out ${t>=1?"loader-line-visible translate-y-0 opacity-100":"loader-line-hidden translate-y-8 opacity-0"}`,children:"WELCOME TO"})}),q.jsx("div",{className:"loader-line-mask overflow-hidden py-1",children:q.jsxs("div",{className:`loader-line-text transform transition-all duration-700 ease-out ${t>=2?"loader-line-visible translate-y-0 opacity-100":"loader-line-hidden translate-y-8 opacity-0"}`,children:[e,"'S"]})}),q.jsx("div",{className:"loader-line-mask overflow-hidden py-1",children:q.jsx("div",{className:`loader-line-text transform transition-all duration-700 ease-out ${t>=3?"loader-line-visible translate-y-0 opacity-100":"loader-line-hidden translate-y-8 opacity-0"}`,children:"PORTFOLIO"})})]}),q.jsx("div",{className:`loader-subtitle mt-6 sm:mt-8 text-[11px] sm:text-xs font-mono tracking-[0.3em] sm:tracking-[0.36em] text-neutral-400/90 uppercase transition-all duration-700 ${t>=4?"loader-line-visible opacity-100 translate-y-0":"loader-line-hidden opacity-0 translate-y-3"}`,children:"— LOADING EXPERIENCE —"})]}),q.jsxs("div",{className:"loader-footer relative flex items-center justify-between w-full",children:[q.jsx("div",{className:"flex items-center gap-3",children:q.jsx("div",{className:"loader-monogram-badge w-8 h-8 rounded-full border border-neutral-700/80 flex items-center justify-center font-serif text-xs text-neutral-300",children:e})}),q.jsx("div",{className:"loader-counter absolute left-1/2 -translate-x-1/2 font-mono text-xs sm:text-sm tracking-[0.25em] text-neutral-400 tabular-nums font-light",children:o<10?`0${o}`:o}),q.jsx("div",{className:"loader-footer-spacer w-8"})]})]})};function QD(){const[n,e]=Ce.useState(!0);return q.jsxs(uM,{children:[n&&q.jsx(ZD,{onComplete:()=>e(!1),name:"SD"}),q.jsx($D,{shape:"portal",autoMorph:!0,morphInterval:5e3,interactiveMouse:!0}),q.jsx(Tw,{RAINBOW_MODE:!1,COLOR:"#8b5cf6",SIM_RESOLUTION:128,DYE_RESOLUTION:1440,DENSITY_DISSIPATION:4.5,VELOCITY_DISSIPATION:2,PRESSURE:.1,CURL:3,SPLAT_RADIUS:.2,SPLAT_FORCE:6e3,SHADING:!0,TRANSPARENT:!0,OPACITY:.35}),q.jsx(ew,{}),q.jsxs("main",{children:[q.jsx(nw,{}),q.jsx(sw,{}),q.jsx(_w,{}),q.jsx(Sw,{}),q.jsx(Mw,{})]}),q.jsx(Ew,{})]})}cM.createRoot(document.getElementById("root")).render(q.jsx(us.StrictMode,{children:q.jsx(QD,{})}));
