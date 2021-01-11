import React from 'react'
import location from '../icons/my_location-24px.svg'

function Search() {
    return (
        <form>
            <input type="text" placeholder="Searche for places" />
            <button type="button"><img src={location} alt="location" /></button>
        </form>
    )
}

export default Search