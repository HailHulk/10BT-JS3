function timSoNhoNhat() {
    var input = document.getElementById("input").value.trim();
    if (!input) { // Kiểm tra nếu người dùng không nhập gì thì báo lỗi và kết thúc hàm
      alert("Bạn chưa nhập số nguyên nào!");
      return;
    }
    var arr = input.split(",").map(function(x) { // Chuyển chuỗi nhập vào thành mảng các số nguyên
      return parseInt(x.trim());
    });
    
    var soNhoNhat = Math.min.apply(null, arr); // Tìm số nhỏ nhất
    document.getElementById("ket-qua").innerHTML = "Số nhỏ nhất trong mảng: " + soNhoNhat;
  }
  