import React, { Component } from 'react';

class Inflow extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.inflow.name}</td>
          <td>{this.props.inflow.cpf}</td>
          <td>{this.props.inflow.payment}</td>
          <td>{this.props.inflow.date}</td>
          <td>{this.props.inflow.value}</td>
        </tr>

        {/* {this.props.inflow.map(month => {
          if (month.month == 'mar') {
            console.log('deu certo');
          }
        })} */}
      </tbody>
    );
  }
}

export default Inflow;
