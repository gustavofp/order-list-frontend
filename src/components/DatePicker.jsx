import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, TextField } from '@material-ui/core';

const styles = {
    root: {
        marginTop: 14,
    },
}

const DatePicker = (props) => {
    return (
        <FormControl>
            <TextField
                id={props.id}
                label={props.label}
                type="date"
                defaultValue={props.defaultValue}
                InputLabelProps={{
                    shrink: true,
                }}
                className={props.classes.root}
            />
        </FormControl>
    );
}

export default withStyles(styles)(DatePicker);