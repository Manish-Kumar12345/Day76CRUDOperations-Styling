import { nanoid } from 'nanoid';
import React, {Fragment, useState } from 'react'
import Create from './components/Create';
import Read from './components/Read';
import {fragment } from 'react';
const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, title: "Kaam karle bhai", isCompleted: false},
  ])

  
  const [completed, setCompleted] = useState(false);
  const [gender, setGender] = useState("Female");
  const [city, setCity] = useState("delhi");

  
  
  
  return (
    <Fragment>
      <Create todos = {todos} setTodos = {setTodos}/>
      <hr />
      <Read todos = {todos} setTodos = {setTodos}/>
    </Fragment>
  )
}

export default App
