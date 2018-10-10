import React from 'react';

import InflowOutflowChart from './InflowOutflowChart';
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

const Dashboard = props => {
  return (
    <Wrapper>
      <h1>Dashboard</h1>
      <Chart>
        <InflowOutflowChart total={props.chartData} />
      </Chart>
    </Wrapper>
  );
};

export default Dashboard;
