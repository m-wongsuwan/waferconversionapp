import React from "react"
import { Context } from "./ContextProvider"

export default function Explainer() {

    const {jesusMode, christConsumption, changeModes} = React.useContext(Context)

    function modeToggle() {
        return (
            <div className="toggleBtns">
                <span>What if Christ was... </span>
                {jesusMode !== 'human' && <button onClick={()=> changeModes('human')}>A Human</button> }
                {jesusMode !== 'borrower' && <button onClick={()=> changeModes('borrower')}>A Borrower</button> }
                {jesusMode !== 'raccoon' && <button onClick={()=> changeModes('raccoon')}>A Raccoon</button> }
                {jesusMode !== 'baby' && <button onClick={()=> changeModes('baby')}>The 8lb 6oz Baby Jesus</button> }
                
            </div>
        )
    }
    
    function returnExplanation(mode) {
        if (mode === 'human') {
            return (
                <>
                    <p>This assumes Christ was of an average height (5'5") and weight (140 lb) for people of his time.</p>
                    <p>A 140 lb man has approximately 1.3 gallons, or 11.5 pounds, of blood.</p>
                    <p>These figures assume a communion wine or liquid weight of 1.7 oz and that men, borrowers, raccoons, and babies have similar blood to body ratios.</p>
                </>
            )
        } else if (mode === 'borrower') {
            return (
                <>
                    <p>The weight of Borrowers was estimated by using the weight of a small Malayan field rat, whose head and body length (5.5") are comparable to a borrower's dimensions (5"-6").</p>
                    <p>These figures assume a communion wine or liquid weight of 1.7 oz and that men, borrowers, raccoons, and babies have similar blood to body ratios.</p>
                </>
            )
        } else if (mode === 'raccoon') {
            return (
                <>
                    <p>Assuming a typically sized 15 lb raccoon. No data exist on how being the Son of God would affect raccoon Christ's weight and blood to body ratio.</p>
                    <p>These figures assume a communion wine or liquid weight of 1.7 oz and that men, borrowers, raccoons, and babies have similar blood to body ratios.</p>
                </>

            )
        } else if (mode === 'baby') {
            return (
                <>
                    <p>These figures assume a communion wine or liquid weight of 1.7 oz and that men, borrowers, raccoons, and babies have similar blood to body ratios.</p>
                </>

            )
        }

        return (
            <p>{mode}</p>
        )
    }

    return (
        <div className="explainer">
            {christConsumption > 0 && returnExplanation(jesusMode)}
            {christConsumption > 0 && modeToggle()}

        </div>
    )
}