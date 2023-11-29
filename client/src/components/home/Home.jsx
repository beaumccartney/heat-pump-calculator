import React, { useEffect, useState } from "react"
import axios from "axios"

import "../../style/main.scss"

export const Home = () => {

    const [backendTest, setBackendTest] = useState(null);

    useEffect(() => {
        axios.get('/api', { })
        .then(res => {
            setBackendTest(res.data)
        })
        .catch(err => console.error(err));

    }, []);

    return (
        <>
            <h1>{backendTest}</h1>
        </>
    )
}