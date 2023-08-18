function addition(num1, num2) {
    return num1 + num2;
}
addition(3, 6);
function sub(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return num1 - num2;
}
function add2(num1, num2, num3) {
    console.log(num1);
    console.log(num2);
    console.log(num3);
}
console.log(addition(1, 1));
console.log(sub(3));
console.log(sub(4, 1));
console.log(add2(1));
add2(3, 5);
