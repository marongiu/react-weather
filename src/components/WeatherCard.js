

function WeatherCard({data}) {
  return (
    <div className="card-container bg-sky-300 text-white w-4/5 p-10">
      <div className="card">
        <div className="titolo">
          <h1 className="text-2xl text-blue-50">{data ? data.resolvedAddress : 'METEO'}</h1>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
