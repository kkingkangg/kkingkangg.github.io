
alert('bạn đã bị hack')


//bài 1
function bai1(x) {
	alert(x*x);
	return (x**2);
}



//bài 2
function bai2(a,b,c) {
	let x=3*a+2*b-c;
	return bai1(x);
}


//bài 3
function bai3(str) {
  return str.length > 10 ? str.substring(0, 10) + '...' : str;
}






//bài 4
function bai4(string) {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}



//bài 5
function bai5(a,b,c,d) {
	return Math.min(a,b,c,d);
}



//bài 6
function bai6() {

}



//bài 7

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
    fruits.sort();
    fruits.reverse();
    document.getElementById("demo").innerHTML = fruits;
}











