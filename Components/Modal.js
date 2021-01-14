import React from 'react'

export default function Modal({isOpen, hideModal}) {
    const showHideModal = isOpen ? "modal display-block" : "modal display-none";
    return (
        <section className={showHideModal}>
            <div className="modal-main">
                <div className="close_modal_container">
                    <button className="close_modal" type="button" onClick={hideModal} >Close</button>
                </div>
                <form>
                    <input className="places" type="text" placeholder="Search location" />
                    <button className="submit_modal" type="submit">Search</button>
                </form>
            </div>
        </section>
    )
}
