import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { authRoutes, AuthRouter } from '../auth/routes/';
import { CheckingAuth } from '../ui/';

import { useCheckAuth } from '../hooks';
import { journalRoutes, JournalRouter } from '../journal/routes';

export const AppRouter = () => {
	const { status } = useCheckAuth();

	const router = createBrowserRouter([
		{
			path: '/',
			element: <JournalRouter />,
			children: journalRoutes,
		},
		{
			path: '/auth',
			element: <AuthRouter />,
			children: authRoutes,
		},
	]);

	if (status === 'checking') {
		return <CheckingAuth />;
	}

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};
