import React from 'react';
import './App.css';
import { db } from './firebase/firebaseConfig';
import UploadForm from './Components/UploadForm/UploadForm';
import Post from './Components/Post/Post';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    // get our collection in Cloud Firestore
    db.collection('posts') // collection name in Cloud Firestore
    // causes a callback any time when changes happen in Cloud FireStore
      .onSnapshot((snapshot) => {
        // get posts
        const postsFromCloudFirestore = snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }));
        this.setState({ posts: postsFromCloudFirestore });
      });
  }

  render() {
    const { posts } = this.state; // this.props.posts -> [{...}, {...}]
    return (
      <div className="app">
        <div className="app__form">
          <UploadForm />
        </div>
        <div className="posts-container">
          {
              posts.map(({ id, post }) => (
                <Post
                  key={id}
                  postId={id}
                  imageUrl={post.imageUrl}
                />
              ))
          }
        </div>
      </div>
    );
  }
}

export default App;
