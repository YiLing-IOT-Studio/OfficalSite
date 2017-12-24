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
        anchors: ['signin', 'welcome', 'learn', 'ExcellentMan', 'JoinUs', 'AboutUs'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['signin', 'welcome', 'learn', 'ExcellentMan', 'JoinUs', 'AboutUs'],
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
                    '<img src="  /img/yiling-building-72.png" alt="" style="float:right;zoom:1;overflow:hidden;width:72px;height:72px;margin-left:3px;"/>' +
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
    });
    $.fn.fullpage.silentMoveTo('welcome', 1);


    $('.yl-time').text(new Date().getFullYear());

    $('.nav-item-js').click(function(){
        var $fa = $('.fa-for-js');
        if ($fa.hasClass('.fa-caret-right')){
            $fa.removeClass('.fa-caret-right');
            $fa.addClass('fa-caret-down');
        } else {
            $.removeClass('fa-caret-down');
            $.addClass('fa-caret-right');
        }
        
    })


});

$(document).ready(function() {
    function anim() {
        move('.swiper-img.img1')
            .set('top', '0px')
            .duration('2s')
            .delay('2s')
            .end(function() {
                move('.swiper-img.img1')
                    .set('top', '-318px')
                    .duration('2s')
                    .delay('2s')
                    .end();
                move('.swiper-img.img2')
                    .set('top', '0px')
                    .duration('2s')
                    .delay('2s')
                    .end(function() {
                        move('.swiper-img.img2')
                            .set('top', '-318px')
                            .duration('2s')
                            .delay('2s')
                            .end();
                        move('.swiper-img.img3')
                            .set('top', '0px')
                            .duration('2s')
                            .delay('2s')
                            .end(function() {
                                move('.swiper-img.img3')
                                    .set('top', '-318px')
                                    .duration('2s')
                                    .delay('2s')
                                    .end();
                                move('.swiper-img.img4')
                                    .set('top', '0px')
                                    .duration('2s')
                                    .delay('2s')
                                    .end(function() {
                                        move('.swiper-img.img4')
                                            .set('top', '318px')
                                            .duration('2s')
                                            .delay('2s')
                                            .end();
                                        move('.swiper-img.img3')
                                            .set('top', '0px')
                                            .duration('2s')
                                            .delay('2s')
                                            .end(function() {
                                                move('.swiper-img.img3')
                                                    .set('top', '318px')
                                                    .duration('2s')
                                                    .delay('2s')
                                                    .end();
                                                move('.swiper-img.img2')
                                                    .set('top', '0px')
                                                    .duration('2s')
                                                    .delay('2s')
                                                    .end(function() {
                                                        move('.swiper-img.img2')
                                                            .set('top', '318px')
                                                            .duration('2s')
                                                            .delay('2s')
                                                            .end();
                                                        move('.swiper-img.img1')
                                                            .set('top', '0px')
                                                            .duration('2s')
                                                            .delay('2s')
                                                            .end();
                                                    })
                                            })
                                    })
                            })
                    });
            });
    }
    var timer = null;
    timer = setInterval(anim(), 2000);

    (function() {
        var timer = null;
        var randomNum;

        var tileCon = document.getElementsByClassName('tile-con')[2];
        var tileItems = tileCon.getElementsByClassName('tile-item');
        var tileImgs = tileCon.getElementsByClassName('tile-img');
        var tileItemsLen = tileItems.length;

        function randomAnimation() {
            randomNum = parseInt(Math.random() * 8);
            console.log(randomNum);

            switch (randomNum) {
                case 0:
                    console.log('item0');
                    rotateAnim(randomNum);
                    break;
                case 1:
                    console.log('item1');
                    rotateAnim(randomNum);
                    break;
                case 2:
                    console.log('item2');
                    rotateAnim(randomNum);
                    break;
                case 3:
                    console.log('item3');
                    rotateAnim(randomNum);
                    break;
                case 4:
                    console.log('item4');
                    // rotateAnim(randomNum);
                    break;
                case 5:
                    console.log('item5');
                    rotateAnim(randomNum);
                    break;
                case 6:
                    console.log('item6');
                    rotateAnim(randomNum);
                    break;
                case 7:
                    console.log('item7');
                    rotateAnim(randomNum);
                    break;
                default:
                    console.log('default animation');
                    rotateAnim(randomNum);
                    break;
            }

        }

        timer = setInterval(randomAnimation, 5000);

        for (var i = 0; i < tileItemsLen; i++) {
            (function(i) {
                tileItems[i].flag = true;
                tileItems[i].imgFlag1 = true;
                tileItems[i].imgFlag2 = true;
                EventUtil.addHandler(tileItems[i], 'mouseover', function() {
                    clearInterval(timer);
                });
                EventUtil.addHandler(tileItems[i], 'mouseout', function() {
                    timer = setInterval(randomAnimation, 5000);
                });
            }(i));
        }

        tileItems[0].imgs = [
            ['  /img/frontend/fe_liyoubo_200x200.jpg', '  /img/frontend/fe_liwenfei_200x200.jpg'],
            ['  /img/frontend/fe_zhoudeng.jpg', '  /img/frontend/fe_caoxuemei_200x200.jpg']
        ];
        tileItems[1].imgs = [
            ['  /img/backend/be_xiongxiaoyu_200x200.jpg', '  /img/backend/be_jinglili_200x200.jpg'],
            ['  /img/backend/be_wangping_200x200.jpg', '  /img/backend/be_zhanghaiyang_200x200.jpg']
        ];
        tileItems[2].imgs = [
            ['  /img/glory/ji-suan-ji-she-ji-da-sai-yi-deng-jiang-200x200.jpg', '  /img/glory/wu-lian-wang-she-ji-jing-sai-200x200.jpg'],
            ['  /img/glory/wu-lian-wang-she-ji-jing-sai-2-200x200.jpg', '  /img/glory/wu-lian-wang-she-ji-jing-sai-3-200x200.jpg']
        ];
        tileItems[3].imgs = [
            ['  /img/embedded/em_yigangxi_200x200.jpg', '  /img/embedded/em-chengmiaohong-200x200.jpg'],
            ['  /img/embedded/em_jifengtao_200x200.jpg', '  /img/embedded/em_duyu_200x200.jpg']
        ];
        tileItems[5].imgs = [
            ['  /img/android/an_tangguangsheng_200x200.jpg', '  /img/android/an_zengxinrui_200x200.jpg'],
            ['  /img/android/an_songqifei_200x200.jpg', '  /img/android/an_duzeming_200x200.jpg']
        ];
        tileItems[6].imgs = [
            ['  /img/newMembers/new_fenglei_200x200.jpg', '  /img/newMembers/new_xiaoyaqiong_200x200.jpg'],
            ['  /img/newMembers/new_xiongcheng_200x200.jpg', '  /img/newMembers/new_pengzhen_200x200.jpg']
        ];
        tileItems[7].imgs = [
            ['  /img/project/xun-che-xi-tong-200x200.jpg', '  /img/project/zhi-neng-an-quan-xie-200x200.jpg'],
            ['  /img/project/wei-xin-xiao-cheng-xu-200x200.jpg', '  /img/project/zhi-neng-xiao-che-200x200.jpg']
        ]

        function rotateAnim(index) {
            var tileItem = tileItems[index];
            console.log(tileItem);
            var tileItemCon = tileItem.getElementsByClassName('tile-item-content')[0];
            console.log(tileItemCon);
            var tileImg = tileItemCon.getElementsByTagName('img');
            console.log(tileImg);

            function rotate3d() {
                tileItemCon.style.transform = 'rotateX(90deg)';
            }

            function rotate3dReverse() {
                tileItemCon.style.transform = 'rotateX(0deg)';
            }
            if (tileItem.flag) {
                if (tileItem.imgFlag1) {
                    tileImg[1].src = tileItem.imgs[1][0];
                    tileItem.imgFlag1 = false;
                } else {
                    tileImg[1].src = tileItem.imgs[1][1];
                    tileItem.imgFlag1 = true;
                }
                rotate3d();
                tileItem.flag = false;
            } else {
                if (tileItem.imgFlag2) {
                    tileImg[0].src = tileItem.imgs[0][0];
                    tileItem.imgFlag2 = false;
                } else {
                    tileImg[0].src = tileItem.imgs[0][1];
                    tileItem.imgFlag2 = true;
                }
                rotate3dReverse();
                tileItem.flag = true;
            }
        }

        (function() {
            var tileItems = document.getElementsByClassName('tile-item-js');
            var tileItemsLen = tileItems.length;
            var tileImgs = [];

            var timer = null;

            for (var i = 0; i < tileItemsLen; i++) {
                (function(i) {
                    tileImgs[i] = tileItems[i].getElementsByClassName('person-img')[0];
                })(i);
            }

            var count = 0;

            var leftImgArr = ['  /img/brand/brand_we_1_200x200.jpg', '  /img/brand/brand_we_2_200x200.jpg', '  /img/brand/brand_we_2_200x200.jpg'];
            var centerImgArr = ['  /img/brand/brand_want_2_200x200.jpg', '  /img/brand/brand_want_1_200x200.jpg', '  /img/brand/brand_want_3_200x200.jpg'];
            var rightImgArr = ['  /img/brand/brand_you_2_200x200.jpg', '  /img/brand/brand_you_2_200x200.jpg', '  /img/brand/brand_you_1_200x200.jpg'];

            function autoAnim() {
                if (count >= 3) {
                    count = 0;
                }
                tileImgs[0].src = leftImgArr[count];
                tileImgs[1].src = centerImgArr[count];
                tileImgs[2].src = rightImgArr[count];
                count++;
            }

            timer = setInterval(autoAnim, 3000);
        })();
    })();

    (function() {
        $('#username').blur(function() {
            var username = $('#username').val();
            if (username) {
                $.ajax({
                    type: 'POST',
                    url: '/',
                    dataType: 'json',
                    data: {
                        'username': username
                    },
                    success: function(data) {
                        console.log(data);
                        if (parseInt(data)) {
                            $('.form-group:first-child').addClass('has-success');
                            $('#username').addClass('form-control-success');
                        } else {
                            $('.form-group:first-child').addClass('has-error');
                            $('#username').addClass('form-control-error');
                        }
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });
            }
        });
        $('#username').focus(function() {
            if ($(this).hasClass('form-control-success')) {
                $(this).removeClass('form-control-success');
                $(this).parent().remove('has-success');
            } else {
                $(this).removeClass('form-control-error');
                $(this).parent().remove('has-error');
            }
        });
        $('#password').blur(function() {
            var password = $('#password').val();
            var username = $('#username').val();
            if (password.length >= 6 && password.length <= 16) {
                $('.form-group:nth-child(2)').addClass('has-success');
                $('#password').addClass('form-control-success');
            } else {
                $('.form-group:nth-child(2)').addClass('has-warning');
                $('#password').addClass('form-control-warning');
            }
        });
        $('#password').focus(function() {
            if ($(this).hasClass('form-control-success')) {
                $(this).removeClass('form-control-success');
                $(this).parent().remove('has-success');
            } else {
                $(this).removeClass('form-control-warning');
                $(this).parent().remove('has-warning');
            }
        });
        $('#submitBtn').click(function(event) {
            event.preventDefault();
            $.ajax({
                type: 'POST',
                url: '',
                dataType: 'json',
                data: {
                    'username': $('#username').val(),
                    'password': $('#password').val()
                },
                success: function() {
                    console.log('login success');
                },
                error: function() {
                    console.log('login error');
                }
            });
        });
    })();

});