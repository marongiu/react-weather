import {useState} from "react";

function CitySelector({onCitySelected}) {

  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
    onCitySelected(inputValue);
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

export default CitySelector;
