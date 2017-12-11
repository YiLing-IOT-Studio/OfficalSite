window.onload = function() {
    pageInit();
}

function pageInit() {
    var date = document.getElementsByClassName('tile-date')[0];
    var week = document.getElementsByClassName('date-week')[0];
    var day = document.getElementsByClassName('date-day')[0];
    var now = new Date();
    var zhArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    week.innerHTML = zhArr[now.getDay()];
    day.innerHTML = now.getDate();

    var tileWeather = document.getElementsByClassName('tile-weather')[0];
    var weather = document.getElementsByClassName('weather')[0];
    var temp = document.getElementsByClassName('temp')[0];
    var tempCur = document.getElementsByClassName('temp-cur')[0];
    var tempMax = document.getElementsByClassName('temp-max')[0];
    var tempMin = document.getElementsByClassName('temp-min')[0];
    var city = document.getElementsByClassName('city')[0];

    $.ajax({
        type: 'GET',
        url: '/weatherInfo',
        dataType: 'json',
        success: function(data) {
            console.log('当前城市：' + data.HeWeather6[0].basic['parent_city']);
            console.log('当前温度：' + data.HeWeather6[0].now.tmp);
            console.log('当前天气：' + data.HeWeather6[0].now['cond_txt']);
            console.log('当前风力：' + data.HeWeather6[0].now['wind_sc']);
            console.log('今天最高温度：' + data.HeWeather6[0].daily_forecast[0]['tmp_max']);
            console.log('今天最低温度：' + data.HeWeather6[0].daily_forecast[0]['tmp_min']);
            console.log('明天最高温度：' + data.HeWeather6[0].daily_forecast[1]['tmp_max']);
            console.log('明天最高温度：' + data.HeWeather6[0].daily_forecast[1]['tmp_min']);
            weather.innerHTML = data.HeWeather6[0].now['cond_txt'];
            city.innerHTML = data.HeWeather6[0].basic['parent_city'];
            tempCur.innerHTML = data.HeWeather6[0].now.tmp;
            tempMax.innerHTML = data.HeWeather6[0].daily_forecast[0]['tmp_max'];
            tempMin.innerHTML = data.HeWeather6[0].daily_forecast[0]['tmp_min'];
        },
        error: function() {
            temp.innerHTML = '天气获取失败...';
        }
    });

    var newsCon = document.getElementsByClassName('news-con')[0];
    var newsContent = '第五届道惟尔杯完满闭幕，第五届道惟尔杯完满闭幕，第五届道惟尔杯完满闭幕';
    if (newsContent.length > 27) {
        newsContent = newsContent.substr(0, 27) + '...';
    }
    newsCon.innerHTML = newsContent;
}