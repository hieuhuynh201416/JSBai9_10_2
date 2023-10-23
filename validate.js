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
