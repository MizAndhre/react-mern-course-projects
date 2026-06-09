/*
        Rutas de usuario / Auth
            host + /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { validateJWT } = require('../middlewares/validate-jwt');
const { validateFields } = require('../middlewares/validate-fields');
const { isDate } = require('../helpers/isDate');

const { getEvents, createEvent, updateEvent, deleteEvent } =
	(require = require('../controllers/eventsControllers'));

const router = Router();

// validar el token para todas las rutas
router.use(validateJWT);

//obtener eventos
// router.get('/', validateJWT, getEvents);
router.get(
	'/',

	getEvents
);

//crear un nuevo evento
router.post(
	'/',
	[
		//middlewares
		check('title', 'El título es obligatorio').not().isEmpty(),
		check('start', 'Fecha de inicio es obligatoria').custom(isDate),
		check('end', 'Fecha de fin es obligatoria').custom(isDate),
		validateFields,
	],
	createEvent
);

//update un nuevo evento
router.put('/:id', updateEvent);

//delete un nuevo evento
router.delete('/:id', deleteEvent);

module.exports = router;
