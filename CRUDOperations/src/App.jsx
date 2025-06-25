import React, {useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, title: "Kaam karle bhai", isCompleted: false},
  ])

  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [gender, setGender] = useState("Female");
  const [city, setCity] = useState("delhi");
  return (
    <div>
      <h1>Create Tasks</h1>
      <form action="">
        <input 
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text" placeholder='title' />
        <br />
        <br />
        <input 
        checked={completed}
        onChange={(e) =>  setCompleted(e.target.checked)}
        type="checkbox" />Completed
        <br /><br />

        <input 
        value="male"
        onChange={(e) => setGender(e.target.value)}
        checked = {gender == "male" && true}
        type="radio" />
        male
        <input 
        value="Female"
        onChange={(e) => setGender(e.target.value)}
        checked = {gender == "Female" && true}
        type="radio" />
        Female
        <br /><br />
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="delhi">Delhi</option>
          <option value="patna">Patna</option>
          <option value="darbhanga">Darbhanga</option>
        </select>
        <button>Create Todo</button>
      </form>
    </div>
  )
}

export default App
