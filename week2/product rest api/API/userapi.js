
import exp from 'express'
export const userApp = exp.Router()


let users=[]


//creating APIs (REST API ---> REpresentational State Transer)
    //route to handle get request of the client(http://localhost:6767/users)
    userApp.get('/users',(req,res)=>{
        //send res to client
        res.json({msg:"all users",payload:users})
    })

      userApp.get('/users/:id',(req,res)=>{
        //get user id from url path
        let idrl = Number(req.params.id)
        //find user
        let user=users.find(userobj=>userobj.id==idrl)
        //if not found 
        if(user===undefined)
            return res.json({msg:"user not found"})

        res.json({msg:"a user ",payload:user})

    })
    //route to handle post request of the client
    userApp.post('/users',(req,res)=>{
       //get user from client
       const newuser =req.body//push user into users
       users.push(newuser)
       //send request
       res.json({msg:"user created"})

       
    })
    //route to handle put request of the client
    userApp.put('/users',(req,res)=>{
       //get modified user from client
       let modified =req.body;
       //get index of existing 
       let index=users.findIndex(userob=>userob.id===modified.id)
        if(index===-1)
                return res.json({msg:"user not found"})
        
        users.splice(index,1,modified)
        res.json({msg:"user updated"})
    })
    //route to hanfle delete request of the client
   userApp.delete('/users/:id',(req,res)=>{
        //get id from user from url parameter
        let urlid = Number(req.params.id)
        //find index of user
        let idex =users.findIndex(useob=>useob.id===urlid)
            if(idex===-1)
                return res.json({msg:"user not found to delete"})
  //delete user byindex
        users.splice(idex,1)
        //send res
        res.json({msg:"user removed"})
    })