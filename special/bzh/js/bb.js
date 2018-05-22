$('.part2 ul li').mouseover(function(){
   var _index=$(this).index();
   $('.part2 ul li').eq(_index).find('.bgg1').hide();
   $('.part2 ul li').eq(_index).find('.bgg').stop().fadeIn();
   
})
$('.part2 ul li').mouseout(function(){
   var _index=$(this).index();
   $('.part2 ul li').eq(_index).find('.bgg').hide();
   $('.part2 ul li').eq(_index).find('.bgg1').stop().fadeIn();
   
})

$('.connum ul li').mouseover(function(){
	var qhIndex = $(this).index();
	$('.connum ul li').eq(qhIndex).css('backgroundPosition','0 0').siblings().css('backgroundPosition','0 -108px');
	$('.conout .lb').eq(qhIndex).fadeIn().siblings().hide();
})