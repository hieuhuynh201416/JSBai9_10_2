function renderDsnv(dsnv) {
  var contentHTML = "";

  // duyệt mảng
  for (var i = 0; i < dsnv.length; i++) {
    var data = dsnv[i];
    var trString = `<tr> 
           <td>${data.tk}</td>
           <td>${data.ten}</td>
           <td>${data.email}</td>
           <td>${data.ngayLam}</td>
           <td>${data.chucVu}</td>
           <td>${data.tongLuong()}</td>
           <td>${data.xepLoai()}</td> 
           <td>
           <button onclick="xoaNv('${
             data.tk
           }')" class="btn btn-danger">Xóa</button>
              </td>   
          </tr>`;
    contentHTML = contentHTML + trString;
  }

  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}
//
