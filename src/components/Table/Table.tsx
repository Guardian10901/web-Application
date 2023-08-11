import React from 'react';
import './table.css';
import { Status } from '../status/Status';
import { useNavigate } from 'react-router-dom';

export const Table = () => {
  const data = [
    {
      name: 'Veena',
      id: 1,
      joining_date: '11/12/2000',
      role: 'UI',
      Status: 'Active',
      expeirence: '5',
      Action: 'Action'
    },
    {
      name: 'Veena',
      id: 2,
      joining_date: '11/12/2000',
      role: 'UI',
      Status: 'Active',
      expeirence: '5',
      Action: 'Action'
    }
  ];
  const navigate = useNavigate();

  return (
    <div>
      <table>
        <thead>
          <td>EmployeeName</td>
          <td>EmployeeId</td>
          <td>Joining Date</td>
          <td>Role</td>
          <td>Status</td>
          <td>Experience</td>
          <td>Action</td>
        </thead>

        {data.map((item) => (
          <tr key={item.id} onClick={() => navigate(`/employees/${item.id}`)}>
            <td> {item.name}</td>
            <td> {item.id}</td>
            <td> {item.joining_date}</td>
            <td>{item.role}</td>
            <td>
              <Status val={item.Status} />
            </td>
            <td>{item.expeirence}</td>
            <td>{item.Action}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
