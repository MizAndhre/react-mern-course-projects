import { Link as RouterLink } from 'react-router-dom';

import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

// displayName: 'Andrea',
// email: 'andrea@google.com',
// password: '123456789',

const formData = {
	displayName: '',
	email: '',
	password: '',
};

const formValidations = {
	email: [(value) => value.includes('@'), 'El correo debe ser válido'],
	password: [(value) => value.length >= 6, 'La contraseña debe tener más de 6 caracteres'],
	displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
};

export const RegisterPage = () => {
	const dispatch = useDispatch();
	const [formSubmitted, setFormSubmitted] = useState(false);

	const { status, errorMessage } = useSelector((state) => state.auth);
	const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

	const {
		formState,
		displayName,
		email,
		password,
		handleInputChange,
		displayNameValid,
		emailValid,
		passwordValid,
		isFormValid,
	} = useForm(formData, formValidations);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!isFormValid) return;

		setFormSubmitted(true);
		dispatch(startCreatingUserWithEmailPassword(formState));
	};

	return (
		<>
			<AuthLayout title="Registrarse">
				<form onSubmit={handleSubmit}>
					<Grid container>
						<Grid item xs={12} sx={{ mt: 2 }}>
							<TextField
								label="Nombre Completo"
								type="text"
								placeholder="Nombre Completo"
								fullWidth
								name="displayName"
								value={displayName}
								onChange={handleInputChange}
								error={!!displayNameValid && formSubmitted}
								helperText={displayNameValid}
							/>
						</Grid>

						<Grid item xs={12} sx={{ mt: 2 }}>
							<TextField
								label="Correo"
								type="email"
								placeholder="correo@correo.com"
								fullWidth
								name="email"
								value={email}
								onChange={handleInputChange}
								error={!!emailValid && formSubmitted}
								helperText={emailValid}
							/>
						</Grid>

						<Grid item xs={12} sx={{ mt: 2 }}>
							<TextField
								label="Contraseña"
								type="password"
								placeholder="password"
								fullWidth
								name="password"
								value={password}
								onChange={handleInputChange}
								error={!!passwordValid && formSubmitted}
								helperText={passwordValid}
							/>
						</Grid>

						<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
							<Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
								<Alert severity="error">{errorMessage}</Alert>
							</Grid>

							<Grid item xs={12}>
								<Button
									type="submit"
									variant="contained"
									fullWidth
									disabled={isCheckingAuthentication}>
									Crear Cuenta
								</Button>
							</Grid>
						</Grid>

						<Grid container direction="row" justifyContent="end">
							<Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
							<Link
								component={RouterLink}
								color="inherit"
								underline="hover"
								to="/auth/login">
								Iniciar Sesión
							</Link>
						</Grid>
					</Grid>
				</form>
			</AuthLayout>
		</>
	);
};
