import React, { Component } from 'react';
import './style.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectPost } from '../../actions';

class Post extends Component {
  handleClick = () => {
    this.props.selectPost(this.props.post);
  }

  render() {

  let classes = "post";

  if (this.props.post === this.props.selectedPost ) {
    classes += " selected";
  }

  return (
    <div className={classes} onClick={this.handleClick} >
      <div className="post-top">
        <img src="#" alt="" />
      </div>
      <div className="post-bottom">
        <div className="left-side">
          <div className="image-wrapper">
            <img src={this.props.profileImg} alt="" />
          </div>
          <p><big>{this.props.userName}</big></p>
        </div>
        <div className="right-side">
          <p>{this.props.likes}</p>
        </div>
      </div>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectPost: selectPost },
    dispatch
  )
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedPost: reduxState.selectedPost
  }
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(Post);
