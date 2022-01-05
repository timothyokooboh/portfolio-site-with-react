import styled from "styled-components";

export const StyledButton = styled.button`
    margin-top: 20px;
    background-color: ${({ bgColor}) => bgColor };
    outline: none;
    border: none;
    color: ${({color}) => color };
    padding: 10px 15px;
    border-radius: 2px;
    cursor: pointer;
    border: 1px solid ${({color}) => color };
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0px 0px 10px 0px ${({color}) => color };
    }
`