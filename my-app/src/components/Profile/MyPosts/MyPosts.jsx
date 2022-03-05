import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = [
    { id: 1, message: "Hi, how are you?", likes: "5", dislikes: "7" },
    { id: 2, message: "It's my first post", likes: "9", dislikes: "2" },
    { id: 3, message: "I hate war", likes: "9999", dislikes: "-3" },
    { id: 4, message:"I hate putin", likes:"1billion", dislikes:"45" }

  ];
  
  let postsData = posts
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
            <button>Add Post</button>
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
