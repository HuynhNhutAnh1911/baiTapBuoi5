// bai 1
function ketQuaThi(){
    var diemChuan = document.getElementById("txt-diem-chuan").value*1,
    chonKhuVuc =document.getElementById("txt-chon-khu-vuc").value*1,
    chonDoiTuong = document.getElementById("txt-chon-doi-tuong").value*1,
    diemMot = document.getElementById("txt-diem-1").value*1,
    diemHai = document.getElementById("txt-diem-2").value*1,
    diemBa = document.getElementById("txt-diem-3").value*1,
    x = !0;
    if ((x &= kiemTra(diemMot) && kiemTra(diemHai) && kiemTra(diemBa))) {
        var diemTong =  diemMot + diemHai + diemBa + (chonKhuVuc + chonDoiTuong);
        document.getElementById("result1").innerHTML =
        diemTong >= diemChuan ? "Bạn đã đậu. Tổng điểm: " + diemTong : "Bạn đã rớt. Tổng điểm: " + diemTong;
      } else
        document.getElementById("result1").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
}
function kiemTra(diemChuan) {
    return !(diemChuan <= 0);
  }

// bai 2 
var kw_1 = 500,
  kw_2 = 650,
  kw_3 = 850,
  kw_4 = 1100,
  kw_5 = 1300;

function tinhTienDien(){
    var hoTen = document.getElementById("txt-ten") .value;
    var soKW = document.getElementById("txt-kw").value*1;
    var giaTien=0;
    if( 0 < soKW && soKW <= 50){
        giaTien = soKW * kw_1;
    }else if(soKW > 50 && soKW <= 100){
        giaTien = 50 * kw_1 + (soKW - 50) * kw_2;
    }else if(soKW > 100 && soKW <= 200){
        giaTien = 50 * kw_1 + 50 * kw_2 + (soKW - 100) * kw_3;
    }else if( soKW > 200 && soKW <= 350){
        giaTien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (soKW - 200) * kw_4;
    }else{
        giaTien = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (soKW - 350) * kw_5;
    }
    document.getElementById("result2").innerHTML 
    =`Họ tên : ${hoTen} , số tiền điện phải trả là : ${new Intl.NumberFormat('vn-VN').format(giaTien)} VNĐ `;
}

// bai 3 
function tinhTienThue(){
    var hoTen = document.getElementById("txt-ho-ten").value;
    var tongThuNhap = document.getElementById("txt-tong-thu-nhap").value*1;
    var phuThuoc =document.getElementById("txt-phu-thuoc").value*1;
    var tongTien=0;
    var thuNhapChiuThue = tongThuNhap - 4000000 - phuThuoc * 1600000;
    if(thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000){
        tongTien = 0.05 * thuNhapChiuThue;
    }else if(thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000){
        tongTien = 0.1 * thuNhapChiuThue;
    }else if(thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000){
        tongTien = 0.15 * thuNhapChiuThue;
    }else if(thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000){
        tongTien = 0.2 * thuNhapChiuThue
    }else if( thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000){
        tongTien = 0.25 * thuNhapChiuThue
    }else if(thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000){
        tongTien = 0.3 * thuNhapChiuThue
    }else{
        tongTien = 0.35 * thuNhapChiuThue
    }
    document.getElementById("result3").innerHTML 
    =`Họ tên : ${hoTen} , Tiền thuế thu nhập cá nhân : ${new Intl.NumberFormat('vn-VN').format(tongTien)} VNĐ `;
}
// bai 4 
function disableInput() {
    var loaiKH = document.getElementById("txt-user").value;
    document.getElementById("txt-ket-noi").style.display =
      "congTy" == loaiKH ? "block" : "none";
  }
 