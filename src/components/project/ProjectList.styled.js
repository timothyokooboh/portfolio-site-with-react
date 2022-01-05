import styled from "styled-components";

export const StyledProjectList = styled.div`
    h4 {
        color: #21243D;
        font-weight: 300;
    }
   
    .project-item {
        margin-bottom: 50px;
        padding-bottom: 10px;
        display: flex;
        border-bottom: 1px solid #eee;

        @media(max-width: ${({ theme }) => theme.miniMobile}) {
            flex-direction: column;
           
        }

        &:hover {
            cursor: pointer;
        }

        .project-content {
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
`

export const StyledProjectImage = styled.div`
    background-image: url(${({ image }) => image});
    background-size: cover;
    background-position: center top;
    padding: 100px;
    margin-right: 10px;
    margin-bottom: 20px;

    @media(max-width: ${({ theme }) => theme.miniMobile}) {
        flex-direction: column;
        padding: 150px 100px;
    }
`