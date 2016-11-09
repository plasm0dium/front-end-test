import React from "react";
import axios from "axios";

class ListStates extends React.Component {
	constructor(props) {
		super(props);

		this.state = { stateDetail: {}, show: false}
	}

	_handleSingleState(item, evt) {
		evt.preventDefault();
		axios.get("/states/" + item)
			.then((response) => {
				this.setState({
					stateDetail: response.data,
					show: true
				})
			})
	}
	
	_renderStatesList() {
		return this.props.stateAbbre.map((abb) => {
			return (
				<a href="#" key={abb} onClick={this._handleSingleState.bind(this, abb)}>
					{abb}
				</a>
			);
		})
	}

	_renderStateDetails() {
		const { stateDetail } = this.state;
		return Object.keys(stateDetail).map((list) => {
			return (
					<div className="row" key={list}>
						<div className="col s6">
							{list}
						</div>
						<div className="col s6">
							{stateDetail[list]}
						</div>
					</div>
			);
		})
	}

	render() {
		const { show } = this.state;
		return (
			<div className="list-states">
				<div className="state-link">
					{this._renderStatesList()}
				</div>
				{show && <div className="state-detail">
					{this._renderStateDetails()}
				</div>}
			</div>
		);
	}
}

export default ListStates;
