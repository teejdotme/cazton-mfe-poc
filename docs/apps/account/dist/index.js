System.register(['react', 'react-dom', '@poc-mfe/globals'], function (exports) {
    'use strict';
    var React, ReactDOM, globals;
    return {
        setters: [function (module) {
            React = module.default;
        }, function (module) {
            ReactDOM = module.default;
        }, function (module) {
            globals = module.default;
        }],
        execute: function () {

            function e(t){return (e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o);}return n}var o=null,r={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,suppressComponentDidCatchWarning:!1,domElements:{},errorBoundary:null,domElementGetter:null,parcelCanUpdate:!0};function a(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t;}))}function c(e,t){return new Promise((function(n,o){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return !1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return !1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var r=function(e,t){return t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)}(e,t);if("function"!=typeof r)throw new Error("single-spa-react: the domElementGetter for react application '".concat(t.appName||t.name,"' is not a function"));var a=l(e,t),c=function(e,t){var n=e(t);if(!n)throw new Error("single-spa-react: domElementGetter function for application '".concat(t.appName||t.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return n}(r,t);u({elementToRender:a,domElement:c,whenFinished:function(){n(this);},opts:e});e.domElements[t.name]=c;}))}function i(e,t){return Promise.resolve().then((function(){e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name];}))}function p(e,t){return new Promise((function(n,o){u({elementToRender:l(e,t),domElement:e.domElements[t.name],whenFinished:function(){n(this);},opts:e});}))}function u(e){var t=e.opts,n=e.elementToRender,o=e.domElement,r=e.whenFinished;return "createRoot"===t.renderType?t.ReactDOM.createRoot(o).render(n,r):"createBlockingRoot"===t.renderType?t.ReactDOM.createBlockingRoot(o).render(n,r):"hydrate"===t.renderType?t.ReactDOM.hydrate(n,o,r):t.ReactDOM.render(n,o,r)}function l(e,t){var n=e.React.createElement(e.rootComponent,t),r=o?e.React.createElement(o.Provider,{value:t},n):n;return e.errorBoundary&&(e.errorBoundaryClass=e.errorBoundaryClass||function(e){function t(n){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},t.displayName="SingleSpaReactErrorBoundary(".concat(n.name,")");}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.render=function(){return this.state.caughtError?e.errorBoundary(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},t.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t});},t}(e),r=e.React.createElement(e.errorBoundaryClass,t,r)),r}function singleSpaReact(u){if("object"!==e(u))throw new Error("single-spa-react requires a configuration object");var l=function(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(n){t(e,n,r[n]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t));}));}return e}({},r,{},u);if(!l.React)throw new Error("single-spa-react must be passed opts.React");if(!l.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!l.rootComponent&&!l.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(l.errorBoundary&&"function"!=typeof l.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!o&&l.React.createContext&&(o=l.React.createContext());var s={bootstrap:a.bind(null,l),mount:c.bind(null,l),unmount:i.bind(null,l)};return l.parcelCanUpdate&&(s.update=p.bind(null,l)),s}

            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            /* global Reflect, Promise */

            var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
                return extendStatics(d, b);
            };

            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }

            function styleInject(css, ref) {
              if ( ref === void 0 ) ref = {};
              var insertAt = ref.insertAt;

              if (!css || typeof document === 'undefined') { return; }

              var head = document.head || document.getElementsByTagName('head')[0];
              var style = document.createElement('style');
              style.type = 'text/css';

              if (insertAt === 'top') {
                if (head.firstChild) {
                  head.insertBefore(style, head.firstChild);
                } else {
                  head.appendChild(style);
                }
              } else {
                head.appendChild(style);
              }

              if (style.styleSheet) {
                style.styleSheet.cssText = css;
              } else {
                style.appendChild(document.createTextNode(css));
              }
            }

            var css_248z = ".component-module_container__2Xi2T {\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.component-module_form__1Fegx {\n    display: flex;\n    flex-direction: column;\n    width: 24vw;\n    height: 12vw;\n}\n\n.component-module_input__3tZl4 {\n    flex: 1;\n    margin: 0 3vw;\n    padding: 10px;\n    font-size: 20px;\n}\n\n.component-module_textbox__1jqSJ {\n\n}\n\n.component-module_button__1tCdz {\n    \n}";
            var styles = {"container":"component-module_container__2Xi2T","form":"component-module_form__1Fegx","input":"component-module_input__3tZl4","textbox":"component-module_textbox__1jqSJ","button":"component-module_button__1tCdz"};
            styleInject(css_248z);

            var _user = globals.state.auth.user();
            var Login = /** @class */ (function (_super) {
                __extends(Login, _super);
                function Login(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = { user: '' };
                    _this.onChange = _this.onChange.bind(_this);
                    _this.onSubmit = _this.onSubmit.bind(_this);
                    return _this;
                }
                Login.prototype.render = function () {
                    return (React.createElement("div", { className: styles.container },
                        React.createElement("form", { className: styles.form, onSubmit: this.onSubmit },
                            React.createElement("input", { type: "text", name: "username", placeholder: "Username", required: true, className: [styles.input, styles.textbox].join(' '), onChange: this.onChange }),
                            React.createElement("input", { type: "password", name: "password", placeholder: "Password", required: true, className: [styles.input, styles.textbox].join(' ') }),
                            React.createElement("input", { type: "submit", value: "Sign In!", className: [styles.input, styles.button].join(' ') }))));
                };
                Login.prototype.onChange = function (event) {
                    this.setState({ user: event.target.value });
                };
                Login.prototype.onSubmit = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    var signIn = globals.events.auth.SignInEvent(this.state.user);
                    window.dispatchEvent(signIn);
                };
                return Login;
            }(React.Component));
            var Account = /** @class */ (function (_super) {
                __extends(Account, _super);
                function Account() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Account.prototype.render = function () {
                    return (React.createElement("div", null,
                        React.createElement("div", { className: styles.container },
                            React.createElement("h1", null,
                                "Hello, ",
                                this.props.user,
                                "!")),
                        React.createElement("div", { className: styles.container }, "This is somewhere you might manage your account.")));
                };
                return Account;
            }(React.Component));
            var Root = /** @class */ (function (_super) {
                __extends(Root, _super);
                function Root(props) {
                    var _this = _super.call(this, props) || this;
                    _this.state = {
                        user: _user
                    };
                    _this.onSignIn = _this.onSignIn.bind(_this);
                    _this.onSignOut = _this.onSignOut.bind(_this);
                    return _this;
                }
                Root.prototype.componentDidMount = function () {
                    window.addEventListener(globals.events.auth.SignInEvent.EventType, this.onSignIn);
                    window.addEventListener(globals.events.auth.SignOutEvent.EventType, this.onSignOut);
                };
                Root.prototype.componentWillUnmount = function () {
                    window.removeEventListener(globals.events.auth.SignInEvent.EventType, this.onSignIn);
                    window.removeEventListener(globals.events.auth.SignOutEvent.EventType, this.onSignOut);
                };
                Root.prototype.componentDidCatch = function () {
                };
                Root.prototype.onSignIn = function (evt) {
                    this.setState({
                        user: evt.detail.user
                    });
                };
                Root.prototype.onSignOut = function (evt) {
                    this.setState({
                        user: ''
                    });
                };
                Root.prototype.render = function () {
                    if (this.state.user) {
                        return (React.createElement(Account, { user: this.state.user }));
                    }
                    else {
                        return (React.createElement(Login, null));
                    }
                };
                return Root;
            }(React.Component));

            var lifecycles = singleSpaReact({
                React: React,
                ReactDOM: ReactDOM,
                rootComponent: Root
            });
            var bootstrap = exports('bootstrap', lifecycles.bootstrap);
            var mount = exports('mount', lifecycles.mount);
            var unmount = exports('unmount', lifecycles.unmount);

        }
    };
});
//# sourceMappingURL=index.js.map
