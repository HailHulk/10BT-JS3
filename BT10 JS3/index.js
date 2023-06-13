function soSanhDuongAm() {
    var inputNguyen = document.getElementById("input-nguyen").value.trim();
    if (!inputNguyen) { // Kiểm tra nếu người dùng không nhập gì thì báo lỗi và kết thúc hàm
      alert("Bạn chưa nhập số nguyên!");
      return;
    }
    var arrNguyen = inputNguyen.split(",").map(function(x) { // Chuyển chuỗi nhập vào thành mảng các số nguyên
      return parseInt(x.trim());
    });
    
    var countDuong = 0;
    var countAm = 0;
    for (var i = 0; i < arrNguyen.length; i++) { // Duyệt qua các phần tử trong mảng
      if (arrNguyen[i] > 0) { // Kiểm tra xem phần tử có phải số dương hay không
        countDuong++;
      } else if (arrNguyen[i] < 0) { // Kiểm tra xem phần tử có phải số âm hay không
        countAm++;
      }
    }
    
    var ketQua = "Số dương nhiều hơn số âm.";
    if (countDuong < countAm) {
      ketQua = "Số âm nhiều hơn số dương.";
    } else if (countDuong == countAm) {
      ketQua = "Số dương bằng số âm.";
    }
    
    document.getElementById("ket-qua").innerHTML = ketQua;
  }
  