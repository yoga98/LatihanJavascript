//* Pembuatan Kubus dengan Function

function jumlahVolumeDuaKubus(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB
    return total;
}
//* ini menggunakan document.write
// document.write(jumlahVolumeDuaKubus(5, 10))
//* ini menggunakan alert
alert(jumlahVolumeDuaKubus(2, 4));
// alert(jumlahVolumeDuaKubus(2, 5));
//*ini menggunakan console.log
// console.log(jumlahVolumeDuaKubus(2, 4));