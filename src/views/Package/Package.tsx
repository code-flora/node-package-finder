import * as React from 'react';
import styled from 'styled-components';
import TabsBar from './components/TabsBar/TabsBar';
import MainColumn from './components/MainColumn/MainColumn';
import SideColumn from './components/SideColumn/SideColumn';

export interface IPackageProps {
    bundle: any;
}

export default function Package(props: IPackageProps) {
    const { setQuerySubmitted } = props.bundle;

    //ensure homepage is header sized if getting here via direct url
    React.useEffect(() => {
        setQuerySubmitted(true);
    }, [])

    return (
        <Container>
            <TitleBar>
                <PackageName>react-router-dom</PackageName>
                <PackageDetails>
                    v6.0.2, Published 22th June 2022
                </PackageDetails>
            </TitleBar>
            <TabsBar />
            <ContentWrap>
                <MainColumn />
                <SideColumn />
            </ContentWrap>

        </Container>
    );
}

const Container = styled.div`
    padding: 10px 20px;
    width: 100vw;
    min-height: calc(100vh-70px);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--main-color);
    font-family: var(--main-font);

    @media (min-width: 1200px) {
        width: 1200px;
    }
`

const SearchBarWrap = styled.header`
width: 100%;

@media (min-width: 1200px){
    width: 100%;
    padding-left: 15%;
    padding-right: 15%;
}
`

const TitleBar = styled.div`
    margin-top: var(--between-sections);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

const PackageName = styled.h1`
    font-size: 1.5rem;
    font-family: var(--code-font);
    color: var(--sub-color);

    @media (min-width: 768px) {
        font-size: 1.8rem;
    }
`
const PackageDetails = styled.span`
    font-size: 0.75rem;
    letter-spacing: 0.5px;
`
const ContentWrap = styled.div`
    margin-top: var(--between-sections);
    display: flex;
    width: 100%;
    min-height: 50vh;
    text-align: left;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`