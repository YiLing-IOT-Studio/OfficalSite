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
}