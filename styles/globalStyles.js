import { createGlobalStyle } from "styled-components";

import variables from "./variables";

const GlobalStyle = createGlobalStyle`
${variables}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
   background-color:${(props) => props.theme.mainBack};
   color:${(props) => props.theme.mainText};
   font-family: var( --ff-roboto);
}

ul{
    list-style:none;
}
a{
    text-decoration:none;
    cursor:pointer;
    color:${(props) => props.theme.mainText};
}
button{
    cursor:pointer;
    outline:none;
}
::-webkit-scrollbar {
    width: 10px;
    
}

::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.secondary};
}

::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.mainText};
   border-radius: 10px;
}

`;

export default GlobalStyle;
