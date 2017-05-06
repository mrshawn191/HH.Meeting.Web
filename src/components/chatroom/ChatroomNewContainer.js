import React, {Component} from "react";
import {connect} from "react-redux";

const categories = ['Language', 'History', 'Programming', 'Technology', 'Mathematics', 'Physics', 'Geographic'];

const groupSize = [];

for (let i = 0; i < 15; i++) {
	groupSize.push(<MenuItem value={i} key={i} primaryText={`${i}`}/>);
}

class ChatroomNewContainer extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
			category: '',
			tags: [],
			location: {
				street: '',
				zipcode: '',
				city: '',
				country: ''
			},
			groupSize: 0
		}
	}
	
	onTitleChanged(e) {
		this.setState({title: Object.assign({}, this.state.title, {title: e.target.value})})
	}
	
	onDescriptionChanged(e) {
		this.setState({description: Object.assign({}, this.state.description, {description: e.target.value})})
	}
	
	onLocationChanged(e) {
		this.setState({location: Object.assign({}, this.state.location, {location: e.target.value})})
	}
	
	onCategoryChanged(e) {
		this.setState({category: Object.assign({}, this.state.category, {category: e.target.value})})
	}
	
	onGroupSizeChanged(e) {
		this.setState({groupSize: Object.assign({}, this.state.groupSize, {groupSize: e.target.value})});
	};
	
	createChatroom() {
		const payload = {
			title: this.state.title,
			description: this.state.description,
			category: this.state.category,
			tags: this.state.tags,
			location: this.state.location,
			groupSize: this.state.groupSize
		}
		this.props.createChatroom(payload);
	}
	
	render() {
		return (
			<div>
				<TextField floatingLabelText="Title" name="title" value={this.state.title} onChange={this.onTitleChanged.bind(this)}/>
				<TextField name="Description" multiLine={true} fullWidth={true} value={this.state.description} onChange={this.onDescriptionChanged.bind(this)}/>
				<TextField floatingLabelText="Location" name="location" value={this.state.location} onChange={this.onLocationChanged.bind(this)}/>
				<AutoComplete floatingLabelText="Category" filter={AutoComplete.noFilter} openOnFocus={true} dataSource={categories} onNewRequest={this.onCategoryChanged.bind(this)} searchText={this.state.category}/>
				<SelectField value={this.state.value} onChange={this.onGroupSizeChanged} maxHeight={200}>
					{groupSize}
				</SelectField>
				<RaisedButton primary={true} onClick={this.createChatroom.bind(this)} label="Create Meeting"/>
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