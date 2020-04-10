import React, {Component} from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import {Link, NavLink, Redirect} from "react-router-dom";
import Posts from "./Posts/Posts";
import {Route, Switch} from "react-router";

class Blog extends Component {
    state = {
        auth: false
    };

    render() {
        return (
            <div className="Blog">
                <header>:
                    <nav>
                        <ul>
                            <li><NavLink to="/"
                                         exact
                                         activeclassname="my-active"
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    {/*<Route path="/" render={() => <Posts/>} exact/>*/}
                    {this.state.auth ? <Route path="/new-post" component={NewPost}/> : null}
                    <Route path="/posts" component={Posts}/>
                    <Redirect to="/posts"/>
                </Switch>
            </div>
        );
    }
}

export default Blog;