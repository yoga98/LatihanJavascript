var nilai1 = prompt('Masukan Nilai Pertama')
var nilai2 = prompt('Masukan Nilai Kedua')
var op = prompt('-,+,*,/')
var nilai1int1 = parseInt(nilai1)
var nilai1int2 = parseInt(nilai2)
var tambah = nilai1int1 + nilai1int2
var kurang = nilai1int1 - nilai1int2
var kali = nilai1int1 * nilai1int2
var bagi = nilai1int1 / nilai1int2
var ulang = confirm('ulang')
if (op == '+') {
    document.write('hasil dari tambah = ' + tambah)
} else if (op == '-') {
    document.write('hasil dari kurang = ' + kurang)
} else if (op == '*') {
    document.write('hasil dari kali = ' + kali)
} else if (op == '/') {
    document.write('hasil dari tambah = ' + bagi)
} else {
    document.write('Angka ini salah')
}