
// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// Tasks:
//     1. filter() employees from IT department
let dept = employees.filter((depart)=> depart.department=='IT')
console.log(dept)
//     2. map() to add:
//             netSalary = salary + 10% bonus

let net = employees.map((netsal)=>{
    let netsalary = netsal.salary + (netsal.salary*0.1)
    return{
        id:netsal.id,
        name:netsal.name,
        salary:netsal.salary,
        NetSalary:netsalary,
        department:netsal.department
    }
})

console.log(net)

//     3. reduce() to calculate total salary payout
let payout = employees.reduce((initial,sal) =>initial+sal.salary ,0)
console.log(payout)
//     4. find() employee with salary 30000
let emp =employees.find((sal)=>sal.salary == 30000)
console.log(emp)
//     5. findIndex() of employee "Neha"
let empname = employees.findIndex((nam)=> nam.name=='Neha')
console.log(empname)