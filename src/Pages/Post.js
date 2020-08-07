import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as routeLink, useParams } from "react-router-dom";
import { getPost } from "Services/post";
import { getText } from "Utility";
import Loading from "Components/Loading";
import { toast } from 'react-toastify';
import {
    Typography,
    Link,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    ListItemIcon
} from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';


const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative"
    },
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
    postBody: {
        "&:first-letter": {
            textTransform: "capitalize"
        }
    },
    comments: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(5)
    },
    commentBody: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        "&:first-letter": {
            textTransform: "capitalize"
        }
    },
    commentIcon: {
        border: "2px solid rgba(0, 0, 0, 0.54)",
        color: "rgba(0, 0, 0, 0.54)",
        borderRadius: "50%"
    },
    commentName: {
        textTransform: "uppercase",
        fontSize: "14px",
        fontWeight: "700"
    },
    commentReply: {
        color: "red",
        paddingBottom: "4px",
        borderBottom: "1px solid red",
        cursor: "pointer"
    }
}));

const Posts = (props) => {
    const classes = useStyles();
    const { postId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                let { post, comments } = await getPost(postId);
                setPost(post);
                setComments(comments);
                setIsLoading(false);
            } catch (error) {
                toast(error.message);
                setIsLoading(false);
            }
        })();
    }, [postId])

    return (
        <div>
            <Typography paragraph align="right" variant="subtitle2">
                <Link component={routeLink} to="/" >VIEW ALL STORIES</Link>
            </Typography>
            <Loading isLoading={isLoading}>
                <div className={classes.root}>
                    <Typography className={classes.headerText} variant="h1" >{getText(post.title, 1)}</Typography>
                    <Typography className={classes.title} paragraph variant="h4" >{post.title}</Typography>
                    <Typography paragraph variant="caption" color="textSecondary">July 28 2020</Typography>
                    <Typography paragraph className={classes.postBody} variant="body2">{post.body}</Typography>

                    <List>
                        <ListSubheader disableSticky>Comments</ListSubheader>
                        {comments.map(comments => (
                            <ListItem className={classes.comments} key={comments.id} alignItems="flex-start">
                                <ListItemIcon>
                                    <PersonRoundedIcon className={classes.commentIcon} fontSize="large" />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{ variant: "body2", paragraph: true, className: classes.commentName }}
                                    primary={comments.name}
                                    secondary={
                                        <React.Fragment>
                                            <span>28 July 2020 at 14:30 {comments.email}</span>
                                            <Typography className={classes.commentBody} paragraph display="block" component="span" variant="body2" color="textPrimary">
                                                {comments.body}
                                            </Typography>
                                            <Typography className={classes.commentReply} component="span" variant="body2" color="textPrimary">
                                                Reply
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Loading>
        </div>
    )
}

export default Posts;