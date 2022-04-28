import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

export interface ILoadingProps {
}

export default function Loading(props: ILoadingProps): JSX.Element {
    return (
        <Container className="state-container">
            <CircularProgress />
            <br></br>
            <h2>Our 🐹 are working very hard to get you the packages!</h2>
        </Container>
    );
}

const Container = styled.div`

`