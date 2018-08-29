import React, { Component } from 'react';
import styled from 'styled-components';

const Button1 = styled.button`
  padding: 10px;
  width: 130px;
  border-radius: 40px;
  top: 50%;
  left: 50%;
  position: absolute;
  margin: 0 auto;
  margin-top: -50px;
  margin-left: -50px;
  :focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
  :hover {
    opacity: 0.6;
  }
`;

class Home extends Component {
  render() {
    return (
      <div>
        <Button1>Start</Button1>
      </div>
    );
  }
}

export default Home;
