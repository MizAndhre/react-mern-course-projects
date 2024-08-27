import { Navigate, Outlet } from 'react-router-dom';
import { useCheckAuth } from '../../hooks';

export const AuthRouter = () => {
	const { status } = useCheckAuth();

	if (status === 'authenticated') return <Navigate to={'/'} />;

	return <Outlet />;
};
