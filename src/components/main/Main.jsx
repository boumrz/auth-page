import React from 'react';
// import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { Redirect, Route, Switch } from 'react-router-dom';
import TekoLogo from '../../assets/svg/teko-logo.svg';
import { getCurrentUser } from '../../utils/api-client';
import { authData } from '../../utils/auth-data';
import Greeting from '../greeting/Greeting';
import '../../styles/main.scss';

export default class Main extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: {
        isAuthenticated: false,
      },
    };
  }

  componentDidMount() {
    getCurrentUser({ login: 'admin@teko.io', password: 'admin123' })
      .then((user) => {
        this.setState({ loading: false, user: { ...user, isAuthenticated: true } });
      })
      .then(() => {
        if (!authData.checkToken()) {
          throw new Error('Срок токена истёк');
        }
        console.log('isAuthenticated: true');
      })
      .catch((error) => {
        //setState form error, that credentials are wrong
        this.setState({ loading: false, user: { isAuthenticated: false } });
        console.log('isAuthenticated: false');
        console.log(error);
      });
  }

  onGreetingButtonClick = () => {
    this.props.history.push('/greeting');
  };

  // componentDidMount() {
  //   axios.get('/user?ID=admin@teko.io')
  //     .then((user) => {
  //       this.setState({ loading: false, user: { ...user, isAuthenticated: true } });
  //     })
  //     .catch((err) => {
  //       this.setState({ loading: false, user: { isAuthenticated: false } });
  //     });
  // }

  render() {
    const { loading, user } = this.state;

    if (loading) {
      return (
        <div className="main-page">
          Загрузка...
        </div>
      );
    }

    if (!user.isAuthenticated) {
      return <Redirect to="/auth" />;
    }
    return (
      <div className="main-container">
        {/*<header className="masthead">*/}
        {/*  <div className="inner">*/}
        {/*    <h3 className="masthead-brand">Main page</h3>*/}
        {/*    <button className="greeting-button" onClick={this.onGreetingButtonClick}>*/}
        {/*      Greeting*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</header>*/}

        <Switch>
          <Route path="/greeting" component={Greeting} />
          <Route
            path="/"
            render={() => (
              <React.Fragment>
                <TekoLogo />
                <button className="greeting-button" onClick={this.onGreetingButtonClick}>
                  Greeting
                </button>
              </React.Fragment>
            )}
          />
        </Switch>
      </div>
    );
  }
}
