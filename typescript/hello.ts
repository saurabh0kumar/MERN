let age:number=45;
console.log("age is" +age);

let employeename:string="sachin";
console.log("name"+ employeename);
//tsc hello.ts --watch(automatically changes in NODE)
let fruits:string[]=['apple','banana','mango'];
console.log(fruits.length);
console.log(fruits);
let fruitsa:(string|number)[]=['apple',34,42,'banana']; //tuple multiple data type
console.log(fruitsa);
let msg:(string|number|boolean);
let ms2:string;
msg="hekko";
ms2="hekko";
console.log(msg.length);
console.log(ms2);

let item:[number,string][];
item=[[1,'laptop']];
//item.push(4,'cricket'); 
console.log(item);

var month="january";
enum months
{
    january,
    feb,
    march,
    april
}
var months2=months.january;
console.log(months2);