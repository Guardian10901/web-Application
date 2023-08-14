import React from 'react';
import './Detail.css';
import { useParams } from 'react-router-dom';
import { Status } from '../status/Status';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const Detail = () => {
  const { id } = useParams();

  const data = useSelector((state: any) => {
    // eslint-disable-next-line no-debugger
    return state.employees;
  });
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
