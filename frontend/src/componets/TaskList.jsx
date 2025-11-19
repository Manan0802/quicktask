//component to hold and display list of our all task components 
//This component will receive an array of tasks and render a Task component for each item in the array.

import React from "react";
import Task from "./Task.jsx";

//ab yeh task list do prop legaa phle khali tasks le rhaa thaa abb yeh tasks aur delete wala bi lega  as prop

const TaskList=({tasks,onDelete})=>{
    return(
        <div className="TaskList">
            {/* abb hume loop karna hai taask mai jisse ek list milegi 
            iske liye hum .map() use krte hai to get the list har task kei liye ek <Task\> component milega  */}
            {
                tasks.map((task)=>{
                    return <Task key={task._id} task={task} onDelete={onDelete}/>//delprop ko harr uske sath pass kardia 
                })
            }
        </div>
    )
}

export default TaskList


///////////////////////////////        learning           /////////////////////////////////////

// import Task from './Task.jsx';: We must import the child component (Task) before we can use it inside the parent (TaskList).

// {tasks.map((task) => ( ... ))}: This is the standard way to render lists in React. The .map() method transforms our array of task data into an array of <Task /> components.

// <Task key={task._id} task={task} />: This is the most important line.

// key={task._id}: When you render a list, React requires a unique key prop for each item. This helps React efficiently update the list when items are added, removed, or reordered. The unique _id from our database is the perfect choice for a key.

// task={task}: This is how we pass the entire task object (e.g., {_id: '123', text: 'My first task'}) as a prop down to the Task component we created earlier.



