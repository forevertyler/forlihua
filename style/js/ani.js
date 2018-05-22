
$(document).ready(function(){ 
	//活动新闻
	$(".index-slideBox2").slide({
		mainCell:".bd ul",
		effect: 'leftLoop',
		interTime: 5000,
		delayTime:600,
		autoPlay:true
	});
	//案例
	$('.case-tab-nav li').mouseenter(function(){
	    $(this).children("div").removeClass('cover-case').parent().siblings().children("div").addClass('cover-case');
	    $('.case-tab-con > li').eq($(this).index()).fadeIn('slow').siblings().removeClass('show').css('display','none');
	})
	// 专家团队
	$('.exp>li').mouseenter(function(){
	    $(this).children("div").removeClass('cover-experts').parent().siblings().children("div").addClass('cover-experts');
	 
	})
	$('.exp>li').click(function(){
	 	$('.content-exp .exp-intro ul > li').eq($(this).index()).show('normal').siblings().addClass('hide1');
	})
	$(".experts").mouseleave(function(e){
		$('.exp>li').children("div").removeClass('cover-experts');
	    $('.content-exp .exp-intro ul > li').hide('normal');
	    e.stopPropagation();

	});
	$(".close-exp-intro").click(function(e){
		$('.exp>li').children("div").removeClass('cover-experts');
	    $('.content-exp .exp-intro ul > li').hide('normal');
	    e.stopPropagation();

	});

	// 服务与安全
	$(".security").slide({ 
		titCell:".sec-tab li", 
		mainCell:".sec-lihua",
		effect:"topLoop", 
		autoPlay:true
	});	
	$(".index-slideBox3").slide({
		mainCell:".bd ul",
		effect: 'leftLoop',
		interTime: 5000,
		delayTime:600,
		autoPlay:true
	});
	$(".env-lihua").slide({ 
		mainCell:" ul", 
		effect:"leftMarquee", 
		vis:6, 
		autoPlay:true, 
		interTime:50, 
		switchLoad:"_src" 
	});	
}); 