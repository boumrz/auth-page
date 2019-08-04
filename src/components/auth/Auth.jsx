// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './Auth.css';
// import axios from 'axios';
// import PropTypes from 'prop-types';

export default class Auth extends React.Component {
  // static propTypes = {
  //   history: PropTypes.object.isRequired,
  // };

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    // this.state = {
    //   loading: false,
    //   login: '',
    //   password: '',
    // };
  }

  // onSubmit = (e) => {
  //   e.preventDefault();
  //
  //   // const { login, password } = this.state;
  //   // this.setState({ loading: true });
  //
  //   // axios.post('/auth/login', { login, password });
  //   //   .then(() => {
  //   //     this.props.history.push('/');
  //   //   }).catch((err) => {
  //   //     this.setState({ loading: false });
  //   //   });
  // };

  loginHandler = () => {

  };

  registerHandler = () => {

  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    // const { loading, login, password } = this.state;

    return (
      <body>
        <form className="container-form" onSubmit={this.submitHandler}>

          <h1 className="signin-h1">Log In</h1>

          <div className="login-form">
            <input type="email" name="emailAddress" placeholder="Enter email" />
          </div>
          <div className="login-form">
            <input type="password" name="emailPassword" placeholder="Enter password" />
          </div>
          <div className="login-form">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" value="remember-me" />
                Remember me
            </label>
          </div>
          <div className="login-form">
            <input className="submit-input" type="submit" name="emailSubmit" value="LOGIN" />
          </div>
          <br />
          <div className="forgot-a">
            <a href="#">Forgot password?</a>
          </div>

          <div className="signin-a">
            New here?
            <a href="#">Sign in!</a>
          </div>
        </form>

      </body>
    );
  }
}
