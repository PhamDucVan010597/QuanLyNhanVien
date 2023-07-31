//Mảng quản lý nhân viên
var arrNhanVien = [];

document.querySelector("#btnThemNV").onclick = function () {
  var nhanVien = new NhanVien();
  //DOM tới giao diện
  nhanVien.taiKhoan = document.querySelector("#tknv").value;
  nhanVien.hoTen = document.querySelector("#name").value;
  nhanVien.email = document.querySelector("#email").value;
  nhanVien.matKhau = document.querySelector("#password").value;
  nhanVien.ngayLam = document.querySelector("#datepicker").value;
  nhanVien.luongCoBan = +document.querySelector("#luongCB").value;
  nhanVien.heSoChucVu = +document.querySelector("#chucvu").value;
  nhanVien.gioLam = document.querySelector("#gioLam").value;

  //   Truy xuất thẻ option bên trong select
  var slChucVu = document.querySelector("#chucvu");
  nhanVien.chucVu = slChucVu[slChucVu.selectedIndex].innerHTML;

  //Thêm nhân viên vào mảng
  arrNhanVien.push(nhanVien);
  renderTableNhanVien(arrNhanVien);
};

//Tạo hàm chứa các tham số  arrNhanVien để đưa ra giao diện
function renderTableNhanVien(arrNV) {
  var outputHTML = "";
  for (var i = 0; i < arrNV.length; i++) {
    var nhanVien = arrNV[i];

    outputHTML += `
        <tr>
        <td>${nhanVien.taiKhoan} </td>
        <td>${nhanVien.hoTen} </td>
        <td>${nhanVien.email} </td>
        <td>${nhanVien.ngayLam} </td>
        <td>${nhanVien.chucVu} </td>
        <td>${nhanVien.tinhLuong()} </td>
        <td>${nhanVien.xepLoai()}</td>
        <button class="btn btn-outline-danger" >Xóa</button>
        </tr>
        `;
  }
  document.querySelector("#tableDanhSach").innerHTML = outputHTML;
}

//Lưu vào application storage
function saveStrarrNhanVien() {
  var strNhanVien = JSON.stringify(arrNhanVien);
  localStorage.setItem;
}
