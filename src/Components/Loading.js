import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        textAlign: "center"
    },
}));

const Loading = (props) => {
    const classes = useStyles();
    const { isLoading, children } = props;
    return isLoading ? (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    ) : (
            children
        );
}

export default Loading;