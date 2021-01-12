import React, {useContext} from 'react'

import {Context} from '../Context'

export default function Location() {
    const {state} = useContext(Context);
    let {data} = state;
    console.log(data);

    return (
        <div>
            {state.loading && <h2>Loading...</h2>}
            {!state.loading && state.data && (
                <article>
                    <p>
                        Today, {new Date(data.time).toDateString()}
                    </p>
                    <h1>{data.title}</h1>
                    <ul>
                        {data.consolidated_weather.map(weather => {
                            return (
                                <li key={weather.id}>
                                    <p>{new Date(weather.applicable_date).toDateString()}</p>
                                    <img src={`https://www.metaweather.com//static/img/weather/${weather.weather_state_abbr}.svg`} alt="weather icon" />
                                    <div>
                                        <p>{weather.max_temp}</p>
                                        <p>{weather.min_temp}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </article>
            )}
        </div>
    )
}
