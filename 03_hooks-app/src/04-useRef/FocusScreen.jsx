import { useRef } from "react";

export const FocusScreen = () => {
	const inputRef = useRef();
	// console.log(ref);

	const handleClick = () => {
		console.log(inputRef);
		inputRef.current.select();
	};

	return (
		<>
			<h1>Focus Screen</h1>
			<hr />

			<input ref={inputRef} type='text' placeholder='nombre' className='form-control' />

			<button className='btn btn-dark mt-3' onClick={handleClick}>
				Set Focus
			</button>
		</>
	);
};
