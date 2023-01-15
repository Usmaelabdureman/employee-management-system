
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import axios from 'axios';
import Filter from '../components/FilterTable';
import {buttonAdd,buttonEdit,buttonDelete} from '../components/button.style';

import {
    Table,
    Container,
    TableHeader, TableBody,
    TableData, TableHead, TableRow, Button

} from '../components/table.style';

const EmployeeList = (props) => {
    const [Employee, setEmployee] = useState([]);
    const fetchEmployees = async () => {
        const response = await axios.get('https://63bdda61e348cb076204aebb.mockapi.io/api/v1/employee-data').catch(err => console.log(err));
        if (response) {
            const employees = response.data;
            console.log("employees", employees);
            setEmployee(employees);
        }

    };
    return (
        <>
            <Container>
                <h1>List of Employees</h1>
                <Link to="/add"> <buttonAdd>addEmployee</buttonAdd></Link>
               
            </Container>
        </>
    )
}

export default EmployeeList;