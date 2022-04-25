import { useEffect, useState } from 'react';

const useFetchDownloadCount = (name: string) => {
    const [data, setData] = useState<any | null>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<[] | null>(null);

    useEffect(() => {
        if (name) {
            let endpoint = `https://registry.npmjs.org/last-week/${name}`;

            let header = {
                crossDomain: true,
                requestMode: 'cors',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            }

            fetch(endpoint, header)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw response;
                }).then(data => {
                    setData(data)
                })
                .catch(error => {
                    setError(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [name])

    return { data, loading, error };
}

export default useFetchDownloadCount;