import { useCallback, useEffect, useState } from "react"

export const useFetch = (url) => {

    const [data, setData ] = useState(null)
    const [loading, setLoading ] = useState(true)
    const [error, setError ] = useState(null)

    const fetchData = useCallback(async() => {
        setLoading(true);

        try {
            const res = await fetch(url);

            if(!res.ok) throw Error('error al consumir la API');

            const data = await res.json();

            setData(data);

        } catch(error) {
            setError(error.message);
            setData([]);
        } finally {
            setLoading(false)
        }
    }, []);


    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error };
};

/* const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users') */