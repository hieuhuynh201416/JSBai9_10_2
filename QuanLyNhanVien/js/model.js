function nhanVien(
  _taikhoan,
  _ten,
  _email,
  _ngaylam,
  _chucvu,
  _luongcb,
  _giolam
) {
  this.tk = _taikhoan;
  this.ten = _ten;
  this.email = _email;
  this.ngayLam = _ngaylam;
  this.chucVu = _chucvu;
  this.luongCb = _luongcb;
  this.gioLam = _giolam;
  this.tongLuong = function () {
    if (this.chucVu == "Sếp") {
      return this.luongCb * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      return this.luongCb * 2;
    } else {
      return this.luongCb;
    }
  };
  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      return "nhân viên xuất sắc";
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
      return "nhân viên giỏi";
    } else if (this.gioLam >= 160 && this.gioLam < 176) {
      return "nhân viên khá";
    } else {
      return "nhân viên trung bình";
    }
  };
}
