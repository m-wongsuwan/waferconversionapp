import React from "react";

export default function Credits() {

    const [toggleCredits, setToggleCredits] = React.useState(false)

    return (
        <div className="credits">
            {!toggleCredits && <button className="creditBtn" onClick={()=> setToggleCredits(prev => !prev)}>?</button>}
            {toggleCredits && 
                <div className="creditsDisplay" onClick={()=> setToggleCredits(prev => !prev)}>
                    <a href="https://www.flaticon.com/free-icons/raccoon" title="raccoon icons">Raccoon icons created by justicon - Flaticon</a> 
                    <br />
                    <a href="https://www.flaticon.com/free-icons/eucharist" title="Eucharist icons">Eucharist icons created by dreamicons - Flaticon</a>
                    <br />
                    <a href="https://www.flaticon.com/free-icons/eucharist" title="Eucharist icons">Eucharist icons created by Freepik - Flaticon</a>
                </div>}
        </div>
    )
}