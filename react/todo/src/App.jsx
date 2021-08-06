import React, { useState } from 'react';
import { TodoList } from './components/TodoList';

export function App() {
    const [todos, setTodos] = useState(['adfajdfaf', 'React working', 'use', 'another']);
    return (
        <TodoList todos={todos}/>
    )
}
