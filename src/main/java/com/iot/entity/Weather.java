package com.iot.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * Created by 李攀 on 2017/12/8.
 */
@Getter
@Setter
@ToString
public class Weather {

    private String location;//城市名称
    private String temperature;
    private String wind;
    private String weather;//实况天气状况

    private String nextTemperature;
    private String nextWind;
    private String nextWeather;//实况天气状况
}
