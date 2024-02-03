import React from "react"
import "../../style/main.scss"
import "./Calculator.css"


function changeStep(i) {
    //collapse all steps
    //uncollapse step i
}

//sidebar that shows current step and collapses ones that arent selected
const StepSidebar = (step1, step2, step3) => {
    return (
        <>
        <button className="collapsable" onClick="changeStep(1)">Step 1</button>
        <div className="step1">{step1}</div>
        <button className="collapsable" onClick="changeStep(2)">Step 2</button>
        <div className="step1">{step2}</div>
        <button className="collapsable" onClick="changeStep(3)">Step 3</button>
        <div className="step1">{step3}</div>
        </>
    )
}

//the selections for an individual step
const SelectionForm = (id, optioncards) => {
    return (
        <>
        <form id={id}>
            {optioncards}
        </form>
        </>
    )
}

//a single option for a step's selection
const OptionCard = (value, content) => {
    return (
        <>
        <label>
            <div className="optioncard">{content}</div>
            <input type="button" value={value} style="display:none"/>
        </label>
        </>
    )
}

//next step button
const NextStep = () => {
    return (
        <>
        <button className="nextstep">Next Step</button>
        </>
    )
}