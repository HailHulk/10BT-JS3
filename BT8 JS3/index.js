function timSoNguyenTo() {
    var input = document.getElementById("input").value.trim();
    if (!input) { // Kiểm tra nếu người dùng không nhập gì thì báo lỗi và kết thúc hàm
      alert("Bạn chưa nhập số nguyên nào!");
      return;
    }
    var arr = input.split(",").map(function(x) { // Chuyển chuỗi nhập vào thành mảng các số nguyên
      return parseInt(x.trim());
    });
    
    for (var i = 0; i < arr.length; i++) { // Duyệt qua các phần tử trong mảng
      if (kiemTraSoNguyenTo(arr[i])) { // Kiểm tra xem phần tử có phải là số nguyên tố hay không
        document.getElementById("ket-qua").innerHTML = "Số nguyên tố đầu tiên trong mảng: " + arr[i];
        return;
      }
    }
    
    document.getElementById("ket-qua").innerHTML = "Không có số nguyên tố trong mảng!";
}

function kiemTraSoNguyenTo(n) {
if (n < 2) { // Kiểm tra nếu số nhỏ hơn 2 thì không phải là số nguyên tố
return false;
}
for (var i = 2; i <= Math.sqrt(n); i++) { // Duyệt qua các số từ 2 đến căn bậc hai của n
if (n % i == 0) { // Nếu n chia hết cho i thì không phải là số nguyên tố
return false;
}
}
return true; // Nếu không tìm thấy i nào chia hết cho n thì n là số nguyên tố
}
  