import { SubHeader } from '../../components/SubHeader/SubHeader';
import { Header } from '../../components/Header/Header';
import { Navbar } from '../../components/Navbar/Navbar';

import React from 'react';
import { Detail } from '../../components/Details/Detail';

export const Employee_details = () => {
  return (
    <div className='main'>
      <Navbar />
      <div className='left-box'>
        <Header />
        <SubHeader type='edit' head='Employee Details' />
        <Detail />
      </div>
    </div>
  );
};
