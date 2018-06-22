$(function () {
    // 1.获取屏幕的宽高
    var nowPage = 0;//页数
    var width = window.innerWidth;
    var height = window.innerHeight;

    // 最外层盒子设置宽高
    $('.content').css('width',width).css('height',4 * height);
    // 所有页设置宽高
    $('.page').css('width',width).css('height',height);

    //手指触屏监听事件
    $('.content').swipe({
       swipe:function (event,direction,distance,duraction,fingerCount) {
           if(direction === 'down'){
               nowPage--;
           }else if(direction === 'up'){
               nowPage++;
           }

           if(nowPage > 3){
               nowPage = 3;
           }else if(nowPage < 0){
               nowPage = 0;
           }

           $('.content').animate({top : - nowPage * 100 +'%'},{duration : 400, complete : function () {
                   if(nowPage === 1){
                       $('.page2-Farm').fadeIn(2000,function () {
                           $('.page2-IT').fadeIn(2000);
                       })
                   }
                   if(nowPage === 2){
                       $('.page3-Title').fadeIn(2000);
                       $('.page3-BusTitle').fadeIn(2000);
                       $('.page3-bus').animate({left : - 100 + "%"},{duration : 800 , complete : function () {
                               $('.page3-BusAvatar').animate({right : 25 + "%"},{duration : 600 , complete: function () {
                                       $('.page3-Title').fadeOut(600);
                                       $('.page3-BusTitle').fadeOut(600);
                                       $('.page3-bus').fadeOut(600);
                                       $('.page3-BusAvatar').fadeOut(600);
                                       $('.page3-BusStation').fadeOut(600,function () {

                                           $('.page3-Wall').fadeIn(600);
                                           $('.page3-TeamAvatar').fadeIn(600,function () {
                                               $('.page3-Space').animate({width : 30 + '%'},{duration : 600, complete: function () {
                                                       $('.page3-WhereTxt').animate({width : '40%'},{duration : 600});
                                                   }});
                                           });
                                       });

                                   }});
                           }});
                   }
                   if(nowPage === 3){
                       $('.page4-lightOff').mousedown(function () {
                           $('.page4-clickGuide').fadeOut(600);
                           $('.page4-cornerTitle').fadeOut(600);
                           $('.page4-Bg').fadeOut(600,function () {
                               $('.page4-lightOff').attr('src','img/lightOn.png');
                               $('.page4-lightOnBg').fadeIn(600);
                               $('.page4-footTx').fadeIn(600);

                           });

                       })
                   }
               }});
           console.log(nowPage);
       } 
    });
    $('.page1-Building').fadeIn(400,function () {
        $('.page1-Flight').animate({width : 80 + '%'},{duration : 1500});
    });
    $('.musicBtn').click(function () {
        var music = $('#music')[0];

        if(music.paused){
            music.play();
            $(this).attr('src','img/musicBtn.png');
        }else{
            music.pause();
            $(this).attr('src','img/musicBtnOff.png');
        }
    })
});