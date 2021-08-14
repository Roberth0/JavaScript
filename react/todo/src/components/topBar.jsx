import React, { useState, useEffect, useFragment } from 'react';

export function topBar({ todo }) {
    const [ item, modify] = useState();
    return (
        <Fragment>
            <div>This is test for the tabnine autocompletion engine!. ${todo} </div>
            <input type="checkbox" placeholder="Enter the desiere text to be showed"/>
        </Fragment>
    )
}