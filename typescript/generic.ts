function display(x:number)     //tsc name.ts
{
    console.log("value of x"+ x);
    console.log("type"+ typeof(x));

}
 function genericfunction<T>(x:T)  //GENERIC FUNCTION
 {
    console.log("value of x"+ x);

    console.log("type"+ typeof(x));

 }
 display(2);
 console.log("---number type---");
 genericfunction<number>(34);

 console.log("---number type---");
 genericfunction<string>("hello");

