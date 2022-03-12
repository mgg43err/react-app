import React from "react";
import d from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";

const Dialogs = props => {
	let state = props.store.getState().dialogsPage;

	let dialogsElements = state.dialogs.map(d => (
		<DialogItem name={d.name} id={d.id} />
	));
	let messagesElements = state.messages.map(m => (
		<Message message={m.message} />
	));
	let newMessageBody = state.newMessageBody;

	let onMessageSendClick = () => {
		props.store.dispatch(sendMessageCreator());
	};
	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.store.dispatch(updateNewMessageBodyCreator(body));
	};

	return (
		<div className={d.dialogs}>
			<div className={d.dialogs_items}>{dialogsElements}</div>
			<div className={d.messages}>
				<div>{messagesElements}</div>
				<div className={d.addmessage}>
					<div>
						<textarea
							value={newMessageBody}
							placeholder="Enter your message!"
							onChange={onNewMessageChange}
						>
						</textarea>
					</div>
					<div>
						<button onClick={onMessageSendClick}>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
