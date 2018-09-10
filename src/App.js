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
import { database } from './firebase';

injectGlobal`
  * {
    font-family: "Roboto";
    font-weight: 100;
    line-height: 1.1;
    letter-spacing: 0.025em;
  }
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
  constructor(props) {
    super(props);
    this.state = {
      inflow: {},
      outflow: {},
      chartData: {},
    };
  }

  componentWillMount() {
    this.inflow = database.ref('flow/inflows');
    this.outflow = database.ref('flow/outflow');
    // outflow
    this.outflow.on('value', snapshot => {
      console.log('Outflow:', snapshot.val());
      this.setState({
        outflow: snapshot.val(),
      });
    });
    // inflow
    this.inflow.on('value', snapshot => {
      console.log('Inflow:', snapshot.val());
      this.setState({
        inflow: snapshot.val(),
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inflow !== this.state.inflow) {
      const keysIn1 = this.state.inflow;
      console.log('------------------------------------');
      console.log('rrr: ', keysIn1);
      console.log('------------------------------------');
      this.setState({
        chartData: {
          labels: ['Jan', 'Fev', 'Mar', 'Abr'],
          datasets: [
            {
              label: 'Inflows',
              borderColor: '#24f9cb',
              backgroundColor: '#00cfd6',
              fill: false,
              data: [5520, 6012, 7000, 5000],
            },
          ],
        },
      });
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Sidebar />
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <Dashboard
                  {...props}
                  inflow={this.state.inflow}
                  outflow={this.state.outflow}
                  chartData={this.state.chartData}
                />
              )}
            />
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
