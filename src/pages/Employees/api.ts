import baseApi from '../../services/employeeService';

interface Employee {
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
}
export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<Employee[], void>({
      query: () => ({
        url: '/employees',
        method: 'GET'
      })
    })
  })
});
export const { useGetEmployeeListQuery } = employeeApi;
