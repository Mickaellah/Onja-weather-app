import React, {useContext} from 'react'

import MyLocation from '../icons/my_location-24px.svg'

import {Context} from '../Context'

export default function Weather({showModal, isFahrenheit, toCelsius, toFahrenheit}) {
    const {state} = useContext(Context);
    let {weather, loading, location} = state;
    // console.log(location);

    // To get the weather for today in a specific location.
    const weatherToday = !loading && weather && weather.consolidated_weather[0];

    // To get all of the next 5 days' weather.
    const weatherDuringTheWeek = !loading && weather && weather.consolidated_weather.slice(1, 7);

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {!loading && weather && (
                <section>
                    <article className="current_weather">
                        <div className="search">
                            <button type='button' onClick={showModal} >Search for places</button>
                            <img src={MyLocation} alt="location" />
                        </div>
                        <img className="today_icon" src={`https://www.metaweather.com//static/img/weather/${weatherToday.weather_state_abbr}.svg`} alt="weather icon" />
                        <div className="today_weather_temp">
                            {<p>{`${Math.round(isFahrenheit ? (weatherToday.the_temp * 9/5) + 32 : weatherToday.the_temp)}`}</p>} {<small>{`${isFahrenheit ? `\xB0F` : `\xB0C`}`}</small>}
                        </div>
                        <p className="weather_name">{weatherToday.weather_state_name}</p>
                        <div className="weather_location">
                            <p>
                                Today, {new Date(weather.time).toDateString()}
                            </p>
                            <p>{weather.title}</p>
                        </div>
                    </article>
                    <article className="future_weather">
                        <div className="symbol_tranformation">
                            <button type="button" onClick={toCelsius}>&deg;C</button>
                            <button type="button" onClick={toFahrenheit}>&deg;F</button>
                        </div>
                        <ul className="weather_list">
                            {weatherDuringTheWeek.map(weather => {
                                return (
                                    <li key={weather.id}>
                                        <p>{new Date(weather.applicable_date).toDateString()}</p>
                                        <img className="weather_icon" src={`https://www.metaweather.com//static/img/weather/${weather.weather_state_abbr}.svg`} alt="weather icon" />
                                        <div className="temperature">
                                            <div className="max__temp">
                                                {<p>{`${Math.round(isFahrenheit ?  (weather.max_temp * 9/5) + 32 : weather.max_temp)}`}</p>} {<small>{`${isFahrenheit ? `\xB0F` : `\xB0C` }`}</small>}
                                            </div>
                                            <div className="min__temp">
                                                {<p>{`${Math.round(isFahrenheit ?  (weather.min_temp * 9/5) + 32 : weather.min_temp)}`}</p>} {<small>{`${isFahrenheit ? `\xB0F` : `\xB0C` }`}</small>}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>

                        <div className="weather_today_content">
                            <h2>Today's Highlight</h2>
                            <nav>
                                <ul className="weather_today">
                                    <li className="list_item">
                                        <p>Wind Status</p>
                                        <div className="wind__status">
                                            <p>{Math.round(weatherToday.wind_speed)}</p>
                                            <small>mph</small>
                                        </div>
                                        <p>{weatherToday.wind_direction_compass}</p>
                                    </li>
                                    <li className="list_item">
                                        <p>Humidity</p>
                                        <div className="humidity">
                                            <p>{weatherToday.humidity}</p>
                                            <span>%</span>
                                        </div>
                                        <div className="humidity_percentage">
                                            <small className="lowest_humidity">0</small>
                                            <small>50</small>
                                            <small className="highest_humidity">100</small>
                                        </div>
                                        <progress value={weatherToday.humidity} max="100">{weatherToday.humidity} %</progress>
                                        <span>%</span>
                                    </li>
                                    <li className="list_item">
                                        <p>Visibility</p>
                                        <div className="visibility">
                                            <p>{Math.round(weatherToday.visibility)}</p>
                                            <small>miles</small>
                                        </div>
                                    </li>
                                    <li className="list_item">
                                        <p>Air pressure</p>
                                        <div className="air__pressure">
                                            <p>{Math.round(weatherToday.wind_direction)}</p>
                                            <small>mb</small>
                                        </div> 
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </article>
                </section>
            )}
        </div>
    )
}
