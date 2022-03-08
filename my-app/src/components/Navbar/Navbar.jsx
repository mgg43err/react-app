import React from "react";
import {NavLink} from "react-router-dom";
import n from "./Navbar.module.css";

const Navbar = props => {
	console.log(props.state)
	let friends = props.state.names.map(p => (
		<div>
			<img
				src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
				alt="avatar"
			/>
			<p>{p} </p>
		</div>
	
	));

	return (
		<nav className={n.nav}>
			<div className={n.item}>
				<NavLink
					to="/profile"
					className={navData => (navData.isActive ? n.active : n.item)}
				>
					Profile
				</NavLink>
			</div>
			<div className={n.item}>
				<NavLink
					to="/dialogs"
					className={navData => (navData.isActive ? n.active : n.item)}
				>
					Messages
				</NavLink>
			</div>
			<div className={n.item}>
				<NavLink
					to="/news"
					className={navData => (navData.isActive ? n.active : n.item)}
				>
					News
				</NavLink>
			</div>
			<div className={n.item}>
				<NavLink
					to="/music"
					className={navData => (navData.isActive ? n.active : n.item)}
				>
					Music
				</NavLink>
			</div>
			<div className={n.item}>
				<NavLink
					to="/settings"
					className={navData => (navData.isActive ? n.active : n.item)}
				>
					Settings
				</NavLink>
			</div>
			<div className={n.item}>
				<NavLink
					to="/friends"
					className={navData => (navData.isActive ? n.active : n.item)}
				>
					Friends
					<div className={n.fSlider}>
						{friends}
					</div>
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
