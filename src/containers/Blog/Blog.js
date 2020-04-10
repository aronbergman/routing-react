import React, {Component} from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import {Link, NavLink} from "react-router-dom";
import Posts from "./Posts/Posts";
import {Route} from "react-router";

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
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