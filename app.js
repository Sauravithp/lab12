const path=require('path');
const express=require('express')
const app=express();

app.set('port', process.env.PORT || 3000);
const port=app.get('port');
console.log("*****"+port+"*****")
//URL ENCODING
app.use(express.urlencoded({extended: false}));

app.use('/mycss',express.static(path.join(__dirname,'public','assets')));
app.use('/image',express.static(path.join(__dirname,'images')));

const userRouter=require(path.join(__dirname,'routes','userRouter.js'))
const productRouter=require(path.join(__dirname,'routes','productRouter.js'))
const loginRouter=require(path.join(__dirname,'routes','loginRouter.js'))

app.use(loginRouter);
app.use("/user",userRouter);
app.use("/product",productRouter);

function clientErrorHandler(err, req, res, next){
    if(req.xhr){
        res.status(500).send({
            error: 'Something Went Wrong!'
        })
    }else{
        console.log("clientErrorHandler");
        next();
    }
}

function errorHandler (err, req, res) {
    console.log("errorHandler");
    res.status(500);
    res.sendFile(path.join(__dirname,'view','error.html'))
}

app.use((err,
         req,res,next)=>{
    console.log(err);
    console.log("Inside error");
    throw clientErrorHandler();
});

app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(port,()=>console.log('Listening in port '+port));