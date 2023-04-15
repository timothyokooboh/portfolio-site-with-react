import styled from "styled-components";

export const StyledProjectList = styled.div`
  h4 {
    color: #21243d;
    font-weight: 300;
  }

  .project-in-view {
    animation: slideDown 0.5s ease-out;
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
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: left top;
  }
`;
