import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url, token) {
    const [data, setData] = useState([
        {
            _id: '',
            title: '',
            body: '',
            created: '',
            __v: 0,
        },
    ]);

    async function getData() {
        await axios
            .get(url, { params: { token } })
            .then((result) => setData(result.data));
    }

    useEffect(() => getData(), []);
    return [data, setData];
}

export { useFetch };
