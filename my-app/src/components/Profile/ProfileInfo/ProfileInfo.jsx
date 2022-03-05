import React from "react";
import p from "./ProfileInfo.module.css";

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img
					src="https://images.hdqwalls.com/download/anime-hoods-neko-ears-4k-uh-2560x1080.jpg"
					alt="anime"
				/>
			</div>
			<div className={p.description}>
				ava + description
				<img
					src="https://vscode.github.com/assets/img/github-vscode-icon.svg"
					alt="gitlogo"
				/>
			</div>
		</div>
	);
};

export default ProfileInfo;
