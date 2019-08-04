import React from 'react';
import { Redirect } from 'react-router-dom';
import TekoLogo from '../../assets/svg/teko-logo.svg';

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
      <div className="main-page">
        <TekoLogo />
      </div>
    );
  }
}
