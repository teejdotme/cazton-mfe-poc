import * as events from '../events/auth';

let _isSignedIn = false;
let _user: string | null = null;

function isSignedIn() {
    return _isSignedIn;
}

function user() {
    return _user;
}

function onSignIn(evt: CustomEvent) {
    if (!evt.detail.user) {
        return;
    }

    _isSignedIn = true;
    _user = evt.detail.user;
}

function onSignOut(evt: CustomEvent) {
    _isSignedIn = false;
    _user = null;
}

window.addEventListener(events.SignInEvent.EventType, <any>onSignIn);
window.addEventListener(events.SignOutEvent.EventType, <any>onSignOut);

export { isSignedIn, user };