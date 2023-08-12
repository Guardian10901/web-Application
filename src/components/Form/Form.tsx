import { useNavigate, useParams } from 'react-router-dom';
import './Form.css';
import React from 'react';
type props = {
  type: string;
};
export const Form: React.FC<props> = (props) => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div>
      <form>
        <div>
          <label>Employee Name</label>
          <input type='text' placeholder='Employee Name'></input>
        </div>
        <div>
          <label>Joining Date</label>
          <input type='text' placeholder='Joining Date'></input>
        </div>
        <div>
          <label>Experience</label>
          <input type='text' placeholder='Experience'></input>
        </div>
        <div>
          <label>Department</label>
          <select>
            <option value='opton1'>Choose Department</option>
          </select>
        </div>
        <div>
          <label>Role</label>
          <select>
            <option value='opton1'>Choose Role</option>
          </select>
        </div>
        <div>
          <label>Status</label>
          <select>
            <option value='opton1'>Choose Status</option>
          </select>
        </div>
        <div>
          <label>Address</label>
          <input placeholder='Flat No/House No'></input>
          <input type='text' placeholder='Address Line 1' />
          <input type='text' placeholder='Address Line 2' />
        </div>
        {props.type === 'Edit' && (
          <div>
            <label>Employee ID</label>
            <input className='employeeid' type='text' disabled={true} value={params.id} />
          </div>
        )}
        <div className='button'>
          <button>Submit</button>
          <button onClick={() => navigate('/employees')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
