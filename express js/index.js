const express = require("express");
const app=express();
const port=4000;

let employee=[
    {id:1,nmae:"saurav",dept:"hr",salary:60000},
    {id:2,nmae:"ankit",dept:"developer",salary:80000},
    {id:3,nmae:"prajay",dept:"hr",salary:70000}
];

app.get('/',(req,res)=>
{
   res.send('hello world');
}
)
app.listen(port, ()=>{
    console.log(' server is running in the port ${port}');

}
);