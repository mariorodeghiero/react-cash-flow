import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const AppWrapper = styled.div`
  text-align: left;
`;
class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </AppWrapper>
    );
  }
}

export default App;
