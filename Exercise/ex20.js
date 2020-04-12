

function merge(s1,s2){
	var s1 = [1,2,3,4];
	var s2 = ['a','b','c','d'];
    var result = "";


  for(var i=0; i<s1.length && i<s2.length; i++){
   result+=s1[i]+s2[i];
  }
 s1.length<s2.length?result+=s2.substr(s1.length):result+=s1.substr(s2.length)
 return result;
}

console.log(merge("s1","s2"));