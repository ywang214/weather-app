package com.spring.boot.app.clients.response;

import com.spring.boot.app.controller.models.DailyWeather;
import com.spring.boot.app.controller.models.HourlyWeather;
import com.spring.boot.app.controller.models.Weather;

public class WeatherResponse {
    private String latitude;
    private String longitude;
    private String timezone;
    private Weather currently;
    private HourlyWeather hourly;
    private DailyWeather daily;

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
    }

    public Weather getCurrently() {
        return currently;
    }

    public void setCurrently(Weather currently) {
        this.currently = currently;
    }

    public HourlyWeather getHourly() {
        return hourly;
    }

    public void setHourly(HourlyWeather hourly) {
        this.hourly = hourly;
    }

    public DailyWeather getDaily() {
        return daily;
    }

    public void setDaily(DailyWeather daily) {
        this.daily = daily;
    }
}
