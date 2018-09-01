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
  :hover {
    border-bottom: 2px solid #e2e5ec;
    cursor: pointer;
  }
`;

const Title = styled.h2`
  padding: 10px;
`;

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <Side>
        <Title>Nutritional Clinic</Title>
        <StyledLink to="/">Dashboard</StyledLink>
        <StyledLink to="/payment">payment</StyledLink>
        <StyledLink to="/accountplan">accountplan</StyledLink>
        <StyledLink to="/received">received</StyledLink>
        <StyledLink to="/settings">settings</StyledLink>
        <StyledLink to="/logout">logout</StyledLink>
      </Side>
    );
  }
}

export default Sidebar;
