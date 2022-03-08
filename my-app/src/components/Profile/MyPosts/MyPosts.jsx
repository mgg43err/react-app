import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


  let postsData = props.posts
    .map(p => <Post message={p.message} likes={p.likes} dislikes={p.dislikes} />);

  return (
    <div className={p.content}>
      <div >
        <h4><i>My Posts</i></h4>
        <div className={p.createPost}>
          New Post
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button >Add Post</button>
          </div>
          <div>
            <button>Remove</button>
          </div>
        </div>
        <div className={p.posts}>
          {postsData}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
