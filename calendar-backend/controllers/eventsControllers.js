const { response } = require('express');
const Event = require('../models/Event');

const getEvents = async (req, res = response) => {
	const events = await Event.find().populate('user', 'name');

	return res.json({
		ok: true,
		events,
	});
};

const createEvent = async (req, res = response) => {
	const event = new Event(req.body);

	try {
		event.user = req.uid;

		const eventoGuardado = await event.save();

		res.json({
			ok: true,
			event: eventoGuardado,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el Administrador',
		});
	}
};

const updateEvent = async (req, res = response) => {
	const eventId = req.params.id;
	const uid = req.uid;

	try {
		const event = await Event.findById(eventId);

		if (!event) {
			return res.status(404).json({
				ok: false,
				msg: 'No existe evento con ese ID',
			});
		}

		//validar si el usuario es quien creo el evento
		if (event.user.toString() !== uid) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegios para editar este evento',
			});
		}

		const newEvent = {
			...req.body,
			user: uid,
		};

		const eventoActualizado = await Event.findByIdAndUpdate(eventId, newEvent, { new: true });

		res.json({
			ok: true,
			msg: 'Evento actualizado exitosamente',
			event: eventoActualizado,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el Administrador',
		});
	}
};

const deleteEvent = async (req, res = response) => {
	const eventId = req.params.id;
	const uid = req.uid;

	try {
		const event = await Event.findById(eventId);

		if (!event) {
			return res.status(404).json({
				ok: false,
				msg: 'No existe evento con ese ID',
			});
		}

		//validar si el usuario es quien creo el evento
		if (event.user.toString() !== uid) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegios para eliminar este evento',
			});
		}

		await Event.findByIdAndDelete(eventId);

		res.json({
			ok: true,
			msg: 'Evento eliminado exitosamente',
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el Administrador',
		});
	}
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
