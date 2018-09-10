import React, { Component } from 'react';

class Outflow extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.outflow.name}</td>
          <td>{this.props.outflow.payment}</td>
          <td>{this.props.outflow.date}</td>
          <td>{this.props.outflow.value}</td>
        </tr>
      </tbody>
    );
  }
}

export default Outflow;
