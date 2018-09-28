import React, { Component } from 'react';

import InflowChart from './InflowChart';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  float: right;
  text-align: center;
  > h1 {
    padding-top: 50px;
  }
`;

const Chart = styled.div`
  margin-left: 15%;
  top: 25%;
  position: absolute;
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
        <Chart>
          <InflowChart total={this.props.chartData} />
        </Chart>
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
