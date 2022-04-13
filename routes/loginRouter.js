const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'login.html'));
})

router.post('/login', (req, res) => {
    console.log(req.body);
const a=req.body;
console.log(a);
    if(a.userName === 'admin' && a.password==='admin'){
        res.redirect('/product/add')
    }else{
        throw Error;
    }
})

module.exports = router;