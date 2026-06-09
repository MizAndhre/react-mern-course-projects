import { useState } from "react";

export const AgregarCategoria = ({ onNuevaCategoria }) => {
	const [valorInput, setValorInput] = useState("");

	const onInputChange = (e) => {
		setValorInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (valorInput.trim().length <= 1) return;

		setValorInput("");
		onNuevaCategoria(valorInput.trim());
	};

	return (
		<>
			<form action='' onSubmit={handleSubmit} className='animate__animated animate__pulse'>
				<input
					className='block w-full rounded-md border-0
                 py-1.5 pl-4 pr-20 text-gray-900 mt-10 mb-7 placeholder:text-gray-400 outline-none focus:outline-teal-500'
					type='text'
					placeholder='Buscar gifs...'
					value={valorInput}
					onChange={onInputChange}
				/>
			</form>
		</>
	);
};
