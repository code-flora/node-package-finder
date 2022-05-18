import { useContext } from 'react';
import { StateContextType, StateContext } from '../../../../context/stateContext';
import * as S from './ResultCard.styles';
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
        <S.Container data-testid="result-card">
            <S.StyledPaper elevation={2}>
                <Link to={`/package/${name}/${version}`} onClick={captureParams}>
                    <S.PackageName>{name}</S.PackageName>
                </Link>
                {description ? (<S.PackageDesc>{description}</S.PackageDesc>) : null}
                <S.UploadInfoBar>
                    <S.UserName>{publisher}</S.UserName>&nbsp;
                    <S.UploadVersion>published v{version}</S.UploadVersion>&nbsp;•&nbsp;
                    <S.UploadDate>on {publishDate}</S.UploadDate>
                </S.UploadInfoBar>
                {keywords ? (
                    <S.KeywordsBar>
                        {keywordButtons}
                    </S.KeywordsBar>
                ) : null}

            </S.StyledPaper>
        </S.Container>
    );
}


