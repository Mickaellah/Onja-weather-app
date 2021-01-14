import React, {useEffect, useReducer, useState} from "react"

function reducer(state, action) {
    switch (action.type) {
        case "LOCATION": {
            return {
                ...state,
                location: action.location
            }
        }
        case "LOADING": {
            return {
                ...state,
                weather: action.weather,
                loading: false
            }
        }
    }

}

const Context = React.createContext();

export default function ContextProvider({children}) {
    const [ query, setQuery ] = useState('San Francisco');

    const initialeState = {
        loading: true,
        weather: {},
        location: []
    }

    const [ state, dispatch ] = useReducer(reducer, initialeState);

    const CORS = "https://cors-anywhere.herokuapp.com/";    
    const LOCATION_SEARCH = `https://www.metaweather.com//api/location/search/?query=${query}`;


    async function getWeather() {
        const response = await fetch(CORS + LOCATION_SEARCH);
        const data = await response.json();
        dispatch({type: "LOCATION", location: data});


        if (data.length) {
            const API = `https://www.metaweather.com//api/location/${data[0].woeid}/`;
            const res = await fetch(CORS + API);
            const weather = await res.json();
            dispatch({type: "LOADING", weather: weather});
        }
    }

    useEffect(() => {
        getWeather();
    }, []);

    function SearchLocation(e) {
        e.preventDefault();
        getWeather();
    }

    return (
        <Context.Provider value={{state, dispatch, query, setQuery, SearchLocation}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};