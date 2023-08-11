import React from 'react';
import './SubHeader.css';
import { useNavigate } from 'react-router-dom';
type props = {
  head: string;
  type: string;
};
export const SubHeader: React.FC<props> = (props) => {
  const navigate = useNavigate();

  return (
    <div className='SubHeader'>
      <h3>{props.head}</h3>
      <div className='buttons'>
        {props.type === 'create' && (
          <div className='create' onClick={() => navigate('/employees/create')}>
            <button className='plus'>+</button>Create employee
          </div>
        )}
        {props.type === 'edit' && (
          <div className='edit' onClick={() => navigate('/employees/edit')}>
            <button className='pen'>p</button>Edit
          </div>
        )}
      </div>
    </div>
  );
};
