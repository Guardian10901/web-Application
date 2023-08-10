import type { FC } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './styles/global.css';
import { Login } from './pages/Login/login';
import { Employees } from './pages/Employees/Employees';

const App: FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<Employees />} />
          {/* <Route path='/employees/create'element={<HomeLayout />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );

};

export default App;
