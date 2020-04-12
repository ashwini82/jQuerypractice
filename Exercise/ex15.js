

	
		
 findTotal= function(numbers){
 	var numbers = [4,7,9,2,5,1];
	return  numbers.reduce(function(a,b){
		return a + b 
	}, 0);

}
console.log(findTotal());