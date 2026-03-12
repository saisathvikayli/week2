import exp from 'express'
export const productsApp = exp.Router()

let products=[]
productsApp.get('/products',(req,res)=>{
        res.json({msg:"all products",cart:products})
    })


//read all products
  productsApp.get('/products',(req,res)=>{
        //send res to client
        res.json({msg:"products in the cart",payload:products})
    })



    //create new product
   productsApp.post('/products',(req,res)=>{
       //route to get user from client
       const newpdt =req.body//push newpdt into products
       products.push(newpdt)
       //send request
       res.json({msg:"product created"})

       
    })
    //route to update a product
   productsApp.put('/products',(req,res)=>{
       //get modified user from client
       let modified =req.body;
       //get index of existing 
       let index=users.findIndex(userob=>userob.id===modified.id)
        if(index===-1)
                return res.json({msg:"product not found"})
        
        products.splice(index,1,modified)
        res.json({msg:"product updated"})
    })
    //route to handle deleting the product

   productsApp.delete('/products',(req,res)=>{
        //get id from user from url parameter
        let proid = Number(req.params.pid)
        //find index of user
        let index =products.findIndex(useob=>useob.pid===proid)
            if(index===-1)
                return res.json({msg:"product not found"})
  //delete user byindex
        products.splice(index,1)
        //send res
        res.json({msg:"product removed"})
    })