import React, { useState } from 'react';

export const TodoList = () => {
    const [todo, setTodos] = useState([
        { name: "Some Text", id: 1 },
        { name: "Another Text", id: 2 },
        { name: "Random thing", id: 3 },
    ])
    const addTodo = () =>{
        setTodos(prev => [...prev, { name: 'new todo', id: Math.random() }])
    }
    return (
        <div>
            <ul>
                { todo.map( todo => <li key={todo.id}>{todo.name}</li>)}
            </ul>
            <button onClick={addTodo}>Add to do</button>
        </div>
    )
}
