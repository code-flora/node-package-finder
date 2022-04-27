import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

export interface ILoadingProps {
}

export default function Loading(props: ILoadingProps): JSX.Element {
    return (
        <Container>
            <CircularProgress />
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