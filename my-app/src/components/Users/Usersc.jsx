import React from "react";
import styles from "./users.module.css";
import *  as axios from "axios";
import userPhoto from '../../../src/assets/images/user.png'

const Users = props => {

	let getUsers = () => { 

			if (props.users.length === 0) {

		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			props.setUsers(response.data.items);
		}
		)
	}




		/* props.setUsers([
			{
				id: 1,
				photoUrl:
					"https://www.pngall.com/wp-content/uploads/12/userPhoto-Profile-PNG-Photos.png",
				followed: true,
				fullName: "Sam",
				status: "i'm study frontend",
				location: {city: "Minsk", country: "Belarus"},
			},
		*/
	}

	return (
		<div>
			<button onClick={getUsers}>Get users</button>
			{props.users.map(u => (
				<div key={u.id}>
					<span>
						<div>
							<img alt="userPhoto" src={u.photos.small === null ? userPhoto: u.photos.small} className={styles.userPhoto} />
						</div>
						<div>
							{u.followed ? (
								<button
									onClick={() => {
										props.unfollow(u.id);
									}}
								>
									Unfollow
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
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{/* u.location.country */}</div>
							<div>{/* u.location.city */}</div>
						</span>
					</span>
				</div>
			))}
		</div>
	);
};

export default Users;
