import { useParams } from 'react-router-dom';
import { Form } from '../../components/Form/Form';
import { Header } from '../../components/Header/Header';
import { Navbar } from '../../components/Navbar/Navbar';
import { SubHeader } from '../../components/SubHeader/SubHeader';
import React from 'react';

export const CreateEdit = () => {
  const params = useParams();
  let type = 'Create';

  Object.keys(params).length && (type = 'Edit');

  return (
    <div>
      <div className='main'>
        <Navbar />
        <div className='left-box'>
          <Header />
          <SubHeader type={type} par='' head={type + ' Employee'} />
          <Form type={type} />
        </div>
      </div>
    </div>
  );
};
