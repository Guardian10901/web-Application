import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('Auth');

      const role = localStorage.getItem('role');

      if (token) headers.set('authorization', `Bearer ${token}`);
      headers.set('role', role);
      console.log(headers);

      return headers;
    }
  }),

  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: ['Employee']
});

export default baseApi;
