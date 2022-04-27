import styled from 'styled-components';

export const Container = styled.section`
    padding-right: 20px;
    width: 70%;
    font-family: var(--main-font);

    @media (max-width: 1000px) {
        padding: 20px 0px;
        width: 100%;
    }

    h2{
        color: var(--sub-color);
    }

    .link-style{
        margin-right: 12px;
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--error-extra-color);
        text-decoration: none;
        overflow-wrap: normal;
        transition: color 0.2s ease-in-out;
    }

    .link-style:hover{
        color: var(--main-color);
    }

    .ul-style {
        list-style-type: none;
        padding-inline-start: 0;
        margin-block-start: 0;
    }

    .li-style {
        display: inline;
        line-height: 2rem;
    }
`
export const ReadMe = styled.div`
    h2 {
        margin-bottom: 10px;
    }

    h2:not(:first-of-type) {
        margin-top: 30px;
    }

    code {
        padding: 3px 5px;
        background-color: #ddeff355;
        color: var(--main-color);
    }

    pre {
        padding: 10px 20px;
        width: 100%;
        background-color: #ddeff355;
        overflow-x: auto;
    }

    pre code {
        background-color: transparent;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: var(--error-extra-color);
        font-weight: bold;
    }

    img {
        max-width: 100%;
    }
`

export const Keywords = styled.div`
    margin-top: 20px;

`

export const Dependencies = styled.div`

`
export const Versions = styled.div`

`