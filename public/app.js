import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import * as reducers from "./redux/reducers/app";
import Main from "./components/main";

const reducer = combineReducers(reducers);
const store = createStore(reducer);

class App extends React.Component {

	render() {
		return (
			<div>
				<Main />
			</div>
		);
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	,document.querySelector(".js-content")
);
