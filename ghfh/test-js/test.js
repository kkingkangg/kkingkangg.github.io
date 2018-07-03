//function

function func1 (a) {
    return (a*a)
    }




function func2 (a,b,c) {
    let d = 3*a;
    let e = 2*b;
    let f = d+e-c;

    return (f*f);
}




function func3 (str) {
    return(str.slice(0, 10) + '...') ;
    }




function func4 (str) {
    return( str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    }




function func5 (arr) {
    return( arr.sort(function(a, b){return a-b}));
    }



function func6 (arr) {
    return (arr.sort(function(a,b){return a.localeCompare(b)}));
        }


//bài 7 = ???????????????????????????/
var teacher = {
    firstName: 'Dương',
    lastName: 'Quá',
    age: 28,
    say: function(){    
        return ('xin chào, tôi là ' + this.firstName + ' ' + this.lastName + ' năm nay tôi ' + this.age + ' tuổi' );
    }
        }


var student = {
    firstName: 'Quách',
    lastName: 'Phù',
    age: 16,
    say: function(){    
            return ('xin chào, tôi là ' + this.firstName + ' ' + this.lastName + ' năm nay tôi ' + this.age + ' tuổi' );
            }
        }



var student = {
    firstName: 'Hoàng',
    lastName: 'Dung',
    age: 46,
    say: function(){    
        return ('xin chào, tôi là ' + this.firstName + ' ' + this.lastName + ' năm nay tôi ' + this.age + ' tuổi' );
                    }
                }









//vòng lặp


function vl1(a) {
    let kq = 1;

    for (let i=1; i<=a; i++) {
        kq = kq * i;
    }
    return kq;
}




function vl2(str) {
    let kq = '';
    for (let i = str.length-1; i>=0; i--){
    kq = kq + str[i];
    }
    return kq;
}






function vl3(str) {
    let kq =str;
    for ( let i=1; i<10; i++) {
        kq = kq + '-' + str;
    }
    return kq;
}






function vl4 (arr) {
    //sắp xếp
    arr.sort (function(a,b){
        return a.localeCompare(b);
    });
    console.log( 'arr: ', arr);

    //in từng phần tử ra màn hình
    for (let i=0; i<arr.length; i++) {
        document.write((i+1) + ". " + arr[i] + "<BR>");
        }
        }








function vl5 (arr) {

    for (let i=0; i < arr.length; i++) {

        let kq = arr[i] * 2;
        console.log (kq);
        }

}




function vl6 (arr) {
    for (let i=0; i<arr.length; i++) {
        
        let kq = arr[i]%2;
        console.log (kq);
        }
        }



//if, else

// bài 1
function bai1(a,b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return ('a hoặc b ko phải là số')
    } else if (a>b) {
        return (a);
        } else if (b>a) {
            return (b);
            } else if ( a==b ) {
                return ('2 số đố = nhau')
                }
    }



// bài 2

function giaiThua(a) {
    let kq = 1;
  
    for (let i=1; i<=a; i++) {
      kq = kq * i;
    }
    
    return kq;
  }
       
  
  
  function bai2(a) {
    if (typeof a != 'number') {
      return ('ko phải là số')
    } else if (a % 1 != 0 || a < 0) {
      return ('ko phải là số nguyên dương')
    } else if (a % 1 == 0 && a>0) {
      return giaiThua(a);
    }
  } 


  //bài 3

  function bai3 (arr) {
    arr.sort(function(a, b){return b-a});


    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
            newArr.push(arr[i]);
            }

            }

            return newArr;
    }



    //bài 4 ???????????????????????????

    var user = {
        name: 'str1';
        pass: 'str2';
        confirm: 'str2';
        
        intro : function () {

        if (user.name == 'false' || user.name.length > 20) {
            return ('ko hợp lệ');
            } else if (user.name.length > 0 && user.name.length < 0) {
                return ('hợp lệ');
                }
}
}










//dk, rẽ nhánh phần 2


//bài 1
var now = new Date();   // Lấy thời gian hiện tại
var date = now.getDate(2);   // Lấy ngày từ thời gian hiện tại
var month = now.getMonth(6) + 1;   // Lấy tháng từ thời gian hiện tại. Do tháng trong javascript tính từ 0 - 11 nên phải +1
var year = now.getFullYear(2018);   // Lấy năm (đầy đủ 4 số) từ thời gian hiện tại



//bài 2

function condition2 (str) {
    console.log(typeof str);
    if (typeof str == 'string' && str.length < 10) {


        return (str);
        } else if (typeof str == 'string' && str.length >= 10) {


            return (str.slice(0,10) + '...');
            } else if (typeof str == 'number') {
                str = str.toString();
                if(str.length>=10){
                    return (str.slice(0,10) + '...');
                    

                }else {
                    return str;
                }

            } else {
                    return "khong phai string or number";
                }

    }

// bài 3
function diem(a) {
    if (typeof a == 'number' && a >= 0 && a <= 10) {
        if (a >= 0 && a <= 3.9) {
            return 'Điểm F';
            } else if (a >= 4 && a <= 5.4) {
                return 'Điểm D';
                } else if (a >= 5.5 && a <= 6.9) {
                    return 'Điểm C';
                    } else if (a >= 7 && a <= 8.4) {
                        return 'Điểm B';
                        } else {
                            return 'Điểm A';
                            }
        } else {
            return 'Điểm nhập vào ko đúng'
            }

}


//bài 4
function translate(a) {

    switch (a) {    
        case 'VN':
            return ('Xin Chào');
            

        case 'China':
            return ('你 好');
            

        case 'Japan':
            return ('こんにちは');
            

        case 'Korea':
            return ('안녕하세요');
            

        case 'Eng':
            return ('Hello');
            

        case 'Italy':
            return ('Ciao');
            
            }

}





//bai 5
function bai5 (arr) {
    for (var i = 0; i < arr.length; i++) {
     
    if (arr[i] == 'true') {
        var a = i+1;
        console.log('Giá trị true xuất hiện lần đầu trong mảng ở vị trí là: ' + a);
        break;
    }
}

}





//bai6 
function bai6 () {
    for (let i = 1; i <= 100; i++) {
        console.log('%c' + i, color: ${i % 2 === 0 ? 'red' : 'blue'});
      }
    
  }

