import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Side = styled.div`
  float: left;
  height: 100vh;
  width: 20%;
  background-color: #ffffff;
  ul {
    width: 50%;
  }
`;

const StyledLink = styled(Link)`
  padding: 10px;
  list-style: none;
  color: #594a4a;
  display: block;
  margin-left: 30px;
  width: 30%;
  text-decoration: none;
  :hover {
    border-bottom: 1px solid #b77adb;
    cursor: pointer;
  }
`;

const Title = styled.h2`
  font-weight: 300;
  color: #af6dd6;
  padding: 10px;
`;

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <Side>
        <Title>Nutritional Clinic</Title>
        <StyledLink to="/">Dashboard</StyledLink>
        <StyledLink to="/inflows">Inflows</StyledLink>
        <StyledLink to="/outflows">Outflows</StyledLink>
        <StyledLink to="/accountplan">Accountplan</StyledLink>
        <StyledLink to="/settings">Settings</StyledLink>
        <StyledLink to="/logout">Logout</StyledLink>
      </Side>
    );
  }
}

export default Sidebar;
