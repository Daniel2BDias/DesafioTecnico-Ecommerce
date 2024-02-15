import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    button:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export default GlobalStyles;
