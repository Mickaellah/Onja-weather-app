import React, { useContext } from 'react'

import {Context} from '../Context'

import Clear from '../icons/clear-24px.svg'

export default function Modal({isOpen, hideModal, query, setQuery}) {
    const {state, SearchLocation} = useContext(Context);
    const { location} = state;

    const showHideModal = isOpen ? "modal display-block" : "modal display-none";
    return (
        <section className={showHideModal}>
            <div className="modal-main">
                <div className="close_modal_container">
                    <button className="close_modal" type="button" onClick={hideModal} ><img src={Clear} alt="Close the modal" /></button>
                </div>
                <form onSubmit={SearchLocation}>
                    <input className="places" type="text" name="query" value={query} onChange={(e) => setQuery(e.target.value)}  placeholder="Search location" />
                    <button className="submit_modal" type="submit">Search</button>
                </form>

                {location.map(location => {
                    return (
                        <div key={location.id}>
                            <button className="location_name" type="button" onClick={hideModal}>{location.title}</button>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
