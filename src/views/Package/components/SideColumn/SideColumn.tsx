import * as S from './SideColumn.styles'

export interface ISideColumnProps {
    info: any;
}

export default function SideColumn(props: ISideColumnProps) {
    const { name, repository, homepage, version, license } = props.info;

    return (
        <S.Container>
            <S.Install><h3>Install</h3>
                <div className="install-code">npm i {name}</div></S.Install>
            <S.Link><h3>Repository</h3>
                <div>{repository.url}</div>
            </S.Link>
            <S.Link><h3>Homepage</h3>
                <div>{homepage}</div>
            </S.Link>
            <S.OtherInfo>
                <S.Info><h3>Version</h3><div>{version}</div></S.Info>
                <S.Info><h3>License</h3><div>{license}</div></S.Info>
            </S.OtherInfo>
        </S.Container >
    );
}