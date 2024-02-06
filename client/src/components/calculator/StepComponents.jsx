import React from "react";
import "../../style/main.scss";
import "./Calculator.css";

export const changeStep = (i) => {
    // Implement the functionality to change steps here
    console.log(`Change to step ${i}`);
};

export const StepSidebar = ({ step1, step2, step3 }) => {
    return (
        <>
            <button className="collapsable" onClick={() => changeStep(1)}>Step 1</button>
            <div className="step1">{step1()}</div>
            <button className="collapsable" onClick={() => changeStep(2)}>Step 2</button>
            <div className="step1">{step2()}</div>
            <button className="collapsable" onClick={() => changeStep(3)}>Step 3</button>
            <div className="step1">{step3()}</div>
        </>
    );
};

export const SelectionForm = ({ id, optioncards }) => {
    return (
        <form id={id}>
            {optioncards.map((card, index) => card)}
        </form>
    );
};

export const OptionCard = ({ value, content }) => {
    return (
        <label>
            <div className="optioncard">{content}</div>
            <input type="button" value={value} style={{display: "none"}} />
        </label>
    );
};

export const NextStep = () => {
    return <button className="nextstep">Next Step</button>;
};
