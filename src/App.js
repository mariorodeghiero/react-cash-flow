import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Received from './components/Received';
import Payment from './components/Payment';
import Settings from './components/Settings';
import Error from './components/Error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppWrapper = styled.body``;

injectGlobal`
body{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  background-color: #e2e5ec;
}
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Sidebar />
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/payment" component={Payment} />
            <Route path="/received" exact component={Received} />
            <Route path="/settings" component={Settings} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
