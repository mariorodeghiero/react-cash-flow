import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Outflows from './components/Outflows';
import Inflows from './components/Inflows';
import Error from './components/Error';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      isAuth: false,
      isAuthError: false,
      authError: '',
      user: {},
      total: [],
      totalOut: [],
    };
  }

  login = async (email, passwd) => {
    const { auth } = this.props;
    this.setState({
      authError: '',
      isAuthError: false,
    });
    try {
      await auth.signInWithEmailAndPassword(email, passwd);
      console.log('Logar', email, passwd);
    } catch (err) {
      console.log('Erro:', err.code);
      this.setState({
        authError: err.code,
        isAuthError: true,
      });
    }
  };

  //logout

  logout = () => {
    const { auth } = this.props;
    auth.signOut();
  };

  componentWillMount() {
    const { database, auth } = this.props;
    this.inflow = database.ref('flow/inflows');
    this.outflow = database.ref('flow/outflow');

    // Outflow
    this.outflow.on('value', snapshot => {
      console.log('Outflow:', snapshot.val());
      this.setState({
        outflow: snapshot.val(),
      });
    });
    // Inflow
    this.inflow.on('value', snapshot => {
      console.log('Inflow:', snapshot.val());
      this.setState({
        inflow: snapshot.val(),
      });
    });

    // Auth
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isAuth: true,
          user,
        });
      } else {
        this.setState({
          isAuth: false,
          user: {},
        });
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.inflow !== this.state.inflow ||
      prevState.outflow !== this.state.outflow
    ) {
      //total month
      let keyOut;
      let keyIn;
      let year = new Date().getFullYear();

      const outflowObj = this.state.outflow;
      const inflowObj = this.state.inflow;
      const months = {
        outflow: {
          ['jan' + year]: 0,
          ['feb' + year]: 0,
          ['mar' + year]: 0,
          ['apr' + year]: 0,
          ['may' + year]: 0,
          ['jun' + year]: 0,
          ['jul' + year]: 0,
          ['aug' + year]: 0,
          ['sep' + year]: 0,
          ['oct' + year]: 0,
          ['nov' + year]: 0,
          ['dez' + year]: 0,
        },
        inflow: {
          ['jan' + year]: 0,
          ['feb' + year]: 0,
          ['mar' + year]: 0,
          ['apr' + year]: 0,
          ['may' + year]: 0,
          ['jun' + year]: 0,
          ['jul' + year]: 0,
          ['aug' + year]: 0,
          ['sep' + year]: 0,
          ['oct' + year]: 0,
          ['nov' + year]: 0,
          ['dez' + year]: 0,
        },
      };
      // new object outflow
      for (keyOut in outflowObj) {
        months.outflow[outflowObj[keyOut].month] += parseInt(
          outflowObj[keyOut].value
        );
      }
      // new object inflow
      for (keyIn in inflowObj) {
        months.inflow[inflowObj[keyIn].month] += parseInt(
          inflowObj[keyIn].value
        );
      }
      // Output data
      let outputData = Array.from(
        Object.keys(months.outflow),
        k => months.outflow[k]
      );
      // Input data
      let inputData = Array.from(
        Object.keys(months.inflow),
        k => months.inflow[k]
      );

      // filter
      const keysIn = Object.keys(this.state.inflow);
      const keysOut = Object.keys(this.state.outflow);
      const all = keysIn.map(chave => this.state.inflow[chave]);
      const allOut = keysOut.map(chave => this.state.outflow[chave]);

      console.log('test chart :', allOut);
      console.log('test outchartmonths :', Object.entries(months.outflow));
      console.log('test arr :', outputData);
      console.log('test arrin :', inputData);
      this.setState({
        total: all,
        totalOut: allOut,
        chartData: {
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dez',
          ],
          datasets: [
            {
              label: 'Inflows',
              borderColor: '#00cfd6',
              backgroundColor: '#00cfd6',
              fill: false,
              data: inputData,
            },
            {
              label: 'Outflows',
              borderColor: '#c93a71',
              backgroundColor: '#c93a71',
              fill: false,
              data: outputData,
            },
          ],
        },
      });
    }
  }

  // Send Inflow
  sendInflow = (name, cpf, month, date, payment, value) => {
    const { database } = this.props;
    const id = database
      .ref()
      .child('flow/inflows')
      .push().key;
    console.log('id : ', id);
    const inflows = {};
    inflows[id] = {
      name,
      cpf,
      month,
      date,
      payment,
      value,
    };
    database.ref('flow/inflows').update(inflows);
  };

  // Send Outflow
  sendOutflow = (name, month, date, payment, value) => {
    const { database } = this.props;
    const id = database
      .ref()
      .child('flow/outflow')
      .push().key;
    console.log('id : ', id);
    const outflow = {};
    outflow[id] = {
      name,
      month,
      date,
      payment,
      value,
    };
    database.ref('flow/outflow').update(outflow);
  };

  render() {
    return (
      <div>
        {this.state.isAuth && (
          <Router>
            <div>
              <Sidebar email={this.state.user.email} logout={this.logout} />
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
                <Route
                  path="/inflows"
                  render={props => (
                    <Inflows
                      {...props}
                      inflow={this.state.inflow}
                      total={this.state.total}
                      sendInflow={this.sendInflow}
                    />
                  )}
                />
                <Route
                  path="/outflows"
                  render={props => (
                    <Outflows
                      {...props}
                      outflow={this.state.outflow}
                      totalOut={this.state.totalOut}
                      sendOutflow={this.sendOutflow}
                    />
                  )}
                />
                <Route component={Error} />
              </Switch>
            </div>
          </Router>
        )}
        {!this.state.isAuth && <Login login={this.login} />}
      </div>
    );
  }
}

export default App;
