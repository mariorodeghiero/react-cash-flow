import React, { Component } from 'react';
import styled from 'styled-components';

const FormFilter = styled.form`
  float: right;
  position: absolute;
  right: 15%;
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
    return (
      <FormFilter>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="jan">January</option>
          <option value="fev">February</option>
          <option value="mar">March</option>
          <option value="apr">April</option>
          <option value="may">May</option>
          <option value="jun">June</option>
          <option value="jul">July</option>
          <option value="aug">Augost</option>
          <option value="sep">September</option>
          <option value="nov">November</option>
          <option value="oct">Octuber</option>
          <option value="dec">December</option>
        </select>
      </FormFilter>
    );
  }
}

export default FilterMonth;
