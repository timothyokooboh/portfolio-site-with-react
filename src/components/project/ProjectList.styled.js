import styled from "styled-components";

export const StyledProjectList = styled.div`
  h4 {
    color: #21243d;
    font-weight: 300;
  }

  .project-in-view {
    animation: slideDown 0.5s forwards ease-out;
  }

  .project-item {
    margin-bottom: 50px;
    padding-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
    border-bottom: 1px solid #eee;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      grid-template-columns: 1fr;
    }

    .project-content {
      max-width: 75ch;
      h4 {
        font-size: 16px;
        font-weight: bold;
        margin: 0;
      }

      .description {
        font-weight: 300;
        font-size: 15px;
      }
    }
  }
`;

export const StyledProjectImage = styled.div`
  position: relative;

  &:hover .image-preview {
    opacity: 1;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: left top;
    transition: a 0.3s;
  }

  .image-preview {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);

    color: #ffffff;
    transition: 0.3s;

    &__text {
      font-size: 14px;
      font-weight: 600;
      margin-right: 10px;
    }
  }

  .preview {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
  }

  .close-preview {
    display: none;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    padding-block: 15px;
    padding-inline: 25px;
    position: fixed;
    top: -20px;
    right: 10px;
    z-index: 9999;
  }
`;
