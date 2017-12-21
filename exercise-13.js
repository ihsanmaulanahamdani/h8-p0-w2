// input
var input = [
    ['0001', 'Roman Alamsyah', 'Bandar Lampung ', '21/05/1989', 'Membaca'],
    ['0002', 'Dika Sembiring', 'Medan ', '10/10/1992', 'Bermain Gitar'],
    ['0003', 'Winona', 'Ambon ', '25/12/1965', 'Memasak'],
    ['0004', 'Bintang Senjaya', 'Martapura ', '6/4/1970', 'Berkebun'],
];

//form
var data = [
    ['Nomor Id: ', 'Nama Lengkap: ', 'TTL: ', 'Hobi: '],
    ['Nomor Id: ', 'Nama Lengkap: ', 'TTL: ', 'Hobi: '],
    ['Nomor Id: ', 'Nama Lengkap: ', 'TTL: ', 'Hobi: '],
    ['Nomor Id: ', 'Nama Lengkap: ', 'TTL: ', 'Hobi: '],
];

function dataHandling() {
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < data.length[i]; j++) {}

        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < input.length[i]; j++) {}
            console.log(data[i][0] + input[i][0]);
            console.log(data[i][1] + input[i][1]);
            console.log(data[i][2] + input[i][2] + input[i][3]);
            console.log(data[i][3] + input[i][4]);
        }
    }
}

dataHandling();