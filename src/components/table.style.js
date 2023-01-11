
import styled from "styled-components";
const Container = styled.div`
  text-align: center;
  width:960px;
  padding: 10px;
  `
const StyledTable = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid black;
    th{
      border-bottom:1px #dddddd solid;
      text-align: left;
      padding: 8px;
    }
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
    tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
  }
`
const Table = styled.table`
  table-layout :fixed ;
  text-align: center;
  width: auto;
`

const TableHead = styled.thead`
  padding:2px;
`

const TableRow = styled.tr`
border-color: green;

`

const TableHeader = styled.th`
border-color: green;
padding: 2px;
`

const TableBody = styled.tbody`
`

const TableData = styled.td`
padding: 5px;
`

const Button = styled.button`
  padding-left: 2px;
  padding-right: 4px;
  padding-top: 2px;
  padding-bottom: 2px;
  color: black;
  border-radius:10;
  background-color: green;
  :hover{
    background-color: lightgreen;
    transition: all;
  }

`;
export { Container, Table, TableBody,TableData,TableHead,TableHeader,TableRow,Button}
