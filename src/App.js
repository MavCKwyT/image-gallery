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
        // get data from document column
        const dataFromCloudFirestore = snapshot.docs.map((doc) => ({
          id: doc.id, // get id from document column
          post: doc.data(),
        }));
        this.setState({ posts: dataFromCloudFirestore });
      });
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { posts } = this.state; // this.props.posts -> [{...}, {...}]
    return (
      <div className="app">
        <div className="app__header">
          Image gallery
        </div>
        <div className="app__form">
          <UploadForm />
        </div>
        <div>
          {
              posts.map(({ id, post }) => (
                <Post
                  key={id}
                  postId={id}
                  comment={post.comment}
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
