// kiểm tra ô input rỗng
function inputRong(input, thongbao) {
  var input = value.input;
  if (input == "") {
    document.getElementById(thongbao).innerText = "Không được bỏ trống";
    return true;
  } else {
    document.getElementById(thongbao).innerText = "";
    return false;
  }
}

// kiểm tra độ dài mảng
function kiemTraDoDai(value, idErr, min, max) {
  var length = value.length;
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

//kiểm tra email
function kiemTraEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  var isValid = re.test(email);
  if (isValid) {
    document.getElementById("tbEmail").innerText = "";
    return true;
  }
  document.getElementById("tbEmail").innerText = "email không hợp lệ    ";
  return false;
}
