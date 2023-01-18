import React from 'react'
import { EditButton, CancelButton} from '../styles/button.style';
import {Card, Fieldset, Input,CardBody,CardHeader,Header, Select, } from '../styles/form.style';
const UpdateEmployee = () => {
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
        <Input placeholder="Salary" type="number" required />
      </Fieldset>
      
      <Fieldset>
 
    <Select>
    <option value="" hidden>
      Gender
    </option>
    <option value="1">Male</option>
    <option value="2">Female</option>
    <option value="3">Not to say</option>
  </Select>
  </Fieldset>
  <Fieldset>
        <Input placeholder="Age" type="number" required />
      </Fieldset>

      <Fieldset>
      <CancelButton type="button" value='submit'>Cancel </CancelButton>
      <EditButton type="button" value='submit'>Save </EditButton>
      </Fieldset>
    </CardBody>
  </form></Card>
</div>

  )
}

export default UpdateEmployee;