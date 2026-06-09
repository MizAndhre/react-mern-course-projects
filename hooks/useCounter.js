import { useState } from "react";

export const useCounter = (initialValue = 10) => {
	const [counter, setCounter] = useState(initialValue);

	const increment = (num = 1) => {
		setCounter(counter + num);
	};

	const decrement = (num = 1) => {
		setCounter(counter - num);
	};
	const reset = () => {
		setCounter(initialValue);
	};

	return { counter, increment, decrement, reset, setCounter };
};
