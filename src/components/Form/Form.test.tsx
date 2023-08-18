// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Form } from './Form';
// import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter for navigation
// import '@testing-library/jest-dom'; // Import Jest DOM matchers

// // Mocks
// jest.mock('../../pages/Employees/api', () => ({
//   useCreateEmployeeMutation: jest.fn(),
//   useEditEmployeeMutation: jest.fn(),
//   useGetRolesQuery: jest.fn(() => ({
//     data: ['Role1', 'Role2'], // Mock role data
//     isSuccess: true
//   })),
//   useLazyGetEmployeeByIdQuery: jest.fn(() => ({
//     data: {
//       data: {
//         name: 'John Doe',
//         username: 'johndoe'
//         // ...mock other data fields
//       }
//     },
//     isSuccess: true
//   }))
// }));

// describe('Form component', () => {
//   it('fills form fields correctly for Create', () => {
//     render(
//       <MemoryRouter>
//         <Form type='Create' />
//       </MemoryRouter>
//     );

//     fireEvent.change(screen.getByPlaceholderText('Employee Name'), { target: { value: 'John' } });
//     fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'johndoe' } });
//     fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });

//     expect(screen.getByPlaceholderText('Employee Name')).toHaveValue('John');
//     expect(screen.getByPlaceholderText('Username')).toHaveValue('johndoe');
//     expect(screen.getByPlaceholderText('Password')).toHaveValue('password123');
//   });

//   it('fills form fields correctly for Edit', () => {
//     render(
//       <MemoryRouter>
//         <Form type='Edit' />
//       </MemoryRouter>
//     );

//     // Simulate input changes
//     fireEvent.change(screen.getByPlaceholderText('Employee Name'), { target: { value: 'Jane' } });
//     fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'janedoe' } });

//     // Assert that the input values have been updated
//     expect(screen.getByPlaceholderText('Employee Name')).toHaveValue('Jane');
//     expect(screen.getByPlaceholderText('Username')).toHaveValue('janedoe');
//   });
// });
