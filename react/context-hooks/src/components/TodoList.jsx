import React,{ useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoListContext } from './TodoListContext';

export const TodoList = () => {
    const [todo, setTodo] = useState('');

    const { isDarkTheme, darkTheme, ligthTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : ligthTheme;
    const { todos, dispatch } = useContext( TodoListContext );

    const handleChange = (e) => {
        setTodo(e.target.value);
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', text: todo });
    }

    const handleRemoveTodo = (e) => {
        console.log(e.target)
        const id = e.target.id;
        dispatch({ type: 'REMOVE_TODO', id})
    }

    return (
        <div style={{ background: theme.background, color: theme.text, textAlign: 'center'}}>
            { todos.length ? 
                 todos.map( todo => { 
                     return <p id={todo.id} className="item" onClick={handleRemoveTodo} key={ todo.id }>{ todo.text }</p>
                })
              :  <div> You have no todos to show </div>
            }
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="todo">Add to do </label>
                <input type="text"  id="todo" onChange={handleChange}/>
                <input type="submit" value="Add new todo" className="ui button primary"></input>
            </form>

            <button className="ui button primary" type='submit' onClick={changeTheme}>Change Theme</button>
        </div>
    )
};

// Class component
// export default class TodoList extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const {isDarkTheme, darkTheme, ligthTheme, changeTheme} = this.context;
//         const theme = isDarkTheme ? darkTheme : ligthTheme;
//         return (
//             <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center'}}>
//                 <p className="item">Learn some react</p>
//                 <p className="item">Learn some linux</p>
//                 <p className="item">Study for your ccna</p>
//                 <button className="ui button primary" type='submit' onClick={changeTheme}>Change Theme</button>
//             </div>
//         )
//     }
// }
