import { EmployeeRequest } from '../../employee-object';
import baseApi from '../../services/employeeService';

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => ({
        url: '/employees',
        method: 'GET'
      }),
      providesTags: ['Employee']
    }),
    createEmployee: builder.mutation({
      query: (body: EmployeeRequest) => ({
        url: '/employees',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Employee']
    }),
    editEmployee: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/employees/${id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['Employee']
    }),
    getEmployeeById: builder.query({
      query: (params: { id: number }) => ({
        url: `/employees/${params.id}`,
        method: 'GET'
      }),
      providesTags: ['Employee']
    }),
    deleteEmployee: builder.mutation({
      query: (params: { id: number }) => ({
        url: `/employees/${params.id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Employee']
    }),
    getRoles: builder.query({
      query: () => ({
        url: '/api/roles',
        method: 'GET'
      }),
      providesTags: ['Employee']
    })
  })
});
export const {
  useGetEmployeeListQuery,
  useEditEmployeeMutation,
  useCreateEmployeeMutation,
  useGetEmployeeByIdQuery,
  useLazyGetEmployeeByIdQuery,
  useDeleteEmployeeMutation,
  useGetRolesQuery
} = employeeApi;
