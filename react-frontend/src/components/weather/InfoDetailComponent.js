import React, { Fragment, useContext } from "react";
import { WeatherUnitContext } from "../../contexts/WeatherUnitContext";
import getWeatherIcon from "../../utils/WeatherIcon";
import { fToC } from "../../utils/TemperatureConverter";
import { PropTypes } from "prop-types";

const InfoDetailComponent = ({ day }) => {
  const { weatherUnit, updateWeatherUnit } = useContext(WeatherUnitContext);
  const weatherUnitTitle = weatherUnit === "C" ? "Celsius" : "Fahrenheit";
  const unselectedWeatherUnit = weatherUnit === "C" ? "F" : "C";
  const unitClick = (unit) => {
    updateWeatherUnit(unit);
  };

  /**
   * type can be `temperature` or `apparentTemperature`
   * @param {String} type
   */
  const computedTempValue = (type) => {
    return weatherUnit === "F"
      ? Math.round(day[`${type}`])
      : fToC(day[`${type}`]);
  };

  return (
    <Fragment>
      <div className="sm:flex-col md:flex md:flex-row justify-between my-2 px-6 sm:mt-5 sm:mb-5 sm:px-1 text-sm">
        <div className="flex-col sm:w-full lg:w-1/2">
          <div className="flex flex-row justify-between sm:justify-start">
            <div className="flex flex-col justify-center items-center">
              <div>
                <img
                  src={`./weather/${getWeatherIcon(day)}.png`}
                  alt="icon"
                  title={day.summary}
                  className="-mt-2 -ml-4 sm:mx-0 w-16 h-16 object-contain"
                />
              </div>
            </div>
            <div className="flex justify-start items-center sm:-mt-3 sm:ml-3">
              <div>
                <span className="text-5xl text-black">
                  {computedTempValue("temperatureHigh")}
                </span>
              </div>
              <div className="-mt-10 mx-2 text-base text-black">
                {/* selected weatherUnit */}
                <span
                  className="cursor-pointer font-bold"
                  title={weatherUnitTitle}
                  onClick={() => unitClick(weatherUnit)}
                >
                  <sup>o</sup>
                  {weatherUnit}
                </span>
                <span className="mx-1 opacity-25 text-black">|</span>
                {/* unselected weatherUnit */}
                <span
                  className="cursor-pointer font-light opacity-75 text-blue"
                  title={weatherUnitTitle}
                  onClick={() => unitClick(unselectedWeatherUnit)}
                >
                  <sup>o</sup>
                  {unselectedWeatherUnit}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InfoDetailComponent;

InfoDetailComponent.propTypes = {
  day: PropTypes.object,
};
