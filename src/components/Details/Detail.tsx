import React, { useEffect, useState } from 'react';
import './Detail.css';
import { useParams } from 'react-router-dom';
// import { Status } from '../status/Status';
import { useGetEmployeeByIdQuery } from '../../pages/Employees/api';
import { EmployeeInterface } from '../../employee-object';
// import { EmployeeInterface } from '../../employee-object';

export const Detail = () => {
  const { id } = useParams();
  const employeeId = Number(id);
  const { data: dataArr, isSuccess } = useGetEmployeeByIdQuery({ id: employeeId });
  const [data, setData] = useState<EmployeeInterface>();

  useEffect(() => {
    if (dataArr && isSuccess) setData(dataArr.data);
  }, [dataArr, isSuccess]);

  console.log(dataArr);

  return (
    <div className='details'>
      <div className='sub-detail'>
        <label>Employee Id</label>
        <label>{data?.id}</label>
      </div>
      <div className='sub-detail'>
        <label>Employee Name</label>
        <label>{data?.name}</label>
      </div>
      <div className='sub-detail'>
        <label>Experience</label>
        <label>{data?.experience}</label>
      </div>
      <div className='sub-detail'>
        <label>Department</label>
        <label>{data?.id}</label>
      </div>
      <div className='sub-detail'>
        <label>EmployeeId</label>
        <label>{data?.id}</label>
      </div>
      <div className='sub-detail'>
        <label>EmployeeId</label>
        <label>{data?.id}</label>
      </div>
      <div className='sub-detail'>
        <label>EmployeeId</label>
        <label>{data?.id}</label>
      </div>
    </div>
  );
};

// {Object.keys(employee).map((e) => {
//   return (
//     <div key={e} className='sub-detail'>
//       <label>{e}</label>
//       {e === 'Status' && <Status val={employee[e]} />}
//       {!(e === 'Status') && e === 'id' && <label>{employee[e]}</label>}
//     </div>
//   );
// })}

// const data = useSelector((state: any) => {
//   return state.employees;
// });
// const employee = data?.find((e) => Number(id) == e.id);
