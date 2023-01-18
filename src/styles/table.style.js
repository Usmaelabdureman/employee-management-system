
import styled, {css} from "styled-components";

export const StyledTable = styled.table`

    width: 90;
    /* table-layout: fixed; */
    border-spacing: 0;
    text-align: center;
    border: 2px solid black;
    margin: 10px ;
    margin-right: 5px;
    padding: 5px;
    tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: cadetblue;
    }
  }
  `

export const Th = styled.th`
text-align: ${props=>(props.align ? props.align :'left')};
border-color: green;
font-size: 20px;
color: white;
padding: 2px;
background-color: blue;
font-weight: 700;
 ${props=>props.css  && css(...props.css)};

  `

export const Td = styled.td`
text-align: ${props=>(props.align ? props.align :'left')};


padding: 3px;
`
export const Tr = styled.tr`
  border-bottom: 2px solid  rgba(150, 150, 150, 0.5);
  ${props => props.css && css(...props.css)};

  `
export const H =styled.h4`
margin-left: 3em;
  `
export const Thdr = styled.thead`
background-color: aliceblue;

  `