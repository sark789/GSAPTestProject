import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Karla', sans-serif;  
        scrollbar-width: none;
    }


   *::-webkit-scrollbar{
        width: 0;
        height: 0;
    }


    h1{  

    }

    h2{

    }

    h3{  

    }

    p{ 
               
    }
`;

export default GlobalStyle;
