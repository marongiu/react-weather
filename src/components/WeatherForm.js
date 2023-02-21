import {useState} from "react";

function WeatherForm({inputValue, setInputValue, setCity}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputValue);
    setInputValue('');
  }


  return (
    <div className="form  w-4/5 bg-red-200">
      <form onSubmit={handleSubmit}>
        <input
          className="border-black border-2 w-full p-2"
          placeholder="Cerca città"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default WeatherForm;
