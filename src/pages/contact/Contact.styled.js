import styled from "styled-components"

export const ContactContainer = styled.div`
    max-width: 500px;
    margin: auto;

    form > div {
        margin-bottom: 20px;
    }

    label {
        display: block;
        font-weight: 300;
        font-size: 15px;
    }

    input {
        display: block;
        width: 100%;
        height: 40px;
    }

    textarea {
        width: 100%;
        height: 150px;
        resize: none;;
    }

    input, textarea {
        outline: none;
        padding: 5px 10px;
        border-radius: 3px;
        border: 1px solid #ccc;

        &:focus {
            border-color: dodgerblue;
        }
    }

    button {
        width: 100%;
        outline: none;
        border: none;
        padding: 10px 15px;
        background-color: #FF6464;
        color: #fff;
        font-size: 16px;
        margin-top: 20px;
        margin-bottom: 50px;
        transition: all 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
            transform: translateY(-1px);
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .2);
        }
    }

`