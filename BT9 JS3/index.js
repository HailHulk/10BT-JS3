function timSoNguyen() {
    var inputNguyen = document.getElementById("input-nguyen").value.trim();
    var inputThuc = document.getElementById("input-thuc").value.trim();
    if (!inputNguyen || !inputThuc) { // Kiểm tra nếu người dùng không nhập gì thì báo lỗi và kết thúc hàm
      alert("Bạn chưa nhập đủ số nguyên và số thực!");
      return;
    }
    var arrNguyen = inputNguyen.split(",").map(function(x) { // Chuyển chuỗi nhập vào thành mảng các số nguyên
      return parseInt(x.trim());
    });
    var arrThuc = inputThuc.split(",").map(function(x) { // Chuyển chuỗi nhập vào thành mảng các số thực
      return parseFloat(x.trim());
    });
    
    var soLuongNguyen = 0;
    for (var i = 0; i < arrThuc.length; i++) { // Duyệt qua các phần tử trong mảng số thực
        if (Number.isInteger(arrThuc[i])) { // Kiểm tra xem phần tử có phải là số nguyên hay không
        soLuongNguyen++;
        }
        }
        
        document.getElementById("ket-qua").innerHTML = "Trong mảng số thực có " + soLuongNguyen + " số nguyên.";
        }
  