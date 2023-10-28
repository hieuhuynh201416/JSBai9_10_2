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

  // tài khoản
  var isValid =
    inputRong(nv.tk, "tbTKNV") & kiemTraDoDai(nv.tk, "tbTKNV", 4, 6);

  //email
  isValid = inputRong(nv.email, "tbEmail") & kiemTraEmail(nv.email);

  // tên
  isValid = inputRong(nv.ten, "tbTen") & kiemTraChu(nv.ten);

  //mật khẩu
  isValid =
    inputRong(nv.matKhau, "tbMatKhau") &
      kiemTraDoDai(nv.matKhau, "tbMatKhau", 6, 10) &&
    kiemTraMatKhau(nv.matKhau);

  //Ngày làm
  isValid = inputRong(nv.ngayLam, "tbNgay") & kiemTraNgay(nv.ngayLam);
  // Lương cơ bản
  isValid = inputRong(nv.luongCb, "tbLuongCB") & kiemTraLuong(nv.luongCb);
  //Chức vụ
  isValid = kiemTraChucVu(nv.chucVu);
  // Giờ làm
  isValid = inputRong(nv.gioLam, "tbGiolam") && kiemTraGio(nv.gioLam);

  if (isValid) {
    dsnv.push(nv);
    renderDsnv(dsnv);
  }
}

function xoaNv(tk) {
  /**
   * splice(vị trí cần xóa/ số lượng xóa)
   * 1. từ id tìm vị trí => findIndex
   * 2. sử dụng splice để remove
   * 3. update lại layout*/

  var viTri = dsnv.findIndex(function (item) {
    return item.tk == tk;
    // console.log("item trong findINDEX: ", item);
  });
  dsnv.splice(viTri, 1);
  renderDssv(dsnv);
}
