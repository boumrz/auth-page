// eslint-disable-next-line no-unused-vars,react/no-deprecated
import React, { Component, PropTypes } from 'react';
// import { Redirect } from 'react-router-dom';
import '../../styles/auth.scss';
import '../ui/style/checkbox.scss';
import is from 'is_js';
import Input from '../ui/input/Input';
// eslint-disable-next-line import/no-cycle
import '../main/Main';
import { login } from '../../utils/api-client';
import { authData } from '../../utils/auth-data';

// import axios from 'axios';
// import PropTypes from 'prop-types';

const validateControl = (value, validation) => {
  let isValid = true;

  if (validation.email) {
    isValid = is.email(value) && isValid;
  }

  if (validation.minLength) {
    isValid = value.length >= validation.minLength && isValid;
  }

  return isValid;
};

export default class Auth extends React.Component {
  // static propTypes = {
  //   history: PropTypes.object.isRequired,
  // };

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      // loading: false,
      isFormSubmitted: false,
      isFormValid: false,
      formControls: {
        email: {
          value: '',
          type: 'email',
          placeholder: 'Email',
          errorMessage: 'Введите корректный email',
          valid: false,
          touched: false,
          validation: {
            email: true,
          },
        },
        password: {
          value: '',
          type: 'password',
          placeholder: 'Password',
          errorMessage: 'Введите корректный пароль',
          valid: false,
          touched: false,
          validation: {
            minLength: 8,
          },
        },
      },
    };
  }

  loginHandler = () => {};

  submitHandler = (event) => {
    event.preventDefault();
    const { formControls } = this.state;
    this.setState({ isFormSubmitted: true });
    const isFormValid = Object.keys(formControls).every(item => formControls[item].valid);

    console.log('submit');

    if (isFormValid) {
      login({ login: formControls.email.value, password: formControls.password.value })
        .then((response) => {
          console.log('Login succesfully done', response);
          window.localStorage.setItem('token', JSON.stringify(response.data));
          authData.checkToken();
        })
        .then(() => {
          this.props.history.push('/');
        })
        .catch((error) => {
          //setState form error, that credentials are wrong
          console.log('Sorry, but you loose', error);
        });

      // const refreshed = setInterval(() => {
      //   authData.checkToken();
      //   if (!JSON.parse(localStorage.getItem('token'))) {
      //     console.log(localStorage);
      //     console.log('Token removed');
      //     this.props.history.push('/auth');
      //     clearInterval(refreshed);
      //   }
      // }, 2000);
    } else {
      const newControls = { ...formControls };

      Object.keys(formControls).forEach((name) => {
        const newControl = { ...formControls[name] };
        newControl.touched = true;
        newControl.valid = validateControl(newControl.value, newControl.validation);
        newControls[name] = newControl;
      });

      this.setState({ formControls: newControls });
    }
  };

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

  onChangeHandler = (event, controlName) => {
    const { formControls: prevFormControls, isFormSubmitted } = this.state;
    const formControls = { ...prevFormControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validateControl(control.value, control.validation);

    formControls[controlName] = control;

    const isFormValid = Object.keys(formControls).every(item => formControls[item].valid);

    this.setState({
      formControls, isFormValid,
    });
  };

  renderInputs() {
    const { formControls, isFormSubmitted } = this.state;
    return Object.keys(formControls).map((controlName) => {
      const control = formControls[controlName];
      return (
        <Input
          key={controlName}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          formSubmitted={isFormSubmitted}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          placeholder={control.placeholder}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      );
    });
  }

  render() {
    // const { loading, login, password } = this.state;

    return (

      <div className="login-block">

        <form onSubmit={this.submitHandler}>

          <div className="login-title">
            <h1>Log In</h1>
          </div>

          <div className="form-control">
            { this.renderInputs() }
          </div>

          <div className="checkbox-input">
            <div className="checkbox-container">
              <input className="checkbox" type="checkbox" id="remember-checkbox" />
              <label className="checkbox-name" htmlFor="remember-checkbox">Remember me</label>
            </div>
          </div>

          <div className="form-submit">
            <button
              className="submit-input"
              type="submit"
              name="emailSubmit"
            >
              LOGIN
            </button>
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
