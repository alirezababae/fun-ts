"use strict";
var fun;
fun = function () {
    console.log('hello test');
};
fun();
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
    // return a + b erro no return in void type functios
};
add(5, 10, '20');
var muisc = function (a, b) {
    return a + b;
};
var result = muisc(10, 55);
