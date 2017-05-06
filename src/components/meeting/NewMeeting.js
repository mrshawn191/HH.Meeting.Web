import React, {Component} from "react";
import {connect} from "react-redux";

class NewMeeting extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			title: '',
			coffeehouse: {
				name: '',
				phone: '',
				address: '',
				rating: '',
				website: ''
			},
			location: {
				street: '',
				zipcode: '',
				city: '',
				country: ''
			},
			scheduledAt: null
		}
	}
	
	onTitleChanged(e) {
		this.setState({title: Object.assign({}, this.state.title, {title: e.target.value})})
	}
	
	onCoffeshopChanged(e) {
		this.setState({coffeehouse: Object.assign({}, this.state.coffeehouse, {coffeehouse: e.target.value})})
	}
	
	onLocationChanged(e) {
		this.setState({location: Object.assign({}, this.state.location, {location: e.target.value})})
	}
	
	onScheduledAtChanged(e, date) {
		this.setState({scheduledAt: Object.assign({}, this.state.scheduledAt, {scheduledAt: date})})
	}
	
	createMeeting() {
		const payload = {
			title: this.state.title,
			coffeehouse: this.state.coffeehouse,
			location: this.state.location,
			scheduledAt: this.state.scheduledAt
		}
		this.props.createChatroom(payload);
	}
	
	render() {
		return (
			<div>
				<TextField floatingLabelText="Title" name="title" value={this.state.title} onChange={this.onTitleChanged.bind(this)}/>
				<TextField floatingLabelText="Selected Coffeshop" name="coffeshop" value={this.state.coffeehouse} onChange={this.onCoffeshopChanged.bind(this)}/>
				<TextField floatingLabelText="Location" name="coffeshop" value={this.state.location} onChange={this.onLocationChanged.bind(this)}/>
				<div>
					<DatePicker floatingLabelText="Scheduled at" container="inline" autoOk={true} name="date" value={this.state.scheduledAt ? new Date(this.state.scheduledAt) : null}
					            onChange={this.onScheduledAtChanged.bind(this)}/>
					<IconButton tooltip="Set as null" onTouchTap={() => this.clearOriginalPublicationDate()}>
						<ContentClear />
					</IconButton>
				</div>
				<RaisedButton primary={true} onClick={this.createMeeting.bind(this)} label="Create Meeting"/>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		createMeeting: (meeting) => {
			dispatch(createMeeting(meeting));
		}
	};
}

export default connect(null, mapDispatchToProps)(NewMeeting)