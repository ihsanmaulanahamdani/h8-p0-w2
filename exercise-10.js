//Tugas 1
var total = 0;
for (var index = 1; index <= 100; index++) {
    if (index % 2 !== 0) {
        total += index;
    } else if (index % 2 === 0) {
        total -= index;
    }
}

console.log('TOTAL: ' + total);

//Tugas 2
var pagar = '';

for (var index1 = 1; index1 <= 10; index1++) {
    for (var index2 = 0; index2 <= 10; index2++) {
        pagar += '#';
    }
    console.log(pagar);
    var pagar = '';
}

//Tugas 3
var bintang = '';

for (var index1 = 1; index1 <= 10; index1++) {
    for (var index2 = 0; index2 <= index1; index2++) {
        bintang += '*';
    }
    console.log(bintang);
    var bintang = '';
}