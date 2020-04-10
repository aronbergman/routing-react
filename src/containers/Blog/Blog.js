import React, {Component} from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import {Link, NavLink} from "react-router-dom";
import Posts from "./Posts/Posts";
import {Route, Switch} from "react-router";

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>:
                    <nav>
                        <ul>
                            <li><NavLink to="/"
                                         exact
                                         activeClassNane="my-active"
                                         activeStyle={{
                                             color: '#fa923f',
                                             textDecoration: 'underline'
                                         }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path="/" component={Posts} exact/>
                    {/*<Route path="/" render={() => <Posts/>} exact/>*/}
                    <Route path="/posts/:id" component={FullPost}/>
                    <Route path="/new-post" component={NewPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;