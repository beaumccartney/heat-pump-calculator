import React, { useEffect, useState } from "react"
import axios from "axios"

import "../../style/main.scss"
import "./Calculator.css"

export const Step1 = () => {

    // const [backendTest, setBackendTest] = useState(null);

    // useEffect(() => {
    //     axios.get('/api', { })
    //     .then(res => {
    //         setBackendTest(res.data)
    //     })
    //     .catch(err => console.error(err));

    // }, []);

    return (
        <>
            {/* <h1>{backendTest}</h1> */}
            <div className="step1">
                <h1>Step 1 - House Type</h1>
            </div>
        </>
    )
}
