import type { FC } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './styles/global.css';
import { Login } from './pages/Login/login';
import { Employees } from './pages/Employees/Employees';
import { Employee_details } from './pages/Employee-details/Employee-details';
import { Create } from './pages/Create-employee/Create';
import { Edit } from './pages/Edit-employee/Edit';

const App: FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<Employees />} />
          <Route path='/employees/:id' element={<Employee_details />} />
          <Route path='/employees/create' element={<Create />} />
          <Route path='/employees/edit' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
