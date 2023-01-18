import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppStyle, {Header} from './App.style';
import EmployeeList from './components/employeeList';
import AddEmployee from './components/addEmployee';
import UpdateEmployee from './components/updateEmployee';
import TableComponent from './components/TableComponent';

function App() {
  return (
    <>
    
      <BrowserRouter>

      <Header>Simple Employee Management System </Header>
      <Routes>
        <Route path='' element={<EmployeeList/>}/>
        <Route path='/add' element={<AddEmployee/>}/>
        <Route path='/update' element={<UpdateEmployee/>}/>
        <Route path='/table' element={<TableComponent/>}/>
      </Routes>
    
      </BrowserRouter>
      <AppStyle />
    
    </>
  );
}

export default App;
