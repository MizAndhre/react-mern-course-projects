import { useCallback, useEffect, useState } from "react";

import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
	const [counter, setCounter] = useState(10);

	// ? useCallback
	// const increment = useCallback(() => {
	// 	setCounter((value) => value + 1);
	// }, []);

	//? recibir argumento
	const increment = useCallback((value) => {
		setCounter((c) => c + value);
	}, []);

	// ? Otra forma
	// useEffect(() => {
	// 	increment();
	// }, [increment]);

	// * Funcion normal
	// const increment = () => {
	// 	setCounter(counter + 1);
	// };

	return (
		<>
			<h1>Callback Hook</h1>
			<h2>
				Counter: <small>{counter}</small>
			</h2>
			<hr />

			<ShowIncrement onIncrement={increment} />
		</>
	);
};
