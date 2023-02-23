import {useEffect, useState} from "react";
import WeatherCard from "./WeatherCard";
import CitySelector from "./CitySelector";

function WeatherApp() {

  const [data, setData] = useState('');

  const handleCityChange = (city) => {
    const fetchData = async () => {
      const weatherData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=CVSKBNJ4QTF8NEF7J6ENNQ4VY&contentType=json`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }

    fetchData();
  }

  return (
    <div className="weather-app h-screen flex flex-col justify-center items-center bg-sky-100 text-center">
      <WeatherCard data={data}/>
      <CitySelector onCitySelected={handleCityChange}/>
    </div>
  );
}

export default WeatherApp;
