import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../../src/assets/images/user.png";
import { NavLink } from 'react-router-dom';

let Users = (props) => {
  	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
			if (i === 20) break;
	};
		return (
			<div>
				<div>
					{pages.map(
						(p) => {
							return <span className={props.currentPage === p && styles.selectedPage}
								onClick={() => props.onPageChanged(p)}
							>{p}</span>
					})
					}
				</div>


				{props.users.map(u => (
					<div key={u.id}>
						<span>
							<div>
								<NavLink to={'../profile/' + u.id}>
										<img
									alt="userPhoto"
									src={u.photos.small === null ? userPhoto : u.photos.small}
									className={styles.userPhoto}
								/>
								</NavLink>
							</div>
							<div>
								{u.followed ? (
									<button
										disabled={props.followingInProgress.some( (id) => id === u.id)}
										onClick={() => {props.unfollow(u.id)}}

									>
										Unfollow
									</button>
								) : (
										<button
											disabled={ props.followingInProgress.some( (id) => id === u.id)}
											onClick={() => {props.follow(u.id)}}
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
		)
}

export default Users;
