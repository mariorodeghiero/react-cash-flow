import React, { Component } from 'react';

import Outflow from './Outflow';
import styled from 'styled-components';

const ContainerOutflow = styled.div`
  margin: 0;
  width: 80%;
  float: right;
  text-align: center;
`;

const TitleOutflow = styled.h1`
  text-align: center;
  margin-top: 50px;
`;

const Table = styled.table`
  margin: 0 auto;
  margin-top: 100px;
`;

const Input = styled.input`
  border: none;
  background: rgba(0, 0, 0, 0);
  font-size: 15px;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
    border-bottom: 1px solid #3dccce;
    border-radius: 4px;
  }
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
        <ContainerOutflow>
          <TitleOutflow>Payment Outflow</TitleOutflow>
          <Table>
            <tbody>
              <tr>
                <td>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Name..."
                  />
                </td>
                <td>
                  <Input
                    type="text"
                    name="payment"
                    value={this.state.quantita}
                    onChange={this.handleChange}
                    placeholder="Payment method..."
                  />
                </td>
                <td>
                  <Input
                    type="text"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                    placeholder="dd/mm/yyyy"
                  />
                </td>
                <td>
                  <Input
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
        </ContainerOutflow>
      </div>
    );
  }
}

export default Received;
