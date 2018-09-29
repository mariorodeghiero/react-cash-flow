import React, { Component } from 'react';

class Login extends Component {
  state = {
    month: 'mar',
  };

  filterMonth = () => {
    this.props.filterMonth(this.state.month);
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.filterMonth}>
          search
        </button>
      </div>
    );
  }
}

export default Login;
