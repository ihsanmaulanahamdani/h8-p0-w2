//Nama Game: Cars Racing Drag
var namaPlayer = 'Ihsan';
var tipeMobil = ['BMW', 'Lamborghini', 'Ferrari', 'Tesla', 'Koenigsegg'];
var mobil = tipeMobil[2];

//Fungsi untuk memilih mobil
function selectCar() {
    if (namaPlayer === '') {
        console.log('Silahkan Isi Nama Anda Untuk Melanjutkan Permainan');
    } else {
        if (mobil === tipeMobil[0]) {
            console.log('Selamat Datang ' + namaPlayer + ' di Game Cars Racing');
            console.log('Anda memilih mobil BMW sebagai mobil anda');
        } else {
            if (mobil === tipeMobil[1]) {
                console.log('Selamat Datang ' + namaPlayer + ' di Game Cars Racing');
                console.log('Anda memilih mobil Lamborghini sebagai mobil anda');
            } else {
                if (mobil === tipeMobil[2]) {
                    console.log('Selamat Datang ' + namaPlayer + ' di Game Cars Racing');
                    console.log('Anda memilih mobil Ferrari sebagai mobil anda');
                } else {
                    if (mobil === tipeMobil[3]) {
                        console.log(
                            'Selamat Datang ' + namaPlayer + ' di Game Cars Racing'
                        );
                        console.log('Anda memilih mobil Tesla sebagai mobil anda');
                    } else {
                        if (mobil === tipeMobil[4]) {
                            console.log(
                                'Selamat Datang ' + namaPlayer + ' di Game Cars Racing'
                            );
                            console.log('Anda memilih mobil Koenigsegg sebagai mobil anda');
                            console.log('');
                        }
                    }
                }
            }
        }
    }
}
selectCar();

//Fungsi untuk penambahan kecepatan setiap mobil
function calculateKecepatan(kecepatan, mobil) {
    switch (mobil) {
        //penambahan kecepatan mobil BMW secara random dari 1 - 5
        case 'BMW':
            kecepatan = kecepatan + Math.floor(Math.random() * 5 + 1);
            break;
            //penambahan kecepatan mobil Lamborghini secara random dari 5 - 10
        case 'Lamborghini':
            kecepatan = kecepatan + Math.floor(Math.random() * 10 + 5);
            break;
            //penambahan kecepatan mobil Ferrari secara random dari 5 - 10
        case 'Ferrari':
            kecepatan = kecepatan + Math.floor(Math.random() * 15 + 7);
            break;
            //penambahan kecepatan mobil Tesla secara random dari 5 - 10
        case 'Tesla':
            kecepatan = kecepatan + Math.floor(Math.random() * 20 + 9);
            break;
            //penambahan kecepatan mobil Koenigsegg secara random dari 5 - 10
        case 'Koenigsegg':
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
function startGame() {
    while (jarakTempuhTotalPlayer < finish || jarakTempuhTotalCom < finish) {
        vEndPlayer = calculateKecepatan(kecepatan, mobil);
        //Kecepatan akhir player setelah ditambahkan kecepatannya sesuai dengan mobil yang dipilih
        vEndCom = calculateKecepatan(kecepatan);
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
        console.log('Waktu tempuh ' + namaPlayer + ': ' + waktuPlayer);
        console.log('kecepatan Player: ' + vEndPlayer);
        console.log('Jarak tempuh komputer: ' + waktuCom);
        console.log('kecepatan Com Player: ' + vEndCom);
        console.log('');
        vStartPlayer = vEndPlayer;
        vStartCom = vEndCom;
    }
    if (waktuTempuhPlayer < waktuTempuhCom) {
        console.log('You Won!!!');
    } else {
        console.log('You Loose!!!');
    }
    console.log('Mobil yang digunakan adalah mobil ' + mobil);
}
startGame();