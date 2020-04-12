

function myFunction(){
	var array = [4,6,2,9,43,3,56,99,32];
	var maxNum = Math.max.apply(null,array);
	  return maxNum;
}
 console.log(myFunction());