import React from "react";
import styles from "./component.module.css";

import globals from "@poc-mfe/globals";

let _user = globals.state.auth.user();

class Login extends React.Component<{}, {user: string}> {
  constructor(props: {}) {
    super(props);

    this.state = {user: ''};

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <input type="text" name="username" placeholder="Username" required={true} 
                 className={[styles.input, styles.textbox].join(' ')} 
                 onChange={this.onChange} />

          <input type="password" name="password" placeholder="Password" required={true} 
                 className={[styles.input, styles.textbox].join(' ')} />

          <input type="submit" value="Sign In!" 
                 className={[styles.input, styles.button].join(' ')} />
        </form>
      </div>
    );
  }

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({user: event.target.value })
  }

  onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    var signIn = globals.events.auth.SignInEvent(this.state.user);

    window.dispatchEvent(signIn);
  }
}

class Account extends React.Component<{user: string | null}> {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1>Hello, {this.props.user}!</h1>
        </div>
        <div className={styles.container}>
          This is somewhere you might manage your account.
        </div>
      </div>
    );
  }
}

class Root extends React.Component<{}, {user: string | null}> {
  constructor(props: {}) {
    super(props);

    this.state = {
      user: _user
    };

    this.onSignIn = this.onSignIn.bind(this);
    this.onSignOut = this.onSignOut.bind(this);
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

  onSignIn(evt: CustomEvent) {
    this.setState({
      user: evt.detail.user,
    });
  }

  onSignOut(evt: CustomEvent) {
    this.setState({
      user: '',
    });
  }

  render() {
    if (this.state.user) {
      return (<Account user={this.state.user} />);
    } else {
      return (<Login/>);
    }
  }
}

export default Root;