import React, { useEffect, useState } from "react"
import axios from "axios"

import "../../style/main.scss"
import "./CalcSteps.css"

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
            <div className="calcsteps">
                <h1>Heat Pump Selection</h1>
            </div>
        </>
    )
}