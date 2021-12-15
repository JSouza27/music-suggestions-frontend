import React, { useEffect, useState } from 'react';

import apiOpenWeather from '../../services/open weather';
import { apiSpotifyToken, apiSpotifyPlayList } from '../../services/spotify';

function Home() {
  const [location, setLocation] = useState('');
  const [token, setToken] = useState('');
  const [list, setList] = useState([]);

  const thirty = 30;
  const fifteen = 15;
  const fourteen = 14;
  const ten = 10;

  const getPlayList = async (locality) => {
    const { main: { temp } } = await apiOpenWeather(locality);

    if (temp > thirty) {
      const response = await apiSpotifyPlayList(token, 'party');
      setList(response.playlists.items);
    }

    if (temp >= fifteen && temp <= thirty) {
      const response = await apiSpotifyPlayList(token, 'pop');
      setList(response.playlists.items);
    }

    if (temp >= ten && temp <= fourteen) {
      const response = await apiSpotifyPlayList(token, 'rock');
      setList(response.playlists.items);
    }

    if (temp < ten) {
      const response = await apiSpotifyPlayList(token, 'classical');
      setList(response.playlists.items);
    }
  };

  useEffect(() => {
    apiSpotifyToken().then((response) => setToken(response.access_token));
  }, []);
  return (
    <>
      <section>
        <input
          name="searchPlayList"
          onChange={ (e) => setLocation(e.target.value) }
          placeholder="Digite uma localidade"
        />
        <button
          type="button"
          onClick={ async () => { await getPlayList(location); } }
        >
          enviar
        </button>
      </section>
      <section>
        {
          list.map((item) => <span>{item.name}</span>)
        }
      </section>
    </>
  );
}

export default Home;
