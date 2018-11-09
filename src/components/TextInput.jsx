import React from 'react';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';

const TextInput = props => {
    return (
        <FormControl>
            <TextField
                id={props.id}
                label={props.label}
                defaultValue={props.defaultValue}
                onChange={props.handleChange}
                margin="normal"
            />
        </FormControl>
    );
}

export default TextInput;