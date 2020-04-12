$(document).ready(function(){

var bodyEl=documentquerySelectorAll('body');


$("#mybtn").click(function(event){
	$(this).html("clickit");
	var newEl = '<a>http://www.coolmath.com games</a>';
$('body').append(newEl).attr({'href':'https://www.coolmath.com games'})
})
})