import React, { Component } from 'react';

import Outflow from './Outflow';
import FilterMonth from './FilterMonth';
import styled from 'styled-components';
import { sendButton, containerInflowOutflow } from './style-utils';

const ContainerOutflow = styled.div`
  ${containerInflowOutflow()};
`;

const TitleOutflow = styled.h1`
  text-align: center;
  margin-top: 50px;
`;

const Table = styled.table`
  margin: 0 auto;
  margin-top: 100px;
`;
const SenddButton = styled.button`
  ${sendButton()};
`;

const Input = styled.input`
  border: none;
  text-align: center;
  background: rgba(0, 0, 0, 0);
  font-size: 15px;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
    border-bottom: 1px solid #3dccce;
    border-radius: 4px;
  }
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

const InputDate = styled.input`
  border: none;
  text-align: center;
  background: rgba(0, 0, 0, 0);
  font-size: 0.8rem;
  padding: 6.5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
    border-bottom: 1px solid #3dccce;
    border-radius: 4px;
  }
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

let year = new Date().getFullYear();

class Received extends Component {
  constructor(props) {
    super(props);
    this.state = {
      months: [
        'jan' + year,
        'feb' + year,
        'mar' + year,
        'apr' + year,
        'may' + year,
        'jun' + year,
        'jul' + year,
        'aug' + year,
        'sep' + year,
        'oct' + year,
        'nov' + year,
        'dez' + year,
      ],
      filter: '',
      isFilter: false,
      name: '',
      date: '',
      payment: '',
      value: '',
      month: '',
    };
  }

  handleChange = field => event => {
    this.setState({ [field]: event.target.value });
  };

  sendOutflow = () => {
    let year = new Date().getFullYear();
    this.props.sendOutflow(
      this.state.name,
      this.state.month + year,
      this.state.date,
      this.state.payment,
      Number(this.state.value)
    );
    this.setState({ name: '', month: '', date: '', payment: '', value: '' });
  };

  filterMonth = selectMonth => {
    const filters = this.props.totalOut.filter(
      item => item.month === selectMonth
    );
    this.setState({ filter: filters, isFilter: true });
  };

  render() {
    const keysFilter = Object.keys(this.state.filter);

    return (
      <div>
        <ContainerOutflow>
          <TitleOutflow>Payment Outflow</TitleOutflow>
          <div>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange('name')}
              placeholder="name..."
            />
            <Input
              type="text"
              name="payment"
              value={this.state.payment}
              onChange={this.handleChange('payment')}
              placeholder="Payment method..."
            />
            <Input
              type="text"
              name="month"
              value={this.state.month}
              onChange={this.handleChange('month')}
              placeholder="month..."
            />
            <InputDate
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange('date')}
            />
            <Input
              type="number"
              name="value"
              value={this.state.value}
              onChange={this.handleChange('value')}
              placeholder="value..."
            />
            <SenddButton type="button" onClick={this.sendOutflow}>
              send
            </SenddButton>
          </div>
          <div>
            <FilterMonth filterMonth={this.filterMonth} />
            <Table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Payment</th>
                  <th>Date</th>
                  <th>Value</th>
                </tr>
              </tbody>
              {this.state.isFilter &&
                keysFilter.map(key => (
                  <Outflow outflow={this.state.filter[key]} key={key} />
                ))}
            </Table>
          </div>
        </ContainerOutflow>
      </div>
    );
  }
}

export default Received;
