import React, { Component } from 'react';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <tr>
          <th>Name</th>
          <th>CPF</th>
          <th>Date</th>
          <th>Payment</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name..."
            />
          </td>
          <td>
            <input
              type="text"
              name="cpf"
              value={this.state.cpf}
              onChange={this.handleChange}
              placeholder="CPF..."
            />
          </td>
          <td>
            <input
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              placeholder="Date..."
            />
          </td>
          <td>
            <input
              type="text"
              name="payment"
              value={this.state.quantita}
              onChange={this.handleChange}
              placeholder="Payment method..."
            />
          </td>
          <td>
            <input
              type="text"
              name="value"
              value={this.state.quantita}
              onChange={this.handleChange}
              placeholder="Value..."
            />
          </td>
          <td className="total">{this.state.totale}</td>
        </tr>
      </div>
    );
  }
}

export default Payment;
