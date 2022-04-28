import { useEffect, useContext, useState } from 'react';
import { StateContextType, StateContext } from '../../context/stateContext';
import * as S from './Package.styles';
import { useParams } from "react-router-dom";
import TabsBar from './components/TabsBar/TabsBar';
import MainColumn from './components/MainColumn/MainColumn';
import SideColumn from './components/SideColumn/SideColumn';
import useFetchMeta from '../../utils/FetchHooks/useFetchMeta';
import useFetchSpecificPackage from '../../utils/FetchHooks/useFetchSpecificPackage';
import convertDateToString from '../../utils/Conversion/convertDateToString';
import Loading from '../../components/StatePages/Loading/Loading';
import Error from '../../components/StatePages/Error/Error';
import useFetchDownloadCount from '../../utils/FetchHooks/useFetchDownloadCount';

export default function Package() {
    // Set states for tab and panels
    const [value, setValue] = useState<number>(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    // Get state and setStates from context
    const { packageInfo, setPackageInfo, setQuery, querySubmitted, setQuerySubmitted } = useContext(StateContext) as StateContextType;

    // Hooks
    let params = useParams();

    // If getting here via direct URL, get name and version from url
    useEffect(() => {
        if (!querySubmitted) {
            // For normal routes /packageName/:id
            if (Object.keys(params).length == 2) {
                let { packageName = "", version = "" } = params;
                setQuery(packageName);
                setQuerySubmitted(packageName);
                setPackageInfo({ name: packageName, version })
            }
            // For other routes like /packageParent/packageName/:id
            else if (Object.keys(params).length == 3) {
                let { packageParent = "", packageName = "", version = "" } = params;
                let actualPackageName: string = `${packageParent}/${packageName}`;
                setQuery(actualPackageName);
                setQuerySubmitted(actualPackageName);
                setPackageInfo({ name: actualPackageName, version })
            }
        }
    })



    let name: string = packageInfo.name!;
    let version: string = packageInfo.version!;
    let date: string | undefined = packageInfo.date;

    // FETCH DATA
    const { data, loading, error } = useFetchSpecificPackage(name, version);
    const { metaData, metaLoading, metaError } = useFetchMeta(name);

    // Getting content to be rendered/passed. Cannot setPackageInfo(uploadDate) as it needs to be inside a useEffect which at this point, messes things up.
    const { readme, uploadDate, versionsCount } = metaData;
    if (!date) {
        date = uploadDate; //using same variable as packageInfo.date for convenience downstream, but this doesn't register into the state. 
    }

    // Convert date to string
    let convertedDate = convertDateToString(date!);

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
        <S.Container className="main-container">
            <S.TitleBar>
                <S.PackageName>{data.name}</S.PackageName>
                <S.PackageDetails>
                    v{data.version}, Published {convertedDate}
                </S.PackageDetails>
            </S.TitleBar>
            <TabsBar info={data} versionsCount={versionsCount} handleChange={handleChange} value={value} />
            <S.ContentWrap>
                <MainColumn info={data} readmeData={readme} value={value} />
                <SideColumn info={data} />
            </S.ContentWrap>
        </S.Container>
    );
}

