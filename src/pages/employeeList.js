
import React, { useState, useEffect, useMemo } from 'react';
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import axios from 'axios';
import Filter from '../components/FilterTable';

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

const data = useMemo( ()=>[
{
"createdAt": "2023-01-10T19:54:03.502Z",
"firstName": "Fletcher",
"lastName": "Lynch",
"age": 95,
"Gender": "Two-spirit",
"email": "Fausto_Kohler@gmail.com",
"id": "1"
},{
    "createdAt": "2023-01-10T19:54:03.502Z",
    "firstName": "Fletcher",
    "lastName": "Lynch",
    "age": 95,
    "Gender": "Two-spirit",
    "email": "Fausto_Kohler@gmail.com",
    "id": "2"
    }
]);


    const columns = useMemo(
        () => [
            {
                Header: "First Name",
                accessor: "firstName",
            },
            {
                Header: "Last Name",
                accessor: "lastName",
            },
            {
                Header: "Age",
                accessor: "age",
            },
            {
                Header: "Gender",
                accessor: "Gender",
            },
            {
                Header: "email",
                accessor: "email",
            },
        ],
        []
    );
    const employeesData = useMemo(() => [...Employee], [Employee]);

    const employeesColumns = useMemo(
        () =>
            Employee[0]
                ? Object.keys(Employee[0])
                    .filter((key) => key !== "rating")
                    .map((key) => {
                        if (key === "image")
                            return {
                                Header: key,
                                accessor: key,
                                Cell: ({ value }) => <img src={value} />,
                                maxWidth: 70,
                            };

                        return { Header: key, accessor: key };
                    })
                : [],
        [Employee]
    );

    const tableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: "Edit",
                Header: "Edit",
                Cell: ({ row }) => (
                    <Button onClick={() => alert("Editing: " + row.values.price)}>
                        Edit
                    </Button>
                ),
            },
        ]);
    };

    const tableInstance = useTable(
        {
            columns: employeesColumns,
            data: employeesData,
        },
        useGlobalFilter,
        tableHooks,
        useSortBy
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        preFilteredRows,
        setFilter,
        state,
    } = tableInstance;


    useEffect(() => {
        fetchEmployees();
    }, []);
    const isEven = (idx) => idx % 2 === 0;


    return (
        <>
            <Container>
                <h1>List of Employees</h1>

                <Filter
                    preFilteredRows={preFilteredRows}
                    setFilter={setFilter}
                    Filter={state.Filter}
                />
                <Table {...getTableProps()}>
                    <TableHead>
                        {headerGroups.map((headerGroup) => (
                            <TableRow {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <TableHeader
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                    >
                                        {column.render("Header")}
                                        {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                                    </TableHeader>
                                ))}
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody {...getTableBodyProps()}>
                        {rows.map((row, idx) => {
                            prepareRow(row);

                            return (
                                <TableRow
                                    {...row.getRowProps()}
                                    className={isEven(idx) ? "background-color:lightblue" : ""}
                                >
                                    {row.cells.map((cell, idx) => (
                                        <TableData {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </TableData>
                                    ))}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>

            </Container>
        </>
    )
}

export default EmployeeList;