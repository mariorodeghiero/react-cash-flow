import React, { Component } from 'react';

import Outflow from './Outflow';
import styled from 'styled-components';

const ContainerInflow = styled.div`
  margin: 0;
  width: 80%;
  float: right;
  text-align: center;
`;

const TitleInflow = styled.h1`
  text-align: center;
  margin-top: 50px;
`;

const Table = styled.table`
  margin: 0 auto;
  margin-top: 100px;
`;

class Received extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const keysOut = Object.keys(this.props.outflow);
    return (
      <div>
        <ContainerInflow>
          <TitleInflow>Payment Outflow</TitleInflow>
          <Table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>CPF</th>
                <th>Date</th>
                <th>Payment</th>
                <th>Value</th>
              </tr>
            </tbody>
            <tbody>
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
            </tbody>
          </Table>
          <div>
            <Table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Payment</th>
                  <th>Date</th>
                  <th>Value</th>
                </tr>
              </tbody>
              {keysOut.map(key => (
                <Outflow outflow={this.props.outflow[key]} key={key} />
              ))}
            </Table>
          </div>
        </ContainerInflow>
      </div>
    );
  }
}

export default Received;
