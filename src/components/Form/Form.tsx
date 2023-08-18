/* eslint-disable react/jsx-key */
/* eslint-disable no-debugger */
import { useNavigate, useParams } from 'react-router-dom';
import './Form.css';
import React, { useEffect, useState } from 'react';
import {
  useCreateEmployeeMutation,
  useEditEmployeeMutation,
  useGetRolesQuery,
  useLazyGetEmployeeByIdQuery
} from '../../pages/Employees/api';

type props = {
  type: string;
};

export const Form: React.FC<props> = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [roleArr, setRole] = useState([]);

  const [createEmployee] = useCreateEmployeeMutation();
  const [editemployee] = useEditEmployeeMutation();
  const [getEmployeeById, { data: employee, isSuccess: employeefetch }] =
    useLazyGetEmployeeByIdQuery();
  const { data: roleList, isSuccess: rolefetch } = useGetRolesQuery('');

  useEffect(() => {
    if (props.type === 'Edit') getEmployeeById({ id: Number(params.id) });
  }, []);

  useEffect(() => {
    if (rolefetch && roleList?.data) setRole(roleList.data);
  }, [rolefetch, roleList]);

  useEffect(() => {
    setEname(employee?.data?.name);
    setjoining(employee?.data?.joiningDate);
    set1(employee?.data?.address?.address_line_1);
    setexperience(employee?.data?.experience);
    setdepartment(employee?.data?.departmentId);
    set(employee?.data?.role);
    setStatus(employee?.data?.Status);
    set2(employee?.data?.address?.address_line_2);
    setCity(employee?.data?.address?.city);
    setState(employee?.data?.address?.state);
    setCountry(employee?.data?.address?.country);
    setUsername(employee?.data?.username);
    setPincode(employee?.data?.address?.pincode);
  }, [employeefetch, employee]);

  const [ename, setEname] = useState(props.type === 'Edit' ? employee?.data?.name : null);
  const [joining, setjoining] = useState(
    props.type === 'Edit' ? employee?.data?.joiningDate : null
  );

  const [experience, setexperience] = useState<number>(
    props.type === 'Edit' ? employee?.data?.experience : null
  );
  const [department, setdepartment] = useState<number>(
    props.type === 'Edit' ? employee?.data?.departmentId : null
  );
  const [Role, set] = useState(props.type === 'Edit' ? employee?.data?.role : null);

  const [status, setStatus] = useState(props.type === 'Edit' ? employee?.data?.Status : null);

  const [eid, seteid] = useState(props.type === 'Edit' ? Number(params.id) : null);
  const [address1, set1] = useState(
    props.type === 'Edit' ? employee?.data?.address.address_line_1 : null
  );
  const [address2, set2] = useState(
    props.type === 'Edit' ? employee?.data?.address.address_line_2 : null
  );
  const [city, setCity] = useState(props.type === 'Edit' ? employee?.data?.address.city : null);
  const [state, setState] = useState(props.type === 'Edit' ? employee?.data?.address.state : null);
  const [country, setCountry] = useState(
    props.type === 'Edit' ? employee?.data?.address.country : null
  );
  const [pincode, setPincode] = useState(
    props.type === 'Edit' ? employee?.data?.address.pincode : null
  );
  const [username, setUsername] = useState(props.type === 'Edit' ? employee?.data?.username : null);
  const [password, setPassword] = useState(props.type === 'Edit' ? ' ' : null);

  const handleSubmit = () => {
    props.type === 'Create' &&
      createEmployee({
        name: ename,
        username,
        password,
        joiningDate: joining,
        experience: Number(experience),
        departmentId: Number(department),
        role: Role,
        Status: status,
        address: {
          address_line_1: address1,
          address_line_2: address2,
          city,
          state,
          country,
          pincode
        }
      });

    props.type === 'Edit' &&
      editemployee({
        id: eid,
        name: ename,
        username,
        password,
        joiningDate: joining,
        experience: Number(experience),
        departmentId: Number(department),
        role: Role,
        Status: status,
        address: {
          address_line_1: address1,
          address_line_2: address2,
          city,
          state,
          country,
          pincode
        }
      });

    navigate('/employees');
  };

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
          <label>Username</label>
          <input
            type='text'
            value={username}
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>

        {props.type === 'Create' && (
          <div>
            <label>Password</label>
            <input
              type='text'
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        )}
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
            onChange={(e) => setexperience(Number(e.target.value))}
          ></input>
        </div>
        <div>
          <label>Department</label>
          <select
            onChange={(e) => setdepartment(Number(e.target.value))}
            value={Number(department)}
          >
            <option value={1}>Choose Department Id</option>
            <option value={2}>Sales</option>
            <option value={3}>Accounts</option>
            <option value={4}>Development</option>
          </select>
        </div>
        <div>
          <label>Role</label>
          <select onChange={(e) => set(e.target.value)} value={Role}>
            {roleArr.map((e) => {
              return <option value={e}>{e}</option>;
            })}
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
            placeholder='Addresss Line 1'
            value={address1}
            onChange={(e) => set1(e.target.value)}
          ></input>
          <input
            type='text'
            placeholder='Address Line 2'
            value={address2}
            onChange={(e) => set2(e.target.value)}
          />
          <input
            type='text'
            placeholder='City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type='text'
            placeholder='State'
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            type='text'
            placeholder='Country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            type='text'
            placeholder='Pincode'
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
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
              onChange={(e) => seteid(Number(e.target.value))}
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
