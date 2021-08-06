import React, { Fragment } from 'react';

export function TodoList( { todos } ) {
    return (
        <ul>
            {todos.map((todo)=> (
                <Fragment>
                    <li>{todo}</li>
                    <li> hi</li>
                </Fragment>
            ))}
        </ul>
    )
}
