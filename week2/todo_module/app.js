// iii. app.js - Main application

// Import task functions
import { addTask, getAllTasks, completeTask } from './task.js'

// 1. Add some tasks
addTask("St", "high", "2026-03-15")
addTask("practice mern", "medium", "2026-03-12")

// 2. Display all tasks
getAllTasks()

// 3. Complete a task
completeTask(2)

// 4. Display all tasks again
getAllTasks()