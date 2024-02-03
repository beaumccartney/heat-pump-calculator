import React, { useEffect, useState } from "react"
import axios from "axios"

import "../../style/main.scss"
import "./Calculator.css"

export const Step2 = () => {

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
            <div className="step2">
                <h1>Step 2 - House Year</h1>
            </div>
        </>
    )
}
