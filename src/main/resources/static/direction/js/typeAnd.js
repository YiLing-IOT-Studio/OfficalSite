var intro = document.getElementById('intro'),
    timer = document.getElementById('timer'),
    showIntro = '作为翼灵物联工作室四大研究方向之一，<br>拥有着举足轻重的地位。' +
        '移动开发部负责智能手机App的<br>设计、开发、维护，部门成立较早，拥有完整的教学体系，' +
        '能够培养出能力拔萃的全方位人才。部门以Android应用开发为主线，以开源项目开发、' +
        '<br>外包项目开发以及上架App开发为目标，内部定期对成员进行培训，培训内容涵盖C、Java编程语言基础、' +
        'App界面设计、<br>数据库基础、开源库应用、设计模式等。部门秉承“习惯解决问题，<br>以解决问题为习惯”的宗旨，' +
        '带领新成员走入多姿多彩的移动开发之路。',
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
