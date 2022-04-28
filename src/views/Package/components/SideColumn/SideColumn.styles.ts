import styled from "styled-components";

export const Container = styled.aside`
    padding: 20px;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #ddeff344;

    @media (max-width: 1000px) {
        padding: 20px 10px;
        width: 100%;
    }

    h3 {
        color: var(--sub-color);
        letter-spacing: 1px;
    }
`

export const Install = styled.div`
    .install-code {
        margin-top: 5px;
        padding: 10px 15px;
        border: 1px solid var(--sub-color);
        border-radius: 5px;
        font-family: var(--code-font);
    }   
`

export const Link = styled.div`
    width: 100%;
    margin-top: var(--between-sections);

    div {
        width: calc(100%);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    a {
        text-decoration: none;
        color: var(--error-extra-color);
        transition: color 0.2s ease-in;
    }

    a:hover {
        color: var(--main-color);
    }
`

export const OtherInfo = styled.div`
    margin-top: var(--between-sections);
    display: flex;
    width: 100%;
`

export const Info = styled.div`
    width: 50%;
`