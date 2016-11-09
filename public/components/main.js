import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import {
	onSignOut,
	postUserSignIn,
	onFetchMessageSuccess,
	onFetchStatesAbbre
	} from "../redux/action-creators/app-action-creators";
import SignIn from "./sign-in";
import ListMessage from "./message";
import ListStates from "./list-states";

class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = { messages: [], listStates: [] }
	}

	componentWillMount() {
		const { login } = Cookies.get();
		if (login) {
			this.props.postUserSignIn();
		}
	}

	_handleFetchMessages() {
		axios.get("/read")
			.then((response) => {
				this.setState({
					messages: response.data
				})
				this.props.onFetchMessageSuccess()
			});
	}

	_handleFetchStates() {
		axios.get("/states/abbreviations")
			.then((response) => {
				this.setState({
					listStates: response.data
				});
				this.props.onFetchStatesAbbre()
			})
	}
	

	_handleLogOut(evt) {
		evt.preventDefault();
		axios.get("/logout")
			.then((response) => {
				this.props.onSignOut(response);
			});
	}

	_renderListButton() {
		return (
			<div className="list-button">
				<button
					className="btn waves-effect waves-light"
					type="button" 
					onClick={this._handleFetchStates.bind(this)}>States</button>
				<button
					className="btn waves-effect waves-light"
					type="button"
					onClick={this._handleFetchMessages.bind(this)}>Message</button>
				<button
					className="btn waves-effect waves-light"
					type="button"
					onClick={this._handleLogOut.bind(this)}>Log out</button>
			</div>
		);
	} 

	render() {
		const { preSignIn, postSignIn, message, listState, messages } = this.props.default;
		return (
			<div className="app-component container">
				{preSignIn && <SignIn />}
				{postSignIn && this._renderListButton()}
				{message && postSignIn && <ListMessage message={messages || this.state.messages}/>}
				{listState && postSignIn && <ListStates stateAbbre={this.state.listStates}/>}
			</div>
		);
	}
}

const mapStateToProp = (state) => ({...state});
const mapDispatchToProp = (dispatch, props) => ({
	onSignOut: (response) => dispatch(onSignOut(response)),
	onFetchMessageSuccess: () => dispatch(onFetchMessageSuccess()),
	postUserSignIn: () => dispatch(postUserSignIn()),
	onFetchStatesAbbre: () => dispatch(onFetchStatesAbbre())
});

export default connect(mapStateToProp, mapDispatchToProp)(Main);
