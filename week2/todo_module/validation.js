//validator.js - Input validation
  // TODO: Export these validation functions
                      
  // 1. Validate task title (not empty, min 3 chars)
           function validateTitle(title) {

         if (title && title.length >= 3) {
        return 'Valid'
    } else {
        return 'Invalid'
    }
}

                      
 // 2. Validate priority (must be: low, medium, high)
    function validatePriority(priority) {
    if (priority == 'low' || priority == 'medium' || priority == 'high') {
        return 'Valid'
    } else {
        return 'Invalid'
    }
}
                      
 // 3. Validate due date (must be future date)
 function validateDueDate(date){
    return 'Valid'
  }

   export  {validateTitle,validatePriority,validateDueDate}