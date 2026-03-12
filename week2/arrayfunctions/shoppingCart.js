// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Tasks:






//1. Use filter() to get only inStock products
let prod1 = cart.filter((stock)=> {   
    if(stock.inStock==true)
        return stock
}
)
 console.log(prod1)
 
// 2. Use map() to create a new array with:  { name, totalPrice }
//let prod2 = cart.map((index)=>
let prod2 = cart.map(function(item) {
  let totalprice = item.price * item.quantity;

  return {
    name: item.name,
    totalprice: totalprice
  }
})

console.log(prod2);

// 3. Use reduce() to calculate grand total cart value
    let prod3 = cart.reduce((acum , total)=>acum+total.price,0)
    console.log(prod3)

// 4. Use find() to get details of "Mouse"
    let prod4=cart.find(item=>item.name ==="Mouse")
    console.log(prod4)
    
// 5. Use findIndex() to find the position of "Keyboard"
      let prod5=cart.findIndex(item=>item.name ==="Keyboard")
    console.log(prod5+1)