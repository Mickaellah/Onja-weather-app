import React, {useContext, useState} from "react"

import {Context} from './Context'

import Weather from "./Components/Weather"
import Modal from "./Components/Modal"

function App() {
    const [ isOpen, setIsOpen ] = useState(false);
    const {query, setQuery} = useContext(Context);
    const [isFahrenheit, setIsFahrenheit] = useState(false);

    function showModal() {
        setIsOpen(!isOpen);
    }

    function hideModal() {
        setIsOpen(!isOpen);
    }

    function toCelsius() {
        setIsFahrenheit(false);
    }

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