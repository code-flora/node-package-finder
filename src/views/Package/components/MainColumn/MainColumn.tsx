import * as React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { marked } from 'marked';

export interface IMainColumnProps {
    info: any;
    readmeData: string | null;
}

export default function MainColumn(props: IMainColumnProps) {
    // Get props and declare variables for future rendering
    const { info, readmeData } = props;
    let renderDependencies, renderDevDependencies, renderReadme;

    //render dependencies
    if (info.dependencies) {
        let depArray = Object.keys(info.dependencies);
        renderDependencies = depArray.map((dep) => {
            return (
                <li key={dep}><a href="" className="dep-links" >{dep}</a></li>
            )
        })
    }

    if (info.devDependencies) {
        let devDepArray = Object.keys(info.devDependencies);
        renderDevDependencies = devDepArray.map((dep) => {
            return (
                <li key={dep}><a href="" className="dep-links" >{dep}</a></li>
            )
        })
    }

    if (readmeData) {
        //parse markdown to html
        let markdownToHtml = marked.parse(readmeData)
        //parse html to elements
        renderReadme = parse(markdownToHtml);
    }

    const noReadmeData = (
        <h2>No Readme.md found</h2>
    )

    return (
        <Container>
            <ReadMe>
                {readmeData ? renderReadme : noReadmeData}
            </ReadMe>
            <Dependencies>
                <h2>Dependencies</h2>
                <ul>{renderDependencies}</ul>

                {info.devDependencies ? (
                    <>
                        <h2>Dev Dependencies</h2>
                        <ul>{renderDevDependencies}</ul>
                    </>
                ) : null}

            </Dependencies>
        </Container >
    );
}

const Container = styled.section`
    padding-right: 20px;
    width: 70%;
    font-family: var(--main-font);

    @media (max-width: 1000px) {
        padding: 20px 0px;
        width: 100%;
    }

    h2{
        color: var(--sub-color);
    }

    .dep-links{
        margin-right: 12px;
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--error-extra-color);
        text-decoration: none;
        overflow-wrap: normal;
        transition: color 0.2s ease-in-out;
    }

    .dep-links:hover{
        color: var(--main-color);
    }
`
const ReadMe = styled.div`
    h2 {
        margin-bottom: 10px;
    }

    h2:not(:first-of-type) {
        margin-top: 30px;
    }

    code {
        padding: 3px 5px;
        background-color: #ddeff355;
        color: var(--main-color);
    }

    pre {
        padding: 10px 20px;
        width: 100%;
        background-color: #ddeff355;
        overflow-x: auto;
    }

    pre code {
        background-color: transparent;
    }

    a {
        text-decoration: none;
        color: var(--error-extra-color);
        font-weight: bold;
    }

    img {
        max-width: 100%;
    }
`

const Dependencies = styled.div`
    ul {
        list-style-type: none;
        padding-inline-start: 0;
        margin-block-start: 0;
    }

    li {
        display: inline;
    }
`

