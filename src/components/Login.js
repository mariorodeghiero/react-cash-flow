import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    passwd: '',
  };

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value,
    });
  };

  login = () => {
    this.props.login(this.state.email, this.state.passwd);
  };
  render() {
    return (
      <div>
        <h4>Login:</h4>
        <input
          type="text"
          onChange={this.handleChange('email')}
          placeholder="email..."
        />
        <input
          type="password"
          onChange={this.handleChange('passwd')}
          placeholder="password..."
        />
        <button type="button" onClick={this.login}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
