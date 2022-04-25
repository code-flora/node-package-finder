import React, { useContext, useEffect } from 'react';
import { StateContextType, StateContext } from '../../context/stateContext';
import styled from 'styled-components';
import ResultCard from '../../components/Search/ResultCard/ResultCard'
import Pages from '../../components/Search/Pagination/Pages'
import { useSearchParams } from 'react-router-dom';
import useFetchTextSearch from '../../utils/FetchHooks/useFetchTextSearch';

export interface IResultsProps {

}

export default function Results(props: IResultsProps) {
    // Get state and setStates from context
    const { query, setQuery, querySubmitted, setQuerySubmitted, searchResults, setSearchResults } = useContext(StateContext) as StateContextType;


    //Hooks & States
    const [searchParams] = useSearchParams();

    //If someone lands with a direct query url, make homepage a header, and set query with search params
    useEffect(() => {
        if (!query) {
            let searchedQuery = searchParams.get('q')
            setQuerySubmitted(searchedQuery);
            setQuery(searchedQuery);
        }
    }, [query])

    //fetch data
    const { data, loading, error } = useFetchTextSearch(querySubmitted)

    //Render Cards
    let renderResultCards;
    if (data) {
        renderResultCards = data.objects.map((item: any) => {
            return (
                <ResultCard
                    key={item.package.name}
                    name={item.package.name}
                    version={item.package.version}
                    description={item.package.description}
                    date={item.package.date}
                    publisher={item.package.publisher.username}
                    keywords={item.package.keywords}
                />
            )
        })
    }

    //RENDER COMPONENT
    //Loading view: To add loader
    if (loading) {
        return (
            <Container>
                Loading...
            </Container>
        )
    }

    if (error) {
        return (
            <Container>
                We can't find what you're looking for.
            </Container>
        )
    }

    return (
        <Container>
            <ResultsDeck>
                <TotalResults>{data.total} packages found</TotalResults>
                <>
                    {!loading ? renderResultCards : null}
                </>
            </ResultsDeck>
            <Pages />
        </Container>
    );
}

const Container = styled.section`
    padding: 20px;
    width: 100vw;
    min-height: calc(100vh-70px);
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
    font-family: var(--main-font);
    font-weight: bold;
    font-size: 1.2rem;
    
`
