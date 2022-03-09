import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
	let postsData = props.posts.map(p => (
		<Post message={p.message} likes={p.likes} dislikes={p.dislikes} />
	));

	let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
	};

	let removePost = () => {
		props.removePost();
	};

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
	};

	return (
		<div className={p.content}>
			<div>
				<h4>
					<i>My Posts</i>
				</h4>
				<div className={p.createPost}>
					New Post
					<div>
						<textarea
							onChange={onPostChange}
							ref={newPostElement}
							value={props.newPostText}
						/>
					</div>
					<div>
						<button onClick={addPost}>Add Post</button>
					</div>
					<div>
						<button onClick={removePost}>Remove</button>
					</div>
				</div>
				<div className={p.posts}>{postsData}</div>
			</div>
		</div>
	);
};

export default MyPosts;
