import { useEffect, useState } from 'react';

const useFetchMeta = (name: string) => {
    const [readme, setReadme] = useState<string | null>(null);
    const [versionsCount, setVersionsCount] = useState<number>(0);
    const [uploadDate, setUploadDate] = useState<string>("");
    const [metaLoading, setLoading] = useState<boolean>(true);
    const [metaError, setError] = useState<[] | null>(null);

    useEffect(() => {
        if (name) {
            let endpoint = `https://registry.npmjs.cf/${name}`;

            let header = {
                crossDomain: true,
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }

            fetch(endpoint, header)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw response;
                }).then(data => {
                    let versionsArray = Object.keys(data.versions)
                    let latestVersion = versionsArray.pop()
                    let readMe, publishDate;
                    if (latestVersion) {
                        readMe = data.versions[latestVersion].readme
                        publishDate = data.time[latestVersion]
                    }
                    setReadme(readMe);
                    setUploadDate(publishDate);
                    setVersionsCount(versionsArray.length);
                })
                .catch(error => {
                    setError(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [name])
    type TData = {
        readme: string | null,
        uploadDate: string,
        versionsCount: number
    }
    let metaData: TData = { readme, uploadDate, versionsCount }
    return { metaData, metaLoading, metaError };
}

export default useFetchMeta;