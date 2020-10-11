function cek(persegi, segitiga, lingkaran) {
    var pilih = prompt('Silahkan Pilih: Persegi || Segitiga || Lingkaran')
    var ulang = confirm('mau diulang?')
    if (pilih = 'persegi') {
        function persegi(panjang, lebar) {
            cek()
            alert(panjang * lebar)
                // var ullang = confirm('mau diulang')
            if (ullang == true) {
                var A = prompt('Masukan Angka Pertama?')
                var B = prompt('Masukan Angka Kedua?')
                var AInt = parseInt(A)
                var BInt = parseInt(B)
                persegi(AInt, BInt);
            }
        }
        var A = prompt('Masukan Angka Pertama?')
        var B = prompt('Masukan Angka Kedua?')
        var AInt = parseInt(A)
        var BInt = parseInt(B)
        persegi(AInt, BInt);

    } else if (pilih = 'segitiga') {
        segitiga()
    } else if (pilih = 'lingkaran') {
        lingkaran()
    } else {
        document.write('Terimakasih')
    }
}

// function persegi(panjang, lebar) {
//     cek()
//     alert(panjang * lebar)
//         // var ullang = confirm('mau diulang')
//     if (ullang == true) {
//         var A = prompt('Masukan Angka Pertama?')
//         var B = prompt('Masukan Angka Kedua?')
//         var AInt = parseInt(A)
//         var BInt = parseInt(B)
//         persegi(AInt, BInt);
//     }
// }
// var A = prompt('Masukan Angka Pertama?')
// var B = prompt('Masukan Angka Kedua?')
// var AInt = parseInt(A)
// var BInt = parseInt(B)
// persegi(AInt, BInt);

function segitiga(alas, tinggi) {
    cek()
    alert(0.5 * alas * tinggi)
        // var ulang = confirm('mau diulang?')
    if (ulang == true) {
        var alas = prompt('Masukan nilai alas');
        var tinggi = prompt('Masukan Nilai Tinggi');
        var alasInt = parseInt(alas);
        var tinggiInt = parseInt(tinggi);
        segitiga(alasInt, tinggiInt);
    } else {
        document.write('Terimakasih')
    }
}
var alas = prompt('Masukan nilai alas');
var tinggi = prompt('Masukan Nilai Tinggi');
var alasInt = parseInt(alas);
var tinggiInt = parseInt(tinggi);
segitiga(alasInt, tinggiInt);

var p = prompt('Masukan Nilai Panjang')
var r = prompt('Masukan Nilai jari-jari')
var pInt = parseInt(p)
var rInt = parseInt(r)

function lingkaran(p, r) {
    cek()
    alert(2 * p * r)
        // var ulang = confirm('mau diulang')
    if (ulang == true) {
        var p = prompt('Masukan Nilai Panjang')
        var r = prompt('Masukan Nilai jari-jari')
        var pInt = parseInt(p)
        var rInt = parseInt(r)
        lingkaran(pInt, rInt)
    } else {
        document.write('Terimakasih')
    }
}
// var p = prompt('Masukan Nilai Panjang')
// var r = prompt('Masukan Nilai jari-jari')
// var pInt = parseInt(p)
// var rInt = parseInt(r)
lingkaran(pInt, rInt)