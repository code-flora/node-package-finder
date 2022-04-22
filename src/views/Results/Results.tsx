import * as React from 'react';
import styled from 'styled-components';
import ResultsCard from '../../components/Search/ResultCard/ResultCard'
import Pages from '../../components/Search/Pagination/Pages'

export interface IResultsProps {
    query: any;
    setQuery: any;
    querySubmitted: any;
    setQuerySubmitted: any;
}

const renderResultCards = (
    <>
        <ResultsCard />
        <ResultsCard />
        <ResultsCard />
    </>
)

export default function Results(props: IResultsProps) {
    return (
        <Container>
            <ResultsDeck>
                <TotalResults>11414 packages found</TotalResults>
                {renderResultCards}
            </ResultsDeck>
            <Pages />
        </Container>
    );
}

const Container = styled.section`
    padding: 20px;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1200px) {
        width: 1000px;
        padding-left: 15%;
        padding-right: 15%;
    }
`

const ResultsDeck = styled.div`
    margin-top: 15px;
    width: 100%;
    text-align: left;
`

const TotalResults = styled.div`
    
`
