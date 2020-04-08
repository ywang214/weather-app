import React, { useEffect, useState, useContext, Fragment } from "react";
import { isUndefined, isEmpty, isNull } from "lodash-es";
import { AddressContext } from "../contexts/AddressContext";
import FetchWeatherData from "../apis/FetchWeatherData";
import LoaderComponent from "../components/loader/LoaderComponent";
import WeatherContentContainer from "./WeatherContentContainer";

const WeatherContainer = () => {
  const addressContext = useContext(AddressContext);

  const [weatherCurrent, setWeatherCurrent] = useState({});
  const [weatherHistory, setWeatherHistory] = useState({});

  const setWeatherData = (current, history) => {
    if (!isEmpty(current) && !isEmpty(history)) {
      setWeatherCurrent(current);
      setWeatherHistory(history);
    }
  };

  const fetchWeatherData = async () => {
    try {
      const { weatherCurrent, weatherHistory } = await FetchWeatherData(
        addressContext
      );
      setWeatherData(weatherCurrent, weatherHistory);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeatherData();
    const timer = setInterval(() => {
      fetchWeatherData();
    }, 3600000);

    return () => {
      clearInterval(timer);
    };
  }, [addressContext]);

  return (
    <Fragment>
      {!isUndefined(weatherCurrent) &&
      !isEmpty(weatherCurrent) &&
      !isNull(weatherCurrent) ? (
        <Fragment>
          <div className="hidden md:block absolute top-0 bottom-0 left-0 right-0 my-auto mx-6 text-dark">
            <WeatherContentContainer
              address={addressContext.address}
              weatherCurrent={weatherCurrent}
              weatherHistory={weatherHistory}
            ></WeatherContentContainer>
          </div>
        </Fragment>
      ) : (
        <LoaderComponent
          loaderText={`Fetching weather data for ${addressContext.address.city}`}
        />
      )}
    </Fragment>
  );
};

export default WeatherContainer;
