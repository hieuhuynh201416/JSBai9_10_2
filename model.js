function nhanVien(_taikhoan, _ten, _email, _ngaylam, _chucvu) {
  this.tk = _taikhoan;
  this.ten = _ten;
  this.email = _email;
  this.ngayLam = _ngaylam;
  this.chucVu = _chucvu;
  this.tongLuong = function () {
    if ((this.chucVu = "Sếp")) {
      this.tongLuong = this.luongCb * 3;
    } else if ((this.chucVu = "Trưởng phòng")) {
      this.tongLuong = this.luongCb * 2;
    } else {
      this.tongLuong = this.luongCb;
    }
  };
  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      return "nhân viên xuất sắc";
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
      return "nhân viên giỏi";
    } else if (this.gioLam >= 160 && this.gioLam < 175) {
      return "nhân viên khá";
    } else {
      return "nhân viên trung bình";
    }
  };
}
