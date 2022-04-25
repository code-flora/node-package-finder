import * as React from 'react';
import styled from 'styled-components';

export interface ISideColumnProps {
    info: any;
}

export default function SideColumn(props: ISideColumnProps) {
    const { name, repository, homepage, version, license } = props.info;

    return (
        <Container>
            <Install><h3>Install</h3>
                <div className="install-code">npm i {name}</div></Install>
            <Link><h3>Repository</h3>
                <div>{repository.url}</div>
            </Link>
            <Link><h3>Homepage</h3>
                <div>{homepage}</div>
            </Link>
            <OtherInfo>
                <Info><h3>Version</h3><div>{version}</div></Info>
                <Info><h3>License</h3><div>{license}</div></Info>
            </OtherInfo>
        </Container >
    );
}

const Container = styled.aside`
    padding: 20px;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #ddeff344;

    @media (max-width: 1000px) {
        padding: 20px 10px;
        width: 100%;
    }

    h3 {
        color: var(--sub-color);
        letter-spacing: 1px;
    }
`

const Install = styled.div`
    .install-code {
        margin-top: 5px;
        padding: 10px 15px;
        border: 1px solid var(--sub-color);
        border-radius: 5px;
        font-family: var(--code-font);
    }   
`

const Link = styled.div`
    margin-top: var(--between-sections);

`

const OtherInfo = styled.div`
    margin-top: var(--between-sections);
    display: flex;
    width: 100%;
`

const Info = styled.div`
    width: 50%;
`