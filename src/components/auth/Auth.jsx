// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import '../../styles/Auth.css';
import '../ui/Checkbox.css';
// eslint-disable-next-line import/no-cycle
import '../main/Main';
// import axios from 'axios';
// import PropTypes from 'prop-types';

export default class Auth extends React.Component {
  // static propTypes = {
  //   history: PropTypes.object.isRequired,
  // };

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
    this.registerHandler = this.registerHandler.bind(this);


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

      <div className="login-block">
        <form className="form-element1" onSubmit={this.submitHandler}>

          <div className="login-title">
            <h1>Log In</h1>
          </div>

          <div className="form-control">
            <div>
              <input type="email" className="form-element" name="emailAddress" placeholder="Enter email" />
            </div>

            <div>
              <input type="password" className="form-element" name="emailPassword" placeholder="Enter password" />
            </div>
          </div>

          <div className="checkBox-input">
            <label className="container">
              <input className="checkBox" type="checkbox" />
              <span className="checkmark" />
              <label className="checkbox-name">Remember me</label>
            </label>
          </div>

          <div className="form-control">
            <input className="submit-input" type="submit" name="emailSubmit" value="LOGIN" />
          </div>

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>

          <div className="registration-in">
            New here?
            <a href="#">Sign in!</a>
          </div>

        </form>
      </div>
    );
  }
}
