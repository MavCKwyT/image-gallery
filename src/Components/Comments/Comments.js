import React from 'react';
import firebase from 'firebase';
import { db } from '../../firebase/firebaseConfig';

class Comments extends React.Component {
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
          commentId: doc.id,
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

  editComment = (event) => {
    console.log(event.target.parentElement);
  }

  deleteComment = (event) => {
    // eslint-disable-next-line react/prop-types,no-unused-vars
    const { postId } = this.props;
    const commentId = event.target.parentElement.getAttribute('id');
    db
      .collection('posts')
      .doc(postId)
      .collection('comments')
      .doc(commentId)
      .delete();
  }

  render() {
    const { commentsFromCloudFirestore, addedComments } = this.state;

    return (
      <div className="post__commentsWrapper">
        <div className="post__comments">
          {
      commentsFromCloudFirestore.map((comments) => (
        <p
          className="comment"
          key={comments.commentId}
          id={comments.commentId}
        >
          {comments.dataOfComment.textOfComment}
          <button type="button" onClick={this.editComment}>edit</button>
          <button type="button" onClick={this.deleteComment}>x</button>
        </p>
      ))
    }
        </div>
        <form className="post__addCommentsForm">
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

export default Comments;
