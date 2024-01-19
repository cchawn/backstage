/*! For license information please see ec00b45f.f991cde7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[77761],{648566:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>a});var r=t(824246),o=t(511151);const c={id:"plugin-jenkins-backend.jenkinsconfig.instances",title:"JenkinsConfig.instances",description:"API reference for JenkinsConfig.instances"},i=void 0,s={id:"reference/plugin-jenkins-backend.jenkinsconfig.instances",title:"JenkinsConfig.instances",description:"API reference for JenkinsConfig.instances",source:"@site/../docs/reference/plugin-jenkins-backend.jenkinsconfig.instances.md",sourceDirName:"reference",slug:"/reference/plugin-jenkins-backend.jenkinsconfig.instances",permalink:"/docs/reference/plugin-jenkins-backend.jenkinsconfig.instances",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-jenkins-backend.jenkinsconfig.instances.md",tags:[],version:"current",frontMatter:{id:"plugin-jenkins-backend.jenkinsconfig.instances",title:"JenkinsConfig.instances",description:"API reference for JenkinsConfig.instances"}},u={},a=[];function f(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-jenkins-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins-backend.jenkinsconfig",children:(0,r.jsx)(n.code,{children:"JenkinsConfig"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-jenkins-backend.jenkinsconfig.instances",children:(0,r.jsx)(n.code,{children:"instances"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"readonly instances: JenkinsInstanceConfig[];\n"})})]})}const l=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,c={},a=null,f=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(f=n.ref),n)i.call(n,r)&&!u.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:o,type:e,key:a,ref:f,props:c,_owner:s.current}}n.Fragment=c,n.jsx=a,n.jsxs=a},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,k={};function b(e,n,t){this.props=e,this.context=n,this.refs=k,this.updater=t||y}function _(){}function m(e,n,t){this.props=e,this.context=n,this.refs=k,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var g=m.prototype=new _;g.constructor=m,h(g,b.prototype),g.isPureReactComponent=!0;var j=Array.isArray,v=Object.prototype.hasOwnProperty,S={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function x(e,n,r){var o,c={},i=null,s=null;if(null!=n)for(o in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(i=""+n.key),n)v.call(n,o)&&!C.hasOwnProperty(o)&&(c[o]=n[o]);var u=arguments.length-2;if(1===u)c.children=r;else if(1<u){for(var a=Array(u),f=0;f<u;f++)a[f]=arguments[f+2];c.children=a}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===c[o]&&(c[o]=u[o]);return{$$typeof:t,type:e,key:i,ref:s,props:c,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function $(e,n,o,c,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case t:case r:u=!0}}if(u)return i=i(u=e),e=""===c?"."+R(u,0):c,j(i)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),$(i,n,o,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(w,"$&/")+"/")+e)),n.push(i)),1;if(u=0,c=""===c?".":c+":",j(e))for(var a=0;a<e.length;a++){var f=c+R(s=e[a],a);u+=$(s,n,o,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(s=e.next()).done;)u+=$(s=s.value,n,o,f=c+R(s,a++),i);else if("object"===s)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return u}function O(e,n,t){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function P(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},A={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:S};n.Children={map:O,forEach:function(e,n,t){O(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return O(e,(function(){n++})),n},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=b,n.Fragment=o,n.Profiler=i,n.PureComponent=m,n.StrictMode=c,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,i=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,s=S.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in n)v.call(n,a)&&!C.hasOwnProperty(a)&&(o[a]=void 0===n[a]&&void 0!==u?u[a]:n[a])}var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){u=Array(a);for(var f=0;f<a;f++)u[f]=arguments[f+2];o.children=u}return{$$typeof:t,type:e.type,key:c,ref:i,props:o,_owner:s}},n.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=x,n.createFactory=function(e){var n=x.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:a,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=T.transition;T.transition={};try{e()}finally{T.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return I.current.useCallback(e,n)},n.useContext=function(e){return I.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return I.current.useDeferredValue(e)},n.useEffect=function(e,n){return I.current.useEffect(e,n)},n.useId=function(){return I.current.useId()},n.useImperativeHandle=function(e,n,t){return I.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return I.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return I.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return I.current.useMemo(e,n)},n.useReducer=function(e,n,t){return I.current.useReducer(e,n,t)},n.useRef=function(e){return I.current.useRef(e)},n.useState=function(e){return I.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return I.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return I.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>s,ah:()=>c});var r=t(667294);const o=r.createContext({});function c(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||i:c(e),r.createElement(o.Provider,{value:s},n)}}}]);