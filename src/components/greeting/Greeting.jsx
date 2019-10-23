import React from 'react';
import { Redirect } from 'react-router-dom';
import { authData } from '../../utils/auth-data';
// import { getCurrentUser } from '../../utils/api-client';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'Roman',
      status: authData.checkToken(),
    };
  }

  render() {
    if (!this.state.status) {
      return <Redirect to="/auth" />;
    }

    return (
      <div className="greeting">
        <h1>
          Hello,
          {' '}
          {this.state.user}
        </h1>
      </div>
    );
  }
}
