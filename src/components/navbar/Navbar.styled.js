import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  background-color: #021d44;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .desktop-links {
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .name {
      font-weight: 700;
      color: #efefef;
    }

    .link {
      margin-right: 25px;
      color: #efefef;
      position: relative;

      &:before {
        transition: 0.5s;
        position: absolute;
        right: 0%;
        bottom: 0;
        content: "";
        width: 0%;
        height: 2px;
        background-color: #efefef;
      }

      &:hover {
        &:before {
          width: 100%;
        }
      }
    }
    .contact {
      margin-right: 0px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      & > *:last-child {
        display: none;
      }
    }
  }

  .menu-icon {
    display: none;
    margin-right: 20px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: block;
      margin-left: auto;
    }
  }

  .menu-icon,
  .menu-close {
    font-size: 30px;
    cursor: pointer;
    outline: none;
    color: #efefef;
  }

  .menu-close {
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #ff6464;
    }
  }

  .mobile-menu {
    background-color: #021d44;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    z-index: 999999;
    opacity: 0;
    transform: scale(0);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > *:first-child {
      display: flex;
      justify-content: flex-end;
      width: 100%;

      svg {
        margin-right: 20px;
        margin-top: 20px;
      }
    }

    & > *:nth-child(2) {
      padding-left: 20px;
      padding-top: 30px;

      & > div {
        padding: 20px 0;
        width: fit-content;
        font-size: 20px;
        display: block;
        color: white;
        text-decoration: none;

        &:hover {
          color: #ff6464;
          cursor: pointer;
        }
      }
    }
  }

  .show-menu {
    animation: slideIn 0.5s ease-out forwards;
  }

  .hide-menu {
    animation: slideOut 0.5s ease-out forwards;
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%) scale(0.5);
      opacity: 0;
    }
    to {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
    to {
      transform: translateX(-100%) scale(0.5);
      opacity: 0;
    }
  }
`;

export const StyledDesktopLink = styled(Link)`
  font-weight: 500;
  color: ${({ match }) => (match ? "#FF6464" : "#000")};
  transition: color 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #ff6464;
    cursor: pointer;
  }
`;
