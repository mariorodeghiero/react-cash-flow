import React from 'react';

const Outflow = ({ outflow }) => {
  return (
    <tbody>
      <tr>
        <td>{outflow.name}</td>
        <td>{outflow.payment}</td>
        <td>{outflow.date}</td>
        <td>{outflow.value}</td>
      </tr>
    </tbody>
  );
};

export default Outflow;
