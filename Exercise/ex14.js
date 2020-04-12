
function myFunction(argument) {
	var list= ["apple","banana","orange","strawberry","pinapple","kiwi"];
	var oddList = list.filter((list,i)=> i % 2==1);
	return oddList;
}
console.log(myFunction());