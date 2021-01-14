import React, {useContext, useState} from "react"

import {Context} from './Context'

import Search from "./Components/Search-places"
import Weather from "./Components/Weather"
import Modal from "./Components/Modal"

function App() {
    const [ isOpen, setIsOpen ] = useState(false);
    const {state, query, setQuery} = useContext(Context);
    const {loading, weather} = state;

    function showModal() {
        setIsOpen(!isOpen);
    }

    function hideModal() {
        setIsOpen(isOpen);
    }
    return (
        <>
            <Search showModal={showModal} />
            <Modal isOpen={isOpen} query={query} setQuery={setQuery} hideModal={hideModal} />
            <Weather />
        </>
    )
}

export default App