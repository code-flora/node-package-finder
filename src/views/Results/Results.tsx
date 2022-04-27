import { useContext, useEffect } from 'react';
import { StateContextType, StateContext } from '../../context/stateContext';
import styled from 'styled-components';
import ResultCard from './components/ResultCard/ResultCard'
import Pages from '../../components/Search/Pagination/Pages'
import { useSearchParams } from 'react-router-dom';
import useFetchTextSearch from '../../utils/FetchHooks/useFetchTextSearch';
import Loading from '../../components/StatePages/Loading/Loading';
import Error from '../../components/StatePages/Error/Error';

export interface IResultsProps {

}

export default function Results(props: IResultsProps) {
    // Get state and setStates from context
    const { query, setQuery, querySubmitted, setQuerySubmitted } = useContext(StateContext) as StateContextType;

    // Hooks & States
    const [searchParams] = useSearchParams();

    // If someone lands with a direct query url, make homepage a header, and set query with search params
    useEffect(() => {
        if (!query) {
            let searchedQuery = searchParams.get('q')
            setQuerySubmitted(searchedQuery);
            setQuery(searchedQuery);
        }
    }, [query])

    // FETCH DATA
    const { data, loading, error } = useFetchTextSearch(querySubmitted)


    // Render Cards
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

    // RENDER COMPONENT
    // Loading view
    if (loading) {
        return (
            <Loading />
        )
    }

    if (error) {
        return (
            <Error />
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
    width: calc(100vw - 20px);
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
