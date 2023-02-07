import React from "react";

export const Context = React.createContext()

export default function ContextProvider(props) {
    const weight = {
        human: 63502,
        borrower: 60,
        raccoon: 6803,
        baby: 3799
    }

    const [christConsumption, setChristConsumption] = React.useState(0)
    const [bloodConsumption, setBloodConsumption] = React.useState(0)
    const [jesusMode, setJesusMode] = React.useState('')
    const [currentmodeweight, setCurrentModeWeight] = React.useState(weight.human)
    const [showMenu, setShowMenu] = React.useState(false)




    function calculateChristConsumption(years, months, weight, frequency) {
        // calculates body of christ weight consumption in grams
        return (((years * 12) + months) * weight * frequency)
    }
    function calculateBloodConsumption(years, months, frequency) {
        // caluclates blood consumption in grams
        return ((years * 12) + months) * 48.19 * frequency
    }

    function changeModes(mode) {
        setJesusMode(mode)
        if (mode === 'raccoon') {
            setCurrentModeWeight(weight.raccoon)
        } if (mode === 'borrower') {
            setCurrentModeWeight(weight.borrower)
        } if (mode === 'human') {
            setCurrentModeWeight(weight.human)
        } if (mode === 'baby') {
            setCurrentModeWeight(weight.baby)
        }
    }




    return (
        <Context.Provider 
            value={{
                weight,
                christConsumption,
                setChristConsumption,
                jesusMode,
                setJesusMode,
                currentmodeweight,
                setCurrentModeWeight,
                calculateChristConsumption,
                calculateBloodConsumption,
                bloodConsumption,
                setBloodConsumption,
                changeModes
            }}>
            {props.children}
        </Context.Provider>
    )
}