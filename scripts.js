$(document).ready(function(){
$.ajax({
url:'https://dailyverses.net/getdailyverse.ashx?language=niv&isdirect=1&url=' + Math.floor(Math.random() * 201) + '&amp;url=' + window.location.hostname,
dataType: 'JSONP',
success:function(json){
$(".dailyVersesWrapper").prepend(json.html);
}
});
});
