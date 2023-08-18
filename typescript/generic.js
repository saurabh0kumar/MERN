function display(x) {
    console.log("value of x" + x);
    console.log("type" + typeof (x));
}
function genericfunction(x) {
    console.log("value of x" + x);
    console.log("type" + typeof (x));
}
display(2);
console.log("---number type---");
genericfunction(34);
console.log("---number type---");
genericfunction("hello");
