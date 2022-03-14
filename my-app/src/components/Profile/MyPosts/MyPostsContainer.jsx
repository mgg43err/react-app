import React from "react";
import MyPosts from "./MyPosts";
import {
	addPostActionCreator,
	removePostActionCreator,
	updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";



const MyPostsContainer = props => {
	let state = props.store.getState();
	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	};
	let removePost = () => {
		props.store.dispatch(removePostActionCreator());
	};
	let onPostChange = (text) => {
		let action =updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
	};

	return <MyPosts
		updateNewPostText={onPostChange}
		removePost={removePost}
		addPost={addPost} 
		posts={state.profilePage.posts}
		newPostText={state.profilePage.newPostText}
	/>
};

export default MyPostsContainer;
