var intro = document.getElementById('intro'),
    timer = document.getElementById('timer'),
    showIntro = '嵌入式作为翼灵物联工作室最早研究方向，<br/>形成了从零基础到前沿就业的完整人才培养模式' +
        '。时势造英雄，随着智能<br/>终端设备和穿戴式设备的普及，物联网时代将是一个属于嵌入式的时间。<br/>' +
        '本团队嵌入式开发方向以实际项目为核心导向，培养内容<br/>涵盖单片机开发、STM32微控制器开发、ZIGBEE无' +
        '线传感网络开发、<br/>物联网相关传感器技术、LINUX应用开发、LINUX系统移植、<br/>LINUX驱动程序开发等技术。' +
        '本方向致力于行业前沿科技为你的大学发展保驾护航。',
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
