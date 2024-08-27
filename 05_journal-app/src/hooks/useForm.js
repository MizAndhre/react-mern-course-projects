import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
	// const { username, email, password } = formState;
	const [formState, setFormState] = useState(initialForm);

	const [formValidation, setFormValidation] = useState({});

	useEffect(() => {
		createValidators();
	}, [formState]);

	useEffect(() => {
		setFormState(initialForm);
	}, [initialForm]);

	// memorizar el valor
	const isFormValid = useMemo(() => {
		for (const formValue in formValidation) {
			if (formValidation[formValue] !== null) return false;
		}
		return true;
	}, [formValidation]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleResetForm = () => {
		setFormState(initialForm);
	};

	const createValidators = () => {
		const formCheckedValues = {
			//emailValid = null || 'mensaje de error'
		};

		// formValidations = {email: [], password = ''}
		// formField = email =[fn, msg] || formField = password =[fn, msg]
		for (const formField of Object.keys(formValidations)) {
			// * otra forma => for (const key in formValidations) {
			const [fn, errorMessage] = formValidations[formField];
			// [funcion, mensaje] =  email

			// formCheckedValues { emailValid } = 'null' || 'mensaje'
			formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
		}

		setFormValidation(formCheckedValues);
	};

	return {
		...formState,
		formState,
		handleInputChange,
		handleResetForm,
		...formValidation,
		formValidation,
		isFormValid,
	};
};
