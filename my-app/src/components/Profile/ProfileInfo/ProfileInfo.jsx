import React from "react";
import p from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
	debugger;
	return (
		<div>
			<div>
				<img
					src="https://images.hdqwalls.com/download/anime-hoods-neko-ears-4k-uh-2560x1080.jpg"
					alt="anime"
				/>
			</div>
			<div className={p.descriptionBlock}>
				<div>
						<img
						src={props.profile.photos.large}
						alt="profile avatar"
				/>
				</div>
				<div>
					<h3>{props.profile.fullName}</h3>
					<p>{props.profile.lookingForAJob === true ? 'Looking for a job' : ''}</p>
					<p>Facebook: {props.profile.contacts.facebook}</p>
					<p>Twitter: {props.profile.contacts.twitter}</p>
					<p>Instagram: {props.profile.contacts.instagram}</p>
					<p>VK: {props.profile.contacts.vk}</p>
					<p>Github: {props.profile.contacts.github}</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
