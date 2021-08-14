import React from 'react';

export function TodoItem({ todo, toggleTodo }){
    const {id, name, state} = todo;

    const handleChange = () => {
        toggleTodo(id);
    }
    return (
        <li>
            <input type="checkbox" checked={state} onChange={handleChange}/>
            {name}
        </li>
    )
}
