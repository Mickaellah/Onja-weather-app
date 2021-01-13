import React, {useContext} from 'react'
import { Context } from '../Context'

import location from '../icons/my_location-24px.svg'

function Search() {
    const {query, setQuery} = useContext(Context);

    return (
        <>
            <form>
                <input type="text" value={query} onChange={ (e) => setQuery(e.target.value)} placeholder="Searche for places" />
                <img src={location} alt="location" />
            </form>
        </>
    )
}

export default Search