import { useCheckAuth } from '../../hooks';

import { Navigate, Outlet } from 'react-router-dom';

export const JournalRouter = () => {
	const { status } = useCheckAuth();

	if (status === 'not-authenticated') return <Navigate to={'/auth/login'} />;

	return <Outlet />;
};
