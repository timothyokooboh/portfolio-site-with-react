import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 20px;

    & > div {
        margin-bottom: 10px;
    }
`

export const StyledFooterLink = styled.a`
    margin-left: 30px;
    font-size: 40px;
    cursor: pointer;
    color: ${({ color}) => color}};

    &:hover {
        color: #FF6464;
        cursor: pointer;
   }
    
`