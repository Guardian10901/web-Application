import { Form } from '../../components/Form/Form';
import { Header } from '../../components/Header/Header';
import { Navbar } from '../../components/Navbar/Navbar';
import { SubHeader } from '../../components/SubHeader/SubHeader';
import React from 'react';

export const Create = () => {
  return (
    <div>
      <div className='main'>
        <Navbar />
        <div className='left-box'>
          <Header />
          <SubHeader type=' ' head='Create Employee' />
          <Form type='create' />
        </div>
      </div>
    </div>
  );
};
