System.register(["single-spa"], function(__WEBPACK_DYNAMIC_EXPORT__) {
	var __WEBPACK_EXTERNAL_MODULE_single_spa__;
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_single_spa__ = module;
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/single-spa-layout/dist/esm/single-spa-layout.min.js":
/*!**************************************************************************!*\
  !*** ./node_modules/single-spa-layout/dist/esm/single-spa-layout.min.js ***!
  \**************************************************************************/
/*! exports provided: constructApplications, constructLayoutEngine, constructRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructApplications", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructLayoutEngine", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructRoutes", function() { return N; });
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ "single-spa");
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(single_spa__WEBPACK_IMPORTED_MODULE_0__);
/* single-spa-layout@1.0.1 - esm */
function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var m="undefined"!=typeof window;function v(e,t){if("object"!==c(t)||Array.isArray(t)||null===t)throw Error("Invalid ".concat(e,": received ").concat(Array.isArray(t)?"array":t," but expected a plain object"))}function h(e,t,n,o){if(!o){var r=Object.keys(t),a=[];r.forEach((function(e){n.indexOf(e)<0&&a.push(e)})),a.length>0&&console.warn(Error("Invalid ".concat(e,": received invalid properties '").concat(a.join(", "),"', but valid properties are ").concat(n.join(", "))))}}function y(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("string"!=typeof t||n&&""===t.trim())throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected a").concat(n?" non-blank":""," string"))}function b(e,t,n){if(!Array.isArray(t)&&("object"!==c(c(t))||"number"!==t.length))throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an array"));for(var o=arguments.length,r=new Array(o>3?o-3:0),a=3;a<o;a++)r[a-3]=arguments[a];for(var i=0;i<t.length;i++)n.apply(void 0,[t[i],"".concat(e,"[").concat(i,"]")].concat(r))}function g(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n];return null}var w=single_spa__WEBPACK_IMPORTED_MODULE_0___default.a?single_spa__WEBPACK_IMPORTED_MODULE_0___default.a.pathToActiveWhen:single_spa__WEBPACK_IMPORTED_MODULE_0__["pathToActiveWhen"],E="undefined"!=typeof Symbol?Symbol():"@";function N(e,t){if(e&&e.nodeName)m&&!t&&window.singleSpaLayoutData&&(t=window.singleSpaLayoutData),e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("template"===e.nodeName.toLowerCase()&&(e=(e.content||e).querySelector("single-spa-router")),"single-spa-router"!==e.nodeName.toLowerCase())throw Error("single-spa-layout: The HTMLElement passed to constructRoutes must be <single-spa-router> or a <template> containing the router. Received ".concat(e.nodeName));m&&e.isConnected&&e.parentNode.removeChild(e);var n={routes:[]};O(e,"mode")&&(n.mode=O(e,"mode")),O(e,"base")&&(n.base=O(e,"base")),O(e,"containerEl")&&(n.containerEl=O(e,"containerEl"));for(var o=0;o<e.childNodes.length;o++){var r;(r=n.routes).push.apply(r,p(A(e.childNodes[o],t)))}return n}(e,t);else if(t)throw Error("constructRoutes should be called either with an HTMLElement and layoutData, or a single json object.");return function(e){v("routesConfig",e);var t,n=e.disableWarnings;h("routesConfig",e,["mode","base","containerEl","routes","disableWarnings"],n),e.hasOwnProperty("containerEl")?function(e,t){if("string"==typeof t?""===t.trim():!(m&&t instanceof HTMLElement))throw Error("Invalid ".concat("routesConfig.containerEl",": received ").concat(t," but expected either non-blank string or HTMLElement"))}(0,e.containerEl):e.containerEl="body",e.hasOwnProperty("mode")||(e.mode="history"),function(e,t,n){if(n.indexOf(t)<0)throw Error("Invalid ".concat("routesConfig.mode",": received '").concat(t,"' but expected ").concat(n.join(", ")))}(0,e.mode,["history","hash"]),e.hasOwnProperty("base")?(y("routesConfig.base",e.base),e.base=(0!==(t=e.base).indexOf("/")&&(t="/"+t),"/"!==t[t.length-1]&&(t+="/"),t)):e.base="/";var o=m?window.location.pathname:"/",r="hash"===e.mode?o+"#":"";b("routesConfig.routes",e.routes,(function e(t,o,r){var a,i,u,s,l=r.parentPath,p=r.siblingActiveWhens;if(v(o,t),"application"===t.type)h(o,t,["type","name","props","loader","error"],n),t.props&&v("".concat(o,".props"),t.props),y("".concat(o,".name"),t.name);else if("route"===t.type){h(o,t,["type","path","routes","props","default"],n);var d,f=t.hasOwnProperty("path"),m=t.hasOwnProperty("default");if(f)y("".concat(o,".path"),t.path),i=l,u=t.path,"/"===(s="/"===i.substr(-1)?"/"===u[0]?i+u.slice(1):i+u:"/"===u[0]?i+u:i+"/"+u).substr(-1)&&(s=s.slice(0,s.length-1)),d=s,t.activeWhen=w(d),p.push(t.activeWhen);else{if(!m)throw Error("Invalid ".concat(o,": routes must have either a path or default property."));!function(e,t){if("boolean"!=typeof t)throw Error("Invalid ".concat(e,": received ").concat(c(t),", but expected a boolean"))}("".concat(o,".default"),t.default),d=l,t.activeWhen=(a=p,function(e){return!a.some((function(t){return t(e)}))})}if(f&&m&&t.default)throw Error("Invalid ".concat(o,": cannot have both path and set default to true."));t.routes&&b("".concat(o,".routes"),t.routes,e,{parentPath:d,siblingActiveWhens:[]})}else{if("undefined"!=typeof Node&&t instanceof Node);else for(var g in t)"routes"!==g&&"attrs"!==g&&y("".concat(o,"['").concat(g,"']"),t[g],!1);t.routes&&b("".concat(o,".routes"),t.routes,e,{parentPath:l,siblingActiveWhens:p})}}),{parentPath:r+e.base,siblingActiveWhens:[]}),delete e.disableWarnings}(e),e}function O(e,t){if(m)return e.getAttribute(t);var n=g(e.attrs,(function(e){return e.name===t.toLowerCase()}));return n?n.value:null}function A(e,t){if("application"===e.nodeName.toLowerCase()){if(e.childNodes.length>0)throw Error("<application> elements must not have childNodes. You must put in a closing </application> - self closing is not allowed");var n={type:"application",name:O(e,"name")},o=O(e,"loader");if(o)if(t.loaders&&t.loaders.hasOwnProperty(o))n.loader=t.loaders[o];else if(m)throw Error("Application loader '".concat(o,"' was not defined in the htmlLayoutData"));var r=O(e,"error");if(r)if(t.errors&&t.errors.hasOwnProperty(r))n.error=t.errors[r];else if(m)throw Error("Application error handler '".concat(o,"' was not defined in the htmlLayoutData"));return P(e,n,t),[n]}if("route"===e.nodeName.toLowerCase()){var a={type:"route",routes:[]},i=O(e,"path");i&&(a.path=i),function(e,t){return m?e.hasAttribute(t):e.attrs.some((function(e){return e.name===t}))}(e,"default")&&(a.default=!0),P(e,a,t);for(var c=0;c<e.childNodes.length;c++){var u;(u=a.routes).push.apply(u,p(A(e.childNodes[c],t)))}return[a]}if("undefined"!=typeof Node&&e instanceof Node){if(e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim())return[];if(e.childNodes&&e.childNodes.length>0){e.routes=[];for(var s=0;s<e.childNodes.length;s++){var l;(l=e.routes).push.apply(l,p(A(e.childNodes[s],t)))}}return[e]}if(e.childNodes){for(var d={type:e.nodeName.toLowerCase(),routes:[],attrs:e.attrs},f=0;f<e.childNodes.length;f++){var v;(v=d.routes).push.apply(v,p(A(e.childNodes[f],t)))}return[d]}return"#comment"===e.nodeName?[{type:"#comment",value:e.data}]:"#text"===e.nodeName?[{type:"#text",value:e.value}]:void 0}function P(e,t,n){for(var o=(O(e,"props")||"").split(","),r=0;r<o.length;r++){var a=o[r].trim();if(0!==a.length)if(t.props||(t.props={}),n.props&&n.props.hasOwnProperty(a))t.props[a]=n.props[a];else{if(m)throw Error("Prop '".concat(a,"' was not defined in the htmlLayoutData. Either remove this attribute from the HTML element or provide the prop's value"));t.props[a]=E}}}function C(e){return{bootstrap:function(){return Promise.resolve()},mount:function(t){return Promise.resolve().then((function(){t.domElement.innerHTML=e}))},unmount:function(e){return Promise.resolve().then((function(){e.domElement.innerHTML=""}))}}}function L(e){var a=e.routes,i=(e.applications,e.active),c=void 0===i||i,u=!1,s=[],l={},p=a.base.slice(0,a.base.length-1),d={isActive:function(){return u},activate:function(){u||(u=!0,m&&(window.addEventListener("single-spa:before-routing-event",v),window.addEventListener("single-spa:before-mount-routing-event",h),window.addEventListener("single-spa:routing-event",y),Object(single_spa__WEBPACK_IMPORTED_MODULE_0__["addErrorHandler"])(f),h()))},deactivate:function(){u&&(u=!1,m&&(window.removeEventListener("single-spa:before-routing-event",v),window.removeEventListener("single-spa:before-mount-routing-event",h),window.removeEventListener("single-spa:routing-event",y),Object(single_spa__WEBPACK_IMPORTED_MODULE_0__["removeErrorHandler"])(f)))}};return c&&d.activate(),d;function f(e){var t=j({applicationName:e.appOrParcelName,location:window.location,routes:a.routes});if(t&&t.error){var n=document.getElementById(x(t.name)),r="string"==typeof t.error?C(t.error):t.error;l[t.name]=Object(single_spa__WEBPACK_IMPORTED_MODULE_0__["mountRootParcel"])(r,{domElement:n})}}function v(e){var t=e.detail.newAppStatuses;for(var n in t)l[n]&&I(Object(single_spa__WEBPACK_IMPORTED_MODULE_0__["getAppStatus"])(n))&&!I(t[n])&&(l[n].unmount(),delete l[n])}function h(){if(0===location["hash"===a.mode?"hash":"pathname"].indexOf(p)){var e="string"==typeof a.containerEl?document.querySelector(a.containerEl):a.containerEl;S({location:window.location,routes:a.routes,parentContainer:e,shouldMount:!0,pendingRemovals:s})}}function y(e){var t=e.detail.appsByNewStatus;s.forEach((function(e){return e()})),s=[],t.NOT_MOUNTED.concat(t.NOT_LOADED).forEach((function(e){var t=document.getElementById(x(e));t&&t.isConnected&&t.parentNode.removeChild(t)}))}}function S(e){var t=e.location,n=e.routes,o=e.parentContainer,r=e.previousSibling,a=e.shouldMount,i=e.pendingRemovals;return n.forEach((function(e,n){if("application"===e.type){var c=x(e.name),u=document.getElementById(c);a&&(u||((u=document.createElement("div")).id=c),W(u,o,r),r=u)}else if("route"===e.type)r=S({location:t,routes:e.routes,parentContainer:o,previousSibling:r,shouldMount:a&&e.activeWhen(t),pendingRemovals:i});else if(e instanceof Node||"string"==typeof e.type)if(a){if(!e.connectedNode){var s=e instanceof Node?e.cloneNode(!1):T(e);e.connectedNode=s}W(e.connectedNode,o,r),e.routes&&S({location:t,routes:e.routes,parentContainer:e.connectedNode,previousSibling:null,shouldMount:a,pendingRemovals:i}),r=e.connectedNode}else i.push((function(){var t;(t=e.connectedNode)&&(t.remove?t.remove():t.parentNode.removeChild(t)),delete e.connectedNode}))})),r}function j(e){for(var t=e.applicationName,n=e.location,o=e.routes,r=0;r<o.length;r++){var a=o[r];if("application"===a.type){if(a.name===t)return a}else if("route"===a.type){if(a.activeWhen(n)){var i=j({applicationName:t,location:n,routes:a.routes});if(i)return i}}else if(a.routes){var c=j({applicationName:t,location:n,routes:a.routes});if(c)return c}}}function W(e,t,n){n&&n.nextSibling?n.parentNode.insertBefore(e,n.nextSibling):t.appendChild(e)}function x(e){return"single-spa-application:".concat(e)}function T(e){if("#text"===e.type.toLowerCase())return document.createTextNode(e.value);if("#comment"===e.type.toLowerCase())return document.createComment(e.value);var t=document.createElement(e.type);return(e.attrs||[]).forEach((function(e){t.setAttribute(e.name,e.value)})),t.routes&&t.routes.forEach((function(e){t.appendChild(T(e))})),t}function I(e){return e===single_spa__WEBPACK_IMPORTED_MODULE_0__["SKIP_BECAUSE_BROKEN"]||e===single_spa__WEBPACK_IMPORTED_MODULE_0__["LOAD_ERROR"]}function D(e){var t=e.routes,n=e.loadApp,r={};return M(r,R,{},t.routes),Object.keys(r).map((function(e){var t=r[e];return{name:e,customProps:function(e,n){var o=g(t,(function(e){return e.activeWhen(n)}));return o?o.props:{}},activeWhen:t.map((function(e){return e.activeWhen})),app:function(){var r;m&&(r=g(t,(function(e){return e.activeWhen(window.location)})));var a=n({name:e});return r&&r.loader?function(e,t,n){return Promise.resolve().then((function(){var r,a=x(e),i=document.getElementById(a);i||((i=document.createElement("div")).id=a,i.style.display="none",document.body.appendChild(i),r=function(){i.style.removeProperty("display"),""===i.getAttribute("style")&&i.removeAttribute("style"),window.removeEventListener("single-spa:before-mount-routing-event",r)},window.addEventListener("single-spa:before-mount-routing-event",r));var c="string"==typeof t.loader?C(t.loader):t.loader,u=Object(single_spa__WEBPACK_IMPORTED_MODULE_0__["mountRootParcel"])(c,{name:"application-loader:".concat(e),domElement:i});return Promise.all([u.mountPromise,n]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return n}}(t,n)||d(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=(o[0],o[1]);return u.unmount().then((function(){return r&&r(),a}))}))}))}(e,r,a):a}}}))}function M(e,t,n,o){o.forEach((function(o){"application"===o.type?(e[o.name]||(e[o.name]=[]),e[o.name].push({activeWhen:t,props:H(n,o.props),loader:o.loader})):"route"===o.type?M(e,o.activeWhen,H(n,o.props),o.routes):o.routes&&M(e,t,n,o.routes)}))}function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return l(l({},e),t)}function R(){return!0}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ "single-spa");
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(single_spa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var single_spa_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! single-spa-layout */ "./node_modules/single-spa-layout/dist/esm/single-spa-layout.min.js");


var routes = Object(single_spa_layout__WEBPACK_IMPORTED_MODULE_1__["constructRoutes"])(document.querySelector('#single-spa-layout'));
var applications = Object(single_spa_layout__WEBPACK_IMPORTED_MODULE_1__["constructApplications"])({
  routes: routes,
  loadApp: function loadApp(_ref) {
    var name = _ref.name;
    return System["import"](name);
  }
});
var layoutEngine = Object(single_spa_layout__WEBPACK_IMPORTED_MODULE_1__["constructLayoutEngine"])({
  routes: routes,
  applications: applications
});
applications.forEach(single_spa__WEBPACK_IMPORTED_MODULE_0__["registerApplication"]);
Object(single_spa__WEBPACK_IMPORTED_MODULE_0__["start"])();

/***/ }),

/***/ "single-spa":
/*!*****************************!*\
  !*** external "single-spa" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_single_spa__;

/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=index.js.map