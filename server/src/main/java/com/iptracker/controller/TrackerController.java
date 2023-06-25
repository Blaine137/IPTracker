package com.iptracker.controller;

import java.math.BigDecimal;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.iptracker.constants.Constants;
import com.iptracker.pojo.UserInfo;

@RestController
@CrossOrigin(origins = Constants.CLIENT_URL)
public class TrackerController {

    private static final Logger logger = LoggerFactory.getLogger(TrackerController.class);

    @GetMapping("doTest")
    public String doTest(){
        return "testing";
    }

    @GetMapping(value = "/geolocate", produces = "application/json")
    public UserInfo geoLocate(@RequestParam("apiKey") String key){
        final String url = Constants.GEOLOCATION_BASE_URL + "?apiKey=" + key;
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        int statusCode = response.getStatusCode().value();
        if(statusCode == 200){
            String res = response.getBody();
            UserInfo res2 = parseResponse(res);
            return res2;
        }
        logger.info("\n request failed and resulted in a status code - {}", statusCode);
        return null;
    }

    private UserInfo parseResponse(String res){
        JSONObject jo = new JSONObject(res);
        JSONObject location = jo.getJSONObject("location");
        String IP = jo.getString("ip");
        String isp = jo.getString("isp");
        String city = location.getString("city");
        String state = location.getString("region");
        String postalCode = location.getString("postalCode");
        String timezone = location.getString("timezone");
        BigDecimal lat = location.getBigDecimal("lat");
        BigDecimal lng = location.getBigDecimal("lng");
        UserInfo userInfo = new UserInfo(IP, city, state, postalCode, timezone, isp, lat, lng);
        return userInfo;
    }

}
