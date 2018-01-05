var intro = document.getElementById('intro'),
    timer = document.getElementById('timer'),
    showIntro = 'web开发作为翼灵物联网工作室发展最快的方向，<br>' +
        '完成工作室官网前后端搭建，形成了从前端网页到后端服务器架构的完整培养模式。<br>' +
        '随着从互联网到物联网的转变，web服务成为物联网系统的核心组成，<br>稳坐第一把交椅。' +
        '本团队WEB开发方向以项目外包为推动。培养内容涵盖J2EE，数据库，通用框架和WEB服务端技术。' +
        '本方向旨在搭建鲁棒最强的后台系统，给用户最流畅与舒适的体验。',
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
