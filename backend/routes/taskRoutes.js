//iss file mai humare /api/task waele  sarre routes kei api hold hogi 
import express from 'express'
import { getallTask,createTask,deleteTask,updateTask} from '../controllers/taskController.js';
import protect from '../middleware/authMiddleware.js'//imported protected 
const router=express.Router();

// router.get('/',(req,res)=>{
//     res.send("this is the response from task router")
// })
// router.get('/',getallTask) //jab bhi getrequest ho toh hume yaha pe sare task mil jaye  fetch karegs

// router.post('/',createTask) // . post sei new task post hogaa on serrver  yeh create 





// 2. Apply the 'protect' middleware to our routes
// This line now chains the GET and POST methods for the same URL.
// 'protect' will run before the controller function for both.
router.route('/').get(protect,getallTask).post(protect,createTask);



// router.delete('/:id',deleteTask)  
// // DELETE a specific task ^|
// // The ':id' part is a URL parameter. Express will capture whatever

// router.put('/:id',updateTask) // .put se jo particular task usko update karnaaa 

// This line chains the DELETE and PUT methods for routes with an ID.
router.route('/:id').delete(protect, deleteTask).put(protect, updateTask);



//yeh router ko export kardiaa taki hum usko main mai use kar ske 
export  default router;