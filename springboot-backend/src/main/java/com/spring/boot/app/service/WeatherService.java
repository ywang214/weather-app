package com.spring.boot.app.service;

import com.spring.boot.app.clients.WeatherClient;
import com.spring.boot.app.clients.response.WeatherResponse;
import com.spring.boot.app.controller.models.Weather;
import com.spring.boot.app.controller.models.WeatherCurrent;
import com.spring.boot.app.controller.models.WeatherHistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.LinkedHashMap;
import java.util.List;



@Service
public class WeatherService {
    private static final Integer MAX_DAY_RANGE = 7;

    @Autowired
    private WeatherClient client;

    public WeatherCurrent getWeatherCurrent(String latlong) {
        WeatherResponse response = client.getWeatherCurrentResponse(latlong);
        WeatherCurrent weatherCurrent = new WeatherCurrent(response.getCurrently());
        weatherCurrent.setTimezone(response.getTimezone());
        return weatherCurrent;
    }

    public WeatherHistory getWeatherHistory(String latlong, WeatherCurrent weatherCurrent) {
        ZoneId zone = ZoneId.of(weatherCurrent.getTimezone());
        Long originalTimestamp = weatherCurrent.getTime();
        ZonedDateTime dateTime = Instant.ofEpochSecond(originalTimestamp).atZone(zone);

        WeatherHistory weatherHistory = new WeatherHistory();
        LinkedHashMap<Long, List<Weather>> timeFrames = weatherHistory.getTimeFrames();
        LinkedHashMap<Long, Weather> days = weatherHistory.getDays();

        for (int n = MAX_DAY_RANGE; n >= 0; n--) {
            Long queryTime = dateTime.minusDays(n).toInstant().getEpochSecond();
            String latlongtime = latlong + ", " + queryTime;

            WeatherResponse response = client.getWeatherHistoryResponse(latlongtime);
            days.put(queryTime, response.getDaily().getData().get(0));
            timeFrames.put(queryTime, response.getHourly().getData());
        }

        return weatherHistory;
    }
}
