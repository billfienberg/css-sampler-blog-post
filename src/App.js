import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="nav">
				<a href="#" className="logo">Logo</a>
				<div className="middleNavSection">
					<div className="nameWithIcon">
						<a href="#" className="name">Bill Fienberg</a>
						<button type="button" className="iconButton">
							<i className="material-icons menuIcon">keyboard_arrow_down</i>
						</button>
					</div>
					<div className="dropdown">
						<a href="#" className="dropdown-link">Inbox</a>
						<a href="#" className="dropdown-link">Settings</a>
						<a href="#" className="dropdown-link">Sign Out</a>
					</div>
				</div>
				<a href="#" className="help">Help</a>
			</div>
		);
	}
}

export default App;
