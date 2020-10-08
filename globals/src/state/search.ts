import * as events from '../events/search';

let _lastSearchedTerm: string | null = null;

function lastSearchedTerm() {
    return _lastSearchedTerm;
}

function onSearchTermEntered(evt: CustomEvent<{term: string}>) {
    _lastSearchedTerm = evt.detail.term;
}

window.addEventListener(events.SearchTermEnteredEvent.EventType, <any>onSearchTermEntered);

export { lastSearchedTerm };