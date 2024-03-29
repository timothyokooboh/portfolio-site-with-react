import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding-bottom: 50px;

  img {
    object-fit: cover;
    width: 100%;
    object-position: left top;
  }

  .tag {
    color: #999;
    font-style: italic;
  }

  .project-img {
    width: 100%;
    height: 45vh;
  }

  .description,
  .challenges,
  .purpose__content,
  .lessons-learned__content {
    max-width: 75ch;
  }

  h2,
  h3 {
    margin: 0;
  }

  h2,
  h3 {
    margin: 10px 0 5px;
  }

  div {
    font-weight: 300;
    font-size: 15px;
  }

  .sub-heading {
    margin-top: 30px;
  }

  .purpose,
  .lessons-learned {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    grid-gap: 20px;

    img {
      height: 250px;
      object-fit: contain;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      grid-template-columns: 1fr;

      img {
        max-width: 100%;
      }

      &__text {
        margin-left: 0;
      }
    }
  }
`;
