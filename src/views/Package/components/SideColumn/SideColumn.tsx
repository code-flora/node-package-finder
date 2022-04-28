import * as S from './SideColumn.styles'
import convertUrlToLink from '../../../../utils/Conversion/convertUrlToLink';

export interface ISideColumnProps {
    info: {
        name: string;
        repository?: { url?: string };
        homepage?: string;
        version: string;
        license?: string;
    };
}

export default function SideColumn(props: ISideColumnProps) {
    const { name, repository, homepage, version, license } = props.info;

    let repositoryLink: JSX.Element, homepageLink: JSX.Element;
    if (repository && repository.url) {
        repositoryLink = convertUrlToLink(repository.url)
    }
    if (homepage) {
        homepageLink = convertUrlToLink(homepage)
    }


    return (
        <S.Container>
            <S.Install><h3>Install</h3>
                <div className="install-code">npm i {name}</div></S.Install>
            <S.Link><h3>Repository</h3>
                <div>{repository ? repositoryLink! : "N/A"}</div>
            </S.Link>
            <S.Link><h3>Homepage</h3>
                <div>{homepage ? homepageLink! : "N/A"}</div>
            </S.Link>
            <S.OtherInfo>
                <S.Info><h3>Version</h3><div>{version}</div></S.Info>
                <S.Info><h3>License</h3><div>{license}</div></S.Info>
            </S.OtherInfo>
        </S.Container >
    );
}