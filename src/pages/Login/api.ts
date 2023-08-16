import baseApi from '../../services/employeeService';
type LoginPayloadType = {
  username: string;
  password: string;
};
export const LoginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: LoginPayloadType) => ({
        url: '/employees/login',
        method: 'POST',
        body
      })
    })
  })
});
export const { useLoginMutation } = LoginApi;
