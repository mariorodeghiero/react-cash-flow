import React, { Component } from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  text-align: left;
`;
class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header>
          <h1>Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </AppWrapper>
    );
  }
}

export default App;
