import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [item,setItem]=useState('')
  const [todos,setTodos]=useState([])
  const handleInputValue=(e)=> {
    e.preventDefault()
    setItem(e.target.value)
  }
  const handeToDo=(e)=> {
    setTodos([...todos,{id:Math.random(),item:item}])
  }
  const removeItem =(id)=> {
    setTodos(todos.filter(el=>el.id !=id))
  }
  const editItem =(id) => {
    let x=prompt('give me your new task here')
    setTodos(todos.map(el=>(el.id==id)?{id:id,item:x}:el))
  }
  return (
    <div className="App">
    <input type="text" onChange={(e) => handleInputValue(e)}/>
    < button onClick={handeToDo}  > add</button>
    <ul> {todos.map(el => <li key={el.id}> {el.item}
    <button onClick ={() => removeItem (el.id)} > Delete </button>
    <button onClick={()=>editItem (el.id) } > Edit</button>
    </li>)} </ul>
     {console.log(todos)}
     </div>)
    
}

export default App;
