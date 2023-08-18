import React from 'react';
import { render, screen } from '@testing-library/react';
import { Detail } from './Detail';
import '@testing-library/jest-dom/';

jest.mock('react-router-dom', () => ({
  useParams: () => ({
    id: '1'
  })
}));

jest.mock('../../pages/Employees/api', () => ({
  useGetEmployeeByIdQuery: jest.fn(() => ({
    data: {
      data: {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        experience: '5 years',
        departmentId: 2,
        joiningDate: '2023-01-01',
        role: 'Developer',
        Status: 'Active',
        address: {
          address_line_1: '123 Main St',
          address_line_2: 'Apt 4B',
          city: 'Cityville',
          state: 'Stateville',
          country: 'Countryland',
          pincode: '12345'
        }
      }
    },
    isSuccess: true
  }))
}));

describe('Detail component', () => {
  it('renders employee details correctly', () => {
    render(<Detail />);

    expect(screen.getByTestId('id')).toHaveTextContent('1');
    expect(screen.getByTestId('name')).toHaveTextContent('John Doe');
    expect(screen.getByTestId('username')).toHaveTextContent('johndoe');
    expect(screen.getByTestId('experience')).toHaveTextContent('5 years');
    expect(screen.getByTestId('departmentid')).toHaveTextContent('2');
    expect(screen.getByTestId('joining')).toHaveTextContent('2023-01-01');
    expect(screen.getByTestId('role')).toHaveTextContent('Developer');
    expect(screen.getByTestId('address')).toHaveTextContent(
      '123 Main St, Apt 4B, Cityville, Stateville, Countryland, 12345'
    );
  });


});
