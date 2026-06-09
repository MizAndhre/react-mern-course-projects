// import { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormCustomHook = () => {
	// const { formState, onInputChange } = useForm({
	const { formState, handleInputChange, handleResetForm, username, email, password } = useForm({
		username: "",
		email: "",
		password: "",
	});

	// const { username, email, password } = formState;

	return (
		<>
			<h1> Formulario Simple: Custom Hooks</h1>
			<hr />

			<input
				type='text'
				className='form-control'
				placeholder='Nombre de usuario'
				name='username'
				value={username}
				onChange={handleInputChange}
			/>

			{username === "strider" && <Message />}

			<input
				type='email'
				className='form-control mt-3'
				placeholder='correo@correo.com'
				name='email'
				value={email}
				onChange={handleInputChange}
			/>

			<input
				type='password'
				className='form-control mt-3'
				placeholder='contraseña'
				name='password'
				value={password}
				onChange={handleInputChange}
			/>

			<button className='btn btn-primary mt-3' onClick={handleResetForm}>
				Borrar
			</button>
		</>
	);
};
