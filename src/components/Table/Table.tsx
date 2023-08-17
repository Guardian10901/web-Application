import React, { useEffect, useState } from 'react';
import './table.css';
import { Status } from '../status/Status';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useDeleteEmployeeMutation, useGetEmployeeListQuery } from '../../pages/Employees/api';

export const Table = () => {
  // const data = useSelector((state: any) => {
  //   return state.employees;
  // });

  const { data: dataArr, isSuccess } = useGetEmployeeListQuery('');
  const [data, setData] = useState([]);
  const [deleteEmployee] = useDeleteEmployeeMutation();

  useEffect(() => {
    if (dataArr && isSuccess) setData(dataArr.data);
  }, [dataArr, isSuccess]);

  const navigate = useNavigate();
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [id, setid] = useState(null);
  const dispatch = useDispatch();
  const handleDelete = () => {
    setDeleteAlert(false);
    deleteEmployee({ id: id });

    dispatch({
      type: 'Employee:Delete',
      payload: { EmployeeId: id }
    });
  };

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
            <td> {item.joiningDate}</td>
            <td>{item.role}</td>
            <td>
              <Status val={item.Status} />
            </td>
            <td>{item.experience}</td>
            <td>
              <div className='action'>
                <img
                  src='/assets/icons/red-delete-10437.svg'
                  alt='delete'
                  onClick={(e) => {
                    e.stopPropagation();
                    setDeleteAlert(true);
                    setid(item.id);
                  }}
                />
                <img
                  src='/assets/img/icons8-pencil-100.png'
                  alt='pen'
                  onClick={(e) => {
                    e.stopPropagation();

                    return navigate(`/employees/${item.id}/edit`);
                  }}
                />
              </div>
            </td>
          </tr>
        ))}
      </table>
      {deleteAlert && (
        <div className='fullScreen'>
          <div className='AlertBox'>
            <div className='text'>
              <h4>Are you sure ? </h4> Do you really want to delete the employee?{' '}
            </div>
            <div className='AlertButtons'>
              <Button
                text='Confirm'
                onClick={() => {
                  handleDelete();
                }}
              />
              <Button text='Cancel' onClick={() => setDeleteAlert(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
