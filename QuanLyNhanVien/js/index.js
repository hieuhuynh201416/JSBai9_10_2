var dsnv = [];
var viTriSua = -1;
var dataJson = localStorage.getItem("DSNV_LOCAL");
if (dataJson != null) {
  let result = JSON.parse(dataJson);
  dsnv = result.map(function (item) {
    return new nhanVien(
      item.tk,
      item.ten,
      item.email,
      item.matKhau,
      item.ngayLam,
      item.luongCb,
      item.chucVu,
      item.gioLam,
      item.tongLuong,
      item.xepLoai
    );
  });
  renderDsnv(dsnv);
}

function clearThongTinCu() {
  document.getElementById("tknv").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("datepicker").value = "";
  document.getElementById("luongCB").value = "";
  document.getElementById("chucvu").value = "";
  document.getElementById("gioLam").value = "";
}

//Thêm Nhân Viên
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
        return this.luongCb * 3;
      } else if (this.chucVu == "Trưởng phòng") {
        return this.luongCb * 2;
      } else {
        return this.luongCb;
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
  var isTaiKhoanValid =
    inputRong(nv.tk, "tbTKNV") &&
    kiemTraDoDai(nv.tk, "tbTKNV", 4, 6) &&
    kiemtraTaiKhoanDaTonTai(nv.tk, "tbTKNV", dsnv);
  clearThongTinCu();
  //email
  var isEmailValid = inputRong(nv.email, "tbEmail") && kiemTraEmail(nv.email);

  // tên
  var isTenValid = inputRong(nv.ten, "tbTen") && kiemTraChu(nv.ten);

  //mật khẩu
  var isMatKhauValid =
    inputRong(nv.matKhau, "tbMatKhau") &&
    kiemTraDoDai(nv.matKhau, "tbMatKhau", 6, 10) &&
    kiemTraMatKhau(nv.matKhau);

  //Ngày làm
  var isNgayLamValid =
    inputRong(nv.ngayLam, "tbNgay") && kiemTraNgay(nv.ngayLam);
  // Lương cơ bản
  var isLuongCoBanValid =
    inputRong(nv.luongCb, "tbLuongCB") && kiemTraLuong(nv.luongCb);
  //Chức vụ
  var isChucVuValid = kiemTraChucVu(nv.chucVu);
  // Giờ làm
  var isGioLamValid = inputRong(nv.gioLam, "tbGiolam") && kiemTraGio(nv.gioLam);

  if (
    isTaiKhoanValid &&
    isEmailValid &&
    isTenValid &&
    isMatKhauValid &&
    isNgayLamValid &&
    isLuongCoBanValid &&
    isChucVuValid &&
    isGioLamValid
  ) {
    dsnv.push(nv);
    var dataJson = JSON.stringify(dsnv);
    localStorage.setItem("DSNV_LOCAL", dataJson);
    document.getElementById("btnDong").click();
    renderDsnv(dsnv);
  }
}

//Xóa Nhân Viên
function xoaNv(id) {
  var viTri = dsnv.findIndex(function (item) {
    return item.tk == id;
  });
  dsnv.splice(viTri, 1);
  //cập nhật lại Storage
  var dataJson = JSON.stringify(dsnv);
  localStorage.setItem("DSNV_LOCAL", dataJson);
  renderDsnv(dsnv);
}

//Sửa Nhân Viên
function suaNv(id) {
  var viTri = dsnv.findIndex(function (item) {
    return item.tk === id;
  });

  var nv = dsnv[viTri];
  viTriSua = viTri;

  console.log(id, nv);

  document.getElementById("tknv").value = nv.tk;
  document.getElementById("name").value = nv.ten;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.matKhau;
  document.getElementById("datepicker").value = nv.ngayLam;
  document.getElementById("luongCB").value = nv.luongCb * 1;
  document.getElementById("chucvu").value = nv.chucVu;
  document.getElementById("gioLam").value = nv.gioLam * 1;
}

//Cập nhật Nhân Viên
function capNhatNv() {
  var _taikhoan = document.getElementById("tknv").value;
  var _ten = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _matKhau = document.getElementById("password").value;
  var _ngaylam = document.getElementById("datepicker").value;
  var _luongcb = document.getElementById("luongCB").value * 1;
  var _chucvu = document.getElementById("chucvu").value;
  var _giolam = document.getElementById("gioLam").value * 1;

  // vị trí
  if (viTriSua !== -1) {
    var nhanVien1 = new nhanVien(
      _taikhoan,
      _ten,
      _email,
      _matKhau,
      _ngaylam,
      _chucvu,
      _luongcb,
      _giolam
    );
    dsnv[viTriSua] = nhanVien1;
    var dataJson = JSON.stringify(dsnv);
    localStorage.setItem("DSNV_LOCAL", dataJson);
    document.getElementById("btnDong").click();
    renderDsnv(dsnv);
  }
}

// Hàm lọc danh sách nhân viên theo xếp loại
function filterNhanVienTheoXepLoai(xepLoai) {
  return dsnv.filter(function (nv) {
    return nv.xepLoai() === xepLoai;
  });
}

// Lọc và hiển thị danh sách nhân viên theo xếp loại
var nvXuatSac = filterNhanVienTheoXepLoai("nhân viên xuất sắc");
var nvGioi = filterNhanVienTheoXepLoai("nhân viên giỏi");
var nvKha = filterNhanVienTheoXepLoai("nhân viên khá");

// Hiển thị danh sách nhân viên xuất sắc
document.getElementById("xuatSacList").textContent = "Nhân viên xuất sắc: ";
for (var i = 0; i < nvXuatSac.length; i++) {
  document.getElementById("xuatSacList").textContent += nvXuatSac[i].ten + "; ";
}

// Hiển thị danh sách nhân viên giỏi
document.getElementById("gioiList").textContent = "Nhân viên giỏi: ";
for (var i = 0; i < nvGioi.length; i++) {
  document.getElementById("gioiList").textContent += nvGioi[i].ten + "; ";
}

// Hiển thị danh sách nhân viên khá
document.getElementById("khaList").textContent = "Nhân viên khá: ";
for (var i = 0; i < nvKha.length; i++) {
  document.getElementById("khaList").textContent += nvKha[i].ten + ", ";
}
