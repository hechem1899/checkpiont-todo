import React from'react';
const TodoComp =(props) => {
    return ( <ul> {props.todos.map(el => <li key={el.id}>
        <span>{el.item}</span>
        <button onClick={() => props.romoveItem(el.id)}>Delete</button>
        <button onClick={()=> props.EditItem(el.id)}>Edit</button>
        </li>
    )} </ul>)
}
export default TodoComp