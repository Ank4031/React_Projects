import React from "react";

function Logo({width = '100px'}) {
	return (
		<div className="logo">
			<img style={{ width: `${width}px` }} src="https://www.pexels.com/photo/scenic-lighthouse-overlooking-the-russian-coastline-33528753/" alt="App Logo" />
		</div>
	);
}

export default Logo;
