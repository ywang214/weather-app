package com.spring.boot.app.clients;

import com.spring.boot.app.clients.response.WeatherResponse;
import com.spring.boot.app.config.DarkSkyApiConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

@Component
public class WeatherClient {
    private final URI darkSkyEndPoint;
    private final String apiKey;
    private final RestTemplate restClient;

    @Autowired
    public WeatherClient(DarkSkyApiConfig darkSkyApiConfig)
            throws URISyntaxException {
        this.restClient = new RestTemplate();
        this.darkSkyEndPoint = new URI(darkSkyApiConfig.getEndpoint());
        this.apiKey = darkSkyApiConfig.getApiKey();
    }

    public WeatherResponse getWeatherCurrentResponse(String latlong) {
        String url = this.darkSkyEndPoint.toString() + "/{API_KEY}/{latlong}?extend=hourly&exclude=minutely,flags";
        Map<String, String> params = new HashMap<>();
        params.put("API_KEY", this.apiKey);
        params.put("latlong", latlong);
        HttpHeaders headers = new HttpHeaders();
        HttpEntity <String> request = new HttpEntity<>(headers);
        ResponseEntity<WeatherResponse> responseEntity = this.restClient.exchange(url, HttpMethod.GET, request, WeatherResponse.class, params);
        return responseEntity.getBody();
    }

    public WeatherResponse getWeatherHistoryResponse(String latlongtime) {
        String url = this.darkSkyEndPoint.toString() + "/{API_KEY}/{latlongtime}?exclude=minutely,flags";
        Map<String, String> params = new HashMap<>();
        params.put("API_KEY", this.apiKey);
        params.put("latlongtime", latlongtime);
        HttpHeaders headers = new HttpHeaders();
        HttpEntity <String> request = new HttpEntity<>(headers);
        ResponseEntity<WeatherResponse> responseEntity = this.restClient.exchange(url, HttpMethod.GET, request, WeatherResponse.class, params);
        return responseEntity.getBody();
    }


}
