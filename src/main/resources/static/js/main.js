$(document).ready(function() {
    // (function() {
    //     function dataLoad(jsonObj, idx) {
    //         var currentPage = document.getElementsByClassName('section')[idx];
    //         var mainTitle, subTitle;
    //         if (idx === 0) {
    //             mainTitle = currentPage.getElementsByTagName('h1')[0];
    //             subTitle = currentPage.getElementsByTagName('h2')[0];
    //         } else if (typeof idx === 'number') {
    //             mainTitle = currentPage.getElementsByTagName('h2')[0];
    //             subTitle = currentPage.getElementsByTagName('h3')[0];
    //         }

    //         var intro = currentPage.getElementsByClassName('yl-intro')[0];
    //         var introContent = intro.getElementsByTagName('p');

    //         if (jsonObj.intro.lead) {
    //             var introLead = document.createElement('span');
    //             introLead.classList = 'lead';
    //             introLead.innerHTML = jsonObj.intro.lead;
    //             introContent[0].appendChild(introLead);
    //         }

    //         var span = document.createElement('span');
    //         span.innerHTML = jsonObj.intro.content;

    //         mainTitle.innerHTML = jsonObj.title.main;
    //         subTitle.innerHTML = jsonObj.title.sub;
    //         introContent[0].appendChild(span);
    //         introContent[1].innerHTML = jsonObj.intro.en_content;
    //     }
    //     // Home Page
    //     dataLoad({
    //         title: {
    //             main: '翼灵物联工作室',
    //             sub: 'YiLing iot Studio'
    //         },
    //         intro: {
    //             lead: '翼灵物联工作室',
    //             content: ' - 一支追求技术、开发与自由的大学生团队。',
    //             en_content: 'YiLing-ers pursue technology, openness and freedom.'
    //         }
    //     }, 0);
    //     // Persue Page
    //     dataLoad({
    //         title: {
    //             main: '培养方向',
    //             sub: 'The technology we pursue',
    //         },
    //         intro: {
    //             content: '以嵌入式开发为特色，云端、移动端、PC 端协同开发',
    //             en_content: 'YiLing-ers develop Embedded specially, coordinating Cloud, Mobile and Client as well.',
    //         }
    //     }, 1);
    // })();
});


$(document).ready(function() {
    $('#fullpage').fullpage({

        //Navigation
        lockAnchors: false,
        anchors: ['index', 'Pursue', 'OpenSource', 'Excellent-ers', 'JoinUs', 'AboutUs'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['HomePage', '培养方向', '开源空间', '风云人物', '加入我们', '关于我们'],
        showActiveTooltip: false,

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
        normalScrollElements: '.yl-location',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Design
        verticalCentered: true,
        resize: true,
        sectionsColor: ['#1bbc9b', 'whitesmoke', '#7BAABE', 'whitesmoke', '#4BBFC3', '#ccddff'],
        sectionsColor: ['#ccddff', '#ccddff', '#ccddff', '#ccddff', '#ccddff', '#ccddff'],
        paddingTop: '5em',
        paddingBottom: '10px',
        fixedElements: '.header, .footer',
        parallaxOptions: {
            type: 'reveal',
            percentage: 62,
            property: 'translate'
        },

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction) {

        },
        afterLoad: function(anchorLink, index) {
            if (index === 1) {
                $('.h2, .h5, .yl-intro, .btn-group').addClass('animated slideInUp');
            }
            if (index === 6) {
                $('.yl-location').addClass('animated slideInUp');
            }
        },
        afterRender: function() {
            (function() {
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
            (function() {
                var navItem = document.getElementsByClassName('nav-item');
                var len = len = navItem.length;
                var line = [];
                for (var i = 0; i < len; i++) {
                    (function(i) {
                        line[i] = navItem[i].getElementsByClassName('line');
                    })(i);
                }
                for (var j = 0; j < len; j++) {
                    (function(j) {
                        EventUtil.addHandler(navItem[j], 'mouseover', function() {
                            if (!hasClass(this.getElementsByClassName('nav-link')[0], 'disabled')) {
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
                        EventUtil.addHandler(navItem[j], 'mouseout', function() {
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
        },
        afterResize: function() {},
        afterResponsive: function(isResponsive) {},
    });
});
$(document).ready(function() {
    $('.yl-time').text(new Date().getFullYear());
});

// (function($) {
//     $.fn.borderAnim = function() {
//         var w = $(this).width();
//         var h = $(this).height();

//         $(this).hover(function() {
//             var borderTop = $('<div>').css({
//                 position: "absolute",
//                 top: "-2px",
//                 left: "-2px",
//                 width: "0",
//                 height: "2px",
//                 background: "#ff0000"
//             }).addClass('divTop');
//             var borderRight = $('<div>').css({
//                 position: "absolute",
//                 bottom: "-2px",
//                 right: "-2px",
//                 width: "2px",
//                 height: "0",
//                 background: "#ff0000"
//             }).addClass('divRight');
//             var borderBottom = $('<div>').css({
//                 position: "absolute",
//                 bottom: "-2px",
//                 right: "-2px",
//                 width: "0",
//                 height: "2px",
//                 background: "#ff0000"
//             }).addClass('divBottom');
//             var borderLeft = $('<div>').css({
//                 position: "absolute",
//                 top: "-2px",
//                 left: "-2px",
//                 width: "2px",
//                 height: "0",
//                 background: "#ff0000"
//             }).addClass('divLeft');

//             $(this).append(borderTop, borderRight, borderBottom, borderLeft);

//             $(this).find('div:nth-child(odd)').stop().animate({ width: w + 3.5 }, 300);
//             $(this).find('div:nth-child(even)').stop().animate({ height: h + 3.5 }, 300);
//         }, function() {
//             $(this).find('div:nth-child(odd)').stop().animate({ width: 0 }, 300);
//             $(this).find('div:nth-child(even)').stop().animate({ height: 0 }, 300, function() {
//                 $(".card .divTop,.card .divRight,.card .divBottom,.card .divLeft").remove()
//             });
//         });
//     }
// })(jQuery);

// $('.card').borderAnim();




// $(document).ready(function() {
//     var lazy = document.getElementsByClassName('lazy_js')[0];
//     lazy.classList = '';
//     console.log(lazy);
// });

// var lazy = document.getElementsByClassName('lazy_js')[0];
// $('.lazy_js').remove('.lazy_js');
// console.log(lazy);
// console.log(1);

/*
jQuery Hover3d
=================================================
Version: 1.0.0
Author: Rian Ariona
Website: http://ariona.net
Docs: http://ariona.github.io/hover3d
Repo: http://github.com/ariona/hover3d
Issues: http://github.com/ariona/hover3d/issues
*/

// (function($) {

//     $.fn.hover3d = function(options) {

//         var settings = $.extend({
//             selector: null,
//             perspective: 1000,
//             sensitivity: 20,
//             invert: false,
//             shine: false,
//             hoverInClass: "hover-in",
//             hoverOutClass: "hover-out"
//         }, options);

//         return this.each(function() {

//             var $this = $(this),
//                 $card = $this.find(settings.selector);

//             if (settings.shine) {
//                 $card.append('<div class="shine"></div>');
//             }
//             var $shine = $(this).find(".shine");

//             // Set perspective and transformStyle value
//             // for element and 3d object	
//             $this.css({
//                 perspective: settings.perspective + "px",
//                 transformStyle: "preserve-3d"
//             });

//             $card.css({
//                 perspective: settings.perspective + "px",
//                 transformStyle: "preserve-3d",
//             });

//             $shine.css({
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 bottom: 0,
//                 right: 0,
//                 "z-index": 9
//             });

//             // Mouse Enter function, this will add hover-in
//             // Class so when mouse over it will add transition
//             // based on hover-in class
//             function enter() {
//                 $card.addClass(settings.hoverInClass);

//                 setTimeout(function() {
//                     $card.removeClass(settings.hoverInClass);
//                 }, 1000);
//             }

//             // Mouse movement Parallax effect
//             function move(event) {
//                 var w = $this.innerWidth(),
//                     h = $this.innerHeight(),
//                     ax = settings.invert ? (w / 2 - event.offsetX) / settings.sensitivity : -(w / 2 - event.offsetX) / settings.sensitivity,
//                     ay = settings.invert ? -(h / 2 - event.offsetY) / settings.sensitivity : (h / 2 - event.offsetY) / settings.sensitivity;
//                 dy = event.offsetY - h / 2,
//                     dx = event.offsetX - w / 2,
//                     theta = Math.atan2(dy, dx),
//                     angle = theta * 180 / Math.PI - 90;

//                 if (angle < 0) {
//                     angle = angle + 360;
//                 }


//                 $card.css({
//                     perspective: settings.perspective + "px",
//                     transformStyle: "preserve-3d",
//                     transform: "rotateY(" + ax + "deg) rotateX(" + ay + "deg)"
//                 });

//                 $shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + event.offsetY / h * .5 + ') 0%,rgba(255,255,255,0) 80%)');
//             }

//             // Mouse leave function, will set the transform
//             // property to 0, and add transition class
//             // for exit animation
//             function leave() {
//                 $card.addClass(settings.hoverOutClass);
//                 $card.css({
//                     perspective: settings.perspective + "px",
//                     transformStyle: "preserve-3d",
//                     transform: "rotateX(0) rotateY(0)"
//                 });
//                 setTimeout(function() {
//                     $card.removeClass(settings.hoverOutClass);
//                 }, 1000);
//             }

//             // Mouseenter event binding
//             $this.on("mouseenter", function() {
//                 return enter();
//             });

//             // Mousemove event binding
//             $this.on("mousemove", function(event) {
//                 return move(event);
//             });

//             // Mouseleave event binding
//             $this.on("mouseleave", function() {
//                 return leave();
//             });

//         });

//     };

// }(jQuery));