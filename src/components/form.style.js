import styled from "styled-components";

export const Card = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 4em auto 0;
  width: 40%;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`
export const CardHeader = styled.header`
  padding-bottom: 1em;
`
export const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

export const CardBody = styled.div`
  padding-right:2em;
  padding-left: 2em;
`

export const Fieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & {
    margin-top: 1em;
  }

  &:nth-last-of-type(2) {
    margin-top: 1em;
  }

  &:last-of-type {
    text-align: center;
  }
`

export const Input = styled.input`

  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`
export const Select = styled.select`
  width: 100%;
  height: 35px;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: blue;
  margin-left: 10px;

  Option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`

// export const  Option = styled.option `
//   color: black;
//   background: white;
//   display: flex;
//   white-space: pre;
//   min-height: 20px;
//   padding: 0px 2px 1px;
// `