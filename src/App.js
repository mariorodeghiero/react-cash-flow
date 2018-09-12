import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Outflows from './components/Outflows';
import Inflows from './components/Inflows';
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
      sumInflow: 0,
      sumOutflow: 0,
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
      const keysIn = Object.keys(this.state.inflow);
      const keysOut = Object.keys(this.state.outflow);

      let totalIn = 0;
      keysIn.map(key => {
        return (totalIn = totalIn + this.state.inflow[key].value);
      });
      let totalOut = 0;
      keysOut.map(key => {
        return (totalOut = totalOut + this.state.outflow[key].value);
      });

      this.setState({
        sumInflow: totalIn,
        sumOutflow: totalOut,
        chartData: {
          labels: ['Jan', 'Fev', 'Mar', 'Abr'],
          datasets: [
            {
              label: 'Inflows',
              borderColor: '#00cfd6',
              backgroundColor: '#00cfd6',
              fill: false,
              data: [5520, 6012, 7000, 5000],
            },
            {
              label: 'Outflows',
              borderColor: '#c93a71',
              backgroundColor: '#c93a71',
              fill: false,
              data: [1800, 2000, 1678, 1567],
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
            {console.log('Total inflow:', this.state.sumInflow)}
            {console.log('Total Outflow:', this.state.sumOutflow)}
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
            <Route
              path="/inflows"
              render={props => (
                <Inflows {...props} inflow={this.state.inflow} />
              )}
            />
            <Route
              path="/outflows"
              render={props => (
                <Outflows {...props} outflow={this.state.outflow} />
              )}
            />
            <Route path="/settings" component={Settings} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
