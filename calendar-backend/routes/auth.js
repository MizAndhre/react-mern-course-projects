/*
        Rutas de usuario / Auth
            host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const { createUser, loginUser, revalidateToken } =
	(require = require('../controllers/authControllers'));

const router = Router();
router.post(
	'/new',
	[
		//middlewares
		check('name', 'El nombre es obligatorio').not().isEmpty(),
		check('email', 'El correo es obligatorio').not().isEmpty(),
		check('email', 'El correo debe ser correcto').isEmail(),
		check('password', 'La contraseña es obligatoria').not().isEmpty(),
		check('password', 'La contraseña debe ser de 6 caracteres').isLength({ min: 6 }),
		validateFields,
	],
	createUser
);

router.post(
	'/',
	[
		//middlewares
		check('email', 'El correo es obligatorio').not().isEmpty(),
		check('email', 'El correo debe ser correcto').isEmail(),
		check('password', 'La contraseña es obligatoria').not().isEmpty(),
		check('password', 'La contraseña debe ser de 6 caracteres').isLength({ min: 6 }),
		validateFields,
	],
	loginUser
);

router.get('/renew', validateJWT, revalidateToken);

module.exports = router;
