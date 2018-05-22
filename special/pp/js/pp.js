 $('.part2_list li').mouseover(function(){
   var _index=$(this).index();
    $('.part2_list li').eq(_index).addClass('part2_fir').siblings().removeClass('part2_fir');
    $('.part2_content li').eq(_index).removeClass('dn').siblings().addClass('dn');
    
    
  })




 $(function(){
  var i=0;
  var timer=null;
  for (var j = 0; j < $('.part5 .out li').length; j++) { 
   $('.part5 .num').append('<li></li>')
  }
  $('.part5 .num li').first().addClass('active'); 
  
  var firstimg=$('.part5 .out li').first().clone(); 
  $('.part5 .out').append(firstimg).width($('.part5 .out li').length*($('.part5 .out li').width())); 
  

  $('.part5 .next').click(function(){
   i++;
   if (i==$('.part5 .out li').length) {
    i=1; 
    $('.part5 .out').css({left:0});
   };
  
   $('.part5 .out').stop().animate({left:-i*1010},300);
   if (i==$('.part5 .out li').length-1) { 
    $('.num li').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.part5 .num li').eq(i).addClass('active').siblings().removeClass('active');
   }
     
  })
  
 
  $('.part5 .prev').click(function(){
   i--;
   if (i==-1) {
    i=$('.part5 .out li').length-2;
    $('.part5 .out').css({left:-($('.part5 .out li').length-1)*1010});
   }
   $('.part5 .out').stop().animate({left:-i*1010},300);
   $('.part5 .num li').eq(i).addClass('active').siblings().removeClass('active');
  })
  
  
  $('.part5 .part5_inner').hover(function(){
   $('.part5 .btn').show();
  },function(){
   $('.part5 .btn').hide();
  })
  

  $('.part5 .num li').mouseover(function(){
   var _index=$(this).index();
   $('.part5 .out').stop().animate({left:-_index*1010},300);
   $('.part5 .num li').eq(_index).addClass('active').siblings().removeClass('active');
  })
  

  timer=setInterval(function(){
   i++;
   if (i==$('.part5 .out li').length) {
    i=1;
    $('.part5 .out').css({left:0});
   };
  
   $('.part5 .out').stop().animate({left:-i*1010},300);
   if (i==$('.part5 .out li').length-1) { 
    $('.part5 .num li').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.part5 .num li').eq(i).addClass('active').siblings().removeClass('active');
   }
  },3000)
  

  $('.part5 .part5_inner').hover(function(){ 
   clearInterval(timer);
  },function(){
   timer=setInterval(function(){
   i++;
   if (i==$('.part5 .out li').length) {
    i=1;
    $('.part5 .out').css({left:0});
   };
  
   $('.part5 .out').stop().animate({left:-i*1010},300);
   if (i==$('.part5 .out li').length-1) { 
    $('.part5 .num li').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.part5 .num li').eq(i).addClass('active').siblings().removeClass('active');
   }
  },5000)
  })
})