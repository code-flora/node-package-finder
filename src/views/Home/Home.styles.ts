import styled from 'styled-components';

interface querySubmittedProps {
    querySubmitted: string;
}

export const Container = styled.div<querySubmittedProps>`
height: ${props => props.querySubmitted ? `70px;` : `100vh;`}
width: calc(100vw - 20px);
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
export const Title = styled.header<querySubmittedProps>`
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

export const HeaderWrap = styled.div` 
    width: 100%;
    display: flex;

    a {
        text-decoration: none;
    }
`

export const Logo = styled.span`
    margin-right: 20px;
    font-family: var(--code-font);
    font-size: 2rem;
    font-weight: bold;
    color: white;
    text-shadow: -3px 2px var(--sub-color);
`