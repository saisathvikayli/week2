//create http server
import exp from 'express'
const app=exp()
//set a port number
const port=6767
//assign a port number to http server
app.listen(port,()=> console.log(`server is listening to port ${port}...`))


//test data 


//creating APIs (REST API ---> REpresentational State Transer)
    //route to handle get request of the client(http://localhost:6767/users)
    app.get('/users',(req,res)=>{
        //send res to client
        res.json({msg:"this res for get users req reading"})
    })
    //route to handle post request of the client
    app.post('/users',(req,res)=>{
        res.json({msg:"this res for post users req creation"})
    })
    //route to handle put request of the client
    app.put('/users',(req,res)=>{
        res.json({msg:"this res for put users req updation"})
    })
    //route to hanfle delete request of the client
    app.delete('/users',(req,res)=>{
        res.json({msg:"this res for delete users req deletion"})
    })










1.post request and put request shoudl send data to the api as body 
of the request object.

2.get and delete requests do not support body of the request object
so that these 2 requests can send data through endpoint.



npm init - y 
npm install packagename(express)
nodemon server_name.js



tcpip vs https relationship