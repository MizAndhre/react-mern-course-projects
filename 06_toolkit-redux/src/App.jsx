import { useDispatch, useSelector } from 'react-redux';

import viteLogo from '/vite.svg';
import './App.css';
import { decrement, increment, incrementByAmount } from './store/slices/counter'; //index

function App() {
	const { counter } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
			</div>
			<p>count is {counter}</p>
			<div className="card">
				<button onClick={() => dispatch(increment())}>Increment </button>
			</div>
			<div className="card">
				<button onClick={() => dispatch(decrement())}>Decrement </button>
			</div>
			<div className="card">
				<button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2 </button>
			</div>
		</>
	);
}

export default App;
