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
            console.log(data);
        },
        error: function() {
            temp.innerHTML = '天气获取失败...';
        }
    })

}