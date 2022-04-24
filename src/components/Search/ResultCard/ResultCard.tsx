import * as React from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import KeywordButton from './KeywordButton'

export interface IResultCardProps {
    name: string;
    version: string;
    description: string;
    date: any;
    publisher: string;
    keywords: [];
}

export default function ResultCard(props: IResultCardProps) {
    const { name, version, description, date, publisher, keywords } = props;

    //render keyword buttons
    let keywordButtons;
    if (keywords) {
        keywordButtons = (
            keywords.map((keyword: string) => {
                return (
                    <KeywordButton keyword={keyword} key={keyword} />
                )
            })
        )
    }

    // const keywordButtons = (
    //     <KeywordButton keyword={'react'} />
    // )

    return (
        <Container>
            <StyledPaper elevation={2}>
                <PackageName>{name}</PackageName>
                {description ? (<PackageDesc>{description}</PackageDesc>) : null}
                <UploadInfoBar>
                    <UserName>{publisher}</UserName>&nbsp;
                    <UploadVersion>published v{version}</UploadVersion>&nbsp;•&nbsp;
                    <UploadDate>on {date}</UploadDate>
                </UploadInfoBar>
                {keywords ? (
                    <KeywordsBar>
                        {keywordButtons}
                    </KeywordsBar>
                ) : null}

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
    width: 100%;
    border-top: 2px solid var(--sub-alt-color);
`
