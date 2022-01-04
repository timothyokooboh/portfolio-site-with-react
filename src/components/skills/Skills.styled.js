import styled from "styled-components"

export const StyledSkills = styled.div`
    background-color: #EDF7FA;
    padding: 30px 20px;
    margin: 60px 100px;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        margin: 30px 20px;
    }

    h4 {
        margin: 0;
        color: #21243D;
    }

    .card {
        background-color: #fff;
        margin-top: 10px;
        padding: 20px;
        border-radius: 2px;
        
        ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            list-style: none;
            margin: 0;
            padding: 0;

            @media(max-width: 470px) {
                flex-direction: column;
                justify-content: flex-start;
            }

            li {
                
                display: flex;
                align-items: center;
                text-transform: capitalize;
                margin: 0 20px 25px;
                
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-right: 10px;
                    background-color: #eee;
                    padding: 10px;

                    @media(max-width: 500px) {
                        width: 30px;
                        height: 30px;
                    }


                }
            }
        }
    }
`