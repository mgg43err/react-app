import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useMatch} from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
class ProfileContainer extends React.Component {
	
	componentDidMount() {

		let userId = this.props.match ? this.props.match.params.userId : 2;
		this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props}  profile= {this.props.profile} />;
	}
}

let AuthRedirectComponent = withAuthRedirect(Profile);


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export const withRouter = (Component) =>{

	let RouterComponent = (props) => {

            const match = useMatch('/profile/:userId/');
            return <Component {...props} match={match}/>;
    }
    return RouterComponent;
} 

let WithURLDataContainerComponent = withRouter(AuthRedirectComponent)


export default connect(mapStateToProps, {getUserProfile} )(WithURLDataContainerComponent);
