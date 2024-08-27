/* eslint-disable no-extra-boolean-cast */

import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Google } from '@mui/icons-material';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
	email: '',
	password: '',
};
export const LoginPage = () => {
	const dispatch = useDispatch();
	const { status, errorMessage } = useSelector((state) => state.auth);

	const { email, password, handleInputChange } = useForm(formData);

	const isAuthenticating = useMemo(() => status === 'checking', [status]);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(startLoginWithEmailPassword({ email, password }));
	};

	const handleGoogleSignIn = () => {
		dispatch(startGoogleSignIn());
	};

	return (
		<>
			<AuthLayout title="Iniciar Sesión">
				<form onSubmit={handleSubmit}>
					<Grid container>
						<Grid item xs={12} sx={{ mt: 2 }}>
							<TextField
								label="Correo"
								type="email"
								placeholder="correo@correo.com"
								fullWidth
								name="email"
								value={email}
								onChange={handleInputChange}
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
							/>
						</Grid>

						<Grid container display={!!errorMessage ? '' : 'none'} sx={{ mt: 1 }}>
							<Grid item xs={12}>
								<Alert severity="error">{errorMessage}</Alert>
							</Grid>
						</Grid>

						<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
							<Grid item xs={12} sm={6}>
								<Button
									type="submit"
									variant="contained"
									fullWidth
									disabled={isAuthenticating}>
									Iniciar Sesión
								</Button>
							</Grid>

							<Grid item xs={12} sm={6}>
								<Button
									variant="contained"
									fullWidth
									onClick={handleGoogleSignIn}
									disabled={isAuthenticating}>
									<Google />

									<Typography sx={{ ml: 1 }}>Google</Typography>
								</Button>
							</Grid>
						</Grid>

						<Grid container direction="row" justifyContent="end">
							<Link
								component={RouterLink}
								color="inherit"
								underline="hover"
								to="/auth/register">
								Crear una cuenta
							</Link>
						</Grid>
					</Grid>
				</form>
			</AuthLayout>
		</>
	);
};
