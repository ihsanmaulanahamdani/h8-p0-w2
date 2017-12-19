for (var deret = 1; deret <= 100; deret++) {
    if (deret % 2 === 0) {
        console.log(deret + ' GENAP');
    } else {
        console.log(deret + ' GANJIL');
    }
}

console.log('PERULANGAN 1');
for (var deret = 1; deret <= 100; deret += 2) {
    if (deret % 3 === 0) {
        console.log(deret + ' kelipatan 3');
    } else {
        console.log(deret);
    }
}

console.log('PERULANGAN 2');
for (var deret = 1; deret <= 100; deret += 5) {
    if (deret % 6 === 0) {
        console.log(deret + ' kelipatan 6');
    } else {
        console.log(deret);
    }
}

console.log('PERULANGAN 3');
for (var deret = 1; deret <= 100; deret += 9) {
    if (deret % 10 === 0) {
        console.log(deret + ' kelipatan 10');
    } else {
        console.log(deret);
    }
}