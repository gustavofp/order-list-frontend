import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

const styles = {
    root: {
        width: '80%',
        marginTop: 50,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
};


class ResultGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [
                {
                    id: 1,
                    date: '27-01-2018',
                    phone: '(19) 98188-9843',
                    clientName: 'Gustavo Felipe Poletto',
                    email: 'gu.fpoletto@gmail.com',
                    total: 25.2
                }
            ]
        }
    }
    render() {
        const { rows } = this.state;

        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                style={{ minHeight: '100vh' }}
            >
                <Paper className={this.props.classes.root}>
                    <Table className={this.props.classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Client Name</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Total Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => {
                                return (
                                    <TableRow key={row.id} selected={true}>
                                        <TableCell component="th" scope="row">
                                            {row.date}
                                        </TableCell>
                                        <TableCell numeric>{row.clientName}</TableCell>
                                        <TableCell numeric>{row.phone}</TableCell>
                                        <TableCell numeric>{row.email}</TableCell>
                                        <TableCell numeric>
                                            {row.total}
                                            <Icon>loupe</Icon>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>

            </Grid>
        );
    }
}

export default withStyles(styles)(ResultGrid);