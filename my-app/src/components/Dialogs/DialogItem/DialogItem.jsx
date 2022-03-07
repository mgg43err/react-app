import React from "react";
import d from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = props => {
	let path = "/dialogs/" + props.id;
	return (
		<div className={d.dialog + " " + d.active}>
			<div className={d.dialogString}>
				<img
				className={d.avatar}
				src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
				alt="avatar"
			/>
			<NavLink to={path}>{props.name}</NavLink>
			</div>
		</div>
	);
};

export default DialogItem;
