import { useEffect, useState } from 'react';

const useFetchSpecificPackage = (name: string, version: string) => {
    const [data, setData] = useState<any | null>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<[] | null>(null);

    useEffect(() => {
        if (name && version) {
            let endpoint = `https://registry.npmjs.cf/${name}/${version}`;

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
                    setData(data)
                })
                .catch(error => {
                    setError(error)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [name, version])

    return { data, loading, error };
}

export default useFetchSpecificPackage;