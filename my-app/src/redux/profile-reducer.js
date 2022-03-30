const ADD_POST = "ADD-POST";
const REMOVE_POST = "REMOVE-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export const addPostActionCreator = () => ({type: ADD_POST});
export const removePostActionCreator = () => ({ type: REMOVE_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
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
			profile: null
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likes: "0",
				dislikes: "0",
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: "",
			};
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText:action.newText,
			}
		case REMOVE_POST: {
			let newState = JSON.parse(JSON.stringify(state))
			newState.posts.pop();
			return newState;
		}
		case SET_USER_PROFILE: { 
			return { ...state, profile: action.profile}
		}
		default:
			return state;
	}
};

export default profileReducer;
