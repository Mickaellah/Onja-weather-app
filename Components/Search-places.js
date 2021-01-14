import React, {useContext} from 'react'
import { Context } from '../Context'

import location from '../icons/my_location-24px.svg'

function Search({showModal}) {
    const {query, setQuery} = useContext(Context);

    return (
        <section className="search_form">
            <div className="search">
                <button type='button' onClick={showModal} >Search for places</button>
                <img src={location} alt="location" />
            </div>

            <div className="symbol_tranformation">
                <button type="submit">C</button>
                <button type="submit">F</button>
            </div>
        </section>
    )
}

export default Search