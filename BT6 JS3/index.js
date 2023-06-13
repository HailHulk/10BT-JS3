function doiChoHaiGiaTri() {
    var input = document.getElementById("input").value.trim();
    if (!input) { // Kiểm tra nếu người dùng không nhập gì thì báo lỗi và kết thúc hàm
      alert("Bạn chưa nhập số nguyên nào!");
      return;
    }
    var arr = input.split(",").map(function(x) { // Chuyển chuỗi nhập vào thành mảng các số nguyên
      return parseInt(x.trim());
    });
    var pos1 = parseInt(document.getElementById("pos1").value);
    var pos2 = parseInt(document.getElementById("pos2").value);
    
    if (isNaN(pos1) || isNaN(pos2)) { // Kiểm tra nếu người dùng nhập không phải là số
      alert("Vị trí phải là một số nguyên!");
      return;
    }
    if (pos1 < 0 || pos1 >= arr.length || pos2 < 0 || pos2 >= arr.length) { // Kiểm tra nếu người dùng nhập vị trí ngoài giới hạn mảng
      alert("Vị trí không hợp lệ!");
      return;
    }
    
    var temp = arr[pos1]; // Lưu giá trị tại vị trí pos1 vào biến tạm
    arr[pos1] = arr[pos2]; // Gán giá trị tại vị trí pos2 cho vị trí pos1
    arr[pos2] = temp; // Hoán đổi giá trị tại vị trí pos1 vào vị trí pos2
    
    document.getElementById("ket-qua").innerHTML = "Mảng sau khi đã đổi chỗ: " + arr.join(", ");
  }
  