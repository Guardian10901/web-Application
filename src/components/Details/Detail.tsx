import React from 'react';
import './Detail.css';
import { useParams } from 'react-router-dom';
import { Status } from '../status/Status';

export const Detail = () => {
  const { id } = useParams();
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
      name: 'Veena',
      id: 2,
      joining_date: '11/12/2000',
      role: 'UI',
      Status: 'Active',
      expeirence: '5'
    }
  ];
  const employee = data.find((e) => Number(id) == e.EmployeeId);

  console.log(employee);

  return (
    <div className='details'>
      {Object.keys(employee).map((e) => {
        return (
          <div key={e} className='sub-detail'>
            <label>{e}</label>
            {e === 'Status' && <Status val={employee[e]} />}
            {!(e === 'Status') && <label>{employee[e]}</label>}
          </div>
        );
      })}
    </div>
  );
};
