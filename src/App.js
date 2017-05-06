import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import applicationStore from "./stores/applicationStore";
import injectTapEventPlugin from "react-tap-event-plugin";
import {browserHistory, IndexRoute, Route, Router} from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// Store
import Application from "./components/Application";
// Register
import Register from "./components/register/Register";
// Authentication
import Login from "./components/register/Login";
import Logout from "./components/register/Logout";
// Chatrooms
import ChatroomDetails from "./components/chatroom/ChatroomDetails";
import ListChatrooms from "./components/chatroom/ListChatrooms";
import NewChatroom from "./components/chatroom/NewChatroomContainer";
// Meetings
import ListMeetings from "./components/meeting/ListMeetings";
import NewMeeting from "./components/meeting/NewMeeting";
import MeetingDetails from "./components/meeting/MeetingDetails";
import UpcomingMeetings from "./components/meeting/UpcomingMeetings";
// Business
import BusinessRegister from "./components/business/BusinessRegister";
import BusinessLogin from "./components/business/BusinessLogin";
import BusinessDashboard from "./components/business/BusinessDashboard";
import BusinessLogout from "./components/business/BusinessLogout";
// Info
import UserProfile from "./components/settings/Profile";
import Privacy from "./components/info/Privacy";
import Faq from "./components/info/Faq";

injectTapEventPlugin();

const NoMatch = React.createClass({
    render() {
        return (
            <div>
                <h1>No NoMatch</h1>
            </div>
        )
    }
})

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={applicationStore}>
            <Router history={browserHistory}>
                <Route path="/" component={Application}>
                    <IndexRoute component={Search}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/chatrooms/all" component={ListChatrooms}/>
                    <Route path="/chatrooms/new" component={NewChatroom}/>
                    <Route path="/chatrooms/:chatroomId" component={ChatroomDetails}/>
                    <Route path="/chatrooms/:chatroomId/meetings" component={ListMeetings}/>
                    <Route path="/chatrooms/:chatroomId/meetings/new" component={NewMeeting}/>
                    <Route path="/chatrooms/:chatroomId/meetings/:meetingId" component={MeetingDetails}/>
                    <Route path="/chatrooms/joined" component={JoinedChatrooms}/>
                    <Route path="/meetings/upcoming" component={UpcomingMeetings}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/settings/profile" component={UserProfile}/>
                    <Route path="/settings/notifications" component={Notifications}/>
                    <Route path="/business/register" component={BusinessRegister}/>
                    <Route path="/business/login" component={BusinessLogin}/>
                    <Route path="/business/dashboard" component={BusinessDashboard}/>
                    <Route path="/business/logout" component={BusinessLogout}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/faq" component={Faq}/>
                    <Route path="/privacy" component={Privacy}/>
                    <Route path="/termsofuse" component={TermOfUse}/>
                    <Route path="*" component={NoMatch}/>
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);