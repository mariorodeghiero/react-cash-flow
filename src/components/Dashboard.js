import React, { Component } from 'react';

import Month from './Month';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  width: 80%;
  float: right;
  text-align: center;
`;

class Dashboard extends Component {
  render() {
    const keys = Object.keys(this.props.inflow);
    return (
      <Wrapper>
        <h1>Dashboard</h1>
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
            {keys.map(key => (
              <Month month={this.props.inflow[key]} key={key} />
            ))}
          </table>
        </div>
      </Wrapper>
    );
  }
}

export default Dashboard;
