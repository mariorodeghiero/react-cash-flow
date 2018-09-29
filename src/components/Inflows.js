import React, { Component } from 'react';

import Inflow from './Inflow';
import FilterMonth from './FilterMonth';
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

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: ['jan', 'fev', 'mar'],
      filter: '',
      isFilter: false,
    };
  }

  filterMonth = selectMonth => {
    const filters = this.props.total.filter(item => item.month === selectMonth);
    console.log('------------------------------------');
    console.log('test', filters);
    console.log('------------------------------------');
    this.setState({
      filter: filters,
      isFilter: true,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      console.log('test item: ', this.state.filter[0].name);
    }
  }

  render() {
    const keysIn = Object.keys(this.props.inflow);
    const keysFilter = Object.keys(this.state.filter);
    return (
      <div>
        <ContainerInflow>
          <TitleInflow>Payment Inflow</TitleInflow>
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
              </tr>
            </tbody>
          </Table>
          <div>
            <Table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>CPF</th>
                  <th>Payment</th>
                  <th>Date</th>
                  <th>Value</th>
                </tr>
              </tbody>
              {keysIn.map(key => (
                <Inflow inflow={this.props.inflow[key]} key={key} />
              ))}
            </Table>
          </div>
        </ContainerInflow>
        <div>
          <FilterMonth filterMonth={this.filterMonth} />
          <Table>
            {this.state.isFilter &&
              keysFilter.map(key => <Inflow inflow={this.state.filter[key]} />)}
          </Table>
        </div>
      </div>
    );
  }
}

export default Payment;
