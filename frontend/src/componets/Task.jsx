// This component will be responsible for displaying a single to-do item's text and a delete button.
//componets humare reusable wala items hai toh isko alg se bana dia 




///abhi humn sirf ek component banya hai jiska kam hai humara task humee dikahana 


//data recevuie jo bhii hogaa wo props sei hogaa aur issi props ko hum destructure kar rha hai to get contxt 

import React from "react";
//onDelete as a prop lelia 
const Task=({task,onDelete})=>{
    return(
        <div className="task">
            {/* display the text of the task */}

            <p>{task.text}</p>

            {/* abb humm is button onclick event handler lagyenge when clicked it calls that on delete wala with id to delete till app component */}

            <button onClick={()=>onDelete(task._id)}>Delete</button>
        </div>

    );
}

export default Task

//////////////////////  content /////////////////////////////////////////

// const Task = ({ task }) => { ... }: We're defining a functional component named Task. By using ({ task }) in the parameters, we are destructuring the props to directly access the task object that will be passed down from a parent component.

// <p>{task.text}</p>: This line accesses the text property from the task prop and displays it on the screen.

// Please add this code to your Task.jsx file. Let me know when you're ready, and we'll create the TaskList component that will use this one.

// onClick={() => onDelete(task._id)}: We've added an onClick handler to the button. When the button is clicked, it calls the onDelete function and passes the unique _id of this specific task as an argument. This tells the App component exactly which task to delete.








