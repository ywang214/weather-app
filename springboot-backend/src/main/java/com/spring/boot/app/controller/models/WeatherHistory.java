package com.spring.boot.app.controller.models;

import java.util.LinkedHashMap;
import java.util.List;

public class WeatherHistory {
    private LinkedHashMap<Long, List<Weather>> timeFrames;
    private LinkedHashMap<Long, Weather> days;

    public WeatherHistory () {
        this.timeFrames = new LinkedHashMap<>();
        this.days = new LinkedHashMap<>();
    }

    public LinkedHashMap<Long, List<Weather>> getTimeFrames() {
        return timeFrames;
    }

    public void setTimeFrames(LinkedHashMap<Long, List<Weather>> timeFrames) {
        this.timeFrames = timeFrames;
    }

    public LinkedHashMap<Long, Weather> getDays() {
        return days;
    }

    public void setDays(LinkedHashMap<Long, Weather> days) {
        this.days = days;
    }
}
