import styled from 'styled-components'
import SearchBar from '../../components/Search/SearchBar/SearchBar'
import { Link } from "react-router-dom";

export interface IHomeProps {
    bundle: any;
}

export default function Home(props: IHomeProps) {
    // Get query and setQuery from props
    const { query, setQuery, querySubmitted, setQuerySubmitted } = props.bundle;

    // Resets header to homepage if someone clicks on the logo to return to homepage
    function resetHomepage() {
        setQuerySubmitted(false);
    }

    const logo = (
        <Link to="/"><Logo onClick={resetHomepage}>npf</Logo></Link>
    );

    return (
        <Container querySubmitted={querySubmitted}>
            <Title querySubmitted={querySubmitted}>Build amazing things</Title>
            <HeaderWrap>
                {querySubmitted ? logo : null}
                <SearchBar defaultValue={query || undefined} bundle={props.bundle} />
            </HeaderWrap>
        </Container>
    );
}

interface querySubmittedProps {
    querySubmitted: boolean;
}

const Container = styled.div<querySubmittedProps>`
height: ${props => props.querySubmitted ? `70px;` : `100vh;`}
width: 100vw;
padding: 10px 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: height 0.3s ease-in;

@media (min-width: 1200px){
    width: 1200px;
    padding-left: 15%;
    padding-right: 15%;
}
`
const Title = styled.header<querySubmittedProps>`
    ${props => props.querySubmitted ? `display: none;` : null}
    font-family: var(--main-font);
    font-weight: bold;
    font-size: 3.5rem;
    color: var(--sub-color);
    line-height: 3.2rem;
    margin-top: -50%;
    margin-bottom: 30px;

    @media (min-width: 390px) {
        margin-top: -40%;
    }

    @media (min-width: 559px) {
    margin-top: unset;
    margin-bottom: unset;
    line-height: normal;
    }


`

const HeaderWrap = styled.div` 
    width: 100%;
    display: flex;

    a {
        text-decoration: none;
    }
`

const Logo = styled.span`
    margin-right: 20px;
    font-family: var(--code-font);
    font-size: 2rem;
    font-weight: bold;
    color: white;
    text-shadow: -3px 2px var(--sub-color);
`