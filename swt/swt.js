document.writeln("    <script language=\"javascript\" src=\"http://put.zoosnet.net/JS/LsJS.aspx?siteid=PUT28849321&float=1\"><\/script>");
document.writeln("<style type=\'text/css\'>");
document.writeln("#LRfloater1{display:none;}");
document.writeln("*{border:medium none;margin:0;padding:0;}");
document.writeln("#LRdiv0, #LRdiv1{display:none;}");
document.writeln("#divM{position:fixed;z-index:214748364;}");
document.writeln("#divM{right:50%;bottom:50%;margin-right:-240px;margin-bottom:-160px;_position:absolute;");
document.writeln("_bottom:expression(offsetParent.scrollTop+242);}");
document.writeln("#divM a{position:absolute;display:block;width:95px;height:35px;top:161px;}");
document.writeln("#divM #divMagb{right:4px;top:4px;width:20px;height:20px}");
document.writeln("#divM #divMa1{left:167px}");
document.writeln("#divM #divMa2{left:271px}");
document.writeln("#divM #divMagb:hover{background:none}");
document.writeln("#divM #divMa1:hover{background-position:-227px -255px}");
document.writeln("#divM #divMa2:hover{background-position:-331px -255px}");
document.writeln("#divM img{-webkit-box-shadow:3px 3px 6px #666;-moz-box-shadow:3px 3px 6px #666;box-shadow:3px 3px 6px #666;-moz-border-radius:1em;-webkit-border-radius:1em;border-radius:1em;}");
// document.writeln("ins#LXB_CONTAINER{display:none !important;}");
// document.writeln("ins#LXB_INVITE,ins#LXB_CONTAINER{display: none !important;}");
// document.writeln("#divL {position:fixed;left:30px;top:200px;z-index:9999999;cursor:pointer}");
// document.writeln("#divL img{width:120px;display:block;}");

document.writeln("</style>");
//第一次弹出时
if (screen.width > 1024) //获取屏幕的的宽度
{
    setTimeout("openM()", 5000);
    // function openM() {
    //     $("#divM").fadeIn(1000);
    // }
}
// if (screen.width > 1024) //获取屏幕的的宽度
// {  //间隔弹出时间
//     function closeM() {
//         $("#divM").fadeOut(300).delay(15000).fadeIn(1000);
//     }
// }
function openSwt() {
    LR_HideInvite();
    openZoosUrl();
    return false;
}
//中间弹出框
// document.writeln("<div id=\'divM\'> <img src=\'/swt/images/center.jpg\' border=\'0\' usemap=\'#MapM\'>");
// document.writeln("  <map name=\'MapM\' id=\'MapM\'>");
// document.writeln("    <area shape=\'rect\' coords=\'450,6,490,50\' href=\'javascript:void(0);\' onclick=\'closeM()\'  target=\'_self\' />");
// document.writeln("    <area shape=\'rect\' coords=\'50,230,260,280\' href=\'javascript:void(0);\' target=\'_self\' onclick=\'openZoosUrl();LR_HideInvite();return false;\'/>");
// document.writeln("  </map>");
// document.writeln("</div>");

//左侧弹出
// document.writeln("<div id=\'divL\' onClick=\'openZoosUrl();return false;\' ><img src=\'/swt/images/swt-l.png\' border=\'0\' >");

// document.writeln("</div>");


//左侧 CSS 开始
var Invite_ToRight=0;
//说明：浮动图标的水平方向对齐方式，1为右对齐，0为左对齐
function hideSwt(){
		document.getElementById("LR").style.display='none';//隐藏弹出窗口
		//设置定时器，10秒后显示弹出窗口
		setTimeout(function(){
			document.getElementById("LR").style.display='block';
		},10000);
	}