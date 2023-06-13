function demSoDuong() {
  var input = document.getElementById("input").value.trim();
  if (!input) { // Kiểm tra nếu người dùng không nhập gì thì báo lỗi và kết thúc hàm
    alert("Bạn chưa nhập số nguyên nào!");
    return;
  }
  var arr = input.split(",").map(function(x) { // Chuyển chuỗi nhập vào thành mảng các số nguyên
    return parseInt(x.trim());
  });
  
  var soDuong = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) { // Nếu số dương thì tăng biến đếm lên 1
      soDuong++;
    }
  }
  
  document.getElementById("ket-qua").innerHTML = "Số dương trong mảng: " + soDuong;
}
