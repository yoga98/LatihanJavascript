var tanya = true;
while (tanya) {
    //Menangkap pilian player
    var p = prompt('Pilihan: gajah, Semut, Orang')

    //menangkap pilihan komputer
    //membangkitkan bilangan random
    //Math mengacak nomor/pilihan
    var comp = Math.random();

    //! 0.34 dari 1/3
    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang'
    } else {
        comp = 'semut';
    }
    var hasil = '';
    //menentukan Rules
    //* hasil proses panjang
    if (p == comp) {
        hasil = 'SERI!';
    } else if (p == 'gajah') {
        //     if (comp == 'orang') {
        //         hasil = 'MENANG!'
        //     } else {
        //         hasil = 'KALAH'
        //     }
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH!';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'Memasukan pilihan yang salah';
    }


    alert('Kamu memilih ' + p + ' dan komputer adalah memilih: ' + comp + ' \nhasilnya: kamu ' + hasil);
    tanya = confirm('lagi ?')
}
alert('Terimakasih telah bermain');