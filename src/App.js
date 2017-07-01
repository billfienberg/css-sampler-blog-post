import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDropdownOpen: false,
		};
		this.toggleDropdown = this.toggleDropdown.bind(this);
	}

	toggleDropdown() {
		this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
	}

	render() {
		const isDropdownOpen = this.state.isDropdownOpen;
		const iconName = isDropdownOpen
			? 'keyboard_arrow_down'
			: 'keyboard_arrow_up';
		const openDropdownClass = isDropdownOpen ? 'dropdown--isOpen' : '';
		const dropdownClasses = `dropdown ${openDropdownClass}`;
		return (
			<div className="nav">
				<a href="#" className="logo">Logo</a>
				<div className="middleNavSection">
					<div className="nameWithIcon">
						<a href="#" className="name">Bill Fienberg</a>
						<button
							type="button"
							className="iconButton"
							onClick={this.toggleDropdown}
						>
							<i className="material-icons menuIcon">{iconName}</i>
						</button>
					</div>
					<div className={dropdownClasses}>
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
