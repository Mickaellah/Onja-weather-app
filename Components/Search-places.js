import React from 'react'

import location from '../icons/my_location-24px.svg'

function Search({showModal}) {

    return (
        <section className="search_form">
            <div className="search">
                <button type='button' onClick={showModal} >Search for places</button>
                <img src={location} alt="location" />
            </div>

            <div className="symbol_tranformation">
                <button type="button">C</button>
                <button type="button">F</button>
            </div>
        </section>
    )
}

export default Search