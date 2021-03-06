import React, { Component } from 'react';
import styled from 'styled-components';
import Moment from 'moment';
import '../Mask.css';

import InputMask from 'react-input-mask';
import Inflow from './Inflow';
import FilterMonth from './FilterMonth';
import { sendButton, containerInflowOutflow } from './style-utils';

const ContainerInflow = styled.div`
  ${containerInflowOutflow()};
`;

const TitleInflow = styled.h1`
  text-align: center;
  margin-top: 70px;
  padding-bottom: 50px;
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

const Input = styled.input`
  border: none;
  text-align: center;
  background: rgba(0, 0, 0, 0);
  font-size: 0.8rem;
  padding: 10px;
  margin-right: 20px;
  margin-left: 20px;
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

const SendButton = styled.button`
  ${sendButton()};
`;

let year = new Date().getFullYear();

class Payment extends Component {
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
      cpf: '',
      payment: '',
      value: ''
    };
  }

  handleChange = field => event => {
    this.setState({ [field]: event.target.value });
  };

  sendInflow = () => {
    const { name, cpf, payment, value } = this.state;
    let year = new Date().getFullYear();
    if (name !== '') {
      this.props.sendInflow(
        name,
        cpf,
        Moment()
          .format('MMM')
          .toLowerCase() + year,
        Moment().format('lll'),
        payment,
        Number(value)
      );
      this.setState({
        name: '',
        cpf: '',
        payment: '',
        value: ''
      });
    } else {
      alert('nome em branco');
    }
  };

  filterMonth = selectMonth => {
    const filters = this.props.total.filter(item => item.month === selectMonth);
    this.setState({ filter: filters, isFilter: true });
  };

  render() {
    const { filter, name, cpf, payment, value, isFilter } = this.state;
    const keysFilter = Object.keys(filter);
    console.log('mes :' + Moment().format('lll'));
    return (
      <div>
        <ContainerInflow>
          <TitleInflow>Payment Inflow</TitleInflow>
          <div>
            <Input
              type="text"
              ref="name"
              value={name}
              onChange={this.handleChange('name')}
              placeholder="name..."
            />
            <InputMask
              mask="999.999.999-99"
              className="mask"
              name="cpf"
              value={cpf}
              onChange={this.handleChange('cpf')}
              placeholder="CPF..."
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
            <SendButton type="button" onClick={this.sendInflow}>
              Send
            </SendButton>
          </div>
          <div>
            <FilterMonth filterMonth={this.filterMonth} />
            <Table>
              <tbody>
                <tr>
                  <ThTable>Name</ThTable>
                  <ThTable>CPF</ThTable>
                  <ThTable>Payment</ThTable>
                  <ThTable>Date</ThTable>
                  <ThTable>Value</ThTable>
                </tr>
              </tbody>
              {isFilter && keysFilter.map(key => <Inflow inflow={filter[key]} key={key} />)}
            </Table>
          </div>
        </ContainerInflow>
      </div>
    );
  }
}

export default Payment;
