import React, {useContext} from 'react'
import { Context } from '../Context'

import location from '../icons/my_location-24px.svg'

function Search() {
    const {query, setQuery} = useContext(Context);

    return (
        <section className="search_form">
            <form>
                <input type="text" value={query} onChange={ (e) => setQuery(e.target.value)} placeholder="Searche for places" />
                <img src={location} alt="location" />
            </form>

            <div className="symbol_tranformation">
                <button type="submit">C</button>
                <button type="submit">F</button>
            </div>
        </section>
    )
}

export default Search