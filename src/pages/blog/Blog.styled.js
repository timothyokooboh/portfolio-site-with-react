import styled from "styled-components"

export const StyledBlog = styled.div`
    h3 {
        margin: 0
    }

    & > div {
        margin-bottom: 20px;
    }
`

export const StyledBlogItem = styled.div`
    width: fit-content;
    
    a {
        color: inherit;
        text-decoration: none;
    }
    
    h3 {
        margin-bottom: 5px;
    }

    .description, .tags {
        font-weight: 300;
    }

    .date, .tags {
        font-size: 15px;
    }

    .description {
        padding-top: 5px;
    }

    .date {
        border-right: 1px solid #aaa;
        padding-right: 5px;
    }

    .tag {
        padding-left: 5px;
        color: #8695A4;
        position: relative;

        &:not(:last-child)::after {
            position: absolute;
            content: ",";
        }
    }
`