import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useMatch} from "react-router-dom";
 import { Navigate } from "react-router-dom";
class ProfileContainer extends React.Component {
	
	componentDidMount() {

		let userId = this.props.match ? this.props.match.params.userId : 2;
		this.props.getUserProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Navigate to="/login" />
    return <Profile {...this.props}  profile= {this.props.profile} />;
	}
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

export const withRouter = (Component) =>{

	let RouterComponent = (props) => {

            const match = useMatch('/profile/:userId/');
            return <Component {...props} match={match}/>;
    }
    return RouterComponent;
} 

let WithURLDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUserProfile} )(WithURLDataContainerComponent);
