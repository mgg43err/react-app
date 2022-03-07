import React from "react";
import d from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {

  let dialogsElements = props.state.dialogs
    .map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = props.state.messages
    .map(m => <Message message={m.message} /> )

	return (
		<div className={d.dialogs}>
      <div className={d.dialogs_items}>
        {dialogsElements}
      </div>
			<div className={d.messages}>
        {messagesElements}
			</div>
		</div>
	);
};

export default Dialogs;
