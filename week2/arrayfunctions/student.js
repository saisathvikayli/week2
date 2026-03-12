// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// Tasks:
    // 1. filter() students who passed (marks ≥ 40)

    let pass = students.filter((stud)=>stud.marks >= 40)
    console.log(pass)

//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

let grades = students.map(function(stud) {
  let grade;
  if (stud.marks >= 90) {
    grade = "A";
  } else if (stud.marks >= 75) {
    grade = "B";
  } else if (stud.marks >= 60) {
    grade = "C";
  } else {
    grade = "D";
  }
  return {
    id: stud.id,
    name: stud.name,
    marks: stud.marks,
    grade: grade
  }
})

console.log(grades);

//    3. reduce() to calculate average marks
let marks = students.reduce((initial,sum)=> initial+sum.marks,0)
console.log(marks/students.length)

//    4. find() the student who scored 92
let high = students.find((top)=> top.marks == 92)
console.log(high)

//    5. findIndex() of student "Kiran"
let noun = students.findIndex((tag)=>tag.name == "Kiran")
console.log(noun)