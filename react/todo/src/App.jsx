import React, { useState, Fragment, useRef, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

export function App() {

    const [todos, setTodos] = useState([{ id: 1, name: "Task 1", state: true }]);

    const todoRef = useRef();
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('key'));
        if (storedTodos) setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('key', JSON.stringify(todos))
    }, [todos]);

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id == id);
        todo.state = !todo.state;
        setTodos(newTodos);
    }

    const handleAddTodo = () => {
        const name = todoRef.current.value;
        if (!name) return;
        setTodos(prevState => {
            return [...prevState, { id: uuidv4(), name, state: false }]
        })
        todoRef.current.value = null;
    }

    const handleClearCompleted = () => {
        const newTodos = todos.filter(todo => !todo.state);
        setTodos(newTodos);
    }

    return (
        <Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <input ref={todoRef} type="text" placeholder="New Task" />
            <button onClick={handleAddTodo}>Add Task </button>
            <button onClick={handleClearCompleted}>Remove Task</button>
            <div>Te quedan {todos.filter(todo => !todo.state).length} tareas por terminar </div>
        </Fragment>

    )
}
