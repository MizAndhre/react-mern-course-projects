import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: "",
		email: "",
	});

	const { username, email } = formState;

	const onInputChange = (e) => {
		const { name, value } = e.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	useEffect(() => {
		// console.log("formState");
	}, [formState]);

	useEffect(() => {
		// console.log("email");
	}, [email]);

	return (
		<>
			<h1> Formulario Simple</h1>
			<hr />

			<input
				type='text'
				className='form-control'
				placeholder='Nombre de usuario'
				name='username'
				value={username}
				onChange={onInputChange}
			/>

			{username === "strider" && <Message />}

			<input
				type='email'
				className='form-control mt-3'
				placeholder='correo@correo.com'
				name='email'
				value={email}
				onChange={onInputChange}
			/>
		</>
	);
};
