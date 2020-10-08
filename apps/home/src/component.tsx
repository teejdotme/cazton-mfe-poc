import React from "react";
import styles from "./component.module.css";

import globals from "@poc-mfe/globals";

let isSignedIn = globals.state.auth.isSignedIn();

export default class Root extends React.Component {
  render() {
    return (
      <div className={styles.text}>You found the home page!</div>
    );
  }

  componentDidCatch() {
    
  }
}