import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Side = styled.div`
  float: left;
  height: 100vh;
  width: 20%;
  padding-top: 50px;
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
  color: #696969;
  padding: 10px;
`;

const User = styled.p`
  font-size: 0.7em;
  position: absolute;
  left: 10px;
  top: 95%;
`;

const Button = styled.button`
  padding: 10px;
  width: 130px;
  position: absolute;
  top: 90%;
  left: 5%;
  border-radius: 40px;
  background-color: #c93a71;
  color: #ffffff;
  :focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
  :hover {
    opacity: 0.6;
  }
`;

const Sidebar = props => {
  return (
    <Side>
      {/* <Title>Nutritional Clinic</Title> */}
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/inflows">Inflows</StyledLink>
      <StyledLink to="/outflows">Outflows</StyledLink>
      <StyledLink to="/accountplan">Accountplan</StyledLink>
      <Button onClick={props.logout}> Logout</Button>
      <User>User: {props.email}</User>
    </Side>
  );
};

export default Sidebar;
