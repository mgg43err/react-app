import React from "react";
import h from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={h.header}>
			<img
				src="https://icon-library.com/images/instagram-icon-24x24/instagram-icon-24x24-21.jpg"
				alt="instagram"
			/>
			<div className={h.hname}>MADEBOOK</div>
			<div className={h.loginBlock}>
				{props.isAuth ? props.login
				: <NavLink to="/login">Login</NavLink>}
			</div>
		</header>
	);
};

export default Header;
