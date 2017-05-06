import React, {Component} from "react";
import {connect} from "react-redux";
// Actions
import {authenticateAsync, clearApplicationError} from "../actions/applicationActions";
import {Link} from "react-router";
// Material UI
import DropDownMenu from "material-ui/DropDownMenu";
import FlatButton from "material-ui/FlatButton";
import {Toolbar, ToolbarGroup} from "material-ui/Toolbar";

const styles = {
	logo: {
		height: '34px',
		margin: 11,
		marginLeft: '25px'
	},
	menuButton: {
		marginLeft: 0,
		marginRight: 0
	}
}

class Application extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		
		const handleUnauthorized = () => {
			return (
				<Toolbar>
					<ToolbarGroup firstChild={true}>
						<FlatButton style={styles.menuButton} label="Homeruns" containerElement={<Link to={'/'}/>}/>
						<FlatButton style={styles.menuButton} label="Register" containerElement={<Link activeStyle={{color: 'red'}} to={'/series'}/>}/>
						<FlatButton style={styles.menuButton} label="Login" containerElement={<Link activeStyle={{color: 'red'}} to={'/categories'}/>}/>
						<FlatButton style={styles.menuButton} label="All Groups" containerElement={<Link activeStyle={{color: 'red'}} to={'/publishers'}/>}/>
						<FlatButton style={styles.menuButton} label="FAQ" containerElement={<Link activeStyle={{color: 'red'}} to={'/isbns'}/>}/>
						<FlatButton style={styles.menuButton} label="Privacy" containerElement={<Link activeStyle={{color: 'red'}} to={'/isbns'}/>}/>
						<FlatButton style={styles.menuButton} label="TermsOfUse" containerElement={<Link activeStyle={{color: 'red'}} to={'/isbns'}/>}/>
					</ToolbarGroup>
				</Toolbar>
			)
		}
		
		const handleAuthorized = () => {
			return (
				<Toolbar>
					<ToolbarGroup firstChild={true}>
						<FlatButton style={styles.menuButton} label="Homeruns" containerElement={<Link to={'/'}/>}/>
						<FlatButton style={styles.menuButton} label="All Groups" containerElement={<Link activeStyle={{color: 'red'}} to={'/series'}/>}/>
						<FlatButton style={styles.menuButton} label="New Group" containerElement={<Link activeStyle={{color: 'red'}} to={'/lists'}/>}/>
						<FlatButton style={styles.menuButton} label="Joined Groups" containerElement={<Link activeStyle={{color: 'red'}} to={'/appviews'}/>}/>
						<FlatButton style={styles.menuButton} label="Settings" containerElement={<Link activeStyle={{color: 'red'}} to={'/metadata'}/>}/>
						<FlatButton style={styles.menuButton} label="Logout" containerElement={<Link activeStyle={{color: 'red'}} to={'/categories'}/>}/>
						<FlatButton style={styles.menuButton} label="Publishers" containerElement={<Link activeStyle={{color: 'red'}} to={'/publishers'}/>}/>
						<FlatButton style={styles.menuButton} label="Status" containerElement={<Link activeStyle={{color: 'red'}} to={'/isbns'}/>}/>
					</ToolbarGroup>
					<ToolbarGroup firstChild={true}>
						<DropDownMenu value={"Settings"}>
							<FlatButton style={styles.menuButton} label="Settings" containerElement={<Link activeStyle={{color: 'red'}} to={'/settings'}/>}/>
							<FlatButton style={styles.menuButton} label="Profile" containerElement={<Link activeStyle={{color: 'red'}} to={'/settings/profile'}/>}/>
							<FlatButton style={styles.menuButton} label="Notifications" containerElement={<Link activeStyle={{color: 'red'}} to={'/settings/notifications'}/>}/>
						</DropDownMenu>
					</ToolbarGroup>
				</Toolbar>
			)
		}
		
		let navigation;
		
		if (this.props.user.authorized) {
			navigation = handleAuthorized();
		} else {
			navigation = handleUnauthorized();
		}
		
		return (
			<div>
				{navigation}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		state: state
	};
}

export default connect(mapStateToProps)(Application);
