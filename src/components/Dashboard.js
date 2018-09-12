import React, { Component } from 'react';

import Inflow from './Inflow';
import Outflow from './Outflow';
import InflowChart from './InflowChart';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  width: 80%;
  float: right;
  text-align: center;
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newValueIn: '',
      valueIn: [1111, 2222],
    };
  }
  sendValue = () => {
    this.setState({
      valueIn: [...this.state.valueIn, this.state.newValueIn],
      newValueIn: '',
    });
  };

  handleChange = event => {
    this.setState({ newValueIn: event.target.value });
  };
  render() {
    const keysIn = Object.keys(this.props.inflow);
    const keysOut = Object.keys(this.props.outflow);
    return (
      <Wrapper>
        <h1>Dashboard</h1>
        <div>
          <InflowChart total={this.props.chartData} />
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th colSpan={4}>Inflow</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Name</th>
                <th>CPF</th>
                <th>Payment</th>
                <th>Date</th>
                <th>Value</th>
              </tr>
            </tbody>
            {keysIn.map(key => (
              <Inflow inflow={this.props.inflow[key]} key={key} />
            ))}
          </table>
        </div>
        {/* outflow */}
        <div>
          <table>
            <thead>
              <tr>
                <th colSpan={4}>Outflow</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Payment</th>
                <th>Date</th>
                <th>Value</th>
              </tr>
            </tbody>
            {keysOut.map(key => (
              <Outflow outflow={this.props.outflow[key]} key={key} />
            ))}
          </table>
          <div>
            <textarea
              value={this.state.newValueIn}
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.sendValue}>Send</button>
          {this.state.newValueIn}
          {this.state.valueIn}
        </div>
      </Wrapper>
    );
  }
}

export default Dashboard;
