import React, { Fragment } from 'react';
import { TodoItem } from './TodoItem';

export function TodoList( { todos, toggleTodo } ) {
    return (
        <ul>
            {todos.map((todo)=> (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
            ))}
        </ul>
    )
}
