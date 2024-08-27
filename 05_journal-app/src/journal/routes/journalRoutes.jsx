import { Navigate } from 'react-router-dom';
import { JournalPage } from '../pages/JournalPage';

export const journalRoutes = [
	{
		index: true,
		element: <JournalPage />,
	},
	{
		path: '/*',
		element: <Navigate to={'/'} />,
	},
];
