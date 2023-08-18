import React from 'react';
import './status.css';

type props = {
  val: string;
};

export const Status: React.FC<props> = (props) => {
  return <div className={props.val}>{props.val}</div>;
};
