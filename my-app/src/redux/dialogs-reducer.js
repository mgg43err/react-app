const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = body => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body: body,
});

let initialState = {

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

}


const dialogsReducer = (state=initialState, action) => {

  switch (action.type) { 
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({
        id: 8,
        message: body,
      });
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;