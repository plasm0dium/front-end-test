import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { postSignIn, onSignInError } from "../redux/action-creators/app-action-creators";
import AlertMessage from "./alert-message";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = { show: false }
	}
	
	_handleSubmit (evt) {
		evt.preventDefault();
		axios.post("/login", {
			user: this.refs.username.value,
			password: this.refs.password.value
		})
		.then((response) => {
			this.props.postSignIn(response);
		})
		.catch((error) => {
			this.props.onError(error);
		})
	}

	_toggle(evt) {
		evt.preventDefault();
		this.setState(Object.assign({}, this.state, {show: !this.state.show}));
	}

	render() {
		const isShow = this.state.show;
		return (
			<div className="sign-in-component">
				<h1 className="header-text">Please Sign In</h1>
				<div>{this.props.default.error && <AlertMessage />}</div>
				<form 
					onSubmit={this._handleSubmit.bind(this)}
					method="post">
					<input type="text" placeholder="Username" ref="username" />
					<input type={this.state.show ? "text" : "password"} placeholder="Password" ref="password">
						<a
							href="#"
							className="show-hide-toggle"
							onClick={(evt) => this._toggle(evt)}>
							{isShow ? "Hide" : "Show"}
						</a>
					</input>
					<button type="submit" className="btn waves-effect waves-light">
						{"Submit"}
					</button>
				</form>
			</div>
		);
	}
}

SignIn.propTypes = {
	error: React.PropTypes.bool,
	postSignIn: React.PropTypes.func,
	onError: React.PropTypes.func
};

const mapStateToProp = (state) => ({...state});
const mapDispatchToProp = (dispatch, props) => ({
	postSignIn: (response) => dispatch(postSignIn(response)),
	onError: (error) => dispatch(onSignInError(error))
});

export default connect(mapStateToProp, mapDispatchToProp)(SignIn);
