import { useCounter } from "../hooks/useCounter";

export const CounterConCustomHooks = () => {
	const { counter, increment, decrement, reset } = useCounter();

	return (
		<div>
			<h1>Counter Con Custom Hooks</h1>
			<h2>{counter}</h2>

			<hr />

			<button className='btn p-3 btn-danger' onClick={() => increment()}>
				+1
			</button>

			<button className='btn p-3 btn-danger' onClick={() => increment(5)}>
				+5
			</button>

			<button className='btn p-3 btn-primary' onClick={reset}>
				Reset
			</button>

			<button className='p-3 btn btn-warning' onClick={decrement}>
				-1
			</button>
		</div>
	);
};
