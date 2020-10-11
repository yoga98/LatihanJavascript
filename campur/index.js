// document.write('')
//function adalah sub program yang dapat dipanggil dan dijalankan secara berulang kali
//syntax atau aturan dalam membuat function 
// function namaFungsi() {
//     document.write('hello word')
// }
// namaFungsi()
// var namaVariabel = prompt('isi');

// function namaFungsi(parameter) {
//     document.write(parameter)
// }
// namaFungsi(namaVariabel)
// function luasPersegi(sisi) {
//     document.write(sisi * sisi)
// }
// luasPersegi(12)

// document.write('<br>')

function luasPersegipanjang(panjang = 0, lebar = 0) {
    // document.write(typeof panjang)
    // document.write(typeof lebar)
    alert(panjang * lebar)
    var ulang = confirm('mau di ulang?')
    if (ulang == true) {
        var A = prompt('Masukan Angka pertama')
        var b = prompt('masukan angka kedua')
        var Aint = parseInt(A)
        var Bint = parseInt(b)
        luasPersegipanjang(Aint, Bint);
    } else {
        alert('tidak perlu')
    }
}
var A = prompt('Masukan Angka pertama')
var b = prompt('masukan angka kedua')
var Aint = parseInt(A)
var Bint = parseInt(b)

luasPersegipanjang(Aint, Bint)