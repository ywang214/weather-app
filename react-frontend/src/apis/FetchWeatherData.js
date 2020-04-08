import axios from "axios";
import axiosRetry from "axios-retry";
import { isUndefined, isEmpty, isNull } from "lodash-es";
import { WeatherData } from "../data/WeatherData";

// Exponential back-off retry delay between requests
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

const getURL = (latlong) => {
  return `/api/weatherData/${latlong}`;
};
/**
 * @param {String} latlong (-43.53333,172.63333)
 */
const FetchWeatherData = async ({ latlong }) => {
  let weatherCurrent = {};
  let weatherHistory = {};
  if (!isUndefined(latlong) && !isEmpty(latlong) && !isNull(latlong)) {
    try {
      const { data } = await axios.get(getURL(latlong));
      const weatherData = data;
      // const weatherData = WeatherData;
      if (!isEmpty(weatherData) && !isUndefined(weatherData)) {
        weatherCurrent = weatherData.weatherCurrent;
        weatherHistory = weatherData.weatherHistory;
      }
    } catch (err) {
      console.error(err);
    }
  }

  return {
    weatherCurrent,
    weatherHistory,
  };
};

export default FetchWeatherData;
