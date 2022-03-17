import Dialogs from "./Dialogs";
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
/* import StoreContext from "../../StoreContext"; */
import { connect } from "react-redux";

/* const DialogsContainer = () => {
	return (
		<StoreContext.Consumer>
			{store => {
				let state = store.getState().dialogsPage;

				let onSendMessageClick = () => {
					store.dispatch(sendMessageCreator());
				};
				let onNewMessageChange = body => {
					store.dispatch(updateNewMessageBodyCreator(body));
				};
				return (
					<Dialogs
						updateNewMessageBody={onNewMessageChange}
						sendMessage={onSendMessageClick}
						dialogsPage={state}
					/>
				);
			}}
		</StoreContext.Consumer>
	);
};
 */

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

let mapDispatchToProps = (dispatch) => { 
	return {
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		},
		sendMessage: () => { 
			dispatch(sendMessageCreator());
		},
	}
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)



export default DialogsContainer;
