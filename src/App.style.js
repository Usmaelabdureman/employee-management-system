import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
export const AppStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  };

body {
    margin: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;

}
Container{
text-align: center;
width:960px;
padding: 10px;
}

Container h1{
    font-size: 2.5em;

}
`;
const Header = styled.header`
    background-color: #2808F1;
min-height: 10vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`
export default AppStyle

export {Header}