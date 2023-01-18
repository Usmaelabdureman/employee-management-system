
import React, {useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {buttonAdd,buttonEdit,buttonDelete} from '../styles/button.style';
import { Container } from '../styles/container.style';
import {
    StyledTable,
    Tr,
    Th,
    Td,
    H,Thdr
} from '../styles/table.style';

const EmployeeList = () => {

    const counter = useSelector((state)=>state.counter);
    return (
        <>
        <H>List of Employees</H>
                <StyledTable>
                        <Thdr>
                            <Tr>
                                <Th>First Name</Th>
                                <Th>Last Name</Th>
                                <Th>Age </Th>
                                <Th>Gender</Th>
                                <Th>Age </Th>
                                <Th>Gender</Th>
                            </Tr>
                        </Thdr>
                        <tbody>
                            <Tr>
                                <Td>Usmael</Td>
                                <Td>A</Td>
                                <Td>22</Td>
                                <Td>Male</Td>
                            </Tr>
                            <Tr>
                                <Td>Usmael</Td>
                                <Td>A</Td>
                                <Td>22</Td>
                                <Td>Male</Td>
                            </Tr>
                            <Tr>
                                <Td>Usmael</Td>
                                <Td>A</Td>
                                <Td>22</Td>
                                <Td>Male</Td>
                            </Tr>
                        </tbody>
                </StyledTable>
                <buttonEdit >Increment</buttonEdit>
                <H>{counter}</H>
                <Link to="/add"> <buttonAdd>addEmployee</buttonAdd></Link>
                <Link to="/update"> <buttonAdd>UpdateEmployee</buttonAdd></Link>
            </>
    )
}

export default EmployeeList;