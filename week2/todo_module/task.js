
    //    ii. task.js - Task operations
    //                 // TODO: Import validator functions
       import {validateTitle,validatePriority,validateDueDate} from './validation.js'
                    
       const tasks = []
                    
         // 1. Add new task
export function addTask(title, priority, dueDate) {
                
if(validateTitle(title) == 'Invalid' || validatePriority(priority) == 'Invalid' || validateDueDate(dueDate) == 'Invalid') 
{
   return 'Invalid'
}
else 
   {
   tasks.push({ title, priority, dueDate })
   }
}
                    
// // 2. Get all tasks
export function getAllTasks() 
{
   console.log(tasks)
}
                    
// 3. Mark task as completef ind task and mark as complete

// 3. Mark task as complete
export function completeTask(taskId) {

if(tasks[taskId])
{
 tasks[taskId] = 'completed'
   return 'completed'
   }
else {
    return 'Task not found'
    }
}