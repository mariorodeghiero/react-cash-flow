import React, { Component } from 'react';
import styled from 'styled-components';

const FormFilter = styled.form`
  float: right;
  /* position: absolute; */
  margin-right: 25%;
  /* clear: both; */
`;
const Select = styled.select`
  background: transparent;
  border: none;
  outline: 0;
  font-size: 0.8rem;
`;

class FilterMonth extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit() {
    this.props.filterMonth(this.state.value);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.handleSubmit();
    }
  }

  render() {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <FormFilter>
        <Select value={this.state.value} onChange={this.handleChange}>
          <option value={'jan' + year}>January</option>
          <option value={'feb' + year}>February</option>
          <option value={'mar' + year}>March</option>
          <option value={'apr' + year}>April</option>
          <option value={'may' + year}>May</option>
          <option value={'jun' + year}>June</option>
          <option value={'jul' + year}>July</option>
          <option value={'aug' + year}>Augost</option>
          <option value={'sep' + year}>September</option>
          <option value={'nov' + year}>November</option>
          <option value={'oct' + year}>October</option>
          <option value={'dec' + year}>December</option>
        </Select>
        {console.log('jan' + year)}
      </FormFilter>
    );
  }
}

export default FilterMonth;
