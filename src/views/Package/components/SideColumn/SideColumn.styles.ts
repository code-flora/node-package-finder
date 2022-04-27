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
    margin-top: var(--between-sections);

`

export const OtherInfo = styled.div`
    margin-top: var(--between-sections);
    display: flex;
    width: 100%;
`

export const Info = styled.div`
    width: 50%;
`