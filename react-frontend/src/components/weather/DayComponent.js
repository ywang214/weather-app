import React, { useContext } from "react";
import { WeatherUnitContext } from "../../contexts/WeatherUnitContext";
import { fToC } from "../../utils/TemperatureConverter";
import getWeatherIcon from "../../utils/WeatherIcon";
import FormatTime from "../../utils/FormatTime";
import { PropTypes } from "prop-types";

const DayComponent = (props) => {
  const { day, timezone } = props;
  const { weatherUnit } = useContext(WeatherUnitContext);
  /**
   * type can be 'High' or 'Low'
   * @param {String} type
   */
  const computedTempValue = (type) => {
    return weatherUnit === "F"
      ? Math.round(day[`temperature${type}`])
      : fToC(day[`temperature${type}`]);
  };

  // emit event to HistoryWeatherContainer
  const selectedDay = () => {
    props.selectedDay(day);
  };

  return (
    <div className="cursor-pointer" onClick={selectedDay}>
      <div className="flex flex-row flex-no-wrap sm:flex-col sm:flex-wrap justify-around items-center px-0">
        <p className="flex w-1/6 sm:w-full sm:justify-center text-sm font-light sm:font-medium">
          {FormatTime(day.time, timezone, "ddd")}
        </p>
        {/* icon */}
        <div className="flex w-1/6 sm:w-full my-2">
          <img
            src={`./weather/${getWeatherIcon(day)}.png`}
            alt="icon"
            title={day.summary}
            className="sm:-mt-3 sm:-mb-1 mx-auto w-12 h-12 sm:w-16 sm:h-16 object-contain"
          />
        </div>
        {/* high & low */}
        <div className="flex flex-row justify-center items-center font-light w-1/4 sm:w-full mt-1 sm:mt-0 my-2">
          <p className="mx-2 text-xs sm:text-sm">
            {computedTempValue("High")}
            <sup>o</sup>
          </p>
          <p className="mx-2 text-xs">
            {computedTempValue("Low")}
            <sup>o</sup>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DayComponent;

DayComponent.propTypes = {
  day: PropTypes.object,
  selectedDay: PropTypes.func,
  timezone: PropTypes.string,
};
