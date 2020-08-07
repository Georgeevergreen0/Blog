import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Paper,
    Container,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        overflowY: "auto",
        overflowX: "hidden",
        width: "100vw",
        height: '100vh'
    },
    header: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        textAlign: "center"
    },
    container: {
        padding: "0 30px"
    }
}));

const Layout = (props) => {
    const classes = useStyles();
    const { children } = props;

    return (
        <Paper className={classes.root} square>
            <div className={classes.header}>
                <Typography display="inline" variant="h2" component="h2">BARETTO</Typography>
                {" "}
                <Typography display="inline" color="textSecondary" variant="h2" component="h2">CREATIVE</Typography>
            </div>
            <Container className={classes.container} maxWidth="sm">
                {children}
            </Container>
            <ToastContainer
                position="bottom-left"
                autoClose={false}
                hideProgressBar={true}
                closeOnClick
                rtl={false}
            />
        </Paper>
    );
}

export default Layout;
