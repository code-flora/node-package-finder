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
                    let readMe: string | null = null, publishDate: string = "", versionsArray: string[];

                    //Get all the versions from metadata, and the latest version (for date and readme, if default readme isn't available)
                    versionsArray = Object.keys(data.versions);
                    setVersionsCount(versionsArray.length);

                    let latestVersion = versionsArray.pop()

                    // if there is default readme, use it, else, go into the versions to extract that readme
                    if (data.readme && latestVersion) {
                        readMe = data.readme;
                        publishDate = data.time[latestVersion]
                    } else if (latestVersion) {
                        readMe = data.versions[latestVersion].readme
                        publishDate = data.time[latestVersion]
                    }

                    setReadme(readMe);
                    setUploadDate(publishDate);
                })
                .catch(error => {
                    setError(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [name])

    let metaData = { readme, uploadDate, versionsCount }
    return { metaData, metaLoading, metaError };
}

export default useFetchMeta;