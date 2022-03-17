import React from "react";
import styles from "./users.module.css";

debugger;

const Users = props => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				photoUrl:
					"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png",
				followed: true,
				fullName: "Sam",
				status: "i'm study frontend",
				location: {city: "Minsk", country: "Belarus"},
			},
			{
				id: 2,
				photoUrl:
					"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png",
				followed: false,
				fullName: "Rick",
				status: "Carpe Diem",
				location: {city: "London", country: "Great britain"},
			},
			{
				id: 3,
				photoUrl:
					"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png",
				followed: true,
				fullName: "Michael",
				status: "YOLO",
				location: {city: "Kiev", country: "Ukraine"},
			},
			{
				id: 4,
				photoUrl:
					"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png",
				followed: false,
				fullName: "Jack",
				status:
					"An open mind is like a fortress with its gates unbarred and unguarded.",
				location: {city: "New-York", country: "USA"},
			},
		]);
	}

	return (
		<div>
			{props.users.map(u => (
				<div key={u.id}>
					<span>
						<div>
							<img alt="avatar" src={u.photoUrl} className={styles.userPhoto} />
						</div>
						<div>
							{u.followed ? (
								<button
									onClick={() => {
										props.unfollow(u.id);
									}}
								>
									Unfollow{" "}
								</button>
							) : (
								<button
									onClick={() => {
										props.follow(u.id);
									}}
								>
									Follow
								</button>
							)}
						</div>
					</span>
					<span>
						<span>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{u.location.country}</div>
							<div>{u.location.city}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	);
};

export default Users;
