import { Navigate } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';

export const authRoutes = [
	{
		index: true,
		element: <Navigate to={'/auth/login'} />,
	},
	{
		path: 'login',
		element: <LoginPage />,
	},
	{
		path: 'register',
		element: <RegisterPage />,
	},
	{
		path: '*',
		element: <Navigate to={'/auth/login'} />,
	},
];
