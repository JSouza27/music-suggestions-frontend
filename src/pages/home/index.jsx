import React, { useEffect, useState } from 'react';

import apiOpenWeather from '../../services/open weather';
import { apiSpotifyToken, apiSpotifyPlayList } from '../../services/spotify';
import Card from './components/card';

import SearchBar from './components/search bar';

import { ContainerPlaylist, Title, InfoSpan, Wrapper } from './style';

function Home() {
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
  console.log(list);
  useEffect(() => {
    apiSpotifyToken().then((response) => setToken(response.access_token));
  }, []);

  return (
    <Wrapper>
      <SearchBar getPlayList={ getPlayList } />
      <Title>Playlists Sugeridas</Title>
      <ContainerPlaylist>
        {
          list.length ? list.map((item, index) => (
            <Card
              key={ `${item.name}-${index}` }
              url={ item.images[0].url }
              name={ item.name }
            />
          )) : <InfoSpan>Digite uma localidade para obter as  playlists</InfoSpan>
        }
      </ContainerPlaylist>
    </Wrapper>
  );
}

export default Home;
