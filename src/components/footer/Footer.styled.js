import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({bgColor}) => bgColor || 'inherit'} ;
    width: 100%;
    z-index: 999;
    display: flex;
    text-align: center;
    flex-direction: column;
    /*padding-bottom: 50px;
    /* position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 50%); */

    .links-container {
        padding-top: 20px;
    }

    .copy-right {
        text-align: center;
        font-size: 15px;
        padding-bottom: 20px;
    }
`

export const StyledFooterLink = styled.a`
    margin-left: 30px;
    font-size: 30px;
    cursor: pointer;
    color: ${({ color}) => color}};

    &:hover {
        color: #FF6464;
        cursor: pointer;
   }
    
`