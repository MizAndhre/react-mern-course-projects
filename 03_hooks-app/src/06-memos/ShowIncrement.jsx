import React from "react";

// eslint-disable-next-line react/display-name
export const ShowIncrement = React.memo(({ onIncrement }) => {
	console.log("first");

	return (
		<button
			className='btn btn-warning'
			onClick={() => {
				onIncrement(5);
			}}>
			Incrementar
		</button>
	);
});
