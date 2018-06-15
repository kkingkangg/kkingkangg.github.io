






//bài 1
function func1(x) {
	return (x**2);
}



//bài 2
function func2(a,b,c) {
	let x=3*a+2*b-c;
	return func1(x);
}


//bài 3
function func3(str) {
  return str.substring(0, 10) + '...';
}






//bài 4
function func4(string) {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}



//bài 5
function func5(number) {
	return Math.min.apply(null,number);
}



//bài 6
function bai6(arr) {
	//sắp xếp
	arr.sort(function(a,b){
		return a.localeCompare(b);
	});
	console.log('arr :', arr);

	//in từng phần tử ra màn hình

	for (let i=0; i<arr.length; i++){
		document.write("phan tu "+ (i+1)+" la: "+arr[i]);
	}
}




function bai6nguoc(arr) {
	return arr.reverse();
}





//bài 7






//vòng lặp

//vl1


function vl1(a){
	let giaithua = 1;
	for (var i = 1; i <=a; i++) {
		giaithua = giaithua * i;
	}
	return giaithua;
}




//vl2
function vl2(arr){
	return arr.reverse();
}
	
