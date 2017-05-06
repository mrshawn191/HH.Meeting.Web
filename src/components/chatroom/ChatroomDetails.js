import React, {Component} from "react";
import MeetingsList from "../meeting/MeetingsList"
import MessagesWindow from "../message/MessagesWindow";
import GoogleMap from "../googlemap/GoogleMap";

class DetailsChatroom extends Component {
	
	render() {
		return (
			<div>
				<MeetingsList/>
				<MessagesWindow/>
				<GoogleMap/>
			</div>
		);
	}
	
}

function mapDispatchToProps(dispatch) {
	return {
		createMeeting: (chatroom) => {
			dispatch(createChatroom(chatroom));
		}
	};
}

export default connect(null, mapDispatchToProps)(ChatroomNewContainer)