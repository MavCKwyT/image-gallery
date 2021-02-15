import React from 'react';
import './Post.css';
import firebase from 'firebase';
import { db } from '../../firebase/firebaseConfig';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsFromCloudFirestore: [],
      addedComments: '',
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { postId } = this.props;
    db
      .collection('posts')
      .doc(postId)
      .collection('comments')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        const commentsFromCloudFirestore = snapshot.docs.map((doc) => ({
          idOfComment: doc.id,
          dataOfComment: doc.data(),
        }));
        this.setState({ commentsFromCloudFirestore });
      });
  }

  addComment = (event) => {
    event.preventDefault();
    // eslint-disable-next-line react/prop-types
    const { postId } = this.props;
    const { addedComments } = this.state;
    // just push added comment into cloudFireStore with firebase api
    db
      .collection('posts')
      .doc(postId)
      .collection('comments')
      .add({
        textOfComment: addedComments,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    this.setState({ addedComments: '' });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { comment, imageUrl } = this.props; // this.props.caption this.props.imageUrl
    const { commentsFromCloudFirestore, addedComments } = this.state;
    return (
      <div className="post">
        <img className="post__img" src={imageUrl} alt="" />
        <h4 className="post__caption">{comment}</h4>
        <div className="post__comments">
          {
              commentsFromCloudFirestore.map((comments) => (
                <p key={comments.idOfComment}>{comments.dataOfComment.textOfComment}</p>
              ))
          }
        </div>
        <form className="post__commentBox">
          <input
            className="post__input"
            type="text"
            placeholder="Add comment..."
            value={addedComments}
            onChange={(event) => this.setState({ addedComments: event.target.value })}
          />
          <button
            className="post__button"
            type="submit"
            onClick={this.addComment}
          >
            add
          </button>
        </form>
      </div>
    );
  }
}

export default Post;
