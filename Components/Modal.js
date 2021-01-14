import React, { useContext } from 'react'

import {Context} from '../Context'

export default function Modal({isOpen, hideModal, query, setQuery}) {
    const {state} = useContext(Context);
    const { weather, SearchLocation} = state;
    console.log(weather);

    const showHideModal = isOpen ? "modal display-block" : "modal display-none";
    return (
        <section className={showHideModal}>
            <div className="modal-main">
                <div className="close_modal_container">
                    <button className="close_modal" type="button" onClick={hideModal} >Close</button>
                </div>
                <form onSubmit={SearchLocation}>
                    <input className="places" type="text" value={query} onChange={(e) => setQuery(e.target.value)}  placeholder="Search location" />
                    <button className="submit_modal" type="submit">Search</button>
                </form>
            </div>
        </section>
    )
}
