function timSoDuongNhoNhat() {
    var input = document.getElementById("input").value.trim();
    if (!input) { // Kiểm tra nếu người dùng không nhập gì thì báo lỗi và kết thúc hàm
      alert("Bạn chưa nhập số nguyên nào!");
      return;
    }
    var arr = input.split(",").map(function(x) { // Chuyển chuỗi nhập vào thành mảng các số nguyên
      return parseInt(x.trim());
    });
    
    var soDuongArr = arr.filter(function(x) { // Lọc ra các số dương trong mảng
      return x > 0;
    });
    
    if (soDuongArr.length === 0) { // Kiểm tra nếu không có số dương nào trong mảng thì báo lỗi và kết thúc hàm
      alert("Không có số dương trong mảng!");
      return;
    }
    
    var soDuongNhoNhat = Math.min.apply(null, soDuongArr); // Tìm số dương nhỏ nhất
    document.getElementById("ket-qua").innerHTML = "Số dương nhỏ nhất trong mảng: " + soDuongNhoNhat;
  }
  