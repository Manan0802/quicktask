//issme humaraa input field hogaa jismai hum task wask dalenge 

import axios from "axios";
import React from "react";
import { useState } from "react";

//abb yeh addTaskform yeh humne phele se bana rakaha thaa abb issme onTaskAdd as a prop pass karenge hum
const AddTaskForm = ({onTaskAdd}) => {

    const[text,setText]=useState('')//state variable to hold the text from the input field 

    const handleSubmit = (e) =>{

        e.preventDefault()//iss methodd se page refresh nhi hogaa upon entry 
        if(!text.trim()) return;

        onTaskAdd(text)//yeh humne app se a prop pass kiiya thaa send new task to it 

        
      // We'll add the logic to send this to the API in a later step.
      console.log('New task to add:', text);



        setText('') //clear input
    }



    return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        // The input's value is always "controlled" by our state variable.
        value={text}
        // The onChange event updates our state on every keystroke.
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );

}

export default AddTaskForm

///////////////////////////   learnings ///////////////////////////////////////////////////////
//tarrkea yehi hai ke bhai phle uski functionality app mai define kardi fir yaha main component mai as a prop passdown karaa aur yeh system set 

// const AddTaskForm = ({ onTaskAdd }): We are now receiving the onTaskAdd function as a prop from the App component.

// onTaskAdd(text): This is the key change. Instead of just logging to the console, we now call the function we received as a prop, passing the text from our form's state up to the App component. The App component will then handle the API call and update the main task list.