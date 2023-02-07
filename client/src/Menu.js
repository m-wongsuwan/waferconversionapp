import React from "react";
import { Context } from './ContextProvider'

import x from './images/x-circle-black.svg'
import portrait from './images/portrait.JPG'


export default function Menu() {

    const { setShowMenu } = React.useContext(Context)
    const [toggleCredits, setToggleCredits] = React.useState(false)

    return(
        <div className="credits">
            {!toggleCredits && <button className="creditBtn" onClick={()=> setToggleCredits(prev => !prev)}>?</button>}
            {toggleCredits ? 
                <div className="creditsDisplay" onClick={()=> setToggleCredits(prev => !prev)}>
                <img onClick={()=> setShowMenu(false)} className="exitIcon" src={x} alt="X" />
                <h2 className="menu--appBy">App by Morgan Wongsuwan</h2>
                <img src={portrait} className="portrait" alt="Site Author Portrait" />
                <a href="https://webdevmorgan.surge.sh" target="_blank" rel="noreferrer">
                    <button className="portfolioBtn">Check out my web development portfolio!</button>
                </a>
                <br />
                <a href="https://www.flaticon.com/free-icons/eucharist" title="Eucharist icons">Eucharist icons created by dreamicons - Flaticon</a>
                <br />
                <a href="https://www.flaticon.com/free-icons/eucharist" title="Eucharist icons">Eucharist icons created by Freepik - Flaticon</a>
                <br />
                <small className="madeBy">© Morgan Wongsuwan. All rights reserved.</small>
                </div>
            : null
            }
        </div>
    )
}