import React from 'react';
import './style.css';
type props = {
  value: string;
  OnChange: (e) => void;
  label: string;
  placeholder: string;
  type: 'text' | 'password';
};
export const Input: React.FC<props> = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.OnChange}
        value={props.value}
      ></input>
    </div>
  );
};
