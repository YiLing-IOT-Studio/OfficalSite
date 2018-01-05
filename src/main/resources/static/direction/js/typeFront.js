var intro = document.getElementById('intro'),
    timer = document.getElementById('timer'),
    showIntro = '作为翼灵物联网工作室最年轻的团队，<br>协助后端共同搭建团队官网。' +
        '我们的主要是利用HTML/CSS/JavaScript 等<br>各种Web技术进行客户端产品的开发，' +
        '完成客户端程序（也就是浏览器端）的开发，开发JavaScript以及Flash模块，' +
        '同时结合后台开发技术模拟整体效果，<br>进行丰富互联网的Web开发，致力于通过技术改善用户体验。',
    interval = null,isVisible = true;
interval = setInterval(function () {
    timer.style.visibility = isVisible?'visible':'hidden'
    isVisible = isVisible?false:true;
},300)
setTimeout(function () {
    timeout(showIntro.split(''),[],intro);
},1500)
function timeout(arr,dest,el) {
    var t = 80;
    setTimeout(function () {
        var html = dest.join('');
        dest = html.split('');
        el.innerHTML = html;
        if(arr.length != 0)
        {
            var tmp = arr.shift();
            dest.push(tmp);
            timeout(arr,dest,el);
        }else{
            clearInterval(interval);
            timer.style.display = 'none';
            interval = null;
        }
    },t)
}
// 判断滚动条
var nav = document.getElementById('nav');
document.addEventListener('scroll',winScroll,false);
function winScroll() {
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop > 30)
    {
        nav.style.display = 'block';
    }else{
        nav.style.display = '';
    }
}
