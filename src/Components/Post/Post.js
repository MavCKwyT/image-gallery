import React from 'react';
import './Post.css';
import { db } from '../../firebase/firebaseConfig';
import Comments from '../Comments/Comments';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deletePost = (event) => {
    const postId = event.target.parentElement.getAttribute('id');
    db
      .collection('posts')
      .doc(postId)
      .delete();
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { postId, imageUrl } = this.props; // this.props.imageUrl
    return (
      <div className="post" id={postId}>
        <div className="post__deletePostButtonWrapper">
          <button className="deletePostButton" type="button" onClick={this.deletePost}>X</button>
        </div>
        <img className="post__img" src={imageUrl} alt="" />
        <Comments postId={postId} />
      </div>
    );
  }
}

export default Post;
