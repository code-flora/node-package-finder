import { useContext } from 'react';
import { StateContextType, StateContext } from '../../../../context/stateContext';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import KeywordButton from '../KeywordButton/KeywordButton'
import { Link } from "react-router-dom";
import convertDateToString from '../../../../utils/Conversion/convertDateToString';

export interface IResultCardProps {
    name: string;
    version: string;
    description: string;
    date: string;
    publisher: string;
    keywords: [];
}

export default function ResultCard(props: IResultCardProps) {
    const { name, version, description, date, publisher, keywords } = props;

    // Get state and setStates from context
    const { setPackageInfo } = useContext(StateContext) as StateContextType;

    // Capture name and version on click, for specific package API
    const captureParams = () => {
        let params = { name, version, date }
        setPackageInfo(params)
    }

    // Convert date from iso type
    let publishDate = convertDateToString(date);


    // Render keyword buttons
    let keywordButtons;
    if (keywords) {
        keywordButtons = (
            keywords.map((keyword: string, index: number) => {
                return (
                    <KeywordButton keyword={keyword} key={`${name}-${keyword}-${index}`} />
                )
            })
        )
    }

    return (
        <Container>
            <StyledPaper elevation={2}>
                <Link to={`/package/${name}/${version}`} onClick={captureParams}>
                    <PackageName>{name}</PackageName>
                </Link>
                {description ? (<PackageDesc>{description}</PackageDesc>) : null}
                <UploadInfoBar>
                    <UserName>{publisher}</UserName>&nbsp;
                    <UploadVersion>published v{version}</UploadVersion>&nbsp;•&nbsp;
                    <UploadDate>on {publishDate}</UploadDate>
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

    a {
        text-decoration: none;
    }
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
