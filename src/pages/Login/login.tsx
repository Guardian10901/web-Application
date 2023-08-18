import { Input } from '../../components/Input/Input';
import React, { useEffect, useState } from 'react';
import './login.css';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from './api';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState(false);

  const navigate = useNavigate();
  const [login, { data, isSuccess }] = useLoginMutation();

  const handleOnClick = () => {
    login({ username, password });
  };

  useEffect(() => {
    if (data && isSuccess) {
      localStorage.setItem('Auth', data.data.token);
      localStorage.setItem('role', data.data.employeeDetails.role);
      navigate('/employees');
    }
  }, [data, isSuccess]);

  return (
    <div className='page'>
      <section className='left_side'>
        <img src='/assets/img/banner.png' alt='login image'></img>
      </section>
      <section className='right_side'>
        <img src='/assets/img/kv-logo.png' alt='kv-logo' />
        <Input
          label='Username'
          placeholder='Username'
          type='text'
          value={username}
          OnChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label='Password'
          placeholder='Password'
          type='password'
          value={password}
          OnChange={(e) => setPassword(e.target.value)}
        />
        <Button type='button' text='Submit' onClick={handleOnClick} />
        {/* {error && <div>Invalid Username or Password </div>} */}
      </section>
    </div>
  );
};
