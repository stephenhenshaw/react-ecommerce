import React from "react";

import "./homepage.styles.scss";

// create HomePage functional component
// No lifecycle methods or state
const HomePage = () => (
	<div className="homepage">
		<div className="directory-menu">
			<div className="menu-item">
				<div className="content">
					<h1 className="title">HATS</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>
			<div className="menu-item">
				<div className="content">
					<h1 className="title">JACKETS</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>
			<div className="menu-item">
				<div className="content">
					<h1 className="title">TRAINERS</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>
			<div className="menu-item">
				<div className="content">
					<h1 className="title">WOMENS</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>
			<div className="menu-item">
				<div className="content">
					<h1 className="title">MENS</h1>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>
		</div>
	</div>
);

export default HomePage;