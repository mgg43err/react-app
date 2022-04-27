import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { useMatch} from "react-router-dom";

class ProfileContainer extends React.Component {
	
	componentDidMount() {
		debugger;
		let userId = this.props.match ? this.props.match.params.userId : 2;


		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}` )
			.then(response => { 
				this.props.setUserProfile(response.data);
			});
  }

	render() {
    return <Profile {...this.props}  profile= {this.props.profile} />;
	}
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

export const withRouter = (Component) =>{

	let RouterComponent = (props) => {
			
            const match = useMatch('/profile/:userId/');
            return <Component {...props} match={match}/>;
    }
    return RouterComponent;
} 

let WithURLDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile} )(WithURLDataContainerComponent);
