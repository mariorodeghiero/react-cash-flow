import React, { Component } from 'react';
import styled from 'styled-components';

const SidePanel = styled.div`
  float: left;
  height: 100vh;
  width: 20%;
  background-color: #ffffff;
  > ul {
    width: 20%;
  }
`;

const List = styled.li`
  padding: 10px;
  list-style: none;
  color: #594a4a;
  :hover {
    border-bottom: 2px solid #e2e5ec;
  }
`;

class Panel extends Component {
  state = {};
  render() {
    return (
      <SidePanel>
        <ul>
          <List>Test</List>
          <List>Test</List>
          <List>Test</List>
          <List>Test</List>
          <List>Test</List>
        </ul>
      </SidePanel>
    );
  }
}

export default Panel;
