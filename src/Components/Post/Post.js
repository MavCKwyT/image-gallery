import React from 'react';
import './Post.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { caption, imageUrl } = this.props; // this.props.caption this.props.imageUrl
    return (
      <div className="post">
        <img className="post__img" src={imageUrl} alt="" />
        <h4 className="post__comment">{caption}</h4>
      </div>
    );
  }
}

export default Post;
