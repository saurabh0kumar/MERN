const express = require(`express`);
const jwt = require(`jsonwebtoken`);
const router = express.Router();

// dummy user
const users=[
    {id:1,name:"rahul",password:"pass"},
    {id:2,name:"rahul1",password:"pass1"},
    {id:3,name:"rahu2l",password:"pass1"},
];
//user login  and it will authenticate
router.post(`/login`,(req,res)=>
{
    const{username,password}= req.body;
  const user=  users.find(u=>u.name===username && u.password===password);
  if(!user)
  {
    return res.sendStatus(401).json({ message:"invalid username pasword"  })
  }
  console.token=jwt.sign({sub:user.id},"mysecretkey");
  res.json({token});

});
module.exports=router;