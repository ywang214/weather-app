import React, { useContext } from "react";
import { WeatherUnitContext } from "../../contexts/WeatherUnitContext";
import FormatTime from "../../utils/FormatTime";
import { fToC } from "../../utils/TemperatureConverter";
import { PropTypes } from "prop-types";
import { AreaChart } from "react-chartkick";
import "chart.js";

const ChartComponent = ({ timeFrames, timezone }) => {
  const { weatherUnit } = useContext(WeatherUnitContext);
  /**
   * type can be `temperature` or `apparentTemperature`
   * @param {String} type
   */
  const computedTempValue = (temp) => {
    return weatherUnit === "F" ? Math.round(temp) : fToC(temp);
  };

  const formData = (timeFrames) => {
    let data = {};
    timeFrames.forEach((hour, index) => {
      if (index % 3 === 0) {
        const x = FormatTime(hour.time, timezone, "h A");
        const y = computedTempValue(hour.temperature);
        data[x] = y;
      }
    });
    return data;
  };

  return (
    <div>
      <AreaChart
        data={formData(timeFrames)}
        colors={["#FFD700", "#FFD700"]}
        width="600px"
        height="80px"
        library={{
          layout: {
            padding: { left: 5, right: 5, top: 5, bottom: 0 },
          },
          scales: {
            xAxes: [
              {
                // display: false,
                ticks: { fontColor: "#999ca1", fontSize: 10 },
              },
            ],
            yAxes: [
              {
                display: false,
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default ChartComponent;

ChartComponent.propTypes = {
  timeFrames: PropTypes.array,
  timezone: PropTypes.string,
};
