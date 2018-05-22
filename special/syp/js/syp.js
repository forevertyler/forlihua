$(function(){
  var i=0;
  var timer=null;
  for (var j = 0; j < $('.part4 .out li').length; j++) { //创建圆点
   $('.part4 .num').append('<li></li>')
  }
  $('.part4 .num li').first().addClass('active'); //给第一个圆点添加样式
  
  var firstimg=$('.part4 .out li').first().clone(); //复制第一张图片
  $('.part4 .out').append(firstimg).width($('.part4 .out li').length*($('.part4 .out li').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
  
  
  // 下一个按钮
  $('.part4 .next').click(function(){
   i++;
   if (i==$('.part4 .out li').length) {
    i=1; //这里不是i=0
    $('.part4 .out').css({left:0}); //保证无缝轮播，设置left值
   };
  
   $('.part4 .out').stop().animate({left:-i*1200},300);
   if (i==$('.part4 .out li').length-1) {  //设置小圆点指示
    $('.num li').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.part4 .num li').eq(i).addClass('active').siblings().removeClass('active');
   }
     
  })
  
  // 上一个按钮
  $('.part4 .prev').click(function(){
   i--;
   if (i==-1) {
    i=$('.part4 .out li').length-2;
    $('.part4 .out').css({left:-($('.part4 .out li').length-1)*1200});
   }
   $('.part4 .out').stop().animate({left:-i*1200},300);
   $('.part4 .num li').eq(i).addClass('active').siblings().removeClass('active');
  })
  
  //设置按钮的显示和隐藏
  // $('.part4 .zj_inner').hover(function(){
  //  $('.part4 .btn').show();
  // },function(){
  //  $('.part4 .btn').hide();
  // })
  
  //鼠标划入圆点
  $('.part4 .num li').mouseover(function(){
   var _index=$(this).index();
   $('.part4 .out').stop().animate({left:-_index*1200},300);
   $('.part4 .num li').eq(_index).addClass('active').siblings().removeClass('active');
  })
  
  //定时器自动播放
  timer=setInterval(function(){
   i++;
   if (i==$('.part4 .out li').length) {
    i=1;
    $('.part4 .out').css({left:0});
   };
  
   $('.part4 .out').stop().animate({left:-i*1200},300);
   if (i==$('.part4 .out li').length-1) { 
    $('.part4 .num li').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.part4 .num li').eq(i).addClass('active').siblings().removeClass('active');
   }
  },10000)
  
  //鼠标移入，暂停自动播放，移出，开始自动播放
  $('.part4 .zj_inner').hover(function(){ 
   clearInterval(timer);
  },function(){
   timer=setInterval(function(){
   i++;
   if (i==$('.part4 .out li').length) {
    i=1;
    $('.part4 .out').css({left:0});
   };
  
   $('.part4 .out').stop().animate({left:-i*1200},300);
   if (i==$('.part4 .out li').length-1) { 
    $('.part4 .num li').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.part4 .num li').eq(i).addClass('active').siblings().removeClass('active');
   }
  },10000)
  })
})


$(function(){
  var i=0;
  var timer=null;
  for (var j = 0; j < $('.part5 .out1 li').length; j++) { //创建圆点
   $('.part5 .num').append('<li></li>')
  }
  $('.part5 .num li').first().addClass('active'); //给第一个圆点添加样式
  
  var firstimg=$('.part5 .out1 li').first().clone(); //复制第一张图片
  $('.part5 .out1').append(firstimg).width($('.part5 .out1 li').length*($('.part5 .out1 li').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
  
  
  // 下一个按钮
  $('.part5 .next').click(function(){
   i++;
   if (i==$('.part5 .out1 li').length) {
    i=1; //这里不是i=0
    $('.part5 .out1').css({left:0}); //保证无缝轮播，设置left值
   };
  
   $('.part5 .out1').stop().animate({left:-i*1200},300);
   if (i==$('.part5 .out1 li').length-1) {  //设置小圆点指示
    $('.num li').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.part5 .num li').eq(i).addClass('active').siblings().removeClass('active');
   }
     
  })
  
  // 上一个按钮
  $('.part5 .prev').click(function(){
   i--;
   if (i==-1) {
    i=$('.part5 .out1 li').length-2;
    $('.part5 .out1').css({left:-($('.part5 .out1 li').length-1)*1200});
   }
   $('.part5 .out1').stop().animate({left:-i*1200},300);
   $('.part5 .num li').eq(i).addClass('active').siblings().removeClass('active');
  })
  
  //设置按钮的显示和隐藏
  // $('.part5 .al').hover(function(){
  //  $('.part5 .btn').show();
  // },function(){
  //  $('.part5 .btn').hide();
  // })
  
  //鼠标划入圆点
  
  
  //定时器自动播放
  timer=setInterval(function(){
   i++;
   if (i==$('.part5 .out1 li').length) {
    i=1;
    $('.part5 .out1').css({left:0});
   };
  
   $('.part5 .out1').stop().animate({left:-i*1200},300);
   if (i==$('.part5 .out1 li').length-1) { 
    $('.part5 .num li').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.part5 .num li').eq(i).addClass('active').siblings().removeClass('active');
   }
  },5000)
  
  //鼠标移入，暂停自动播放，移出，开始自动播放
  $('.part5 .al').hover(function(){ 
   clearInterval(timer);
  },function(){
   timer=setInterval(function(){
   i++;
   if (i==$('.part5 .out1 li').length) {
    i=1;
    $('.part5 .out1').css({left:0});
   };
  
   $('.part5 .out1').stop().animate({left:-i*1200},300);
   if (i==$('.part5 .out1 li').length-1) { 
    $('.part5 .num li').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.part5 .num li').eq(i).addClass('active').siblings().removeClass('active');
   }
  },5000)
  })
})

$('#qiehuan li').mouseover(function(){
   var _index=$(this).index();
   $('#qiehuan li').eq(_index).addClass('mout').siblings().removeClass('mout').removeClass('active-q');
   $("#change>div").eq(_index).fadeIn().siblings().css('display','none');
})
$('#qiehuan li').mouseout(function(){
  var _index=$(this).index();
   $('#qiehuan li').eq(_index).addClass('active-q').siblings() ;
  
})



$('#qh li').mouseover(function(){
  var qhIndex = $(this).index();
  
  $('#qh li').eq(qhIndex).find('.cover-a').removeClass('dpn').addClass('pulse');
  $('#qh li').eq(qhIndex).siblings().find('.cover-a').addClass('dpn').removeClass('pulse');
  $('#qh li').eq(qhIndex).find('.coverd').removeClass('cover-c').addClass('cover-b').addClass('pulse');
  $('#qh li').eq(qhIndex).siblings().find('.coverd').removeClass('cover-b').addClass('cover-c').removeClass('pulse');
  $('#qh li').eq(qhIndex).find('.line').removeClass('dpn');
  $('#qh li').eq(qhIndex).siblings().find('.line').addClass('dpn');
  $(".content-p3>div").eq(qhIndex).fadeIn();
  $(".content-p3>div").eq(qhIndex).siblings().stop().css('display','none');
})
