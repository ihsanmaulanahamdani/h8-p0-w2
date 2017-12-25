//Nama Game: Cars Racing Drag
var namaPlayer = 'ihsan';
var tipeMobil = ['BMW', 'Lamborghini', 'Ferrari', 'Tesla', 'Koenigsegg'];
var mobil = tipeMobil[4];

//Fungsi untuk memilih mobil
function pilihMobil() {
    if (namaPlayer === '') {
        console.log('Silahkan Isi Nama Anda Untuk Melanjutkan Permainan');
    } else {
        if (mobil === tipeMobil[0]) {
            console.log('Selamat Datang ' + namaPlayer + ' di Game Cars Racing');
            console.log('Anda memilih ' + tipeMobil[0] + ' sebagai mobil anda');
        } else {
            if (mobil === tipeMobil[1]) {
                console.log('Selamat Datang ' + namaPlayer + ' di Game Cars Racing');
                console.log('Anda memilih ' + tipeMobil[1] + ' sebagai mobil anda');
            } else {
                if (mobil === tipeMobil[2]) {
                    console.log('Selamat Datang ' + namaPlayer + ' di Game Cars Racing');
                    console.log('Anda memilih ' + tipeMobil[2] + ' sebagai mobil anda');
                } else {
                    if (mobil === tipeMobil[3]) {
                        console.log(
                            'Selamat Datang ' + namaPlayer + ' di Game Cars Racing'
                        );
                        console.log('Anda memilih ' + tipeMobil[3] + ' sebagai mobil anda');
                    } else {
                        if (mobil === tipeMobil[4]) {
                            console.log(
                                'Selamat Datang ' + namaPlayer + ' di Game Cars Racing'
                            );
                            console.log(
                                'Anda memilih ' + tipeMobil[4] + ' sebagai mobil anda'
                            );
                            console.log('');
                        }
                    }
                }
            }
        }
    }
}
pilihMobil();

//Fungsi untuk penambahan kecepatan setiap mobil
function menghitungKecepatan(kecepatan, mobil) {
    switch (mobil) {
        //penambahan kecepatan mobil BMW secara random dari 1 - 5
        case tipeMobil[0]:
            kecepatan = kecepatan + Math.floor(Math.random() * 5 + 1);
            break;
            //penambahan kecepatan mobil Lamborghini secara random dari 5 - 10
        case tipeMobil[1]:
            kecepatan = kecepatan + Math.floor(Math.random() * 10 + 5);
            break;
            //penambahan kecepatan mobil Ferrari secara random dari 5 - 10
        case tipeMobil[2]:
            kecepatan = kecepatan + Math.floor(Math.random() * 15 + 7);
            break;
            //penambahan kecepatan mobil Tesla secara random dari 5 - 10
        case tipeMobil[3]:
            kecepatan = kecepatan + Math.floor(Math.random() * 20 + 9);
            break;
            //penambahan kecepatan mobil Koenigsegg secara random dari 5 - 10
        case tipeMobil[4]:
            kecepatan = kecepatan + Math.floor(Math.random() * 25 + 12);
            break;
            //penambahan kecepatan mobil Computer secara random dari 5 - 10
        default:
            kecepatan = kecepatan + Math.floor(Math.random() * 10 + 1);
            break;
            //penambahan kecepatan mobil Lamborghini secara random dari 5 - 10
    }
    return kecepatan;
}

var vStartPlayer = 0; //Kecepatan awal dari player
var vStartCom = 0; //Kecepatan awal com player
var vEndPlayer = 0; //Kecepatan akhir player
var vEndCom = 0; //Kecepatan akhir com player
var kecepatan = 100; //kecepatan standar dari mobil
var jarakTempuh = 0; //Jarak yang ditempuh pembalap dalam rentang waktu satu detik
var jarakTempuhTotalPlayer = 0; //Jarak yang ditempuh player sampai dengan finish
var jarakTempuhTotalCom = 0; //Jarak yang ditempuh com player sampai dengan finish
var finish = 1000; //Panjang lintasan balap
var waktuTempuhPlayer = 0;
var waktuTempuhCom = 0;

//Fungsi memulai game
function mulaiPermainan() {
    while (jarakTempuhTotalPlayer < finish || jarakTempuhTotalCom < finish) {
        vEndPlayer = menghitungKecepatan(kecepatan, mobil);
        //Kecepatan akhir player setelah ditambahkan kecepatannya sesuai dengan mobil yang dipilih
        vEndCom = menghitungKecepatan(kecepatan);
        //Kecepatan akhir com player setelah ditambahkan kecepatannya sesuai dengan default level
        jarakTempuh = 0.5 * (vEndPlayer + vStartPlayer);
        //Jarak tempuh player per detik yang dihitung dengan Gerak Lurus Berubah Beraturan
        jarakTempuhTotalPlayer += jarakTempuh; //Akumulasi jarak tempuh player dari detik nol sampai mencapai finish
        jarakTempuh = 0.5 * (vEndCom + vStartCom);
        //Jarak tempuh com player per detik yang dihitung dengan Gerak Lurus Berubah Beraturan
        jarakTempuhTotalCom += jarakTempuh;
        //Akumulasi jarak tempuh player dari detik nol sampai mencapai finish
        waktuTempuhPlayer = jarakTempuhTotalPlayer / vEndPlayer;
        var waktuPlayer = waktuTempuhPlayer.toFixed(2);
        waktuTempuhCom = jarakTempuhTotalCom / vEndCom;
        var waktuCom = waktuTempuhCom.toFixed(2);
        console.log('Waktu tempuh ' + namaPlayer + ': ' + waktuPlayer + ' detik');
        console.log('kecepatan Player: ' + vEndPlayer);
        console.log('Jarak tempuh komputer: ' + waktuCom + ' detik');
        console.log('kecepatan Komputer Player: ' + vEndCom);
        console.log('');
        vStartPlayer = vEndPlayer;
        vStartCom = vEndCom;
    }
    if (waktuTempuhPlayer < waktuTempuhCom) {
        console.log('Congratulation,You Won!!!');
    } else {
        console.log('Sorry, You Loose!!!');
    }
    console.log('Mobil yang digunakan adalah mobil ' + mobil);
}
mulaiPermainan();