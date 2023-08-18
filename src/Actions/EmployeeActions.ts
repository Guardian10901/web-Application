import { createAction } from '@reduxjs/toolkit';

export type addEmployeetype = {
  EmployeeName: string;
  Joining_date: string;
  Expeirence: string;
  Role: string;
  Status: string;
  EmployeeId: number;
  Department: string;
  Address1: string;
  Address2: string;
  Address3: string;
};
export const addEmployee = createAction<{ employee: addEmployeetype }>('Employee:Create');
export const editEmployee = createAction<{ employee: addEmployeetype }>('Employee:Edit');
