const express=require('express')
const app=express();

app.set('port', process.env.PORT || 3000);
const port=app.get('port');

//URL ENCODING
app.use(express.urlencoded({extended: false}));

let userRouter=require('./routes/userRouter')
let productRouter=require('./routes/productRouter')

app.use(userRouter);
app.use(productRouter);

app.get('/go-user', (req, res, next)=>{
    console.log("go-user")
    res.redirect('/user');
});

app.listen(port,()=>console.log('Listening in port '+port));