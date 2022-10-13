import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Psy from './Psy';
import Create from './Create';
import SinglePost from './SinglePost';
import UpdatePost from './UpdatePost';
import Login from './Login';
import Acc from './Acc';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Acc" exact component={Acc} />
                <Route path="/" exact component={App} />
                <Route path="/Psy" exact component={Psy} />
                <Route path="/create" exact component={Create} />
                <Route path="/login" exact component={Login} />
                <Route path="/post/:slug" exact component={SinglePost} />
                <Route path="/post/update/:slug" exact component={UpdatePost} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
