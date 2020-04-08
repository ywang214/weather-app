package com.spring.boot.app.controller.models;

public class WeatherCurrent {
    private String timezone;
    private Long time;
    private String summary;
    private String icon;
    private Double temperature;
    private Double apparentTemperature;
    private Double temperatureLow;
    private Double temperatureHigh;

    public WeatherCurrent() {
    }

    public WeatherCurrent(Weather weather) {
        this.time = weather.getTime();
        this.summary = weather.getSummary();
        this.icon = weather.getIcon();
        this.temperature = weather.getTemperature();
        this.apparentTemperature = weather.getApparentTemperature();
        this.temperatureLow = weather.getTemperatureLow();
        this.temperatureHigh = weather.getTemperatureHigh();
    }

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
    }

    public Long getTime() {
        return time;
    }

    public void setTime(Long time) {
        this.time = time;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public Double getTemperature() {
        return temperature;
    }

    public void setTemperature(Double temperature) {
        this.temperature = temperature;
    }

    public Double getApparentTemperature() {
        return apparentTemperature;
    }

    public void setApparentTemperature(Double apparentTemperature) {
        this.apparentTemperature = apparentTemperature;
    }

    public Double getTemperatureLow() {
        return temperatureLow;
    }

    public void setTemperatureLow(Double temperatureLow) {
        this.temperatureLow = temperatureLow;
    }

    public Double getTemperatureHigh() {
        return temperatureHigh;
    }

    public void setTemperatureHigh(Double temperatureHigh) {
        this.temperatureHigh = temperatureHigh;
    }
}
