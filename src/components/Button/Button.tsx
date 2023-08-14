import React from 'react';
import './button.css';

export type props = {
  text: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
};
export const Button: React.FC<props> = (props) => {
  return (
    <button type={props.type} onClick={props.onClick} data-testid='button-test'>
      {props.text}
    </button>
  );
};
