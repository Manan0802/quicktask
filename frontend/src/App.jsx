// import React from 'react';
// import { useState,useEffect } from 'react';
// import axios from 'axios';
// import TaskList from './componets/TaskList.jsx';
// import AddTaskFrom from './componets/AddTaskForm.jsx';
// import Register from './pages/Register.jsx';
// import Login from './pages/Login.jsx'



// function App() {

  
//   ///////////////////////////   task ko backendd se leke dikhana in place of temporary ///////////////////


//  const [tasks,setTasks]=useState([]);//statevariable(humne padhaa tha changes issme aajyenge)start with empty 
 
//  //ab useeffect ko useeffect ko use karenge for data 

//  useEffect(()=>{
//   const fetchTask= async ()=>{
//     try {
//       const response=await axios.get('http://localhost:5000/api/tasks');
//       setTasks(response.data);//json mai toh axios apne app kardega humne buss setTask se aarray mai bhaara

      
//     } catch (error) {
//       console.error('fetching error',error);
      
//     }
//   }
//   //cal kara this fetchTask function ko 
//   fetchTask();

//  },[])  //to issme yehi hai kei fetchtask function ko bulana jb  khali array change(effect only once when mount)


//  ///////////// abbb humme add task wala function banana hai issi app maai working ke liye /////////////////

//  const addTask = async(text)=>{
//   try {
//     const response=await axios.post('http://localhost:5000/api/tasks', { text })//post request to backend with humara this text content 

//     setTasks([...tasks,response.data],);//update frontend ko by adding existing task in the task array
//     //issme upper humne phle copy kare sarre purane task aur fir humne add kardiye 
    
//   } catch (error) {
//     console.error(error);
    
//   }

//  }


//   //////////// create karenge delete wala function aur iskko as prop passdown kardenge to tasklist //////////////

//     const deleteTask = async(id)=>{
//         try {
//             await axios.delete(`http://localhost:5000/api/tasks/${id}`) // yeh hune delete request bhejdi to our backend 

//             setTasks(tasks.filter((task)=> tasks._id !== id))//state ko update kardia aur unn task ko filter kardiaa 

            
//         } catch (error) {
//             console.error(error);
//         }

//     }
//     // setTasks(tasks.filter(...)):   This is the correct way to remove an item from state in React. The .filter() method creates a new array that includes every task except the one whose _id matches the id we deleted




//   return (
//     <div>
     
//       <Login />
//     </div>
//   );
// }

// export default App;


// //  {/* <h1>QuickTask App</h1>
//       {/* issme issi upper wale tasks ko as component bana ke dikhana jiskei bbatt kari   */}
//       {/* deleteTask function as a prop pass kardiaa humne  */}

//       //<TaskList tasks={tasks} onDelete={deleteTask}/> 

//       //{/* pass kardia addTask button as a prop */}
//       //<AddTaskFrom onTaskAdd={addTask}/>












import React from 'react';
// Import our custom useAuth hook.
import { useAuth } from './context/AuthContext.jsx';

// Import our page components.
import TaskDashboard from './pages/TaskDashboard.jsx';
import LoginPage from './pages/Login.jsx';

function App() {
  // Get the user object and logout function from our global context.
  const { user, logout } = useAuth();

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <h1>QuickTask App</h1>
        {/* If the user object exists, show a logout button. */}
        {user && <button onClick={logout}>Logout</button>}
      </header>
      <main>
        {/*
          This is our conditional rendering logic.
          If 'user' exists, show the TaskDashboard.
          Otherwise (if 'user' is null), show the LoginPage.
        */}
        {user ? <TaskDashboard /> : <LoginPage />}
      </main>
    </div>
  );
}

export default App;