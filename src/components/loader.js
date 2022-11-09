import React from "react";

const Loader = () => {
	return (
		<>
			<div className="d-flex align-items-center justify-content-center w-100 h-100 min-vh-100">
				{/* <Spinner animation="grow" /> */}
				<div dir="auto" className="custom-loader-animation">
					<span>I</span>
					<span>N</span>
					<span>F</span>
					<span>I</span>
					<span>N</span>
					<span>I</span>
					<span>T</span>
					<span>Y</span>
					<span>.</span>
					<span>.</span>
					<span>.</span>

				</div>
			</div>
		</>
	);
};
export default Loader;