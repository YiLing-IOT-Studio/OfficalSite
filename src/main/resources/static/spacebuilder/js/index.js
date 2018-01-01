window.onload = function () {
    var allTime = new Date().getTime();
    var ImgList = document.querySelectorAll('img'),mask = document.querySelector('.mask'),num = 0;
    for(var i = 0;i < ImgList.length;i ++)
    {
        ImgList[i].src = ImgList[i].getAttribute('data-url');
        ImgList[i].onload = function () {
            num ++;
        }
    }
    var timer = setInterval(function () {
        if(num == ImgList.length)
        {
            mask.style.display = 'none';
            clearInterval(timer);
        }
    },200)
}