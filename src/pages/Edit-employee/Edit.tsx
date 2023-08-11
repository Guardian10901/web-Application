import React from 'react';
import { Header } from '../../components/Header/Header';
import { Navbar } from '../../components/Navbar/Navbar';
import { SubHeader } from '../../components/SubHeader/SubHeader';

export const Edit = () => {
  return (
    <div>
      <div className='main'>
        <Navbar />
        <div className='left-box'>
          <Header />
          <SubHeader type=' ' head='Edit Employee' />
        </div>
      </div>
    </div>
  );
};
