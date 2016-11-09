import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { onMessageSuccess } from "../redux/action-creators/app-action-creators";


class Messages extends React.Component {

	_handleSubmit(evt) {
		evt.preventDefault();
		axios.post("/write", {
			phone: this.refs.phone.value,
			message: this.refs.message.value
		})
		.then((response) => {
			this.props.onMessageSuccess(response);
		})
		this.refs.message.value = "";
		this.refs.phone.value = "";
	}

	_renderMessages() {
		const listMessage = this.props.message.map((obj) => {
			let formatPhone;
			if (obj.phone) {
				formatPhone = obj.phone.replace(/[^\d]+/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
			}
			return (
				<div key={formatPhone} className="list-messages">
					<label className="user">{obj.user}</label>
					<label className="user-phone">{formatPhone}</label>
					<label className="user-message">{obj.message}</label>
				</div>
			)
		});
		return listMessage;
	}

	render() {
		return (
			<div className="row message-component">
				<form
					onSubmit={this._handleSubmit.bind(this)}
					method="post"
					className="col s6">
					<input type="text" placeholder="Phone 000-000-0000" ref="phone"/>
					<input type="text" placeholder="Message" ref="message"/>
					<button className="btn waves-effect waves-light" type="submit">Add</button>
				</form>
				<div className="col s6">
					{this._renderMessages()}
				</div>
			</div>
		);
	}
}

const mapStateToProp = (state) => ({...state});
const mapDispatchToProp = (dispatch, props) => ({
	onMessageSuccess: (response) => dispatch(onMessageSuccess(response))
});

export default connect(mapStateToProp, mapDispatchToProp)(Messages);
