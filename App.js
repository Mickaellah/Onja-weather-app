import React, {useContext, useState} from "react"

import {Context} from './Context'

import Weather from "./Components/Weather"
import Modal from "./Components/Modal"

function App() {
    const [ isOpen, setIsOpen ] = useState(false);
    const {query, setQuery} = useContext(Context);

    function showModal() {
        setIsOpen(!isOpen);
    }

    function hideModal() {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Modal isOpen={isOpen} query={query} setQuery={setQuery} hideModal={hideModal} />
            <Weather showModal={showModal}/>
        </>
    )
}

export default App