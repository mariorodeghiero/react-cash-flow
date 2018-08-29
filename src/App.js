import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import SidePanel from './components/SidePanel';

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
        {/* <Header />
        <Home />
        <Footer /> */}
        <SidePanel />
      </AppWrapper>
    );
  }
}

export default App;
