import React from 'react';

import classes from './Input.module.css';

const input = ( props ) => {
    let inputElement = <input 
                            id={props.id}
                            type={props.type}
                            placeholder={props.placeholder}
                            value={props.value}
                            className={classes.Input}
                            onChange={props.changed} />
    return (
        <div>
            {inputElement}
        </div>
    );

};

export default input;