import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Table } from './Table';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

jest.mock('../../pages/Employees/api', () => ({
  useGetEmployeeListQuery: jest.fn(() => ({
    data: {
      data: [
        {
          id: 1,
          name: 'John Doe',
          joiningDate: '2023-08-17',
          role: 'Developer',
          Status: 'Active',
          experience: '5 years'
        }
      ],
      isSuccess: true
    }
  })),
  useDeleteEmployeeMutation: jest.fn(() => [jest.fn()])
}));

describe('Table component', () => {
  it('renders employee data correctly', () => {
    render(
      <Router>
        <Table />
      </Router>
    );

    const item = {
      id: 1,
      name: 'John Doe',
      joiningDate: '2023-08-17',
      role: 'Developer',
      Status: 'Active',
      experience: '5 years'
    };

    expect(screen.getByText('John Doe')).toHaveTextContent('John Doe');
    expect(screen.getByText(item.id.toString())).toHaveTextContent(item.id.toString());
    expect(screen.getByText(item.joiningDate)).toHaveTextContent(item.joiningDate);
    expect(screen.getByText(item.role)).toHaveTextContent(item.role);
    expect(screen.getByText(item.Status)).toHaveTextContent(item.Status);
    expect(screen.getByText(item.experience)).toHaveTextContent(item.experience);
  });

  it('displays delete confirmation alert', async () => {
    render(
      <Router>
        <Table />
      </Router>
    );
    const role = 'Admin';

    const deleteImg = screen.getByAltText('delete');

    fireEvent.click(deleteImg);

    expect(screen.getByText('Are you sure ?')).toHaveTextContent('Are you sure ?');
    expect(screen.getByText('Do you really want to delete the employee?')).toHaveTextContent(
      'Do you really want to delete the employee?'
    );
    expect(screen.getByText('Confirm')).toHaveTextContent('Confirm');
    expect(screen.getByText('Cancel')).toHaveTextContent('Cancel');
  });
});
