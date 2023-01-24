"use strict"
let test_1 = Boolean(3);
console.log(test_1)

let test_2 = Boolean(0);
console.log(test_2);

let test_3 = Boolean(-1);
console.log(test_3)

let test_4 = Boolean(-0);
console.log(test_4)

let test_5 = Boolean(+0);
console.log(test_5)

let test_6 = Boolean('abc');
console.log(test_6)

let test_7 = Boolean('');
console.log(test_7)

let test_8 = Boolean('0');
console.log(test_8)

let test_9 = Boolean(true);
console.log(test_9)

let test_10 = Boolean(false);
console.log(test_10)

let test_11 = Boolean('true');
console.log(test_11)

let test_12 = Boolean('false');
console.log(test_12)

let test_13 = Boolean(null);
console.log(test_13)

let test_14 = Boolean(3 * 'abc');
console.log(test_14)
