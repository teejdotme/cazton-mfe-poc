import React from "react";
import styles from "./component.module.css";

import globals from "@poc-mfe/globals";

class Root extends React.Component<{}, {term: string | null}> {
  constructor(props: {}) {
    super(props);

    this.state = {
      term: globals.state.search.lastSearchedTerm()
    };

    this.onSearchTerm = this.onSearchTerm.bind(this);
  }

  componentDidMount() {
    window.addEventListener(globals.events.search.SearchTermEnteredEvent.EventType, this.onSearchTerm as any);
  }

  componentWillUnmount() {
    window.removeEventListener(globals.events.search.SearchTermEnteredEvent.EventType, this.onSearchTerm as any);
  }

  componentDidCatch() {

  }

  onSearchTerm(evt: CustomEvent<{term: string}>) {
    let term = evt.detail.term;

    this.setState({
      term: term,
    });
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.term && (
          <span>You searched for &quot;{this.state.term}&quot;!</span>
        )}
        {!this.state.term && (
          <span>You did not enter a search term.</span>
        )}
      </div>
    );
  }
}

export default Root;