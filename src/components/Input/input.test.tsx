import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';
import '@testing-library/jest-dom';

describe('Input component', () => {
  it('renders label and input correctly', () => {
    render(
      <Input
        value='JohnDoe'
        OnChange={() => {}}
        label='Username'
        placeholder='Enter your username'
        type='text'
      />
    );

    expect(screen.getByPlaceholderText('Enter your username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your username')).toHaveAttribute('type', 'text');
  });

  it('updates input value on change', () => {
    const handleChange = jest.fn();

    render(
      <Input
        value='JohnDoe'
        OnChange={handleChange}
        label='Username'
        placeholder='Enter your username'
        type='text'
      />
    );

    fireEvent.change(screen.getByPlaceholderText('Enter your username'), {
      target: { value: 'JaneDoe' }
    });

    expect(handleChange).toHaveBeenCalled();
    expect(screen.getByPlaceholderText('Enter your username')).toHaveValue('JohnDoe');
  });
});
