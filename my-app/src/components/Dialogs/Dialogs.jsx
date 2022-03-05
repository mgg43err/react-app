import React from "react";
import d from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = props => {
	let path = "/dialogs/" + props.id;
	return (
		<div className={d.dialog + " " + d.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
};

const Message = props => {
	return <div className={d.message}>{props.message}</div>;
}; 

const Dialogs = () => {


	let dialogs = [
		{id: 1, name: "Bill"},
		{id: 2, name: "Gaby"},
		{id: 3, name: "Michael"},
		{id: 4, name: "Noah"},
		{id: 5, name: "Oliver"},
		{id: 6, name: "John"},
  ];

	let messages = [
		{id: 1, message: "Hi"},
		{id: 2, message: "Hi, How is your IT-kamasutra?"},
		{id: 3, message: "Yo"},
		{id: 4, message: "Frontend"},
		{id: 5, message: "Yes"},
		{id: 6, message: "YESSSS"},
  ];

  let dialogsElements = dialogs
    .map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElements = messages
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
