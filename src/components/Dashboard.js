import React, { Component } from 'react';

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
    return (
      <Wrapper>
        <h1>Dashboard</h1>
        <div>
          <InflowChart total={this.props.chartData} />
        </div>
        <div>
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
