import { Input } from '../../components/Input/Input';
import React, { useState } from 'react';
import './login.css';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const handleOnClick = () => {
    if (username != '' || password != '') navigate('/employees');
    else setError(true);
  };

  return (
    <div className='main'>
      <section className='left_side'>
        <img src='/assets/img/banner.png' alt='login image'></img>
      </section>
      <section className='right_side'>
        <img src="/assets/img/kv-logo.png" alt="kv-logo" />
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
        <Button text='Submit' onClick={handleOnClick} />
        {error && <div>Invalid Username or Password </div>}
      </section>
    </div>
  );
};
