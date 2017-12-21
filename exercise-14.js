function dataHandling2() {
    //contoh output
    var arrayPertama = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

    arrayPertama.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    var ambilBulan = arrayPertama[3];
    var bulan = ambilBulan.split("/");
    var bulanBaru = Number(bulan[1]);
    switch (bulanBaru) {
        case 1:
            {
                bulanBaru = 'januari';
                break;
            }
        case 2:
            {
                bulanBaru = 'Februari';
                break;
            }
        case 3:
            {
                bulanBaru = 'Maret';
                break;
            }
        case 4:
            {
                bulanBaru = 'April';
                break;
            }
        case 5:
            {
                bulanBaru = 'Mei';
                break;
            }
        case 6:
            {
                bulanBaru = 'Juni';
                break;
            }
        case 7:
            {
                bulanBaru = 'Juli';
                break;
            }
        case 8:
            {
                bulanBaru = 'Agustus';
                break;
            }
        case 9:
            {
                bulanBaru = 'September';
                break;
            }
        case 10:
            {
                bulanBaru = 'Oktober';
                break;
            }
        case 11:
            {
                bulanBaru = 'November';
                break;
            }
        case 12:
            {
                bulanBaru = 'Desember';
                break;
            }
        default:
            {
                bulanBaru = 'Error, tidak ada bulan selain bulan 1-12.'
            }
    }
    var sortArray = bulan;
    sortArray.sort(function (value1, value2, value3) {
        return value1 < value3 < value2
    });
    var joinBulan = ambilBulan.split("/");
    joinBulan.sort(function (value1, value2, value3) {
        return value1 > value3 > value2
    });
    var joinArray = joinBulan.join([separator = '-']);
    var string = String(arrayPertama[1]);
    var sliceString = string.slice(0, 15);
    console.log(arrayPertama);
    console.log(bulanBaru);
    console.log(sortArray);
    console.log(joinArray);
    console.log(sliceString);
}

dataHandling2();