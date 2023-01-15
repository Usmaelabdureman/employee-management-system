import React from 'react'
import { AddButton} from '../components/button.style';
import {Card, Fieldset, Input,CardBody,CardHeader,Header, Select, } from '../components/form.style';
const AddEmployee = () => {
  return (
    <div>
     
        <Card>
        <form> 
        <CardHeader>
          <Header>Add Employee</Header>
        </CardHeader>
        <CardBody>
          <Fieldset>
            <Input placeholder="First Name" type="text" required />
          </Fieldset>
          <Fieldset>
            <Input placeholder="Last Name" type="text" required />
          </Fieldset>

          <Fieldset>
            <Input placeholder="Age" type="number" required />
          </Fieldset>
          <Fieldset>
            <Input placeholder="Age" type="number" required />
          </Fieldset>
          
          <Fieldset>
     
        <Select>
        <option value="">
          Gender
        </option>
        <option value="1">Male</option>
        <option value="2">Female</option>
      </Select>
      </Fieldset>
      <Fieldset>
            <Input placeholder="Age" type="number" required />
          </Fieldset>

          <Fieldset>
            <AddButton type="button" value='submit'>Submit</AddButton>
          </Fieldset>
        </CardBody>
      </form></Card>
    </div>
 
  )
}

export default AddEmployee;