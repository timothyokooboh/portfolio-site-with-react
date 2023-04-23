import styled from "styled-components";

export const StyledAbout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column-reverse;
    text-align: center;
  }

  & > *:first-child {
    margin-right: 10px;
    h1 {
      color: #21243d;
      font-weight: bold;
      margin-block: 0;
    }

    h2 {
      color: #21243d;
      font-size: 18px;
      margin-top: 0;
      margin-bottom: 20px;
    }

    .description {
      font-weight: 300;
    }

    a {
      text-decoration: none;
      color: inherit;
      position: relative;

      &::after {
        position: absolute;
        bottom: 4px;
        left: 0;
        content: "";
        background-color: #ff6464;
        width: 100%;
        height: 5px;
      }
    }
  }

  .intro {
    animation: slideDown 0.3s ease-out;

    &-description {
      animation: slideUp 0.3s 0.3s both ease-out;
    }
  }

  .img-container {
    width: 243px;
    height: 243px;
    border-radius: 50%;
    background-color: #edf7fa;
    padding-bottom: 15px;
    padding-left: 5px;
    animation: slideDown 0.3s 0.6s both ease-out;

    img {
      object-fit: cover;
      border-radius: 50%;
      width: 243px;
      height: 243px;
      position: relative;
      pointer-events: none;
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes slideLeft {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
`;
