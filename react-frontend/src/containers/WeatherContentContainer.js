import React, { useState, useEffect, Fragment } from "react";
import { isEmpty, isUndefined, isNull } from "lodash-es";
import DayComponent from "../components/weather/DayComponent";
import ChartComponent from "../components/weather/ChartComponent";
import InfoComponent from "../components/weather/InfoComponent";
import InfoDetailComponent from "../components/weather/InfoDetailComponent";
import LoaderComponent from "../components/loader/LoaderComponent";
import { PropTypes } from "prop-types";

const WeatherContentContainer = ({
  weatherCurrent,
  weatherHistory,
  address,
}) => {
  const [selectedDay, setSelectedDay] = useState("");
  const { timezone } = weatherCurrent;

  // set the selectedDay to the current day by fetching current city date from weatherCurrent timestamp
  const updateSelectedDay = async () => {
    if (
      !isEmpty(weatherHistory) &&
      !isUndefined(weatherHistory) &&
      !isNull(weatherHistory)
    ) {
      setSelectedDay(Object.keys(weatherHistory.days).slice(-1)[0]);
    }
  };

  /**
   * day is a date '02/28/2020'
   * @param {String} day
   */
  const daySelectHandler = (day) => {
    setSelectedDay(day);
  };

  useEffect(() => {
    updateSelectedDay(selectedDay);
  }, [weatherHistory]);

  return (
    <Fragment>
      {address &&
      !isEmpty(selectedDay) &&
      !isEmpty(weatherHistory.days) &&
      !isEmpty(weatherHistory.timeFrames) ? (
        <Fragment>
          <div>
            <InfoComponent
              address={address}
              day={weatherHistory.days[selectedDay]}
              timezone={timezone}
            />
            <InfoDetailComponent day={weatherHistory.days[selectedDay]} />
          </div>
          <div className="hidden sm:flex sm:pb-3 sm:mb-4">
            {weatherHistory.timeFrames[selectedDay] ? (
              <div>
                <ChartComponent
                  timeFrames={weatherHistory.timeFrames[selectedDay]}
                  timezone={timezone}
                />
              </div>
            ) : (
              <LoaderComponent
                errorMessage={`No hourly data available for ${selectedDay}`}
              />
            )}
          </div>
          <div
            className={`flex flex-col mt-4 sm:mt-0 sm:flex-row w-full rounded`}
          >
            {Object.keys(weatherHistory.days).map((day, index) => {
              return (
                <button key={index}>
                  <DayComponent
                    day={weatherHistory.days[day]}
                    key={index}
                    timezone={timezone}
                    selectedDay={() => daySelectHandler(day)}
                  />
                </button>
              );
            })}
          </div>
        </Fragment>
      ) : (
        <div className="mb-3">
          <LoaderComponent loaderText={`Fetching 7 days weather history`} />
        </div>
      )}
    </Fragment>
  );
};

export default WeatherContentContainer;

WeatherContentContainer.propTypes = {
  address: PropTypes.objectOf(PropTypes.string),
  weatherCurrent: PropTypes.object,
  weatherHistory: PropTypes.object,
};
