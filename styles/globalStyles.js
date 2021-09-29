import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    background-color:${({ theme }) => theme.mainBack};
    color:${({ theme }) => theme.mainText};
}
`;

export default GlobalStyle;
