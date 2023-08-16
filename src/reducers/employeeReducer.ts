import { addEmployee, editEmployee, addEmployeetype } from '../Actions/EmployeeActions';
import { createReducer } from '@reduxjs/toolkit';

const initialState: addEmployeetype[] = [
  {
    EmployeeName: 'Veena',
    Joining_date: '11/12/2000',
    Expeirence: '5',
    Role: 'UI',
    Status: 'Active',
    EmployeeId: 1,
    Department: 'UI',
    Address1: 'Vandanam House',
    Address2: 'Kadavantra Po',
    Address3: 'kochi 20'
  },
  {
    EmployeeName: 'Manoj Varma',
    Joining_date: '23/12/2000',
    Expeirence: '9',
    Role: 'Software Developer',
    Status: 'Inactive',
    EmployeeId: 2,
    Department: 'UI',
    Address1: 'Vandanam House',
    Address2: 'Kadavantra Po',
    Address3: 'kochi 20'
  }
];

const employeeReducer = createReducer(initialState, (builder) => {
  builder.addCase(addEmployee, (state, action) => {
    state = [...state, action.payload.employee];

    return state;
  });
  builder.addCase(editEmployee, (state, action) => {
    state = [
      ...state.filter((employee) => {
        return employee.EmployeeId != action.payload.employee.EmployeeId;
      }),
      action.payload.employee
    ];

    return state;
  });
});
// const employeeReducer = (state = initialState, action) => {
// switch (action.type) {
//   case 'Employee:Create': {
//     const newState = [...state, action.payload.employee];

//     return newState;
//   }
//   case 'Employee:Edit': {
//     const newState = [
//       ...state.filter((employee) => {
//         return employee.EmployeeId != action.payload.employee.EmployeeId;
//       }),
//       action.payload.employee
//     ];

//     return newState;
//   }
//   case 'Employee:Delete': {
//     const newState = [
//       ...state.filter((employee) => {
//         return employee.EmployeeId != action.payload.EmployeeId;
//       })
//     ];

//     return newState;
//   }
//   default:
//     return state;
// }
// };

export default employeeReducer;
