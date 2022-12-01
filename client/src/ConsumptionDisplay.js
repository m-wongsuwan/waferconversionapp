import React from "react";
import { Context } from "./ContextProvider";

export default function ConsumptionDisplay() {

    const {jesusMode, christConsumption, currentmodeweight, changeModes, bloodConsumption} = React.useContext(Context)




    function consumptionDisplay(mode) {
        if (!mode) {
            return <div className="display"></div>
        } else {
            return (
                <div className="display">
                    <h2>You have consumed the body of {(christConsumption / (currentmodeweight * .925)).toFixed(3)} {mode} Christs and the blood of {(bloodConsumption / (currentmodeweight * .08803)).toFixed(2)} {mode} Christs.</h2>
                </div>
            )
        }
    }

    return (
        <div className="consumptionDisplay">
            {christConsumption > 0 && consumptionDisplay(jesusMode)}
        </div>
    )
}