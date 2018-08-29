import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderText = styled.header`
  color: gray;
  background-color: #ffffff;
  margin-top: 0;
  padding: 10px;
  width: 100%;
`;

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeaderText>Cash flow</HeaderText>
      </div>
    );
  }
}

export default Header;
