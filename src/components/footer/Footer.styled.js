import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 100px 0;

    & > * {
        margin-left: 30px;
        font-size: 40px;
        cursor: pointer;
        color: ${({ color}) => color}};

        &:hover {
            color: red !important;
            cursor: pointer;
        }
    }
`