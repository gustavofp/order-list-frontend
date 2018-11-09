import React, { Component } from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DatePicker from '../components/DatePicker';
import TextInput from '../components/TextInput';

const styles = {
        button: {
            marginTop: 16
        }
}

class Filters extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const filters = {
            startDate: '',
            endDate: '',

        }

        this.setState({
            filters
        })
    }

    render() {
        return (
            <div>
                <Paper>
                    <Grid container spacing={24}>
                        <Grid item xs={2}>
                            <DatePicker id={`start-date`} label={`Start Date`} defaultValue={this.state.filters.startDate} />
                        </Grid>
                        <Grid item xs={2}>
                            <DatePicker id={`end-date`} label={`End Date`} defaultValue={this.state.filters.endDate} />
                        </Grid>
                        <Grid item xs={2}>
                            <TextInput id={`client-name`} label={`Client Name`} defaultValue={this.state.filters.clientName} />
                        </Grid>
                        <Grid item xs={2}>
                            <TextInput id={`phone`} label={`Phone`} defaultValue={this.state.filters.phone} />
                        </Grid>
                        <Grid item xs={2}>
                            <TextInput id={`email`} label={`Email`} defaultValue={this.state.filters.email} />
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="primary" onClick={() => this.search(this.state.filters)} className={this.props.classes.button}>Search</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }

    search(filters) {
        console.log(filters);
    }
}

export default withStyles(styles)(Filters);