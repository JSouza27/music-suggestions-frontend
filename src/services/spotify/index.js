import axios from 'axios';

const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const urlToken = 'https://accounts.spotify.com/api/token';

export const apiSpotifyToken = async () => {
  const { data } = await axios(urlToken, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)
        .toString('base64')}`,
    },
    data: 'grant_type=client_credentials',
    method: 'POST',
  });

  return data;
};

export const apiSpotifyPlayList = async (token, categoryId) => {
  const { data } = await axios(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  });

  return data;
};
