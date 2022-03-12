import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from './sidebar-reducer';

let store = {
	_state: {
		profilePage: {
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
		},

		dialogsPage: {
			messages: [
				{
					id: 1,
					message: "Hi",
				},
				{
					id: 2,
					message: "Hi, How is your IT-kamasutra?",
				},
				{
					id: 3,
					message: "Yo",
				},
				{
					id: 4,
					message: "Frontend",
				},
				{
					id: 5,
					message: "Yes",
				},
				{
					id: 6,
					message: "YESSSS",
				},
				{
					id: 7,
					message: "Kristina is best girlfriend!",
				},
			],
			dialogs: [
				{
					id: 1,
					name: "Bill",
				},
				{
					id: 2,
					name: "Gaby",
				},
				{
					id: 3,
					name: "Michael",
				},
				{
					id: 4,
					name: "Noah",
				},
				{
					id: 5,
					name: "Oliver",
				},
				{
					id: 6,
					name: "John",
				},
				{
					id: 7,
					name: "Kris",
				},
			],
			newMessageBody: "",
		},
		sidebar: {
			names: ["Noah", "John", "Kris"],
		},
	},
	_callSubscriber() {
		console.log("State changed");
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {


		this._state.profilePage = profileReducer(this._state.profilePage, action);

		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	}

};


window.store = store;

export default store;
