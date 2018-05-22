var currentindex = 1,
itemlength = $('.hdp_item').length;
var max = $('.hdp_item').length;
createxfk();
startAm();
function togo() {
    if (currentindex == itemlength) currentindex = 1;
    else currentindex = currentindex + 1;
    changeflash(currentindex)
};
function changeflash(i) {
    for (j = 1; j < itemlength; j++) {
        $('#hdp' + j).hide()
    };
    for (j = 1; j <= itemlength; j++) {
        if (j == i) {
            $("#hdp" + j).fadeIn(800);
            $('#xfkitem' + j).attr('class', 'xfkitem_on')
        } else {
            $("#hdp" + j).hide();
            $('#xfkitem' + j).attr('class', 'xfkitem')
        }
    }
};
function startAm() {
    timerID = setInterval("togo()", 6000)
};
function stopAm() {
    clearInterval(timerID)
};
function createxfk() {
    if (itemlength == 1) return false;
    html = '<div id="xfknav">';
    for (i = 1; i <= itemlength; i++) {
        if (i === 1) html += '<div id="xfkitem' + i + '" class="xfkitem_on"></div>';
        else html += '<div id="xfkitem' + i + '" class="xfkitem"></div>'
    };
    $('#hdp_index').append(html)
};
$(document).ready(function() {
    $("#hdp_index").hover(function() {
        stopAm()
    },
    function() {
        startAm()
    });
    $("div[id*='xfkitem']").click(function(){
        index = $(this).attr('id');
        $("div[id*='xfkitem']").each(function(i) {
            t = $(this).attr('id');
            if (index == t) {
                currentindex = i + 1;
                changeflash(currentindex)
            }
        })
    }) ;

    $("#you").click(function(){

		currentindex = currentindex+1;

		if(currentindex>max) currentindex=1;

		changeflash(currentindex);

	});

	$('#zuo').click(function(){

		currentindex = currentindex-1;

		if(currentindex==0) currentindex=max;

		changeflash(currentindex);

	});
});
