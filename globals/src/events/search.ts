function SearchTermEnteredEvent(term: string) {
    return new CustomEvent(
        SearchTermEnteredEvent.EventType, 
        { detail: { term } });
}

SearchTermEnteredEvent.EventType = "globals.search.term-entered";

export { SearchTermEnteredEvent };