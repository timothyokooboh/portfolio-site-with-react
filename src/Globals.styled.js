import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
        font-family: 'Heebo', sans-serif;
    }
`
