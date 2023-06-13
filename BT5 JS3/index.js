function timSoChanCuoiCung() {
    var input = document.getElementById("input").value.trim();
    if (!input) { // Kiểm tra nếu người dùng không nhập gì thì báo lỗi và kết thúc hàm
      alert("Bạn chưa nhập số nguyên nào!");
      return;
    }
    var arr = input.split(",").map(function(x) { // Chuyển chuỗi nhập vào thành mảng các số nguyên
      return parseInt(x.trim());
    });
    
    var soChanCuoiCung = -1; // Khởi tạo giá trị là -1
    for (var i = arr.length - 1; i >= 0; i--) { // Duyệt mảng từ cuối về đầu
      if (arr[i] % 2 === 0) { // Kiểm tra nếu phần tử tại vị trí i là số chẵn
        soChanCuoiCung = arr[i]; // Gán giá trị số chẵn cuối cùng
        break; // Kết thúc vòng lặp ngay sau khi tìm được số chẵn cuối cùng
      }
    }
    
    document.getElementById("ket-qua").innerHTML = "Số chẵn cuối cùng trong mảng: " + soChanCuoiCung;
  }
  