import React from "react";
import { Context } from "./ContextProvider";

export default function Form() {
    
    const {setChristConsumption, calculateChristConsumption, setBloodConsumption, calculateBloodConsumption, setCurrentModeWeight, changeModes} = React.useContext(Context)

    const initInputs = {weight: .25, years: 0, months: 0, frequency: 4}
    const [inputs, setInputs] = React.useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    return(
        <div className="form">
            <form onSubmit={(e)=> {
                e.preventDefault()
                changeModes('human')
                setChristConsumption(calculateChristConsumption(inputs.years, inputs.months, inputs.weight, inputs.frequency))
                setBloodConsumption(calculateBloodConsumption(inputs.years, inputs.months, inputs.frequency))
            }}>
                <p>How long did you or have you taken communion or sacrament?</p>
                
                <input type="number" className="timeInput" value={inputs.years} name="years" onChange={handleChange} min="0" />
                <label htmlFor="years"> years and </label>
                
                <input type="number" className="timeInput" value={inputs.months} name="months" onChange={handleChange} min="0" max="11" />
                <label htmlFor="months"> months.</label>

                <br />

                <label htmlFor="weight">Body of Christ weight: </label>
                <select name="weight" id="weight" value={inputs.weight} onChange={handleChange}>
                    <option value={.25}>Communion wafer (.25g)</option>
                    <option value={1}>Ripped off bit of bread (~1g)</option>
                </select>

                <br />

                <label htmlFor="frequency">About how often did you or do you partake? </label>
                <select name="frequency" id="frequency" value={inputs.frequency} onChange={handleChange}>
                    <option value={1}>Once a month</option>
                    <option value={2}>Twice a month</option>
                    <option value={3}>Three Times a month</option>
                    <option value={4}>Weekly</option>
                    <option value={8}>Twice a Week</option>
                    <option value={12}>Three Times a Week</option>
                    <option value={16}>Four Times a Week</option>
                    <option value={30}>Daily</option>
                </select>
                <br />
                <button className="calculationBtn">Calculate Christ Consumption</button>
            </form>            
        </div>
    )
}
