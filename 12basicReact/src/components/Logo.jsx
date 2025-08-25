import React from "react";

function Logo({width = '100px'}) {
	return (
		<div className="logo">
			<img style={{ width }} className="rounded-3xl" src="../../public/images.png" alt="App Logo" />
		</div>
	);
}

export default Logo;
