
function myFunction(){
	var num = 231589;
    var digit = num.toString().split('');
	var newNum = digit.join(',');
   return [newNum] ;
}

console.log(myFunction());