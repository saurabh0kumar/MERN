const express = require(`express`);
const jwt = require(`jsonwebtoken`);
const router = express.Router();

const employees=[
    {id:1,name:"sky",dept:"hr",salary:1000},
    {id:2,name:"surav",dept:"hr",salary:3000},
    {id:3,name:"tejas",dept:"hr",salary:12200},
];

function authenticateToken(res,res,next)
{
    const authHeader=req.headers["authorization"];
    const token= authHeader && authHeader.split("")[1];

    if(token==null)
    {
        return res.status(401).json.({message:`unauthorize`});
    }
    jwt.verify(token,`mysecretkey`,(err,data)=>
    {
        if(err)
        {
            return res.status(403).json({message:`forbidden`});
        }
        req.user=user;
        next();

    });

}
router.get("/get",authenticateToken,(req,res)=>
{
    res.json(employees);
}
);
module.exports=router;
