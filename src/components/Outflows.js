import React, { Component } from 'react';
import styled from 'styled-components';
import Moment from 'moment';

import Outflow from './Outflow';
import FilterMonth from './FilterMonth';
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
const ThTable = styled.th`
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
`;
const SenddButton = styled.button`
  ${sendButton()};
`;

const Input = styled.input`
  border: none;
  text-align: center;
  background: rgba(0, 0, 0, 0);
  font-size: 15px;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 50px;
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
        'dez' + year
      ],
      filter: '',
      isFilter: false,
      name: '',
      payment: '',
      value: ''
    };
  }

  handleChange = field => event => {
    this.setState({ [field]: event.target.value });
  };

  sendOutflow = () => {
    let year = new Date().getFullYear();
    this.props.sendOutflow(
      this.state.name,
      Moment()
        .format('MMM')
        .toLowerCase() + year,
      Moment().format('lll'),
      this.state.payment,
      Number(this.state.value)
    );
    this.setState({ name: '', payment: '', value: '' });
  };

  filterMonth = selectMonth => {
    const filters = this.props.totalOut.filter(item => item.month === selectMonth);
    this.setState({ filter: filters, isFilter: true });
  };

  render() {
    const { filter, name, payment, value, isFilter } = this.state;
    const keysFilter = Object.keys(filter);

    return (
      <div>
        <ContainerOutflow>
          <TitleOutflow>Payment Outflow</TitleOutflow>
          <div>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange('name')}
              placeholder="name..."
            />
            <Input
              type="text"
              name="payment"
              value={payment}
              onChange={this.handleChange('payment')}
              placeholder="payment method..."
            />
            <Input
              type="number"
              name="value"
              value={value}
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
                  <ThTable>Name</ThTable>
                  <ThTable>Payment</ThTable>
                  <ThTable>Date</ThTable>
                  <ThTable>Value</ThTable>
                </tr>
              </tbody>
              {isFilter && keysFilter.map(key => <Outflow outflow={filter[key]} key={key} />)}
            </Table>
          </div>
        </ContainerOutflow>
      </div>
    );
  }
}

export default Received;
