const express = require(`express`);
const jwt = require(`jsonwebtoken`);
const router = express.Router();

const employees=[
    {id:1,name:"sky",dept:"hr",salary:1000},
    {id:2,name:"surav",dept:"hr",salary:3000},
    {id:3,name:"tejas",dept:"hr",salary:12200},
];
router.get("/get",(req,res)=>
{
    res.json(employees);
}
);
module.exports=router;
