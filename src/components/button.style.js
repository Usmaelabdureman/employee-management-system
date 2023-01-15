import styled from "styled-components"

const Button = styled.button`
display: block;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 0;
  border-radius: 2em;
  color: white;
  cursor: pointer;
  width: 100%;
  padding: 12px 0;
  font-weight: 700;
  :hover {
    box-shadow: 0 0 10px blueviolet;
    /* transform: translate(0, -0.5em); */
  }


`

const DeleteButton =styled(Button)`
outline: auto;
color:black;
outline-color: red;
:hover {
 background-color: red;
   color:white;
  }
`

const AddButton = styled(Button)`
background-color: blue;
`

const EditButton =styled(Button)`
outline: auto;
color:black;
outline-color: green;
:hover {
 background-color: green;
   color:white;
  }
`

export {
    DeleteButton,
    AddButton,
    EditButton
}