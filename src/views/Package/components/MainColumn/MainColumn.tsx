import TabPanel from '../TabPanel/TabPanel';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { marked } from 'marked';

export interface IMainColumnProps {
    info: any;
    readmeData: string | null;
    value: number;
}

export default function MainColumn(props: IMainColumnProps) {
    // Get props and declare variables for future rendering
    const { info, readmeData, value } = props;
    let renderReadme, renderKeywords, renderDependencies, renderDevDependencies;

    // Render Readme data
    if (readmeData) {
        //parse markdown to html
        let markdownToHtml = marked.parse(readmeData)
        //parse html to elements
        renderReadme = parse(markdownToHtml);
    }

    const noReadmeData = (
        <h2>No Readme.md found</h2>
    )

    // Render keywords
    if (info.keywords) {
        renderKeywords = info.keywords.map((keyword: string, index: number) => {
            return (
                <li key={`${keyword}-${index}`} className="li-style">
                    <a href={`/search?q=keywords:${keyword}`} className="link-style">{keyword}</a>
                </li>
            )
        })
    }

    // Render dependencies
    if (info.dependencies) {
        let depArray = Object.keys(info.dependencies);
        renderDependencies = depArray.map((dep) => {
            return (
                <li key={dep} className="li-style"><a href="#" className="link-style" >{dep}</a></li>
            )
        })
    }

    if (info.devDependencies) {
        let devDepArray = Object.keys(info.devDependencies);
        renderDevDependencies = devDepArray.map((dep) => {
            return (
                <li key={dep} className="li-style"><a href="#" className="link-style" >{dep}</a></li>
            )
        })
    }

    return (
        <Container>
            <TabPanel value={value} index={0}>
                <ReadMe>
                    {readmeData ? renderReadme : noReadmeData}
                </ReadMe>
                <Keywords>
                    <h2>Keywords</h2>
                    <ul className="ul-style" >{renderKeywords}</ul>
                </ Keywords>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Dependencies>
                    {info.dependencies ? (
                        <>
                            <h2>Dependencies</h2>
                            <ul className="ul-style">{renderDependencies}</ul>
                        </>
                    ) : null}


                    {info.devDependencies ? (
                        <>
                            <h2>Dev Dependencies</h2>
                            <ul className="ul-style">{renderDevDependencies}</ul>
                        </>
                    ) : null}
                </Dependencies>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Versions>
                    Under Construction
                </Versions>
            </TabPanel>
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

    .link-style{
        margin-right: 12px;
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--error-extra-color);
        text-decoration: none;
        overflow-wrap: normal;
        transition: color 0.2s ease-in-out;
    }

    .link-style:hover{
        color: var(--main-color);
    }

    .ul-style {
        list-style-type: none;
        padding-inline-start: 0;
        margin-block-start: 0;
    }

    .li-style {
        display: inline;
        line-height: 2rem;
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
        padding: 0;
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

const Keywords = styled.div`
margin-top: 20px;

`

const Dependencies = styled.div`

`
const Versions = styled.div`

`
