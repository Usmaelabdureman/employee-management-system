import styled from "styled-components";

export const Card = styled.div`
  overflow: hidden;
  padding: 0 0 24px;
  margin: 2em auto 0;
  width: 40%;
  font-family: Quicksand,  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif Times, serif, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0.8, 0, 1), 0 0px 60px rgba(0, 0, 0, 0.08);
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
  font-size: 1em;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #b9345e;
    outline: 0;
  }
`
export const Select = styled.select`
  width: 100%;
  height: 35px;
  color: gray;
  padding-left:inherit;
  font-size: 14px;
  border: blue;

  Option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`