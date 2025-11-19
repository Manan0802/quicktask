import Task from "../models/Task.js";//yeh humne wo task wala import kara from model


//function banan haai
//  to get all task
//  and send it back to our client 
export const getallTask=async (req,res)=>{
    try{
        const tasks=await Task.find({});//yeh find kaarega 
        res.status(200).json(tasks)

    }
    catch(error){
        res.status(500).json({message:'SERVER ERROR'})

    }
}

////////////////////function to create a task/////////////////////////////////////////////
export const createTask=async(req,res)=>{
    try{
    const {text}=req.body;//yeh line incoming json se text extract karelegi req mtlb wahi request jo hum bhej rhe 
    const task=new Task({  //new memmory instict of task from text recieving mtlb ussi text kei jagah banadi 
        text,
    });

    const createdTask = await task.save();//.save moongose mai save krta 
    res.status(201).json(createdTask);//send krdia user ko 
}catch(error){
    res.status(500).json({message:'server error'})
}
}

///////////////////////// function to deletetask //////////////////////////////////////

export const deleteTask=async(req,res)=>{
    try{
        //abb hume sabse phle task dhunda by id  // jo yeh task hai wo endpoint mai /api/tasks/1234 aise aayegaa 
        const task= await Task.findById(req.params.id);

        if(!task) return res.status(404).json({message : 'Task Not Found'});//task nhi mila 

        //task mil gaaya 
        await task.deleteOne()//delete one wahi apna moongose mai hogaa 

        res.status(200).json({ message: 'Task removed' });
    }
    catch (error) {
    // Log the full error to the console for debugging.
    console.error(error);
    // Send a generic server error message to the client.
    res.status(500).json({ message: 'Server Error' });
}
};

/////////////////////// update task ////////////////////////////////////////////

export const updateTask= async(req,res)=> {
    try{
        const task= await Task.findById(req.params.id)//jaise delete mai waise particulat task ko dhnund kei bheja 
        if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    task.isCompleted= !task.isCompleted //bhai kei complete wala not complete aur notcomplete wwala complete 

    const updatedTask=await task.save(); //jo bhi updated task usko save kardia 
    res.status(200).json(updatedTask)    //update task humne client ko peeche sse bhej dia 


    }
    catch(error){
        console.error(error);
        res.status(500).json({message:'error'})
    }
}
   




//////////////////////////////////////////////////////////////////////////////////////////////////////////
// export const getAllTasks = async (req, res) => { ... }
// We create and immediately export an async function named getAllTasks. We make it async because all database operations are asynchronous (they take time).

// try { ... } catch (error) { ... }
// This is for error handling. We "try" to run the database code. If it fails for any reason, the catch block will run and send back an error message.

// const tasks = await Task.find({});
// This is the core Mongoose query. Task.find({}) tells our model to find all documents in the "tasks" collection. The await keyword pauses the function until the database operation is complete.

// res.status(200).json(tasks);
// If successful, we send an HTTP status code of 200 (OK) and send the tasks we found back to the client in JSON format.