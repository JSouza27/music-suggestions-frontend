import axios from 'axios';

const baseURL = 'http://api.openweathermap.org/data/2.5/weather';

const apiOpenWeather = async (query) => {
  const { data } = await axios.get(baseURL, {
    params: {
      q: query,
      units: 'metric',
      appid: process.env.REACT_APP_API_OPEN_WEATHER_APPID,
    },
  });

  return data;
};

export default apiOpenWeather;
