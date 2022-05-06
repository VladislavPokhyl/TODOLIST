import { useState } from 'react';
import Form from './components/Form'

import List from './components/List'
function App() {
  const [ tasks , setTasks]= useState([]);
  const createTask = (val) => {
    setTasks([ { id: new Date().getTime() , text: val,completed :false },...tasks]);
  };
  const editTask = (id,text)=>{
    setTasks(tasks.map(task=>{
        if(task.id===id)
        task.text=text;
        return task;
    }))
  }
  const remove = (id) =>{
    setTasks(tasks.filter(t => t.id !== id));
  }
  const toggle = (id) => {
    console.log(id);
    setTasks(
      tasks.map(t=> {
        if(id===t.id)
        t.completed=!t.completed;
        return t;
      })
    );
  };
  return (
    <>
    <Form  create={createTask}  
    />
    <List tasks= {tasks} remove={remove} toggle={toggle} edit={editTask}/>
    </>
  );
}

export default App;
