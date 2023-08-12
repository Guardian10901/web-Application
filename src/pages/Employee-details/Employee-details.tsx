import { SubHeader } from '../../components/SubHeader/SubHeader';
import { Header } from '../../components/Header/Header';
import { Navbar } from '../../components/Navbar/Navbar';

import React from 'react';
import { Detail } from '../../components/Details/Detail';
import { useParams } from 'react-router-dom';

export const Employee_details = () => {
  const params = useParams();

  console.log(params);

  return (
    <div className='main'>
      <Navbar />
      <div className='left-box'>
        <Header />
        <SubHeader type='edit' par={params.id} head='Employee Details' />
        <Detail />
      </div>
    </div>
  );
};
