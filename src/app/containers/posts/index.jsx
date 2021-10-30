import React, { Component } from 'react';
import Post from '../../components/post';
import { bindActionCreators } from 'redux';
import { setPosts } from '../../actions/index';
import './style.scss';
import { connect } from 'react-redux';


class Posts extends Component {
  static defaultProps = {
    posts: [{
    profileImg: 'Profile Image',
    key: 1,
    userName: 'Elon Musk',
    likes: '100+ likes'
  }, {
    profileImg: 'Profile Image',
    key: 1,
    userName: 'Elon Musk',
    likes: '100+ likes'
  }, {
    profileImg: 'Profile Image',
    key: 1,
    userName: 'Elon Musk',
    likes: '100+ likes'
  }, {
    profileImg: 'Profile Image',
    key: 1,
    userName: 'Elon Musk',
    likes: '100+ likes'
  }, {
    profileImg: 'Profile Image',
    key: 1,
    userName: 'Elon Musk',
    likes: '100+ likes'
  }, {
    profileImg: 'Profile Image',
    key: 1,
    userName: 'Elon Musk',
    likes: '100+ likes'
  }, {
    profileImg: 'Profile Image',
    key: 1,
    userName: 'Elon Musk',
    likes: '100+ likes'
  }, {
    profileImg: 'Profile Image',
    key: 1,
    userName: 'Elon Musk',
    likes: '100+ likes'
  }, {
    profileImg: 'Profile Image',
    key: 1,
    userName: 'Elon Musk',
    likes: '100+ likes'
  }, {
    profileImg: 'Profile Image',
    key: 1,
    userName: 'Elon Musk',
    likes: '100+ likes'
  }, {
    profileImg: 'Profile Image',
    key: 1,
    userName: 'Elon Musk',
    likes: '100+ likes'
  }, {
    profileImg: 'Profile Image',
    key: 1,
    userName: 'Elon Musk',
    likes: '100+ likes'
  }, {
    profileImg: 'Profile Image',
    key: 1,
    userName: 'Elon Musk',
    likes: '100+ likes'
  }, {
    profileImg: 'Profile Image',
    key: 1,
    userName: 'Elon Musk',
    likes: '100+ likes'
  }, {
    profileImg: 'Profile Image',
    key: 1,
    userName: 'Elon Musk',
    likes: '100+ likes'
  }, {
    profileImg: 'Profile Image',
    key: 1,
    userName: 'Elon Musk',
    likes: '100+ likes'
  }]}

  componentWillMount() {
    this.props.setPosts();
  }

  render() {
    return (
      <div className="posts">
        {this.props.posts.map(post =>
          <Post
            profileImg={post.profileImg}
            userName={post.userName}
            likes={post.likes}/>
          )}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setPosts: setPosts },
    dispatch
  )
}

function mapReduxStateToProps(reduxState) {
  return {
    posts: reduxState.posts
  }
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(Posts);
