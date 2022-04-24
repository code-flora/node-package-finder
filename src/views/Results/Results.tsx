import * as React from 'react';
import styled from 'styled-components';
import ResultCard from '../../components/Search/ResultCard/ResultCard'
import Pages from '../../components/Search/Pagination/Pages'
import { useSearchParams } from 'react-router-dom';
import useFetchTextSearch from '../../utils/useFetchTextSearch';

export interface IResultsProps {
    bundle: any;
}

export default function Results(props: IResultsProps) {
    const { query, setQuery, querySubmitted, setQuerySubmitted, searchResults, setSearchResults } = props.bundle;

    //Hooks & States
    const [searchParams] = useSearchParams();

    //If someone lands with a direct query url, make homepage a header, and set query with search params
    React.useEffect(() => {
        if (!query) {
            let searchedQuery = searchParams.get('q')
            setQuerySubmitted(searchedQuery);
            setQuery(searchedQuery);
        }
    }, [query])

    //fetch data
    const { data, loading, error } = useFetchTextSearch(querySubmitted)
    console.log(data)

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


    // if (data) {
    //     renderResultCards = data.objects.map((item: any) => {
    //         return (
    //             <h1>{item.package.name}</h1>
    //         )
    //     })
    // }


    // const renderResultCards = (
    //     <>
    //         <ResultCard data={'1'} />
    //         <ResultCard data={'2'} />
    //     </>
    // )

    //RENDER COMPONENT
    if (loading) {
        return (
            <Container>
                Loading...
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
    
`
