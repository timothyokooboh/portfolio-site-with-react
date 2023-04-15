import styled from "styled-components";

export const StyledSkills = styled.div`
  background-color: #edf7fa;
  padding: 30px 20px;
  margin: 60px 0 30px;
  animation: slideUp 0.3s ease-out;

  .main-skills {
    margin-bottom: 30px;
  }

  .heading {
    margin: 0;
    color: #454545;
    font-weight: 500;
  }

  .card {
    background-color: #fff;
    margin-top: 10px;
    padding: 20px 10px;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;

      @media (max-width: 470px) {
        flex-direction: column;
        justify-content: flex-start;
      }

      li {
        display: flex;
        align-items: center;
        margin: 10px;

        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 10px;
          background-color: #eee;
          padding: 10px;

          @media (max-width: 500px) {
            width: 30px;
            height: 30px;
          }
        }
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
  }
`;
