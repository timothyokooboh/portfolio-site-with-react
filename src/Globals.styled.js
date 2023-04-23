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

    .cursor-pointer {
        cursor: pointer
    }

    .flex {
        display: flex;
    }

    .align-center{
        align-items: center;
    }

    .justify-center{
        justify-content: center;
    }

    .mr-sm {
        margin-right: 10px;
    }
    .mr-md {
        margin-right: 25px;
    }
    .mr-lg {
        margin-right: 40px;
    }
    .ml-lg {
        margin-left: 40px;
    }
`;
