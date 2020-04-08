package com.spring.boot.app.controller.models;

public class WeatherDTO {
    private WeatherCurrent weatherCurrent;
    private WeatherHistory weatherHistory;

    public WeatherDTO(WeatherCurrent weatherCurrent, WeatherHistory weatherHistory) {
        this.weatherCurrent = weatherCurrent;
        this.weatherHistory = weatherHistory;
    }

    public WeatherCurrent getWeatherCurrent() {
        return weatherCurrent;
    }

    public void setWeatherCurrent(WeatherCurrent weatherCurrent) {
        this.weatherCurrent = weatherCurrent;
    }

    public WeatherHistory getWeatherHistory() {
        return weatherHistory;
    }

    public void setWeatherHistory(WeatherHistory weatherHistory) {
        this.weatherHistory = weatherHistory;
    }
}
