import {useEffect, useState} from "react";
import WeatherCard from "./WeatherCard";
import WeatherForm from "./WeatherForm";

function WeatherApp() {

  const [data, setData] = useState('');
  const [city, setCity] = useState('roma');
  const [inputValue, setInputValue] = useState('');



  // CARICO METEO ROMA APPENA L'UTENTE ENTRA
  useEffect(() => {
    const fetchData = async() => {
      const weatherData = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=CVSKBNJ4QTF8NEF7J6ENNQ4VY&contentType=json`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }
    fetchData();

  }, [city]);


  return (
    <div className="weather-app h-screen flex flex-col justify-center items-center bg-sky-100 text-center">
      <WeatherCard data={data} />
      <WeatherForm inputValue={inputValue} setInputValue={setInputValue} setCity={setCity}/>
    </div>
  );
}

export default WeatherApp;
