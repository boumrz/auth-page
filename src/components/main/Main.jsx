import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Main extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // loading: true,
      user: {
        isAuthenticated: false,
      },
    };
  }

  componentDidMount() {
    // axios.get('/users/me');
    //   .then((user) => {
    //     this.setState({ loading: false, user: { ...user, isAuthenticated: true } });
    //   })
    //   .catch((err) => {
    //     this.setState({ loading: false, user: { isAuthenticated: false } });
    //   });
  }

  render() {
    const { user } = this.state;

    if (!user.isAuthenticated) {
      return <Redirect to="/auth" />;
    }

    return <Redirect to="/" />;
  }
}
