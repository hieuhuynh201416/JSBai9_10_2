// kiểm tra ô input rỗng
function inputRong(input, thongbao) {
  if (input == "") {
    document.getElementById(thongbao).innerText = "Không được bỏ trống";
    return false;
  } else {
    document.getElementById(thongbao).innerText = "";
    return true;
  }
}

// kiểm tra độ dài mảng
function kiemTraDoDai(value, idErr, min, max) {
  var length = value.length;
  if (length > 0) {
    if (min <= length && length <= max) {
      document.getElementById(idErr).innerText = "";
      return true;
    } else {
      document.getElementById(
        idErr
      ).innerText = `Độ dài phải từ ${min} đến ${max} kí tự`;
      return false;
    }
  }
}

//kiểm tra email
function kiemTraEmail(email) {
  var length = email.length;
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  var isValid = re.test(email);
  if (length > 0) {
    if (isValid) {
      document.getElementById("tbEmail").innerText = "";
      return true;
    }
    document.getElementById("tbEmail").innerText = "email không hợp lệ    ";
    return false;
  }
}

// kiểm tra chữ cái
function kiemTraChu(ten) {
  var length = ten.length;
  var regex = /[a-zA-Z]/;
  var chuaChuCai = regex.test(ten);
  if (length > 0) {
    if (chuaChuCai) {
      document.getElementById("tbTen").innerText = "";
      return true;
    } else {
      document.getElementById("tbTen").innerText = "Vui lòng nhập chữ cái";
      return false;
    }
  }
}

function kiemTraMatKhau(matKhau) {
  var length = matKhau.length;
  // Kiểm tra xem mật khẩu có ít nhất một ký tự số
  var chuaSo = /\d/.test(matKhau);

  // Kiểm tra xem mật khẩu có ít nhất một ký tự in hoa
  var chuaHoa = /[A-Z]/.test(matKhau);

  // Kiểm tra xem mật khẩu có ít nhất một ký tự đặc biệt (ví dụ: !@#$%^&*()_+)
  var chuaDacBiet = /[!@#\$%\^&\*\(\)_\+]/.test(matKhau);

  var tatCaDieuKien = chuaSo && chuaHoa && chuaDacBiet;

  if (length > 0) {
    if (kiemTraDoDai(matKhau, "tbMatKhau", 6, 10)) {
      if (tatCaDieuKien) {
        document.getElementById("tbMatKhau").innerText = "";
        return true;
      } else {
        document.getElementById("tbMatKhau").innerText =
          "Vui lòng kiểm tra lại điều kiện";
        return false;
      }
    }
  }
}

function kiemTraNgay(ngayLam) {
  var length = ngayLam.length;

  // Kiểm tra định dạng ngày (mm/dd/yyyy)
  var checkNgay = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
  if (length > 0) {
    if (checkNgay) {
      document.getElementById("tbNgay").innerText = "";
      return true;
    } else {
      document.getElementById("tbNgay").innerText =
        "Vui lòng kiểm tra định dạng";
      return false;
    }
  }
}

function kiemTraLuong(luongCb) {
  var length = luongCb.length;
  if (length > 0) {
    if ((luongCb >= 1000000) & (luongCb <= 20000000)) {
      document.getElementById("tbLuongCB").innerText = "";
      return true;
    } else {
      document.getElementById("tbLuongCB").innerText = "Vui lòng nhập lại tiền";
      return false;
    }
  }
}

function kiemTraGio(gioLam) {
  var length = gioLam.length;
  if (length > 0) {
    if ((gioLam >= 80) & (luongCb <= 200)) {
      document.getElementById("tbGiolam").innerText = "";
      return true;
    } else {
      document.getElementById("tbGiolam").innerText = "Vui lòng nhập lại tiền";
      return false;
    }
  }
}
