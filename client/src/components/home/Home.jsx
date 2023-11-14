import React, { useEffect, useState } from "react"
import axios from "axios"

import "../../style/main.scss"

export const Home = () => {

    const [backendTest, setBackentTest] = useState(null);

    useEffect(() => {
        axios.get('/api', { })
        .then(res => {
            setBackentTest(res.data)
        })
        .catch(err => console.error(err));

    }, []);

    return (
        <>
            <h1>{backendTest}</h1>
        </>
    )
}