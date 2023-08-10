import React from 'react';
import './button.css';

type props = {
  text: string;
  onClick: () => void;
};
export const Button: React.FC<props> = (props) => {
  return <button onClick={props.onClick}>{props.text} </button>;
};
