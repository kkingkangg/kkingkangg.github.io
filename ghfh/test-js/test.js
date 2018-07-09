//function
//Bài 1. Viết 1 function tính bình phương của 1 số. Tham số truyền vào là 1 số. Kết quả là bình phương của số đó.

function func1(a) {
    return (a * a)
}



//Bài 2. Cho 3 số a, b và c. Viết function tính bình phương của (3a + 2b - c). Tham số truyền vào là 3 số a, b, c. Kết quả là bình phương của (3a + 2b - c). Sử dụng hàm viết sẵn của Bài 1.

function func2(a, b, c) {
    let d = 3 * a;
    let e = 2 * b;
    let f = d + e - c;

    return (f * f);
}



//Bài 3. Cho 1 chuỗi dài hơn 30 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi. Tham số truyền vào là 1 chuỗi dài hơn 30 ký tự. Kết quả là chuỗi đó sau khi cắt đi còn 10 ký tự, cuối chuỗi có dấu "..." biểu thị là chuỗi bị cắt.
function func3(str) {
    return (str.slice(0, 10) + '...');
}



//- Bài 4. Viết 1 function có tác dụng biến 1 chuỗi thành viết hoa từ đầu tiên.Tham số truyền vào là 1 chuỗi.Kết quả là 1 chuỗi mới chỉ viết hoa từ đầu tiên. Ví dụ "welcome to Techmaster" sẽ được convert thành "Welcome to techmaster".
function func4(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
}



//Bài 5. Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.Tham số truyền vào là 1 mảng các số.Kết quả là số nhỏ nhất trong mảng.Gợi ý: có thể dùng phương thức sort() hoặc object Math, chú ý khi sort số khác với chữ.

function func5(arr) {
    return (arr.sort(function (a, b) { return a - b }));
}


//Bài 6. Cho 1 mảng gồm tên của 5 học viên. Hãy viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và in ra màn hình danh sách học viên.Tham số truyền vào là 1 mảng gồm tên của 5 người.Kết quả: In ra màn hình danh sách các học viên theo thứ tự bảng chữ cái (tiếng Anh), không phân biệt hoa thường.
function func6(arr) {
    return (arr.sort(function (a, b) { return a.localeCompare(b) }));
}


//       
// ???? Bài 7. Tạo 3 đối tượng là teacher, student và parent. Mỗi đối tượng đều có các thuộc tính: firstName, lastName, age. Cả 3 đối tượng đều có chung 1 phương thức là say(). Hãy viết function aboutMe() in ra màn hình 1 câu giới thiệu bản thân và gán vào phương thức say() của các đối tượng trên.Function aboutMe() không có tham số truyền vào.Khi truy xuất đến phương thức say() của một đối tượng bất kỳ trong 3 đối tượng tạo sẵn teacher, student và parent thì phải in ra được giá trị các thuộc tính của đối tượng đó.
var teacher = {
    firstName: 'Dương',
    lastName: 'Quá',
    age: 28,
    say: function () {
        return ('xin chào, tôi là ' + this.firstName + ' ' + this.lastName + ' năm nay tôi ' + this.age + ' tuổi');
    }
}


var student = {
    firstName: 'Quách',
    lastName: 'Phù',
    age: 16,
    say: function () {
        return ('xin chào, tôi là ' + this.firstName + ' ' + this.lastName + ' năm nay tôi ' + this.age + ' tuổi');
    }
}



var student = {
    firstName: 'Hoàng',
    lastName: 'Dung',
    age: 46,
    say: function () {
        return ('xin chào, tôi là ' + this.firstName + ' ' + this.lastName + ' năm nay tôi ' + this.age + ' tuổi');
    }
}









//vòng lặp

//Bài 1. Cho 1 số nguyên n. Viết hàm tính n giai thừa (n!). Ví dụ: n = 5, kết quả trả về là 5! = 1 * 2 * 3 * 4 * 5 = 120.
function vl1(a) {
    let kq = 1;

    for (let i = 1; i <= a; i++) {
        kq = kq * i;
    }
    return kq;
}



//Bài 2. Cho 1 chuỗi, hãy viết hàm đảo ngược chuỗi đó. Ví dụ cho chuỗi "hello" thì kết quả trả về sẽ là "olleh". Gợi ý: 1 chuỗi chính là 1 mảng với mỗi phần tử là 1 ký tự trong chuỗi.
function vl2(str) {
    let kq = '';
    for (let i = str.length - 1; i >= 0; i--) {
        kq = kq + str[i];
    }
    return kq;
}





//Bài 3. Cho 1 chuỗi số, hãy viết hàm duplicate() có tác dụng sao chép chuỗi số lên 10 lần, ngăn cách nhau bởi ký tự "-". Ví dụ cho chuỗi "123" thì kết quả sẽ là "123-123-123-123-123-123-123-123-123-123"
function vl3(str) {
    let kq = str;
    for (let i = 1; i < 10; i++) {
        kq = kq + '-' + str;
    }
    return kq;
}




//Bài 4. Cho 1 mảng tên của n học viên. Viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và in ra màn hình danh sách học viên kèm theo số thứ tự (sử dụng document.write())
function vl4(arr) {
    //sắp xếp
    arr.sort(function (a, b) {
        return a.localeCompare(b);
    });
    console.log('arr: ', arr);

    //in từng phần tử ra màn hình
    for (let i = 0; i < arr.length; i++) {
        document.write((i + 1) + ". " + arr[i] + "<BR>");
    }
}







//Bài 5. Cho 1 mảng các số. Viết function tăng gấp đôi giá trị của các số trong mảng. Ví dụ cho mảng [1,3,4] thì kết quả trả về sẽ là [2,6,8].
function vl5(arr) {

    for (let i = 0; i < arr.length; i++) {

        let kq = arr[i] * 2;
        console.log(kq);
    }

}



//Bài 6. Cho 1 mảng các số. Viết function tạo ra 1 mảng mới với các số là số dư tương ứng khi chia các số trong mảng cũ cho 2. Gợi ý: Để lấy số dư của 1 số cho 2 ta dùng toán tử %. Ví dụ: 5 % 2 = 1 (5 chia 2 dư 1)
function vl6(arr) {
    for (let i = 0; i < arr.length; i++) {

        let kq = arr[i] % 2;
        console.log(kq);
    }
}



//if, else (1)

// Bài 1. Sử dụng câu lệnh if để viết 1 hàm với 2 tham số bất kỳ, kiểm tra xem 2 tham số có phải là number không và tìm ra số lớn nhất trong 2 số đó.
function bai1(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return ('a hoặc b ko phải là số')
    } else if (a > b) {
        return (a);
    } else if (b > a) {
        return (b);
    } else if (a == b) {
        return ('2 số đố = nhau')
    }
}



// Bài 2. Viết 1 hàm dùng để tính giai thừa của 1 số. Kiểm tra tham số đầu vào phải là 1 số nguyên dương (số Integer > 0), sau đó tính giai thừa và in ra kết quả.

function giaiThua(a) {
    let kq = 1;

    for (let i = 1; i <= a; i++) {
        kq = kq * i;
    }

    return kq;
}



function bai2(a) {
    if (typeof a != 'number') {
        return ('ko phải là số')
    } else if (a % 1 != 0 || a < 0) {
        return ('ko phải là số nguyên dương')
    } else if (a % 1 == 0 && a > 0) {
        return giaiThua(a);
    }
}


//Bài 3. Cho 1 mảng các số bất kỳ. Tạo ra 1 mảng mới chỉ chứa các số chẵn lấy ra từ mảng trên và sắp xếp theo thứ tự giảm dần.



function bai3(arr) {
    arr.sort(function (a, b) { return b - a });


    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i]);
        }

    }

    return newArr;
}



//bài 4 ???????????????????????????
//Bài 4. Một trang web cho phép người dùng tạo tài khoản. Hãy viết hàm kiểm tra tính hợp lệ của thông tin người dùng nhập vào.
var user = {
    name: 'str1';
    pass: 'str2';
    confirm: 'str2';

    intro: function () {

        if (user.name == 'false' || user.name.length > 20) {
            return ('ko hợp lệ');
        } else if (user.name.length > 0 && user.name.length < 0) {
            return ('hợp lệ');
        }
    }
}










//dk, rẽ nhánh phần 2


//bài 1??????????????????
var now = new Date();   // Lấy thời gian hiện tại
var date = now.getDate(2);   // Lấy ngày từ thời gian hiện tại
var month = now.getMonth(6) + 1;   // Lấy tháng từ thời gian hiện tại. Do tháng trong javascript tính từ 0 - 11 nên phải +1
var year = now.getFullYear(2018);   // Lấy năm (đầy đủ 4 số) từ thời gian hiện tại



//Bài 2. Viết hàm cắt chuỗi với tham số là 1 chuỗi bất kỳ. Kiểm tra xem tham số nhập vào có phải là chuỗi không, nếu là số thì convert sang chuỗi. Sau đó lại kiểm tra nếu chuỗi có độ dài nhỏ hơn 10 ký tự thì hiển thị toàn bộ chuỗi, nếu chuỗi có độ dài lớn hơn 10 ký tự thì hiển thị 10 ký tự đầu tiên kèm theo dấu "...".

function condition2(str) {
    console.log(typeof str);
    if (typeof str == 'string' && str.length < 10) {


        return (str);
    } else if (typeof str == 'string' && str.length >= 10) {


        return (str.slice(0, 10) + '...');
    } else if (typeof str == 'number') {
        str = str.toString();
        if (str.length >= 10) {
            return (str.slice(0, 10) + '...');


        } else {
            return str;
        }

    } else {
        return "khong phai string or number";
    }

}

// bài 3 Một sinh viên có điểm kiểm tra môn lập trình web là x dưới dạng số (0 <= x <= 10). Hãy chuyển điểm số sang dạng chữ với điều kiện sau:
//Từ 0 đến 3.9: Điểm F
//Từ 4 đến 5.4: Điểm D
//Từ 5.5 đến 6.9: Điểm C
//Từ 7 đến 8.4: Điểm B
//Từ 8.5 đến 10: Điểm A



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


//Bài 4. Viết hàm translate() có tác dụng dịch từ "Hello" sang 5 thứ tiếng khác nhau (tự chọn) với tham số truyền vào là mã quốc gia, sử dụng switch và mặc định dịch sang tiếng Việt.
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





//Bài 5. Cho 1 mảng gồm các giá trị true và false, ví dụ: [false, false, false, true, false, true, false, true]. Hãy kiểm tra xem giá trị true xuất hiện lần đầu trong mảng ở vị trí nào.
function bai5(arr) {
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] == 'true') {
            var a = i + 1;
            console.log('Giá trị true xuất hiện lần đầu trong mảng ở vị trí là: ' + a);
            break;
        }
    }

}





//Bài 6. Chỉ sử dụng while hoặc for, hãy viết function in ra màn hình các số từ 1 đến 100. Với điều kiện những giá trị là chẵn sẽ có màu xanh, giá trị lẻ có màu đỏ.
function bai6() {
    for (let i = 1; i <= 100; i++) {
        console.log('%c' + i, color: ${ i % 2 === 0 ? 'red' : 'blue' });
    }

}









// Vẽ Hình


//vd vẽ hình vuông

function vuong(n) {
    var str = '';

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            // In ra n dấu *
            str += ' * ';
        }

        // In ra dấu xuống dòng
        str += '<br/>';
    }

    return str;
}




//bài 1 vẽ hình tam giác vuông cân

function tamGiac(n) {
    var str = '';

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            // In ra n dấu *
            str += ' * ';
        }

        // In ra dấu xuống dòng
        str += '<br/>';
    }

    return str;
}













// bài tập về nhà
//bai1

var d = new Date();
var day = d.getDay();
var date = d.getDate();
var month = d.getMonth();
var s = d.getSeconds();
var m = d.getMinutes();
var h = d.getHours();


function ngayHT(day) {
    switch (day) {
        case 0:
            return ('Sunday');
        
        case 1:
            return ('Monday');

        case 2:
            return ('Tuesday');

        case 3:
            return ('Wednesday');

        case 4:
            return ('Thursday');

        case 5:
            return ('Friday');

        case 6:
            return ('Saturday');
    }
}

function gioHT (h) {
    if (h<12) {
        return h + 'AM';
    } else if (h==12) {
        return h +'PM';
    } else {
        return h-12 + 'PM'
    }
}

function btvn1 () {
    return ('Today is: ' + ngayHT(day) + ' | Current time is ' + gioHT(h) + ':' + m + ':' + s); 
    }








//2 - Viết một function tính số ngày còn lại để đến ngày 2/9/2018. VD hôm nay là 31/8 thì còn 2 ngày, 1/9 thì còn 1 ngày
//bai 2
function btvn2 (day, month) {
	const ngayHienTai = new Date();
	let ngayHT = ngayHienTai.getDate();
	let thangHT = ngayHienTai.getMonth() +1;
	let namHT = ngayHienTai.getFullYear();

	if (thangHT >= month && ngayHT > day) {
		namHT +=1;
		console.log('namHT :', namHT);

	}
	const ngayTiepTheo = new Date (namHT, month-1; day);
	console.log ('ngayTiepTheo :', ngayTiepTheo);
	const soMiliGiayTrongNgay = 24*60*60*1000;
	const tongThoiGianHT = ngayHienTai.getTime();
	const tongThoiGianNgayTiepTheo = ngayTiepTheo.getTime();

	return Math.cell((tongThoiGianNgayTiepTheo - tongThoiGianHT)/soMiliGiayTrongNgay);
}








//bài 3 - Viết function khi truyền vào 2 số ra được kết quả nhân và chia 2 số đó. Ví dụ truyền 2 số (3,4) trả về phép nhân là 12 phép chia là 0.75
function btvn3(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        let c = a * b;
        let d = a / b;
        return 'Kết quả phép nhân là ' + c + ' và kết quả phép chia là ' + d;
    } else {
        return 'a,b ko phải là số'
    }
}








//BTVN 4 Viết function chuyển đổi nhiệt độ từ độC sang nhiệt độ Celsius, độ F (công thức search trên mạng)
function btvn4(c) {
    if (typeof c == 'number') {
        let a = c * 1.8;
        let f = a + 32;
        return ('Giá trị chuyển sang độ F là ' + f);
    } else {
        return 'tham số truyền vào ko phải là 1 số'
    }
}





//BTVN 5 Viết một function truyền vào 2 số trả về tổng 2 số đó, nếu 2 số bằng nhau thì trả về 3 lần tổng 2 số đó. ví dụ (2,2) kết quả 12
function btvn5(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        let c = a + b;
        if (a == b) {
            return (3 * c);
        } else {
            return c;
        }

    } else {
        return 'a,b ko phải là số'
    }

}








//BTVN 6 
//Viết một function đảo ngược số ví dụ 123 thành 321. Đầu vào đầu ra phải là số

function btvn6(a) {
    if (typeof a != 'number') {
        return 'ko phải là số';
    } else {
        let b = a.toString();
        let kq = '';
        for (let i = b.length - 1; i >= 0; i--) {

            kq = kq + b[i];
        }
        console.log(kq);
        return parseInt(kq);
    }


}






