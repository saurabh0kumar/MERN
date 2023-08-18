var age = 45;
console.log("age is" + age);
var employeename = "sachin";
console.log("name" + employeename);
//tsc hello.ts --watch(automatically changes in NODE)
var fruits = ['apple', 'banana', 'mango'];
console.log(fruits.length);
console.log(fruits);
var fruitsa = ['apple', 34, 42, 'banana']; //tuple multiple data type
console.log(fruitsa);
var msg;
var ms2;
msg = "hekko";
ms2 = "hekko";
console.log(msg.length);
console.log(ms2);
var item;
item = [[1, 'laptop']];
//item.push(4,'cricket'); 
console.log(item);
var month = "january";
var months;
(function (months) {
    months[months["january"] = 0] = "january";
    months[months["feb"] = 1] = "feb";
    months[months["march"] = 2] = "march";
    months[months["april"] = 3] = "april";
})(months || (months = {}));
var months2 = months.january;
console.log(months2);
