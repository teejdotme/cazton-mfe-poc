declare function SignInEvent(user: string): CustomEvent<{
    user: string;
}>;
declare namespace SignInEvent {
    var EventType: string;
}
declare function SignOutEvent(): CustomEvent<unknown>;
declare namespace SignOutEvent {
    var EventType: string;
}
export { SignInEvent, SignOutEvent };
//# sourceMappingURL=auth.d.ts.map