import { useEffect } from "react";

export const Message = () => {
	useEffect(() => {
		const onMouseMove = (e) => {
			console.log(e.x, e.y);
		};
		// console.log("montado");
		window.addEventListener("mousemove", onMouseMove);

		return () => {
			// console.log("desmontado");
			window.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	return (
		<>
			<h5> Usuario ya existe </h5>
		</>
	);
};
