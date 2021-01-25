import React from 'react';

const City = ({ cityWeather, error, loading }) => (
  <>
    {error && <p>{error}</p>}
    {loading && !error && (
      <p>
        Loading weather data...
      </p>
    )}
    {!error && !loading
      && Object.keys(cityWeather).length > 0 ? (
        <div className="city-card">
          <h2>
            {cityWeather.name}
            {', '}
            {cityWeather.sys.country}
          </h2>
          <div className="city-weather-descr">
            <h3>{cityWeather.weather[0].main}</h3>
            <h5>{cityWeather.weather[0].description}</h5>
          </div>
          <div>
            <p>
              {'Min temperature: '}
              {cityWeather.main.temp_min}
            </p>
            <p>
              {'Max temperature: '}
              {cityWeather.main.temp_max}
            </p>
            <p>
              {'Location: '}
              {cityWeather.coord.lat}
              {', '}
              {cityWeather.coord.lon}
            </p>
          </div>
        </div>
      )
      : !loading && <p>Enter city name</p>}
  </>
);

export default City;
