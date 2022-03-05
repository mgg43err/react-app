import React from "react";
import p from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
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
					src="https://vscode.github.com/assets/img/github-vscode-icon.svg"
					alt="gitlogo"
				/>
				</div>
				<div>
					<h3>Andrey Pleskunou</h3>
					<p>Date of birth: 05.05.1995</p>
					<p>City: Minsk</p>
					<p>Education: BSU'2021</p>
					<p>Relationship: engaged to Windstorm </p>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
