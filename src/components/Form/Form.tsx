import { useNavigate, useParams } from 'react-router-dom';
import './Form.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
type props = {
  type: string;
};
export const Form: React.FC<props> = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const data = useSelector((state: any) => {
    // eslint-disable-next-line no-debugger
    return state.employees;
  });
  const [ename, setEname] = useState(
    props.type === 'Edit' ? data[Number(params.id) - 1].EmployeeName : null
  );
  const [joining, setjoining] = useState(
    props.type === 'Edit' ? data[Number(params.id) - 1].Joining_date : null
  );

  const [experience, setexperience] = useState(
    props.type === 'Edit' ? data[Number(params.id) - 1].Expeirence : null
  );
  const [department, setdepartment] = useState(
    props.type === 'Edit' ? data[Number(params.id) - 1].Role : null
  );
  const [Role, set] = useState(props.type === 'Edit' ? data[Number(params.id) - 1].Role : null);

  const [status, setStatus] = useState(
    props.type === 'Edit' ? data[Number(params.id) - 1].Status : null
  );

  const [eid, seteid] = useState(
    props.type === 'Edit' ? data[Number(params.id) - 1].EmployeeId : null
  );
  const [address1, set1] = useState(
    props.type === 'Edit' ? data[Number(params.id) - 1].Address1 : null
  );
  const [address2, set2] = useState(
    props.type === 'Edit' ? data[Number(params.id) - 1].Address2 : null
  );
  const [address3, set3] = useState(
    props.type === 'Edit' ? data[Number(params.id) - 1].Address3 : null
  );

  const handleSubmit = () => {
    props.type === 'Create' &&
      dispatch({
        type: 'Employee:Create',
        payload: {
          employee: {
            EmployeeName: ename,
            Joining_date: joining,
            Expeirence: experience,
            Department: department,
            Role: Role,
            Status: status,
            EmployeeId: data.length + 1,
            Address1: address1,
            Address2: address2,
            Address3: address3
          }
        }
      });
    props.type === 'Edit' &&
      dispatch({
        type: 'Employee:Edit',
        payload: {
          employee: {
            EmployeeName: ename,
            Joining_date: joining,
            Expeirence: experience,
            Department: department,
            Role: Role,
            Status: status,
            EmployeeId: eid,
            Address1: address1,
            Address2: address2,
            Address3: address3
          }
        }
      });
    navigate('/employees');
  };
  const dispatch = useDispatch();

  return (
    <div>
      <form>
        <div>
          <label>Employee Name</label>
          <input
            type='text'
            value={ename}
            placeholder='Employee Name'
            onChange={(e) => setEname(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Joining Date</label>
          <input
            type='text'
            value={joining}
            placeholder='Joining Date'
            onChange={(e) => setjoining(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Experience</label>
          <input
            type='text'
            value={experience}
            placeholder='Experience'
            onChange={(e) => setexperience(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Department</label>
          <select onChange={(e) => setdepartment(e.target.value)}>
            <option value='opton1'>Choose Department</option>
            <option value='UI'>UI</option>
            <option value='Software Developer'>Software Developer</option>
          </select>
        </div>
        <div>
          <label>Role</label>
          <select onChange={(e) => set(e.target.value)}>
            <option value='opton1'>Choose Role</option>
            <option value='UI'>UI</option>
            <option value='Software Developer'>Software Developer</option>
          </select>
        </div>
        <div>
          <label>Status</label>
          <select onChange={(e) => setStatus(e.target.value)} value={status}>
            <option value='opton1'>Choose Status</option>
            <option value='Active'>Active</option>
            <option value='Inactive'>Inactive</option>
          </select>
        </div>
        <div>
          <label>Address</label>
          <input
            placeholder='Flat No/House No'
            value={address1}
            onChange={(e) => set1(e.target.value)}
          ></input>
          <input
            type='text'
            placeholder='Address Line 1'
            value={address2}
            onChange={(e) => set2(e.target.value)}
          />
          <input
            type='text'
            placeholder='Address Line 2'
            value={address3}
            onChange={(e) => set3(e.target.value)}
          />
        </div>
        {props.type === 'Edit' && (
          <div>
            <label>Employee ID</label>
            <input
              className='employeeid'
              type='text'
              disabled={true}
              value={params.id}
              onChange={(e) => seteid(e.target.value)}
            />
          </div>
        )}
        <div className='button'>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={() => navigate('/employees')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
