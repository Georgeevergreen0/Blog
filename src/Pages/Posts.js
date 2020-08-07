import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { getPost } from "Services/post";
import { getText } from "Utility";
import Loading from "Components/Loading";
import { toast } from 'react-toastify';
import {
    Typography,
    Button
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    headerText: {
        position: "absolute",
        fontSize: "8rem",
        color: "rgba(0, 0, 0, 0.1)",
        marginLeft: "-30px",
        marginTop: "-40px",
        textTransform: "uppercase"
    },
    title: {
        textTransform: "uppercase"
    },
    post: {
        marginBottom: theme.spacing(12),
        position: "relative"
    },
    body: {
        "&:first-letter": {
            textTransform: "capitalize"
        }
    },
    button: {
        minWidth: "150px",
        color: "#fff",
        backgroundColor: "red",
        borderRadius: 0
    }
}));

const Posts = (props) => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                let post = await getPost();
                setPosts(post);
                setIsLoading(false)
            } catch (error) {
                toast(error.message);
                setIsLoading(false)
            }
        })();
    }, [])


    return (
        <div>
            <Typography paragraph align="center" variant="subtitle2">LATEST STORIES</Typography>
            <Loading isLoading={isLoading}>
                {posts.map((post) => (
                    <div key={post.id} className={classes.post}>
                        <Typography className={classes.headerText} paragraph variant="h4" >{getText(post.title, 1)}</Typography>
                        <Typography className={classes.title} paragraph variant="h4" >{post.title}</Typography>
                        <Typography paragraph variant="caption" color="textSecondary">July 28 2020</Typography>
                        <Typography className={classes.body} paragraph variant="body2">{`${getText(post.body, 100)}...`}</Typography>
                        <Button component={Link} to={`/post/${post.id}`} className={classes.button} color="secondary" variant="contained">
                            READ ON
                        </Button>
                    </div>
                ))}
            </Loading>
        </div>
    )
}

export default Posts;
