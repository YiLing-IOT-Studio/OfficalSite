$(document).ready(function () {
    // Home Page
    (function () {
        function dataLoad(jsonObj){
            var homePage = document.getElementsByClassName('section')[0];
            var h1 = homePage.getElementsByTagName('h1')[0];
            var h2 = homePage.getElementsByTagName('h2')[0];
            var ylIntro = homePage.getElementsByClassName('yl-intro')[0];
            var paras = ylIntro.getElementsByTagName('p');
            var lead = document.createElement('span');
            lead.classList = 'lead';
            lead.innerHTML = '翼灵物联工作室';
            var span = document.createElement('span');
            span.innerHTML = ' - 一支追求技术、开放、自由的大学生团队。';
            h1.innerHTML = jsonObj.title[0];
            h2.innerHTML = jsonObj.title[1];
            paras[0].appendChild(lead);
            paras[0].appendChild(span);
            paras[1].innerHTML = 'YiLing-ers pursue technology, openness and freedom.';
        }
        dataLoad({
            title: ['翼灵物联工作室', 'The YiLing iot Studio'],
            intro: []
        });
    })();
});


$(document).ready(function() {
    $('#fullpage').fullpage({

        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['index', 'Persure', 'OpenSource', 'Excellent-ers', 'JoinUs', 'AboutUs'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['index', 'Persure', 'OpenSource', 'Excellent-ers', 'JoinUs', 'AboutUs'],
        showActiveTooltip: true,

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Design
        verticalCentered: false,
        sectionsColor: ['#1bbc9b', 'whitesmoke', '#7BAABE', 'whitesmoke', '#4BBFC3', '#ccddff'],
        sectionsColor: ['#ccddff', '#ccddff', '#ccddff', '#ccddff', '#ccddff', '#ccddff'],
        paddingTop: '5em',
        paddingBottom: '10px',
        fixedElements: '.header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {
            type: 'reveal',
            percentage: 62,
            property: 'translate'
        },

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: false,

        //events
        onLeave: function(index, nextIndex, direction) {},
        afterLoad: function(anchorLink, index) {},
        afterRender: function() {},
        afterResize: function() {},
        afterResponsive: function(isResponsive) {},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {},
    });
});
$(document).ready(function() {
    $('.yl-time').text(new Date().getFullYear());
});

(function(){
    // 百度地图API功能
    var map = new BMap.Map("allmap"); // 创建Map实例
    var point = new BMap.Point(104.190368, 30.835399);
    var marker = new BMap.Marker(point);
    map.setMapStyle({
        style: 'light',
        styleJson: [{
            "featureType": "building",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#ccddffff",
                "hue": "#a2c4c9"
            }
        }, {
            "featureType": "background",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#ccddffff"
            }
        }]
    });
    map.centerAndZoom(point, 15); // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.NavigationControl({
        type: BMAP_NAVIGATION_CONTROL_SMALL
    }));
    map.addControl(new BMap.ScaleControl({
        offset: new BMap.Size(100, 25)
    }));
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl({
        mapTypes: [
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]
    }));
    map.setCurrentCity("成都"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    map.addOverlay(marker);
    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
        '<img src="../static/img/yiling-building-72.png" alt="" style="float:right;zoom:1;overflow:hidden;width:72px;height:72px;margin-left:3px;"/>' +
        '地址：成都市新都区新都大道8号<br/>电话：17721860879<br/>简介：翼灵物联工作室位于西南石油大学（成都校区）明理楼 C1011' +
        '</div>';

    //创建检索信息窗口对象
    var searchInfoWindow = null;
    searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
        title: "翼灵物联工作室 104.190368E, 30.835399N", //标题
        width: 290, //宽度
        height: 105, //高度
        panel: "panel", //检索结果面板
        enableAutoPan: true, //自动平移
        searchTypes: []
    });
    marker.enableDragging(); //marker可拖拽
    marker.addEventListener("click", function(e) {
        searchInfoWindow.open(marker);
    });
    searchInfoWindow.open(marker);
    map.addOverlay(marker); //在地图中添加marker
}());

(function(){
    var navItem = document.getElementsByClassName('nav-item');
    var len = len=navItem.length;
    var line = [];
    for (var i=0; i<len; i++){
        (function (i) {
            line[i] = navItem[i].getElementsByClassName('line');
        })(i);
    }
    for (var j=0; j<len; j++){
        (function(j){
            EventUtil.addHandler(navItem[j], 'mouseover', function () {
                if (!hasClass(this.getElementsByClassName('nav-link')[0], 'disabled')){
                    line[j][0].style.backgroundColor = '#666';
                    line[j][1].style.backgroundColor = '#666';
                    move(line[j][0])
                        .set('width', '91px')
                        .end();
                    move(line[j][1])
                        .set('width', '91px')
                        .end();
                }
            });
            EventUtil.addHandler(navItem[j], 'mouseout', function () {
                line[j][0].style.backgroundColor = 'transparent';
                line[j][1].style.backgroundColor = 'transparent';
                move(line[j][0])
                    .set('width', '0px')
                    .end();
                move(line[j][1])
                    .set('width', '0px')
                    .end();
            });
        }(j));
    }
}());