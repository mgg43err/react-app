import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = props => {
	debugger;
	let postsData = props.posts.map(p => (
		<Post message={p.message} likes={p.likes} dislikes={p.dislikes} />
	));

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
		//props.dispatch(addPostActionCreator());
	};

	let onRemovePost = () => {
		props.removePost();
		//props.dispatch(removePostActionCreator());
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
    //props.dispatch(updateNewPostTextActionCreator(text));
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
						<button onClick={onAddPost}>Add Post</button>
					</div>
					<div>
						<button onClick={onRemovePost}>Remove</button>
					</div>
				</div>
				<div className={p.posts}>{postsData}</div>
			</div>
		</div>
	);
};

export default MyPosts;
