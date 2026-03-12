// 1.Exam portal simulator:
// -----------------------------
// When a student submits an exam:

//         Immediately show: “Exam submitted successfully”
//         After 2 seconds → show: “Evaluating answers…”
//         After 4 seconds → show: “Result: Pass”

console.log("Exam Submitted Successfully")
setTimeout(()=>{
    console.log("Evaluating answers..")
},2000)
setTimeout(()=>{
    console.log("Result:Pass")
},4000)

// 2.OTP Countdown Simulator(Console App)
// ------------------------------------

//     Simulate OTP sending flow in Node.js:

// Show “OTP Sent Successfully”
        
//         Start 10 - second countdown
        
//         Allow resend only after countdown ends

console.log("OTP sent successfully")
let s=10
let clear =setInterval(()=>{
    s--
    console.log(`resend otp in ${s} seconds`)

    if(s==0){
        console.log('resend otp')
        clearInterval(clear)
    }
},1000)
