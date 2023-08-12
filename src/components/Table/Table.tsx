import React from 'react';
import './table.css';
import { Status } from '../status/Status';
import { useNavigate } from 'react-router-dom';

export const Table = () => {
  const data = [
    {
      EmployeeName: 'Veena',
      Joining_date: '11/12/2000',
      Expeirence: '5',
      Role: 'UI',
      Status: 'Active',
      EmployeeId: 1,
      Address: 'Vandanam House, Kadavantra Po kochi 20'
    },
    {
      EmployeeName: 'Manoj Varma',
      Joining_date: '23/12/2000',
      Expeirence: '9',
      Role: 'Software Developer',
      Status: 'Inactive',
      EmployeeId: 2,
      Address: 'Jal vayu Flat No.20 ,Panampilly Nagar ,kochi'
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
          <tr key={item.EmployeeId} onClick={() => navigate(`/employees/${item.EmployeeId}`)}>
            <td> {item.EmployeeName}</td>
            <td> {item.EmployeeId}</td>
            <td> {item.Joining_date}</td>
            <td>{item.Role}</td>
            <td>
              <Status val={item.Status} />
            </td>
            <td>{item.Expeirence}</td>
            <td>
              <div className='action'>
                <img
                  src='/assets/icons/red-delete-10437.svg'
                  alt='delete'
                  onClick={(e) => {
                    console.log(e);
                    e.stopPropagation();
                  }}
                />
                <img
                  src='/assets/img/icons8-pencil-100.png'
                  alt='pen'
                  onClick={(e) => {
                    e.stopPropagation();

                    return navigate(`/employees/${item.EmployeeId}/edit`);
                  }}
                />
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
