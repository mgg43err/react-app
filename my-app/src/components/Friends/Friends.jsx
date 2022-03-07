import React from "react";
import f from "./Friends.module.css";

const Friends = props => {
	return (
		<div className={f.friends}>
			<div>
				<div>Friends</div>
				<div>Friends online</div>
			</div>
		</div>
	);
};

export default Friends;
