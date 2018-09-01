import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

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
      <AppWrapper>
        {/* <Home /> */}
        <Sidebar />
      </AppWrapper>
    );
  }
}

export default App;
