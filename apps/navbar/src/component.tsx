import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import styles from "./component.module.css";

import globals from "@poc-mfe/globals";

export default class Root extends React.Component<{}, {user: string}> {
  constructor(props: {}) {
    super(props);
    
    this.state = {user: globals.state.auth.user()};

    this.onSignIn = this.onSignIn.bind(this);
    this.onSignOut = this.onSignOut.bind(this);
  }
  
  render() {
    return (
      <BrowserRouter basename="/">
        <nav className={styles.primaryNav}>
          <ul>
            {this.state.user &&
              <li>
                <span className={styles.signedInText}>Signed in as {this.state.user}!</span>
              </li>
            }
            {this.state.user &&
              <li>
                <a className={[styles.navLink, styles.signOutLink].join(' ')} onClick={this.onSignOutClick}>Sign Out</a>
              </li>
            }
            <li>
              <input type="text" placeholder="Enter search term" className={styles.searchBox} onKeyPress={this.onSearchKeypress} />
            </li>
            <li>
              <NavLink
                to="/"
                className={styles.navLink}
                activeClassName={styles.activeNavLink}>
              Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/account"
                className={styles.navLink}
                activeClassName={styles.activeNavLink}>
              My Account
              </NavLink>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
      );
    }

    componentDidMount() {
      window.addEventListener(globals.events.auth.SignInEvent.EventType, this.onSignIn as any);
      window.addEventListener(globals.events.auth.SignOutEvent.EventType, this.onSignOut as any);
    }
  
    componentWillUnmount() {
      window.removeEventListener(globals.events.auth.SignInEvent.EventType, this.onSignIn as any);
      window.removeEventListener(globals.events.auth.SignOutEvent.EventType, this.onSignOut as any);
    }

    componentDidCatch() {
    
    }

    onSignOutClick() {
      window.dispatchEvent(globals.events.auth.SignOutEvent());
    }

    onSearchKeypress(evt: React.KeyboardEvent<HTMLInputElement>) {
      const SearchTermEnteredEvent = globals.events.search.SearchTermEnteredEvent;

      if (evt.key.toLowerCase() == "enter") {
        let term = evt.currentTarget.value;

        window.dispatchEvent(
          SearchTermEnteredEvent(term));

        if (window.location.pathname.toLowerCase() !== '/search') {
          history.pushState(null, null, '/search');
        }
      }
    }
  
    onSignIn(evt: CustomEvent) {
      this.setState({
        user: evt.detail.user,
      });
    }
  
    onSignOut() {
      this.setState({
        user: '',
      });
    }
  }