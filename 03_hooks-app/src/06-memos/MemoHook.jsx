import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

//para que no se vuelva a procesar
const heavyStuff = (iterationNumber = 100) => {
	for (let i = 0; i < iterationNumber; i++) {
		console.log("cargando...");
	}

	return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
	const { counter, increment } = useCounter(4000);
	const [show, setShow] = useState(true);

	const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

	return (
		<>
			<h1>Memo Hook</h1>
			<h2>
				Counter: <small>{counter}</small>
			</h2>
			<hr />

			<h4>{memorizedValue}</h4>

			<button className='btn btn-danger' onClick={() => increment()}>
				+1
			</button>

			<button className='btn btn-outline-primary' onClick={() => setShow(!show)}>
				Show / Hide {JSON.stringify(show)}
			</button>
		</>
	);
};
