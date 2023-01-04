import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
h1, h2, h3, h4, h5, h6{
    color: "red";
    font-weight: inherit;
}
html{   
    min-height: 100%;
    background-color: var(--fondo);
}
*, button, input{
    border: 0;
    background-color: none;
    font-family: var(--family);   
}

`;


export default GlobalStyle;