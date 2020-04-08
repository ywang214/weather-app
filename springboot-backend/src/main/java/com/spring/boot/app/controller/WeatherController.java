package com.spring.boot.app.controller;

import com.spring.boot.app.controller.models.WeatherCurrent;
import com.spring.boot.app.controller.models.WeatherDTO;
import com.spring.boot.app.controller.models.WeatherHistory;
import com.spring.boot.app.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

@RestController
public class WeatherController {

    @Autowired
    private WeatherService weatherService;

    @GetMapping("/api/weatherData/{latlong}")
    public ResponseEntity<WeatherDTO> getCurrentWeather(@NotNull @PathVariable String latlong) {
        WeatherCurrent weatherCurrent = weatherService.getWeatherCurrent(latlong);
        WeatherHistory weatherHistory = weatherService.getWeatherHistory(latlong, weatherCurrent);
        WeatherDTO weather = new WeatherDTO(weatherCurrent, weatherHistory);
        return new ResponseEntity<>(weather, HttpStatus.OK);
    }
}
