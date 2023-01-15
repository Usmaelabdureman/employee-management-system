import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.style'

import AppStyle, {Header} from './App.style';
import EmployeeList from './pages/employeeList';
import AddEmployee from './pages/addEmployee';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header>Simple Employee Management System </Header>
      <Routes>
        <Route path='' element={<EmployeeList/>}/>
        <Route path='/add' element={<AddEmployee/>}/>

  
      </Routes>
      </BrowserRouter>
      <AppStyle />
    
    </div>
  );
}

export default App;
