import React from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";

const App = props => {
	return (
		<div className="app-wrapper">
			<HeaderContainer />
			<Navbar state={props.state.sidebar} />
			<div className="app-wrapper-content">
				<Routes>
					<Route path="/profile/*" element={<ProfileContainer/>}/>
					<Route path="/dialogs/*" element={<DialogsContainer />} />
					<Route path="/users" element={<UsersContainer/>} />
					<Route path="/news" element={<News />} />
					<Route path="/music" element={<Music />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/friends" element={<Friends />} />
					<Route path="/login" element={<Login/>} />
				</Routes>
			</div>
		</div>
	);
};


export default App;
