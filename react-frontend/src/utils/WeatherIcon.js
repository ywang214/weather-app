/**
 * @param {Object} data (weatherCurrent, Timeframe, day)
 */
const getWeatherIcon = (data) => {
  const { icon } = data;
  if (icon) {
    switch (icon) {
      case "clear-day":
        return "sunny";
      case "clear-night":
        return "sunny";
      case "wind":
        return "windy";
      case "partly-cloudy-day":
        return "partly_cloudy";
      case "partly-cloudy-night":
        return "partly_cloudy";
      case "thunderstorm":
        return "thunderstorms";
      default:
        return icon;
    }
  }
  return icon;
};

export default getWeatherIcon;
