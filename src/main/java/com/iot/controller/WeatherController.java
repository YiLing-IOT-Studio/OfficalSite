package com.iot.controller;

import com.iot.utils.WeatherUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by 李攀 on 2017/12/10.
 */
@Controller
@ResponseBody
public class WeatherController {

    @RequestMapping("/weatherInfo")
    public String weatherInfo() {

        return WeatherUtil.weatherData();
    }
}
