import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

// create HomePage functional component
// No lifecycle methods or state
const HomePage = () => (
	<div className="homepage">
		<Directory />
	</div>
);

export default HomePage;
