// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


// Tasks:
//     1. filter() all credit transactions
let types =transactions.filter((typ)=> typ.type =="credit")
console.log(types)
//     2. map() to extract only transaction amounts
let amts = transactions.map((ext)=> ext.amount)
console.log(amts)
//     3. reduce() to calculate final account balance
let final = transactions.reduce((initial,sum)=> initial+sum.amount,0)
console.log(`final account balance is ${final}`)
//     4. find() the first debit transaction
let first = transactions.find((types)=> types.type =='debit')
console.log(first)
//     5. findIndex() of transaction with amount 10000
let index =transactions.findIndex((ind)=> ind.amount ==10000)
console.log(index)