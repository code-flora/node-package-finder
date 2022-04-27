import styled from "styled-components";
import Paper from '@mui/material/Paper';

export const Container = styled.section`
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
`

export const StyledPaper = styled(Paper)`
    width: 100%;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: var(--main-font);
    color: var(--main-color);

    a {
        text-decoration: none;
    }
`
export const PackageName = styled.h1`
    font-size: 1.5rem;
    font-family: var(--code-font);
    color: var(--sub-color);

    @media (min-width: 768px) {
        font-size: 1.8rem;
    }
`
export const PackageDesc = styled.div`
    margin-top: 10px;
    font-size: 0.95rem;

    @media (min-width: 768px) {
        font-size: 1rem;
    }
`

export const UploadInfoBar = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-size: 0.75rem;
    letter-spacing: 0.5px;

    @media (min-width: 768px) {
        font-size: 0.8rem;
    }
`

export const UserName = styled.span`

`
export const UploadDate = styled.span`

`

export const UploadVersion = styled.span`

`

export const KeywordsBar = styled(PackageDesc)`
    width: 100%;
    border-top: 2px solid var(--sub-alt-color);
`
