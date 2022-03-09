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
		},
		sidebar: {
			names: ["Noah", "John", "Kris"],
		},
	},
	getState() {
		return this._state
	},
	_callSubscriber() {
		console.log("State changed");
	},
	addPost() {
		const newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likes: "0",
			dislikes: "0",
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = "";
		this._callSubscriber(this._state);
	},
	removePost(postMessage) {
		this._state.profilePage.posts.pop();
		this._callSubscriber(this._state);
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
};

window.store = store;

export default store;
