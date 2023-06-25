package com.iptracker.pojo;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserInfo {
    private String ip;
    private String city;
    private String state;
    private String postalCode;
    private String timezone;
    private String isp;
    private BigDecimal latitude;
    private BigDecimal longitude;

    public UserInfo(String ip, String city, String state, String postalCode, String timezone, String isp, BigDecimal latitude, BigDecimal longitude){
        this.ip = ip;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.timezone = timezone;
        this.isp = isp;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
