import React, {useContext} from 'react'

import {Context} from '../Context'

export default function Location() {
    const {state} = useContext(Context);
    let {weather, loading} = state;

    const weatherToday = !loading && weather && weather.consolidated_weather[0];
    console.log(weatherToday);
    const nextWeather = !loading && weather && weather.consolidated_weather[1];
    console.log(nextWeather);
    const weather3 = !loading && weather && weather.consolidated_weather[2];
    const weather4 = !loading && weather && weather.consolidated_weather[3];
    const weather5 = !loading && weather && weather.consolidated_weather[4];
    const weather6 = !loading && weather && weather.consolidated_weather[5];

    return (
        <div>
            {state.loading && <h2>Loading...</h2>}
            {!state.loading && state.weather && (
                <section>
                    <article className="current_weather">
                        <img src={`https://www.metaweather.com//static/img/weather/${weatherToday.weather_state_abbr}.svg`} alt="weather icon" />
                        <h3>{weatherToday.the_temp}&deg;C</h3>
                        <p className="weather_name">{weatherToday.weather_state_name}</p>
                        <div className="weather_location">
                            <p>
                                Today, {new Date(weather.time).toDateString()}
                            </p>
                            <p>{weather.title}</p>
                        </div>
                    </article>
                    <article className="future_weather">
                        <ul className="weather_list">
                            <li>
                                <p>{new Date(nextWeather.applicable_date).toDateString()}</p>
                                <img className="weather_icon" src={`https://www.metaweather.com//static/img/weather/${nextWeather.weather_state_abbr}.svg`} alt="weather icon" />
                                <div className="temperature">
                                    <p>{nextWeather.max_temp}&deg;C</p>
                                    <p>{nextWeather.min_temp}&deg;C</p>
                                </div>
                            </li>
                            <li>
                                <p>{new Date(weather3.applicable_date).toDateString()}</p>
                                <img className="weather_icon" src={`https://www.metaweather.com//static/img/weather/${weather3.weather_state_abbr}.svg`} alt="weather icon" />
                                <div className="temperature">
                                    <p>{weather3.max_temp}&deg;C</p>
                                    <p>{weather3.min_temp}&deg;C</p>
                                </div>
                            </li>
                            <li>
                                <p>{new Date(weather4.applicable_date).toDateString()}</p>
                                <img className="weather_icon" src={`https://www.metaweather.com//static/img/weather/${weather4.weather_state_abbr}.svg`} alt="weather icon" />
                                <div className="temperature">
                                    <p>{weather4.max_temp}&deg;C</p>
                                    <p>{weather4.min_temp}&deg;C</p>
                                </div>
                            </li>
                            <li>
                                <p>{new Date(weather5.applicable_date).toDateString()}</p>
                                <img className="weather_icon" src={`https://www.metaweather.com//static/img/weather/${weather5.weather_state_abbr}.svg`} alt="weather icon" />
                                <div className="temperature">
                                    <p>{weather5.max_temp}&deg;C</p>
                                    <p>{weather5.min_temp}&deg;C</p>
                                </div>
                            </li>
                            <li>
                                <p>{new Date(weather6.applicable_date).toDateString()}</p>
                                <img className="weather_icon" src={`https://www.metaweather.com//static/img/weather/${weather6.weather_state_abbr}.svg`} alt="weather icon" />
                                <div className="temperature">
                                    <p>{weather6.max_temp}&deg;C</p>
                                    <p>{weather6.min_temp}&deg;C</p>
                                </div>
                            </li>
                        </ul>

                        <div>
                            <h2>Today's Highlight</h2>
                            <nav>
                                <ul className="weather_today">
                                    <li className="list_item">
                                        <p>Wind Status</p>
                                        <h2>{weatherToday.wind_speed}&deg;C</h2>
                                        <p>{weatherToday.wind_direction_compass}</p>
                                    </li>
                                    <li className="list_item">
                                        <p>Humidity</p>
                                        <h2>{weatherToday.humidity} %</h2>
                                        <div className="humidity_percentage">
                                            <small className="lowest_humidity">0</small>
                                            <small>50</small>
                                            <small className="highest_humidity">100</small>
                                        </div>
                                        <progress value={weatherToday.humidity} max="100">{weatherToday.humidity}%</progress>
                                        <span>%</span>
                                    </li>
                                    <li className="list_item">
                                        <p>Visibility</p>
                                        <h2>{weatherToday.visibility} miles</h2>
                                    </li>
                                    <li className="list_item">
                                        <p>Air pressure</p>
                                        <h2>{weatherToday.wind_direction}mb</h2>
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
