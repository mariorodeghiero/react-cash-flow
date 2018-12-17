import React from 'react';
import styled from 'styled-components';

const NotFound = styled.div`
  margin: 0;
  width: 80%;
  height: 100vh;
  float: right;
`;

const Text = styled.div`
  top: 30%;
  left: 40%;
  position: absolute;
  margin: 0 auto;
  margin-top: -50px;
  margin-left: -50px;
  h1,
  h3 {
    font-size: 3rem;
    font-weight: 100;
    line-height: 1.1;
    letter-spacing: 0.025em;
  }
`;

const Payment = () => {
  return (
    <NotFound>
      <Text>
        <h1>404</h1>
        <h3>Oops, the page you're looking for does not exist.</h3>
        <p>
          You may want to head back to the homepage. If you think something is broken, report a
          problem.
        </p>
      </Text>
    </NotFound>
  );
};

export default Payment;
