import React, { useEffect, useState } from "react"

import "../../style/main.scss"
import "./Calculator.css"
import "./StepComponents.jsx"

export const StepPage = () => {

    // const [backendTest, setBackendTest] = useState(null);

    // useEffect(() => {
    //     axios.get('/api', { })
    //     .then(res => {
    //         setBackendTest(res.data)
    //     })
    //     .catch(err => console.error(err));

    // }, []);

    let step1 = () => {
        const o1 = OptionCard( "mansion",
            (<>
            <h2>Mansion</h2>
            <p>(~3000-4000 sqft)</p>
            </>)
        )
        const o2 = OptionCard( "house",
            (<>
            <h2>House</h2>
            <p>(~2000-2400 sqft)</p>
            </>)
        )
        const o3 = OptionCard( "condo",
            (<>
            <h2>Condo</h2>
            <p>(~800-1200 sqft)</p>
            </>)
        )

        return (
            <>
            <h1>How large is your house?</h1>
            {SelectionForm("step1", [o1, o2, o3])}
            {NextStep()}
            </>
        )
    }

    let step2 = () => {
        const o1 = OptionCard( "veryold",
            (<>
            <h2>Very Old</h2>
            <p>(1940-1970)</p>
            </>)
        )
        const o2 = OptionCard( "old",
            (<>
            <h2>Older</h2>
            <p>(1970-2000)</p>
            </>)
        )
        const o3 = OptionCard( "new",
            (<>
            <h2>Newer</h2>
            <p>(2000-Present)</p>
            </>)
        )
        
        return (
            <>
            <h1>When was your house built?</h1>
            {SelectionForm("step2", [o1, o2, o3])}
            {NextStep()}
            </>
        )
    }

    let step3 = () => {
        const o1 = OptionCard( "inefficient",
            (<>
            <h2>Inefficient</h2>
            <p>(~80%)</p>
            </>)
        )
        const o2 = OptionCard( "average",
            (<>
            <h2>Average</h2>
            <p>(~92%)</p>
            </>)
        )
        const o3 = OptionCard( "efficient",
            (<>
            <h2>Efficient</h2>
            <p>(~97%)</p>
            </>)
        )
        
        return (
            <>
            <h1>How efficient is your current gas furnace?</h1>
            {SelectionForm("step2", [o1, o2, o3])}
            {NextStep()}
            </>
        )
    }

    return (
        <>
            <div id="calculator-cont">
                <h1>Heat Pump Calculator</h1>
                <p>Please answer the following questions to receive an estimate.</p>
                {StepSidebar(step1, step2, step3)}
            </div>
        </>
    )
}
