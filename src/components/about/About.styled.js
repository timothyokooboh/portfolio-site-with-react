import styled from 'styled-components';

export const StyledAbout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 100px;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column-reverse;
        text-align: center;
        margin: 30px 20px;
    }

    & > *:first-child {
        margin-right: 10px;
        h1 {
            color: #21243D;
            font-weight: bold;
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
                background-color: #FF6464;
                width: 100%;
                height: 5px;
            }
        }
    }

    .img-container {
        width: 243px;
        height: 243px;
        border-radius: 50%;
        background-color: #EDF7FA;
        padding-bottom: 15px;
        padding-left: 5px;

        img {
            object-fit: cover;
            border-radius: 50%;
            width: 243px;
            height: 243px;
            position: relative;
            pointer-events: none;
        }
    }


`