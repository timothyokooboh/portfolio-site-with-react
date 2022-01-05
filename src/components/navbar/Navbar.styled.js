import styled from 'styled-components';

export const StyledNavbar = styled.nav`
    padding: 10px 30px;
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    background-color: white;
    width: 100%;

    & > *:first-child {
        display: flex;
        align-items: center;

        & > div {
            margin-left: 20px;
            font-weight: 500;
            color: #000000;
            transition: color 0.2s ease-in-out;

            &:hover {
                color: #FF6464;
                cursor: pointer;
            }
        }

        @media(max-width: ${({ theme }) => theme.mobile}) {
            display: none;
        }
    }

    .menu-icon {
        display: none;

        @media(max-width: ${({ theme }) => theme.mobile}) {
            display: block;
        }
    }

    .menu-icon, .menu-close {
        font-size: 30px;
        cursor: pointer;
        outline: none;
    }

    .menu-close {
        transition: color 0.2s ease-in-out;

        &:hover {
            color: #FF6464;
        }
    }

    .mobile-menu {
        background-color: #021D44;
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        color: #fff;
        z-index: 999;
        opacity: 0;
        transform: scale(0);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & > *:first-child {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            padding-right: 10px;

            svg {
                margin-right: 30px;
                margin-top: 10px;
            }
        } 

        & > *:nth-child(2) {
            padding-left: 20px;
            padding-top: 30px;

            & > div {
                padding: 20px 0;
                width: fit-content;
                font-size: 20px;

                &:hover {
                    color: #FF6464;
                    cursor: pointer;
                }
            }
        }
    }


    .show-menu {
        animation: slideIn .5s ease-out forwards;
    }

    .hide-menu {
        animation: slideOut .5s ease-out forwards;
    }

    @keyframes slideIn {
        from{
            transform: translateX(-100%) scale(0.5);
            opacity: 0;
        }
        to {
            transform: translateX(0) scale(1);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from{
            transform: translateX(0) scale(1);
            opacity: 1;
        }
        to {
            transform: translateX(-100%) scale(0.5);
            opacity: 0;
        }
    }

`