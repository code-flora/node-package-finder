import { useEffect, useContext, useState } from 'react';
import { StateContextType, StateContext } from '../../context/stateContext';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import TabsBar from './components/TabsBar/TabsBar';
import MainColumn from './components/MainColumn/MainColumn';
import SideColumn from './components/SideColumn/SideColumn';
import useFetchMeta from '../../utils/FetchHooks/useFetchMeta';
import useFetchSpecificPackage from '../../utils/FetchHooks/useFetchSpecificPackage';
import convertDateToString from '../../utils/Conversion/convertDateToString';
import Loading from '../../components/StatePages/Loading/Loading';
import Error from '../../components/StatePages/Error/Error';

export interface IPackageProps {

}

export default function Package(props: IPackageProps) {
    // Set states for tab and panels
    const [value, setValue] = useState<number>(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    // Hooks
    let params = useParams();

    // If getting here via direct URL, get name and version from url
    useEffect(() => {
        if (!querySubmitted) {
            // For normal routes /packageName/:id
            if (Object.keys(params).length == 2) {
                let { packageName, version } = params;
                setQuery(packageName);
                setQuerySubmitted(packageName);
                setPackageInfo({ name: packageName, version })
            }
            // For other routes like /packageParent/packageName/:id
            else if (Object.keys(params).length == 3) {
                let { packageParent, packageName, version } = params;
                let actualPackageName: string = `${packageParent}/${packageName}`;
                setQuery(actualPackageName);
                setQuerySubmitted(actualPackageName);
                setPackageInfo({ name: actualPackageName, version })
            }
        }
    }, [])

    // Get state and setStates from context
    const { packageInfo, setPackageInfo, setQuery, querySubmitted, setQuerySubmitted } = useContext(StateContext) as StateContextType;
    let name, version;
    if (packageInfo) {
        name = packageInfo.name;
        version = packageInfo.version;
    }

    // FETCH DATA
    const { data, loading, error } = useFetchSpecificPackage(name, version);
    const { metaData, metaLoading, metaError } = useFetchMeta(name);

    // Getting content to be rendered/passed
    const { readme, uploadDate, versionsCount } = metaData;
    let date = convertDateToString(uploadDate);

    // RENDER VIEWS
    if (loading || metaLoading) {
        return (
            <Loading />
        )
    }

    if (error || metaError) {
        return (
            <Error />
        )
    }

    return (
        <Container>
            <TitleBar>
                <PackageName>{data.name}</PackageName>
                <PackageDetails>
                    v{data.version}, Published {date}
                </PackageDetails>
            </TitleBar>
            <TabsBar info={data} versionsCount={versionsCount} handleChange={handleChange} value={value} />
            <ContentWrap>
                <MainColumn info={data} readmeData={readme} value={value} />
                <SideColumn info={data} />
            </ContentWrap>
        </Container>
    );
}

const Container = styled.div`
    padding: 10px 20px;
    width: calc(100vw - 20px);
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

const TitleBar = styled.div`
    margin-top: var(--between-sections);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

const PackageName = styled.h1`
    font-size: 1.5rem;
    font-family: var(--code-font);
    color: var(--sub-color);

    @media (min-width: 768px) {
        font-size: 1.8rem;
    }
`
const PackageDetails = styled.span`
    font-size: 0.75rem;
    letter-spacing: 0.5px;
`
const ContentWrap = styled.div`
    margin-top: var(--between-sections);
    display: flex;
    width: 100%;
    min-height: 50vh;
    text-align: left;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`