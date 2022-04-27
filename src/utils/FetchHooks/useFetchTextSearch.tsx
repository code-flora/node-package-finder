import { useEffect, useState } from 'react';

const useFetchTextSearch = (querySubmitted: string, query: string) => {
    const [data, setData] = useState<any | null>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<[] | null>(null);

    useEffect(() => {
        if (querySubmitted == query) {
            let endpoint = `https://registry.npmjs.cf/-/v1/search?text=${querySubmitted}`;

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
                    setTimeout(() => setLoading(false), 1000)

                })
        }
    }, [querySubmitted])

    return { data, loading, error };
}

export default useFetchTextSearch;