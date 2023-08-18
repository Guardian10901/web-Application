/* eslint-disable no-debugger */
import { Navbar } from '../../components/Navbar/Navbar';
import { Header } from '../../components/Header/Header';

import './employee.css';
import React from 'react';
import { SubHeader } from '../../components/SubHeader/SubHeader';
import { Table } from '../../components/Table/Table';

export const Employees = () => {
  const role = localStorage.getItem('role');

  return (
    <div className='main'>
      <Navbar />
      <div className='left-box'>
        <Header />

        <SubHeader
          type={['Hr', 'Admin'].includes(role) ? 'create' : ''}
          par=''
          head='Employee List'
        />
        <Table />
      </div>
    </div>
  );
};
