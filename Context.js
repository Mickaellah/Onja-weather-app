import React, {useEffect, useReducer, useState} from "react"

function reducer(state, action) {
    switch (action.type) {
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
    const [ query, setQuery ] = useState('');

    const initialeState = {
        loading: true,
        weather: []
    }

    const [ state, dispatch ] = useReducer(reducer, initialeState);

    const CORS = "https://cors-anywhere.herokuapp.com/";
    const API = "https://www.metaweather.com//api/location/44418/";

    useEffect(() => {
        dispatch({type: "LOADING"})
        fetch(CORS + API, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch({type: "LOADING", weather: data});
        });
    }, []);
    return (
        <Context.Provider value={{state, dispatch, query, setQuery}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};