
let fizz = 'Fizz',
    buzz = 'Buzz',
    i;

for (i = 0; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(i + ' ' + fizz + buzz);
    } else if (i % 3 == 0) {
        console.log(i + ' ' + fizz);
    } else if (i % 5 === 0) {
        console.log(i + ' ' + buzz);
    } else {
        console.log(i);
    }
}
