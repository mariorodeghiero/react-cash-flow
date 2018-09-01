import React, { Component } from 'react';
import styled from 'styled-components';

const SidePanel = styled.div`
  float: left;
  height: 100vh;
  width: 20%;
  background-color: #ffffff;
  > ul {
    width: 50%;
  }
`;

const List = styled.li`
  padding: 10px;
  list-style: none;
  color: #594a4a;
  :hover {
    border-bottom: 2px solid #e2e5ec;
    cursor: pointer;
  }
`;

const Title = styled.h2`
  padding: 10px;
`;

class Panel extends Component {
  state = {};
  render() {
    return (
      <SidePanel>
        <Title>Nutritional Clinic</Title>
        <ul>
          <List>Received</List>
          <List>Payment</List>
          <List>Account Plan</List>
          <List>Settings</List>
          <List>Log out</List>
        </ul>
      </SidePanel>
    );
  }
}

export default Panel;
