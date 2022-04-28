import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { StateContextType, StateContext } from '../../../context/stateContext';

export interface INotFoundProps {
}

export default function NotFound(props: INotFoundProps): JSX.Element {
    const { setQuerySubmitted } = useContext(StateContext) as StateContextType;

    useEffect(() => {
        setQuerySubmitted("not found");
    })

    return (
        <Container className="state-container">
            <p className="state-emoji">👻</p>
            <h1>You open your eyes and find yourself in a void.</h1>
            <p>You're welcome to stay here for as long as you want.</p>
            <p>Our resident ghost will keep you company while you contemplate life, or search for your next package.</p>
        </Container>
    );
}

const Container = styled.div`
    background-color: var(--main-color);
    color: white;
`