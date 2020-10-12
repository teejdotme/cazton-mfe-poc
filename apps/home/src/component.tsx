import React from "react";
import styles from "./component.module.css";

import globals from "@poc-mfe/globals";

let isSignedIn = globals.state.auth.isSignedIn();

export default class Root extends React.Component {
  render() {
    return (
      <div className={styles.text}>
        <ul>
          <li>You found the home page!</li>
          <li>Try logging in by clicking "My Account" in the top right (any user/pass will work).</li>
          <li>Type a search term in the search box above and hit enter to see the search.</li>
        </ul>
      </div>
    );
  }

  componentDidCatch() {
    
  }
}