import type { FC } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './styles/global.css';
import { Login } from './pages/Login/login';
import { Employees } from './pages/Employees/Employees';
import { Employee_details } from './pages/Employee-details/Employee-details';
import { CreateEdit } from './pages/Create-employee/Create';

const App: FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<Employees />} />
          <Route path='/employees/:id' element={<Employee_details />} />
          <Route path='/employees/create' element={<CreateEdit />} />
          <Route path='/employees/:id/edit' element={<CreateEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
