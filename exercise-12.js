function balikString(str) {
    var string = '';

    for (var index = str.length - 1; index >= 0; index--) {
        string += str[index];
    }
    return string;
}

console.log(balikString('hello world!'));