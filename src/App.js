import {React, useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "working on it",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
      id: 3,
      text: 'Meeting at college',
      day: 'Feb 7th at 6:30am',
      reminder: false,
  }
]);

// Delet Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
};

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}
  : task));
  console.log(tasks.reminder, id)
}

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;

  const newTask = {id, ...task};
  setTasks([...tasks, newTask]);
}


  return (
    <div className="container">
      <Header title = "Task Traker"
      onAdd= {() => setShowAddTask(!showAddTask)}
      showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ?
       <Tasks tasks = {tasks}
        onDelete = {deleteTask}
        onToggle = {toggleReminder}/>: "No Tasks To Show"}
    </div>
  );
}

export default App;
