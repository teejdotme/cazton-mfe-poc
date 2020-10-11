System.register([], function (exports) {
    'use strict';
    return {
        execute: function () {

            function SignInEvent(user) {
                return new CustomEvent(SignInEvent.EventType, { detail: { user: user } });
            }
            SignInEvent.EventType = "globals.auth.sign-in";
            function SignOutEvent() {
                return new CustomEvent(SignOutEvent.EventType);
            }
            SignOutEvent.EventType = "globals.auth.sign-out";

            var auth = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SignInEvent: SignInEvent,
                SignOutEvent: SignOutEvent
            });

            function SearchTermEnteredEvent(term) {
                return new CustomEvent(SearchTermEnteredEvent.EventType, { detail: { term: term } });
            }
            SearchTermEnteredEvent.EventType = "globals.search.term-entered";

            var search = /*#__PURE__*/Object.freeze({
                __proto__: null,
                SearchTermEnteredEvent: SearchTermEnteredEvent
            });

            var events = /*#__PURE__*/Object.freeze({
                __proto__: null,
                auth: auth,
                search: search
            });

            var _isSignedIn = false;
            var _user = null;
            function isSignedIn() {
                return _isSignedIn;
            }
            function user() {
                return _user;
            }
            function onSignIn(evt) {
                if (!evt.detail.user) {
                    return;
                }
                _isSignedIn = true;
                _user = evt.detail.user;
            }
            function onSignOut(evt) {
                _isSignedIn = false;
                _user = null;
            }
            window.addEventListener(SignInEvent.EventType, onSignIn);
            window.addEventListener(SignOutEvent.EventType, onSignOut);

            var auth$1 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                isSignedIn: isSignedIn,
                user: user
            });

            var _lastSearchedTerm = null;
            function lastSearchedTerm() {
                return _lastSearchedTerm;
            }
            function onSearchTermEntered(evt) {
                _lastSearchedTerm = evt.detail.term;
            }
            window.addEventListener(SearchTermEnteredEvent.EventType, onSearchTermEntered);

            var search$1 = /*#__PURE__*/Object.freeze({
                __proto__: null,
                lastSearchedTerm: lastSearchedTerm
            });

            var state = /*#__PURE__*/Object.freeze({
                __proto__: null,
                auth: auth$1,
                search: search$1
            });

            var index = exports('default', {
                events: events,
                state: state
            });

        }
    };
});
//# sourceMappingURL=index.js.map
