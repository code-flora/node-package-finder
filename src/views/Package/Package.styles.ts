import styled from "styled-components";

export const Container = styled.div`
    color: var(--main-color);
    font-family: var(--main-font);
`

export const TitleBar = styled.div`
    margin-top: var(--between-sections);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

export const PackageName = styled.h1`
    font-size: 1.5rem;
    font-family: var(--code-font);
    color: var(--sub-color);

    @media (min-width: 768px) {
        font-size: 1.8rem;
    }
`
export const PackageDetails = styled.span`
    font-size: 0.75rem;
    letter-spacing: 0.5px;
`
export const ContentWrap = styled.div`
    margin-top: var(--between-sections);
    display: flex;
    width: 100%;
    min-height: 50vh;
    text-align: left;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`