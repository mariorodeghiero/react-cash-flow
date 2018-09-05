import React, { Component } from 'react';

class Month extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.month.name}</td>
          <td>{this.props.month.cpf}</td>
          <td>{this.props.month.payment}</td>
          <td>{this.props.month.date}</td>
          <td>{this.props.month.value}</td>
        </tr>
      </tbody>
    );
  }
}

export default Month;
