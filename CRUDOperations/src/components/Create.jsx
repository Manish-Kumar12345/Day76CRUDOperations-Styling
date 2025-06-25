import { nanoid } from 'nanoid';
import { useState } from 'react'
const Create = (props) => {
    const todos = props.todos;
    const setTodos = props.setTodos;

    const [title, setTitle] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const newTodo = {
          id: nanoid(),
          title: title,
          isCompleted: true,
        }
        // console.log(newTodo);
        let copyTodos = [...todos];
        copyTodos.push(newTodo);
        setTodos(copyTodos);
        // setTodos([...todos, newTodo]);
        setTitle("");
      };


      const buttoncss = {
        color: "white",
        padding: "5px 10px",
        backgroundColor: "transparent",
        border: "1px solid white",
        borderRadius: "10px"
      }
  return (
    <>
      <h1>Create Tasks</h1>
      <form onSubmit={submitHandler}>
        <input 
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text" placeholder='title' />
        <br /> <br />
        <button style={buttoncss}>Create Todo</button>
      </form>
    </>
  )
}

export default Create
