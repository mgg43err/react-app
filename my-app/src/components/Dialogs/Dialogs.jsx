import React from "react";
import d from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
	let dialogsElements = props.state.dialogs.map(d => (
		<DialogItem name={d.name} id={d.id} />
	));

	let messagesElements = props.state.messages.map(m => (
		<Message message={m.message} />
	));

	let addMessageElement = React.createRef();
	let addMessage = () => {
		let message = addMessageElement.current.value;
		alert(message);
  };
  
  let onMessageChange = () => { }
  
	return (
		<div className={d.dialogs}>
			<div className={d.dialogs_items}>{dialogsElements}</div>
			<div className={d.messages}>
				{messagesElements}
				<div className={d.addmessage}>
          <textarea
            rows="5"
            cols="50"
            ref={addMessageElement}
            value={'dweqdqw'}
            onChange={onMessageChange} />
					<button onClick={addMessage}>Send message</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
