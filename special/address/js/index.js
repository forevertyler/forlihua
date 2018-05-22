// 百度地图API功能
    var map = new BMap.Map('allmap');
    var poi = new BMap.Point(122.128815,37.508877);
    map.centerAndZoom(poi, 16);
    map.enableScrollWheelZoom();

    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                    '<img src="images/here.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:110px;margin-left:3px;"/>' +
                    '地址：威海市环翠区威高广场交通银行南侧三楼<br/>电话：0631-5716999<br/>简介：威高梨花医疗美容位于威海市环翠区威高广场交通银行南侧三楼。交通便利，停车方便。' +
                  '</div>';

   
    var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
			title  : "威高梨花医疗美容",     
			width  : 290,             
			height : 120,              
			panel  : "panel",        
			enableAutoPan : true,     
			searchTypes   :[
				BMAPLIB_TAB_SEARCH,   
				BMAPLIB_TAB_TO_HERE,  
				BMAPLIB_TAB_FROM_HERE 
			]
		});
    var marker = new BMap.Marker(poi); 
    marker.enableDragging(); 
    
	searchInfoWindow.open(marker);

    map.addOverlay(marker); 
	var searchInfoWindow1 = new BMapLib.SearchInfoWindow(map, "威高梨花医疗美容弹窗框", {
		title: "威高梨花医疗美容", 
		panel : "panel", 
		enableAutoPan : true, 
		searchTypes :[
			BMAPLIB_TAB_FROM_HERE, 
			BMAPLIB_TAB_SEARCH  
		]
	});
	function openInfoWindow1() {
	searchInfoWindow1.open(new BMap.Point(122.128815,37.508877));
	}	