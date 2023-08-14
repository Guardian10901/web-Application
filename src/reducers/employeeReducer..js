const initialState = [
  {
    EmployeeName: 'Veena',
    Joining_date: '11/12/2000',
    Expeirence: '5',
    Role: 'UI',
    Status: 'Active',
    EmployeeId: 1,
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
    Address1: 'Vandanam House',
    Address2: 'Kadavantra Po',
    Address3: 'kochi 20'
  }
];

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Employee:Create': {
      const newState = [...state, action.payload.employee];

      return newState;
    }
    case 'Employee:Edit': {
      const newState = [
        ...state.filter((employee) => {
          return employee.EmployeeId != action.payload.employee.EmployeeId;
        }),
        action.payload.employee
      ];

      return newState;
    }
    case 'Employee:Delete': {
      const newState = [
        ...state.filter((employee) => {
          return employee.EmployeeId != action.payload.EmployeeId;
        })
      ];

      return newState;
    }
    default:
      return state;
  }
};

export default employeeReducer;
