import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderText = styled.header`
  color: gray;
`;

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeaderText>
          <h1>Welcome to React</h1>
        </HeaderText>
      </div>
    );
  }
}

export default Header;
