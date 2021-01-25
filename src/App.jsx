import { useState } from 'react';
import dotenv from 'dotenv';
import './App.css';
import City from './components/City';
import SearchForm from './components/SearchForm';

dotenv.config();

function App() {
  const [cityName, setCityName] = useState('');
  const [cityWeather, setCityWeather] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchCity = async () => {
    try {
      setError(null);
      setLoading(true);
      if (!cityName) throw new Error('You have not specified a city!');
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`);
      if (!response.ok) throw new Error(response.statusText);
      const weatherData = await response.json();
      setCityWeather(weatherData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Weather</h1>
      <SearchForm
        city={cityName}
        setCity={setCityName}
        searchCity={searchCity}
      />
      <City cityWeather={cityWeather} error={error} loading={loading} />
    </div>
  );
}

export default App;
