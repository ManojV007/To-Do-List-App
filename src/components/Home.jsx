import React, { useEffect } from 'react'
import { useState } from 'react';
import Task from './Task';
import "./Home.css";

const Home = () => {

  const startArr = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]

  const [tasks, setTasks] = useState(startArr);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')

  const addTask = (e) => {

    e.preventDefault();
    setTasks([...tasks, {
      title: title,
      description: description
    }])
    setTitle('');
    setDescription('')
  }

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks])

  const addTitle = (e) => {
    setTitle(e.target.value);
  }

  const addDesc = (e) => {
    setDescription(e.target.value);
  }

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((value,i)=>{
      return i !== index;
    })
    setTasks(filteredArr)
  }

  return (
    <div className="container">
      <h1>To-Do List App</h1>
      <form onSubmit={addTask}>
        <input type='text' placeholder='Title' value={title} onChange={addTitle} />
        <textarea placeholder='Description' value={description} onChange={addDesc}></textarea>
        <button type='submit'>ADD</button>
      </form>
      {tasks.map((item, index) => {
        return (
          <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index} />
        )
      })}
    </div>
  )
}

export default Home
