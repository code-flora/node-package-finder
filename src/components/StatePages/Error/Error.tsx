import styled from 'styled-components';

export interface IErrorProps {
}

export default function Error(props: IErrorProps): JSX.Element {
    return (
        <Container>
            Sorry, we can't find what you're looking for.
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