import { useState } from "react";

export const CounterApp = () => {
	// const [counter, setCounter] = useState(10);
	const [contadores, setContadores] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
	});

	const { counter1, counter2, counter3 } = contadores;

	return (
		<>
			<h2>Counter 1: {counter1}</h2>
			<h2>Counter 2: {counter2}</h2>
			<h2>Counter 3: {counter3}</h2>

			<hr />

			<button
				className='btn p-3 btn-danger'
				onClick={() => {
					// setCounter(counter + 1);
					// ? Correcta => Quitar { }
					// setContadores({ ...contadores }, (contadores.counter1 += 1));
					setContadores({
						...contadores,
						// counter2,
						// counter3,
						counter1: counter1 + 1,
					});
				}}>
				+1
			</button>

			<button className='p-3 sbtn btn-dark'>-1</button>
		</>
	);
};
