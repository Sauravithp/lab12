const express=require('express')
const router=express.Router();
const path=require('path');

router.get('/add',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','addProduct.html'));
})

router.post('/save',(req,res)=>{
    console.log(req.body);
    res.send("Product has been saved!!!");
});

module.exports=router;