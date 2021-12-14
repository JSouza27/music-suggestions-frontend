import React, { useState } from 'react';
import './App.css';

import apiOpenWeather from './services/OpenWeather';

function App() {
  const [location, setLocation] = useState('');

  const getPlayList = async (locality) => {
    const { main: { temp } } = await apiOpenWeather(locality);

    if (temp > 30) return 'list_paty';
    if (temp >= 15 && temp <= 30) return 'list_pop';
    if (temp >= 10 && temp <= 14) return 'list_rock';
    return 'list_classical';
  };

  return (
    <div className="App">
      <section>
        <input
          name="searchPlayList"
          onChange={ (e) => setLocation(e.target.value) }
          placeholder="Digite uma localidade"
        />
        <button
          type="button"
          onClick={ async () => console.log(await getPlayList(location)) }
        >
          enviar
        </button>
      </section>
    </div>
  );
}

export default App;
