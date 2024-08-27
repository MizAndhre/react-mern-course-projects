/* eslint-disable react/prop-types */

import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title = '' }) => {
	return (
		<>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ minHeight: '100vh', backgroundColor: 'primary.main', pb: 4 }}>
				<Grid
					item
					className="box-shadow animate__animated animate__zoomIn animate__fast"
					xs={3}
					sx={{
						width: { sm: 450, xs: 380 },
						backgroundColor: 'white',
						padding: 3,
						borderRadius: 2,
					}}>
					<Typography variant="h5" sx={{ mb: 1 }}>
						{title}
					</Typography>

					{children}
				</Grid>
			</Grid>
		</>
	);
};
