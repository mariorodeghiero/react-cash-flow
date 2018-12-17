import React, { Component } from 'react';
import styled from 'styled-components';

import Footer from './Footer';

const ContainerLogin = styled.div`
  width: 400px;
  margin: 0 auto;
  text-align: center;
  margin-top: 25%;
`;

const Input = styled.input`
  border: none;
  width: 250px;
  text-align: center;
  background: rgba(0, 0, 0, 0);
  font-size: 15px;
  padding: 5px;
  margin-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
    border-bottom: 1px solid #3dccce;
    border-radius: 4px;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 34px;
  border-radius: 40px;
  background-color: #c93a71;
  color: #ffffff;
  cursor: pointer;
  :focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
  :hover {
    padding: 9.5px 33.5px;
  }
`;

class Login extends Component {
  state = {
    email: '',
    passwd: ''
  };

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value
    });
  };

  login = () => {
    this.props.login(this.state.email, this.state.passwd);
  };
  render() {
    return (
      <div>
        <ContainerLogin>
          <Input type="text" onChange={this.handleChange('email')} placeholder="email..." />
          <br />
          <Input type="password" onChange={this.handleChange('passwd')} placeholder="password..." />
          <br />
          <Button type="button" onClick={this.login}>
            Login
          </Button>
        </ContainerLogin>
        <Footer />
      </div>
    );
  }
}

export default Login;
