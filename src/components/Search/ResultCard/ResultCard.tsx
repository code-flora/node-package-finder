import * as React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export interface IResultCardProps {
}

export default function ResultCard(props: IResultCardProps) {
    return (
        <Container>
            <StyledPaper elevation={2}>
                <PackageName>react-router-dom</PackageName>
                <PackageDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit.</PackageDesc>
                <UploadInfoBar>
                    <UserName>MonkeyBanana</UserName>&nbsp;
                    <UploadVersion>published v6.0.2</UploadVersion>&nbsp;•&nbsp;
                    <UploadDate>on 22th June 2022</UploadDate>
                </UploadInfoBar>
                <KeywordsBar>
                    <Button
                        sx={{ backgroundColor: 'var(--sub-alt-color)', color: 'var(--main-color)', marginRight: '5px', fontFamily: 'var(--code-font)', letterSpacing: '0.3px', textTransform: 'none' }}
                        size="small"
                    >react</Button>
                    <Button
                        sx={{ backgroundColor: 'var(--sub-alt-color)', color: 'var(--main-color)', marginRight: '5px', fontFamily: 'var(--code-font)', letterSpacing: '0.3px', textTransform: 'none' }}
                        size="small"
                    >router</Button>
                </KeywordsBar>
            </StyledPaper>
        </Container>
    );
}

const Container = styled.section`
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
`

const StyledPaper = styled(Paper)`
    width: 100%;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: var(--main-font);
    color: var(--main-color);
`
const PackageName = styled.h1`
    font-size: 1.5rem;
    font-family: var(--code-font);
    color: var(--sub-color);

    @media (min-width: 768px) {
        font-size: 1.8rem;
    }
`
const PackageDesc = styled.div`
    margin-top: 10px;
    font-size: 0.95rem;

    @media (min-width: 768px) {
        font-size: 1rem;
    }
`

const UploadInfoBar = styled.div`
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

const UserName = styled.span`

`
const UploadDate = styled.span`

`

const UploadVersion = styled.span`

`

const KeywordsBar = styled(PackageDesc)`
    padding-top: 10px;
    width: 100%;
    border-top: 2px solid var(--sub-alt-color);
`
