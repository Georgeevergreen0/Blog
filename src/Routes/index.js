import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {
    Posts,
    Post
} from "Pages";

const Routes = (props) => {
    return (
        <Switch>

            <Route path="/" exact>
                <Posts />
            </Route>

            <Route path="/post/:postId">
                <Post />
            </Route>

            <Redirect to="/" />

        </Switch>
    );
}

export default Routes;