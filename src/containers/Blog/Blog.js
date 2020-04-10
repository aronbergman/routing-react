import React, {Component} from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import {NavLink} from "react-router-dom";
import Posts from "./Posts/Posts";
import {Route} from "react-router";

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
               <Route path="/" component={Posts} exact/>
               {/*<Route path="/" render={() => <Posts/>} exact/>*/}
               <Route path="/new-post" component={NewPost}/>

            </div>
        );
    }
}

export default Blog;