import React from 'react'
import Post from "../../../components/Post/Post";
import axios from "../../../axios";
import './Posts.css';
import {Link} from "react-router-dom";
import FullPost from "../FullPost/FullPost";
import {Route} from "react-router";

class Posts extends React.Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    };

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            })
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});

        this.props.history.push({
            pathname: '/posts/' + id
        })
    };

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post key={post.id}
                             title={post.title}
                             author={post.author}
                             clicked={() => this.postSelectedHandler(post.id)}/>
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} component={FullPost}/>
            </div>
        )
    }

}

export default Posts;