import React from 'react'
import { Container } from '../styles/container.style'
import { StyledTable ,Th,Tr} from '../styles/table.style'

const TableComponent = () => {
  return (
   <>
        <table>
        <StyledTable >
            <Tr>
                <Th>Name</Th>
                </Tr>
        </StyledTable>
        </table>

    
        </>

  )
}

export default TableComponent