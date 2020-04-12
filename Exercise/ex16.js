
function isPalindrome(word){

var newreverse = "" ;
for( let i= 0 ; i < word.length ; i++) 
  {
  	newreverse = word[i] + newreverse ;
  }
 return  newreverse == word ? 'It is a Palindrome.' :'It is not Palindrome.';






}

console.log(isPalindrome("madam"));

