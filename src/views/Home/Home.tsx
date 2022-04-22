import styled from 'styled-components'
import SearchBar from '../../components/Search/SearchBar/SearchBar'

export interface IHomeProps {
    query: any;
    setQuery: any;
    querySubmitted: any;
    setQuerySubmitted: any;
}

export default function Home(props: IHomeProps) {
    // Get query and setQuery from props
    const { query, setQuery, querySubmitted, setQuerySubmitted } = props;

    return (
        <Container querySubmitted={querySubmitted}>
            <Title querySubmitted={querySubmitted}>Build amazing things</Title>
            <SearchBar defaultValue={undefined} query={query} setQuery={setQuery} querySubmitted={querySubmitted} setQuerySubmitted={setQuerySubmitted} />
        </Container>
    );
}

interface querySubmittedProps {
    querySubmitted: boolean;
}

const Container = styled.div<querySubmittedProps>`
height: ${props => props.querySubmitted ? `70px;` : `100vh;`}
width: 100vw;
padding-left: 10%;
padding-right: 10%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: height 0.3s ease-in;

@media (min-width: 1000px) {
    width: 700px;
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

@media (min-width: 1000px) {
    margin-top: unset;
    margin-bottom: unset;
    line-height: normal;
}
`