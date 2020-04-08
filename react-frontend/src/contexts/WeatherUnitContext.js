import React, { useState, useEffect } from "react";
const WeatherUnitContext = React.createContext({
  weatherUnit: "C",
});

const WeatherUnitContextProvider = ({ children }) => {
  const [weatherUnit, setWeatherUnit] = useState("C");

  /**
   * @param {String} unit (F | C)
   * @param {String} type (selectUnit | toggle)
   */
  const updateWeatherUnit = (unit) => {
    setWeatherUnit(unit);
    localStorage.setItem("unit", JSON.stringify(unit));
  };

  useEffect(() => {
    if (!localStorage.getItem("unit")) {
      localStorage.setItem("unit", JSON.stringify("C"));
    } else {
      setWeatherUnit(JSON.parse(localStorage.getItem("unit")));
    }
  }, []);

  return (
    <WeatherUnitContext.Provider value={{ weatherUnit, updateWeatherUnit }}>
      {children}
    </WeatherUnitContext.Provider>
  );
};

export { WeatherUnitContext, WeatherUnitContextProvider };
