import { useContext } from 'react';
import { StateContextType, StateContext } from '../../context/stateContext';
import * as S from './Home.styles'
import SearchBar from '../../components/Search/SearchBar/SearchBar';
import { Link } from "react-router-dom";

export default function Home() {
    // Get state and setStates from context
    const { setQuery, querySubmitted, setQuerySubmitted } = useContext(StateContext) as StateContextType;

    // Resets header to homepage if someone clicks on the logo to return to homepage
    function resetHomepage() {
        setQuerySubmitted("");
        setQuery("");
    }

    const logo = (
        <Link to="/" onClick={resetHomepage}><S.Logo >npf</S.Logo></Link>
    );

    return (
        <S.Container querySubmitted={querySubmitted} data-testid="home-header">
            <S.Title querySubmitted={querySubmitted}>Build amazing things</S.Title>
            <S.HeaderWrap>
                {querySubmitted ? logo : null}
                <SearchBar />
            </S.HeaderWrap>
        </S.Container>
    );
}

