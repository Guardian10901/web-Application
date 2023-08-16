import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducers/employeeReducer';
import baseApi from './services/employeeService';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), baseApi.middleware]
});

export default store;
