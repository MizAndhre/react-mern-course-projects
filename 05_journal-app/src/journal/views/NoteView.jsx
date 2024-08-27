import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteOutline, SaveOutlined, UploadFileOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/es';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGallery } from '../components';
import { useForm } from '../../hooks';

import {
	setActiveNote,
	startDeletingNote,
	startSaveNote,
	startUploadingFiles,
} from '../../store/journal';

export const NoteView = () => {
	const dispatch = useDispatch();
	const { active: note, messageSaved, isSaving } = useSelector((state) => state.journal);

	const { body, title, date, handleInputChange, formState } = useForm(note);

	const parseDate = useMemo(() => {
		dayjs.extend(localizedFormat);
		const newDate = dayjs(date).locale('es').format('LL');
		const newTime = dayjs(date).locale('es').format('LT');
		return `${newDate} - ${newTime}`;
	}, [date]);

	const fileInputRef = useRef();

	useEffect(() => {
		dispatch(setActiveNote(formState));
	}, [formState]);

	useEffect(() => {
		if (messageSaved.length > 0) {
			Swal.fire(messageSaved, '', 'success');
		}
	}, [messageSaved]);

	const handleSaveNote = () => {
		dispatch(startSaveNote());
	};

	const handleFileChange = (e) => {
		const { files } = e.target;
		if (files.length === 0) return;

		dispatch(startUploadingFiles(files));
	};

	const handleDelete = async () => {
		const confirm = await Swal.fire({
			title: '¿Quieres borrar esta nota?',
			text: '',
			icon: 'question',
			showConfirmButton: true,
			showCancelButton: true,
		});

		if (!confirm.value) return;

		dispatch(startDeletingNote());

		Swal.fire('Nota Borrada', '', 'success');
	};

	return (
		<>
			<Grid
				className="animate__animated animate__zoomIn animate__fast"
				container
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				sx={{ mb: 1 }}>
				<Grid item>
					<Typography fontSize={39} fontWeight="light">
						{parseDate}
					</Typography>
				</Grid>

				<Grid item>
					<Button
						// component="label"
						color="primary"
						disabled={isSaving}
						sx={{ padding: 2 }}
						onClick={() => fileInputRef.current.click()}>
						<input
							type="file"
							multiple
							onChange={handleFileChange}
							ref={fileInputRef}
							style={{ display: 'none' }}
						/>
						Cargar
						<UploadFileOutlined sx={{ fontSize: 30, ml: 1 }} />
					</Button>

					<Button
						disabled={isSaving}
						onClick={handleSaveNote}
						color="primary"
						sx={{ padding: 2 }}>
						Guardar
						<SaveOutlined sx={{ fontSize: 30, ml: 1 }} />
					</Button>
				</Grid>

				<Grid container>
					<TextField
						sx={{ border: 'none', mb: 1 }}
						type="text"
						variant="filled"
						fullWidth
						placeholder="Ingresa un título"
						label="Título"
						name="title"
						value={title}
						onChange={handleInputChange}
					/>

					<TextField
						type="text"
						variant="filled"
						fullWidth
						multiline
						placeholder="¿Qué sucedio en el día de hoy?"
						minRows={5}
						name="body"
						value={body}
						onChange={handleInputChange}
					/>
				</Grid>

				<Grid container justifyContent="end">
					<Button disabled={isSaving} onClick={handleDelete} color="error" sx={{ padding: 2 }}>
						Borrar
						<DeleteOutline sx={{ fontSize: 30, ml: 1 }} />
					</Button>
				</Grid>

				{/* Galeria de Imagenes */}
				<ImageGallery images={note.imageUrls} />
			</Grid>
		</>
	);
};
