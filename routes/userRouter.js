const express=require('express')
const router=express.Router();
const path=require('path');

router.get('/add', (req, res,
                  next)=>{
    res.sendFile(path.join(__dirname,'..', 'view', 'addUser.html'));
});

router.post('/save',(req,res)=>{
    console.log(req.body);
    res.send("User has been saved!!!");
});

module.exports=router;