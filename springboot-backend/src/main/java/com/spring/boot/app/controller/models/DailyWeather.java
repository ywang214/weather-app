package com.spring.boot.app.controller.models;

import java.util.List;

public class DailyWeather {
    private List<Weather> data;

    public List<Weather> getData() {
        return data;
    }

    public void setData(List<Weather> data) {
        this.data = data;
    }
}
