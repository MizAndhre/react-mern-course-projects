/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';

import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export const SidebarItem = ({ note }) => {
	const dispatch = useDispatch();
	const { title, body, imageUrls = [] } = note;

	const handleClick = () => {
		dispatch(setActiveNote({ imageUrls, ...note }));
	};

	return (
		<ListItem disablePadding onClick={handleClick}>
			<ListItemButton>
				<ListItemIcon sx={{ minWidth: '35px' }}>
					<TurnedInNot />
				</ListItemIcon>

				<Grid container>
					<ListItemText primary={title} className="elipsis" />
					<ListItemText secondary={body} className="elipsis" />
				</Grid>
			</ListItemButton>
		</ListItem>
	);
};
