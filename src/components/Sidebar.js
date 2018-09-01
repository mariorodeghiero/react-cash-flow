import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Received from './Received';
import Payment from './Payment';
import Error from './Error';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Side = styled.div`
  float: left;
  height: 100vh;
  width: 20%;
  background-color: #ffffff;
  > ul {
    width: 50%;
  }
`;

const List = styled.span`
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

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <Side>
        <Title>Nutritional Clinic</Title>
        <Router>
          <Switch>
            <div>
              <nav>
                <div>
                  <Link to="/">Home</Link>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/about">About</Link>
                </div>
              </nav>
              <div className="container">
                <Route path="/" exact={true} component={Dashboard} />
                <Route path="/dashboard" component={Payment} />
                <Route component={Error} />
              </div>
            </div>
          </Switch>
        </Router>
      </Side>
    );
  }
}

export default Sidebar;
