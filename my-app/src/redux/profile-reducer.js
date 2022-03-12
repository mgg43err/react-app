const ADD_POST = "ADD-POST";
const REMOVE_POST = "REMOVE-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () => ({type: ADD_POST});
export const removePostActionCreator = () => ({type: REMOVE_POST});
export const updateNewPostTextActionCreator = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});


let initialState = {
			posts: [
				{
					id: 1,
					message: "Hi, how are you?",
					likes: "5",
					dislikes: "7",
				},
				{
					id: 2,
					message: "It's my first post",
					likes: "9",
					dislikes: "2",
				},
				{
					id: 3,
					message: "I hate war",
					likes: "9999",
					dislikes: "-3",
				},
				{
					id: 4,
					message: "I hate putin",
					likes: "1billion",
					dislikes: "45",
				},
			],
			newPostText: "",
}

const profileReducer = (state=initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likes: "0",
				dislikes: "0",
			};
			state.posts.push(newPost);
			state.newPostText = "";
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		case REMOVE_POST:
			state.posts.pop();
			return state;
		default:
			return state;
	}
};

export default profileReducer;
