import { useState } from "react";
const Read = (props) => {
    const todos = props.todos;
    const setTodos = props.setTodos;

    const renderTodos = todos.map((todo) => {
        return <li style={{color: todo.isCompleted ? "green" : "tomato"}} key = {todo.id}>{todo.title}</li>
    })
  return (
    <>
      <h1 style={{color:"tomato"}}>Pending Todos</h1>
      <ol>{renderTodos}</ol>
    </>
  )
}

export default Read
