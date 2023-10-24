var dsnv = [];

function themNv() {
  var _taikhoan = document.getElementById("tknv").value;
  var _ten = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _matKhau = document.getElementById("password").value;
  var _ngaylam = document.getElementById("datepicker").value;
  var _luongcb = document.getElementById("luongCB").value * 1;
  var _chucvu = document.getElementById("chucvu").value;
  var _giolam = document.getElementById("gioLam").value * 1;

  //   tạo object
  var nv = {
    tk: _taikhoan,
    ten: _ten,
    email: _email,
    matKhau: _matKhau,
    ngayLam: _ngaylam,
    luongCb: _luongcb,
    chucVu: _chucvu,
    gioLam: _giolam,
    tongLuong: function () {
      if (this.chucVu == "Sếp") {
        return (tongLuong = this.luongCb * 3);
      } else if (this.chucVu == "Trưởng phòng") {
        return (tongLuong = this.luongCb * 2);
      } else {
        return (tongLuong = this.luongCb);
      }
    },

    xepLoai: function () {
      if (this.gioLam >= 192) {
        return (xepLoai = "nhân viên xuất sắc");
      } else if (this.gioLam >= 176 && this.gioLam < 192) {
        return (xepLoai = "nhân viên giỏi");
      } else if (this.gioLam >= 160 && this.gioLam < 176) {
        return (xepLoai = "nhân viên khá");
      } else {
        return (xepLoai = "nhân viên trung bình");
      }
    },
  };
  // validate
  // kiểm tra input rỗng
  // độ dài input
  var isValid =
    kiemTraDoDai(nv.tk, "tbTKNV", 4, 6) && inputRong(nv.tk, "tbTKNV");
  //email
  isValid = isValid & kiemTraEmail(nv.email);

  if (isValid) {
    dsnv.push(nv);
    renderDsnv(dsnv);
  }
}
