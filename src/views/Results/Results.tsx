import { useContext, useEffect } from 'react';
import { StateContextType, StateContext } from '../../context/stateContext';
import * as S from "./Results.styles"
import ResultCard from './components/ResultCard/ResultCard'
import Pages from '../../components/Search/Pagination/Pages'
import { useSearchParams } from 'react-router-dom';
import useFetchTextSearch from '../../utils/FetchHooks/useFetchTextSearch';
import Loading from '../../components/StatePages/Loading/Loading';
import Error from '../../components/StatePages/Error/Error';

export default function Results() {
    // Get state and setStates from context
    const { query, setQuery, querySubmitted, setQuerySubmitted } = useContext(StateContext) as StateContextType;

    // Hooks & States
    const [searchParams] = useSearchParams();

    // If someone lands with a direct query url, make homepage a header, and set query with search params
    useEffect(() => {
        if (!query) {
            let searchedQuery = searchParams.get('q')
            if (typeof searchedQuery == 'string') {
                setQuerySubmitted(searchedQuery);
                setQuery(searchedQuery);
            }
        }
    }, [query])

    // FETCH DATA
    const { data, loading, error } = useFetchTextSearch(querySubmitted, query)

    // Render Cards
    let renderResultCards;
    if (data) {
        renderResultCards = data.objects.map((item: any) => {
            const { package: thePackage } = item;
            return (
                <ResultCard
                    key={thePackage.name}
                    name={thePackage.name}
                    version={thePackage.version}
                    description={thePackage.description}
                    date={thePackage.date}
                    publisher={thePackage.publisher.username}
                    keywords={thePackage.keywords}
                />
            )
        })
    }

    // RENDER COMPONENT
    // Loading view
    if (loading) {
        return (
            <S.Container>
                <Loading />
            </S.Container>
        )
    }

    if (error) {
        return (
            <S.Container>
                <Error />
            </S.Container>
        )
    }

    return (
        <S.Container className="main-container">
            <S.ResultsDeck>
                <S.TotalResults>{data.total} packages found</S.TotalResults>
                <>
                    {!loading ? renderResultCards : null}
                </>
            </S.ResultsDeck>
            <Pages />
        </S.Container>
    );
}
