import React, {Component} from "react";
import {connect} from "react-redux";
import {GridList, GridTile} from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import ChatroomDetails from "ChatroomDetails";

class ChatroomsList extends Component {
	
	constructor(props) {
		super(props);
	}
	
	selectChatroom(chatroom) {
		this.props.getMeeting(chatroom);
	}
	
	render() {
		
		let chatroomList;
		
		if (this.props.chatrooms) {
			chatroomList = this.props.chatrooms.map((chatroom, index) => {
				return (
					<div key={index}>
						<GridTile
							key={index}
							title={chatroom.title + ' | ' + chatroom.groupSize}
							subtitle={chatroom.location.city}
							actionIcon={<IconButton onClick={this.selectChatroom.bind(this, chatroom)}><StarBorder color="rgb(0, 188, 212)"/></IconButton>}
							titleStyle={styles.titleStyle}
							titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
							<img src={chatroom.cover}/>
						</GridTile>
						<Divider />
					</div>
				)
			}, this);
		}
		
		let chatroomDetails;
		
		if (this.props.chatroom.title) {
			chatroomDetails = <ChatroomDetails edition={this.props.edition} markets={this.props.markets}/>;
		}
		
		return (
			<div>
				<GridList style={styles.gridList} cols={2.2}>
					{chatroomList}
				</GridList>
				{chatroomDetails}
			</div>
		);
	}
	
}

function mapStateToProps(state) {
	return {
		chatroom: state.chatroom
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getMeeting: (chatroom) => {
			dispatch(getMeeting(chatroom));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatroomsList)
