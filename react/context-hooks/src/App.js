import React from "react";
import { TodoList } from "./components/TodoList"
import { NavBar } from "./components/NavBar";
import ThemeContextProvider from "./contexts/ThemeContext"
import AuthContextProvider from "./contexts/AuthContext"
import { TodoListContextProvider } from "./components/TodoListContext";

function App() {
    return (
        <div className="App">
            <div className="ui raised very padded text container segment">
                <ThemeContextProvider>
                    <AuthContextProvider>
                        <TodoListContextProvider>
                            <NavBar></NavBar>
                            <TodoList></TodoList>
                        </TodoListContextProvider>
                    </AuthContextProvider>
                </ThemeContextProvider>
            </div>
        </div>
    );
}

export default App;
