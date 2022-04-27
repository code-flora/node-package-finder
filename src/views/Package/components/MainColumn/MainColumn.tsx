import TabPanel from '../TabPanel/TabPanel';
import * as S from './MainColumn.styles';
import parse from 'html-react-parser';
import { marked } from 'marked';

export interface IMainColumnProps {
    info: {
        name: string;
        keywords?: string[];
        dependencies?: {};
        devDependencies?: {};
    };
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
        <S.Container>
            <TabPanel value={value} index={0}>
                <S.ReadMe>
                    {readmeData ? renderReadme : noReadmeData}
                </S.ReadMe>
                <S.Keywords>
                    <h2>Keywords</h2>
                    <ul className="ul-style" >{renderKeywords}</ul>
                </S.Keywords>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <S.Dependencies>
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
                </S.Dependencies>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <S.Versions>
                    Under Construction
                </S.Versions>
            </TabPanel>
        </S.Container >
    );
}


