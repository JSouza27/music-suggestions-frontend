import axios from 'axios';

const clientId = '';
const clientSecret = '';

const apiSpotifyToken = async (query) => {
  const { data } = await axios.get(baseURL, {
    params: {
      q: query,
      units: 'metric',
      appid: '6801fe9e74c3fd9d5a5b0ea6b668d7af',
    },
  });

  return data;
};