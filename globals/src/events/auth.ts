function SignInEvent(user: string) {
    return new CustomEvent(SignInEvent.EventType, { detail: { user } });
}

SignInEvent.EventType = "globals.auth.sign-in";

function SignOutEvent() {
    return new CustomEvent(SignOutEvent.EventType);
}

SignOutEvent.EventType = "globals.auth.sign-out";

export { SignInEvent, SignOutEvent };