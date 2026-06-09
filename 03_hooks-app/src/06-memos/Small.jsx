//
// import { memo } from "react";

// export const Small = memo(({ value }) => {
//     console.log("Me volvi a generar");

//     return <small>{value}</small>;
// });

import React from "react";
export const Small = React.memo(({ value }) => {
	console.log("Me volvi a generar");

	return <small>{value}</small>;
});

// Small.displayName = "Small"; // Esta es la solucion
