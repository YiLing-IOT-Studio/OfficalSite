package com.iot.utils;

import com.iot.entity.Weather;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

/**
 * Created by 李攀 on 2017/12/7.
 */
public class WeatherUtil {

    public static String weatherData() {

        String param = "location=CN101270103&key=af6d493a322b49de967311ebd12de49f";//CN101270103	xindu	新都
        String param2;
        StringBuilder sb = new StringBuilder();
        InputStream is = null;
        BufferedReader br = null;
        PrintWriter out = null;
        try {
            param2 =  URLEncoder.encode(param,"UTF-8");
            //接口地址
            String url = "https://free-api.heweather.com/s6/weather?" + param2;
            URL uri = new URL(url);
            HttpURLConnection connection = (HttpURLConnection) uri.openConnection();
            connection.setRequestMethod("POST");
            connection.setReadTimeout(5000);
            connection.setConnectTimeout(10000);
            connection.setRequestProperty("accept", "*/*");
            //发送参数
            connection.setDoOutput(true);
            out = new PrintWriter(connection.getOutputStream());
            out.print(param);
            out.flush();
            //接收结果
            is = connection.getInputStream();
            br = new BufferedReader(new InputStreamReader(is));
            String line;
            //缓冲逐行读取
            while ((line = br.readLine()) != null) {
                sb.append(line);
            }
            //System.out.println(sb.toString());
        } catch (Exception ignored) {
        } finally {
            //关闭流
            try {
                if (is != null) {
                    is.close();
                }
                if (br != null) {
                    br.close();
                }
                if (out != null) {
                    out.close();
                }
            } catch (IOException e2) {
            }
        }

        return sb.toString();
    }

    /**
     * JSON数据解析
     */
    public static Weather weatherInfo(String weatherInfobyJson) {

        Weather weather = new Weather();
        JSONObject weatherObjectOfJson = JSONObject.fromObject(weatherInfobyJson);
        JSONArray weatherArrayOfJson = weatherObjectOfJson.getJSONArray("HeWeather6");
        JSONObject weatherInfoObject = weatherArrayOfJson.getJSONObject(0);
        JSONObject timeWeatherInfo = weatherInfoObject.getJSONObject("now");
        JSONArray weatherInfoArray = weatherInfoObject.getJSONArray("daily_forecast");//预告天气数组
        JSONObject nextDayWeather = weatherInfoArray.getJSONObject(1);//第二天的天气预告

        weather.setWeather(timeWeatherInfo.getString("cond_txt"));
        weather.setTemperature(timeWeatherInfo.getString("tmp"));
        weather.setWind(timeWeatherInfo.getString("wind_dir"));
        weather.setNextTemperature(nextDayWeather.getString("tmp_max"));
        weather.setNextWeather(nextDayWeather.getString("cond_txt_d"));
        weather.setNextWind(nextDayWeather.getString("wind_dir"));

        return weather;
    }
}