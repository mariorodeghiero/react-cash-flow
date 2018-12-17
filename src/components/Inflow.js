import React from 'react';

const Inflow = ({ inflow }) => {
  return (
    <tbody>
      <tr>
        <td>{inflow.name}</td>
        <td>{inflow.cpf}</td>
        <td>{inflow.payment}</td>
        <td>{inflow.date}</td>
        <td>{inflow.value}</td>
      </tr>
    </tbody>
  );
};

export default Inflow;
