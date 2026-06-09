//

import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
	const { task, handleInputChange, handleResetForm } = useForm({ task: "" });

	const [alerta, setAlerta] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();

		//verificacion
		if (task.trim().length < 1) {
			setAlerta(true);
			return;
		}

		//crear el todo
		const newTodo = {
			id: new Date().getTime(),
			description: task.trim(),
			done: false,
		};

		//enviar el nuevo Todo
		onNewTodo(newTodo);
		setAlerta(false);
		handleResetForm();
	};

	return (
		<form>
			<input
				type='text'
				placeholder='¿Qué hay que hacer?'
				className='form-control'
				name='task'
				value={task}
				onChange={handleInputChange}
			/>

			{alerta && (
				<p className='text-danger small fst-italic fw-semibold mb-1'> * Escribe una tarea </p>
			)}

			<button
				type='submit'
				className='btn btn-dark mt-1'
				onClick={handleClick}>
				Agregar
			</button>
		</form>
	);
};
