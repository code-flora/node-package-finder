import * as React from 'react';
import styled from 'styled-components';

export interface IMainColumnProps {
}

export default function MainColumn(props: IMainColumnProps) {

    return (
        <Container>
            <ReadMe>
                Read me<br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsam beatae quo ex vero doloremque, alias corporis tempore vitae ea esse rem culpa nemo eligendi veniam consequuntur similique illum tempora voluptatum ?
            </ReadMe>
            <Dependencies>
                <h2>Dependencies</h2>
                <a href="" className="dep-links">@babel/helper-module-imports</a>
                <a href="" className="dep-links">@babel/helper-module-imports</a><a href="" className="dep-links">@babel/helper-module-imports</a><a href="" className="dep-links">@babel/helper-module-imports</a><a href="" className="dep-links">@babel/helper-module-imports</a>

                <h2>Dev Dependencies</h2>
                <a href="" className="dep-links">@babel/helper-module-imports</a><a href="" className="dep-links">@babel/helper-module-imports</a><a href="" className="dep-links">@babel/helper-module-imports</a><a href="" className="dep-links">@babel/helper-module-imports</a><a href="" className="dep-links">@babel/helper-module-imports</a>
            </Dependencies>
            <Dependents>
                <h2>Dependents</h2>
                <a href="" className="dep-links">@babel/helper-module-imports</a><a href="" className="dep-links">@babel/helper-module-imports</a><a href="" className="dep-links">@babel/helper-module-imports</a><a href="" className="dep-links">@babel/helper-module-imports</a><a href="" className="dep-links">@babel/helper-module-imports</a>
                and more...
            </Dependents>

        </Container >
    );
}

const Container = styled.section`
    padding: 20px;
    width: 70%;

    @media (max-width: 1000px) {
        padding: 20px 10px;
        width: 100%;
    }

    h2{
        color: var(--sub-color);
    }

    .dep-links{
        margin-right: 8px;
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--error-extra-color);
        text-decoration: none;
        transition: color 0.2s ease-in-out;
    }

    .dep-links:hover{
        color: var(--main-color);
    }
`
const ReadMe = styled.div`
`

const Dependencies = styled.div`
`

const Dependents = styled.div`
`