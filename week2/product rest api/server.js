import exp from 'express'  //create http server
const app=exp()
const prod=exp()
import { userApp } from './API/userapi.js'
import { productsApp } from './API/productapi.js'
app.use(exp.json())  //use body parser middleware
prod.use(exp.json())
const port2=2525


function middleware2(req,res,next)
{
   // res.json({message:"response from middleware2"})
    console.log('middleware2 executed')
    next()
}

function middleware1(req,res,next)
{
  //  res.json({message:"response from middleware1"})
    console.log('middleware1 executed')
    next()
}

app.use(middleware2)
app.use(middleware1)
app.use('/users-api',userApp)
prod.use('/products-api',productsApp)

const port=6767//set a port number

app.listen(port,()=> console.log(`server is listening to port ${port}...`))//assign a port number to http server
prod.listen(port,()=> console.log(`product server is on at port ${port}...`))

//test data 