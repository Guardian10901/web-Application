import React, { useEffect, useState } from 'react';
import './Detail.css';
import { useParams } from 'react-router-dom';
import { useGetEmployeeByIdQuery } from '../../pages/Employees/api';
import { EmployeeInterface } from '../../employee-object';
import { Status } from '../status/Status';

export const Detail = () => {
  const { id } = useParams();
  const employeeId = Number(id);
  const { data: dataArr, isSuccess } = useGetEmployeeByIdQuery({ id: employeeId });
  const [data, setData] = useState<EmployeeInterface>();

  useEffect(() => {
    if (dataArr && isSuccess) setData(dataArr.data);
  }, [isSuccess]);

  return (
    <div className='details'>
      <div className='sub-detail'>
        <label>Employee Id</label>
        <label data-testid='id'>{data?.id}</label>
      </div>
      <div className='sub-detail'>
        <label>Employee Name</label>
        <label data-testid='name'>{data?.name}</label>
      </div>
      <div className='sub-detail'>
        <label>Username</label>
        <label data-testid='username'>{data?.username}</label>
      </div>
      <div className='sub-detail'>
        <label>Experience</label>
        <label data-testid='experience'>{data?.experience}</label>
      </div>
      <div className='sub-detail'>
        <label>Department ID</label>
        <label data-testid='departmentid'>{data?.departmentId}</label>
      </div>
      <div className='sub-detail'>
        <label>Joining Date</label>
        <label data-testid='joining'>{data?.joiningDate}</label>
      </div>
      <div className='sub-detail'>
        <label>Role</label>
        <label data-testid='role'>{data?.role}</label>
      </div>
      <div className='sub-detail'>
        <label>Status</label>
        <label>
          <Status val={data?.Status} />
        </label>
      </div>
      <div className='sub-detail'>
        <label>Address</label>
        <label data-testid='address'>
          {data?.address.address_line_1 +
            ', ' +
            data?.address.address_line_2 +
            ', ' +
            data?.address.city +
            ', ' +
            data?.address.state +
            ', ' +
            data?.address.country +
            ', ' +
            data?.address.pincode}
        </label>
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
