import styled from 'styled-components';

export interface IErrorProps {
}

export default function Error(props: IErrorProps): JSX.Element {
    return (
        <Container className="state-container">
            <p className="state-emoji">😅</p>
            <h2>Sorry, we can't find what you're looking for.</h2>
            <p>Perhaps you would like to try a different search term?</p>
        </Container>
    );
}

const Container = styled.div`

`