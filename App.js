import React, {useContext, useState} from "react"

import {Context} from './Context'

import Weather from "./Components/Weather"
import Modal from "./Components/Modal"

function App() {
    const [ isOpen, setIsOpen ] = useState(false);
    const [isFahrenheit, setIsFahrenheit] = useState(false);

    const {query, setQuery} = useContext(Context);

    // Open a modal
    function showModal() {
        setIsOpen(!isOpen);
    }

    // Close a modal
    function hideModal() {
        setIsOpen(!isOpen);
    }

    // To convert Fahrenheit to Celsius.
    function toCelsius() {
        setIsFahrenheit(false);
    }

    // To convert Celsius to Fahrenheit
    function toFahrenheit() {
        setIsFahrenheit(true);
    }
    return (
        <>
            <Modal isOpen={isOpen} query={query} setQuery={setQuery} hideModal={hideModal} />
            <Weather showModal={showModal} isFahrenheit={isFahrenheit} toCelsius={toCelsius} toFahrenheit={toFahrenheit} />
        </>
    )
}

export default App