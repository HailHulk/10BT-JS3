function tinhTong() {
  var input = document.getElementById("input").value.trim();
  if (!input) { // Kiểm tra nếu người dùng không nhập gì thì báo lỗi và kết thúc hàm
    alert("Bạn chưa nhập số nguyên nào!");
    return;
  }
  var arr = input.split(",").map(function(x) { // Chuyển chuỗi nhập vào thành mảng các số nguyên
    return parseInt(x.trim());
  });
  
  var tong = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) { // Nếu số dương thì cộng vào tổng
      tong += arr[i];
    }
  }
  
  document.getElementById("ket-qua").innerHTML = "Tổng số dương: " + tong;
}
